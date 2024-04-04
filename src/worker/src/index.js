export default {
    async fetch(request, _env) {
        /**
         * @type Request;
         */
        const req = request;
        const env = _env;

        const url = new URL(req.url);
        const key = url.pathname.slice(1);

        switch (req.method) {
            case "PUT":
                await env.JUMBOCODE_BUCKET.put(key, req.body);
                return Response.json({
                    message: `put object ${JSON.stringify(req.body)} at key ${key}`,
                    status: 0,
                });
            case "GET":
                const object = await env.JUMBOCODE_BUCKET.get(key);

                if (object === null) {
                    return Response.json(
                        {
                            status: 1, // object not found
                        },
                        { status: 404 }
                    );
                }

                const headers = new Headers();
                object.writeHttpMetadata(headers);
                headers.set("etag", object.httpEtag);

                return Response.json(
                    {
                        status: 0, // success
                        object: await object.text(),
                    },
                    {
                        headers,
                    }
                );

            case "DELETE":
                await env.JUMBOCODE_BUCKET.delete(key);
                return Response.json({
                    status: 0,
                });

            default:
                return new Response("Method Not Allowed", {
                    status: 405,
                    headers: {
                        Allow: "PUT, GET, DELETE",
                    },
                });
        }
    },
};
