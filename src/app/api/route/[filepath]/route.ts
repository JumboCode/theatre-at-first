import { NextResponse } from "next/server";

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

//get-comments (GET)
export async function GET(
    request: Request,
    { params }: { params: { text: string, item: string, user: string } }
) {
    let r2response: {
        status: number;
        object?: string;
    } = await fetch(`https://r2-ex.amitavnott.workers.dev/${params}`, { // TODO: What are we fetching?
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

//add-comment (POST)
export async function POST(
    request: Request,
    { params }: { params: { text: string, item: string, user: string } } // how to specify specific item?
) {
    let json = await request.json();
    let r2response: {
        status: number;
    } = await fetch(`https://r2-ex.amitavnott.workers.dev/${params.filepath}`, { // replace w database
        method: "PUT",
        body: json.filecontents,
    }).then((res) => res.json());

    return Response.json({
        status: r2response.status,
        successMessage: "Successful post request",
    });
}



// import { Request } from 'express'; // Assuming you're using Express.js for your API
// import { Comment } from './models'; // Assuming you have a Comment model defined

// // Assuming you have a function to add a comment to the database
// async function addCommentToDatabase(commentData: Comment): Promise<Comment> {
//     // Your logic to add the comment to the database goes here
//     // Example: return await Comment.create(commentData);
// }

// export async function POST(request: Request) {
//     try {
//         // Extracting comment data from the request body
//         const { text, item, user } = request.body;

//         // Validating the required fields
//         if (!text || !item || !user) {
//             throw new Error('Missing required fields: text, item, or user');
//         }

//         // Creating a new Comment object
//         const newComment: Comment = {
//             text,
//             item,
//             user,
//             // Assuming you have other fields like timestamp, etc.
//         };

//         // Adding the comment to the database
//         const addedComment = await addCommentToDatabase(newComment);

//         // Returning a success response with the added comment
//         return {
//             status: 'success',
//             message: 'Comment added successfully',
//             data: addedComment,
//         };
//     } catch (error) {
//         // Handling errors
//         return {
//             status: 'error',
//             message: error.message,
//         };
//     }
// }