import S3 from "aws-sdk/clients/s3.js";

const s3 = new S3({
    endpoint: process.env.R2_ENDPOINT,
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    signatureVersion: "v4",
});

export const POST = async (request: Request) => {
    const filename = `image-${Date.now()}.jpeg`;

    const presignedUrl = await s3.getSignedUrlPromise("putObject", {
        Bucket: process.env.R2_BUCKET,
        Key: filename,
        Expires: 60 * 5,
    });

    return Response.json({
        presignedUrl,
        imageUrl: `${process.env.R2_PUBLIC_BASE_URL}/${filename}`,
    });
};
