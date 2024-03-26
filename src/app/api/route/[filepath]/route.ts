//GET request
export async function GET(
    request: Request,
    { params }: { params: { filepath: string } }
) {
    let r2response: {
        status: number;
        object?: string;
    } = await fetch(`https://r2-ex.amitavnott.workers.dev/${params.filepath}`, {
        method: "GET",
    }).then((res) => res.json());

    if (r2response.status === 0) {
        return Response.json({
            status: r2response.status,
            object: r2response.object,
        });
    } else if (r2response.status === 1) {
        return Response.json({
            status: r2response.status,
            errorMessage: "ERROR: Failure to retrieve R2 info",
        });
    } else {
        return Response.json({
            status: 2,
            errorMessage: "ERROR: No return value to client",
        });
    }
}

//POST request -- utilize insomnia
export async function POST(
    request: Request,
    { params }: { params: { filepath: string } }
) {
    let json = await request.json();
    let r2response: {
        status: number;
    } = await fetch(`https://r2-ex.amitavnott.workers.dev/${params.filepath}`, {
        method: "PUT",
        body: json.filecontents,
    }).then((res) => res.json());

    return Response.json({
        status: r2response.status,
        successMessage: "Successful post request",
    });
}
