"use client";
import { useState, useEffect } from "react";
import { SelectComment, comments } from "@/db/schema";

interface CommentCompProps {
  itemId: number;
}

export default function CommentComp({ itemId }: CommentCompProps) {
  const [itemComments, setItemComments] = useState<SelectComment[] | undefined>(undefined);

  useEffect(() => {
    const fetchComments = async () => {
        const response = await fetch(`/api/comments?itemId=${itemId}`);

        const fetchedComments = await response.json();
        setItemComments(fetchedComments);
    };

    fetchComments();
  }, [itemId]);
  

  return (
    <>
      <hr className="h-px my-8 bg-neutral-700 border-0"></hr>
      <p className="text-left text-3xl text-neutral-700 font-bold">Comments</p>
      <hr className="h-px my-8 bg-neutral-700 border-0"></hr>

      {itemComments &&
        itemComments.map((comment) => (
          <div key={comment.id}>
            <p className="font-bold">{comment.userId}</p>
            <p className="font-thin">{comment.timestamp}</p>
            <br></br>
            <p>{comment.message}</p>
          </div>
        ))}
    </>
  );
}
