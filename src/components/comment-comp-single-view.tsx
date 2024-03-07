"use client";
import { useState, useEffect } from "react";
import { SelectComment, comments } from "@/db/schema";

interface CommentCompProps {
    itemId: number;
}

const dummyComment1 = {
    id: 123,
    userId: 420,
    timestamp: "2023-11-18 at 10:00:00",
    message: "This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. This is a really long test comment. ",
    itemId: 456,
};

const dummyComment2 = {
    id: 2,
    userId: 69,
    timestamp: "2023-11-28 at 10:00:00",
    message: "This is also a test comment. Peter and Shepard were able to get this wonderful component working. If it breaks, it's not our fault! Also, the reply component needs to be implemented",
    itemId: 456,
};


export default function CommentComp({ itemId }: CommentCompProps) {
    const [itemComments, setItemComments] = useState<
        SelectComment[] | undefined
    >(undefined);

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`/api/comments?itemId=${itemId}`);

            const fetchedComments = await response.json();
            setItemComments([dummyComment1, dummyComment2]);
        };

        // fetchComments();
        setItemComments([dummyComment1, dummyComment2]);
    }, []);

    return (
        <>
            <div className="content-start w-full">
                <hr className="h-px bg-neutral-700 border-0"></hr>
                    <div className="text-left text-3xl text-neutral-700 font-bold p-3">
                        Comments         
                    </div>
                <hr className="h-px bg-neutral-700 border-0"></hr>
                
                    {itemComments &&
                        itemComments.map((comment) => (
                            <div key={comment.id}>
                                <br></br>
                                <p className="font-bold text-black pt-1">{comment.userId}</p>
                                <p className="font-thin text-black text-xs">Posted on {comment.timestamp}</p>
                                <br></br>
                                <p className="text-black">{comment.message}</p>
                                <br></br>

                            </div>
                        ))}
            </div>
        </>
    );
}
