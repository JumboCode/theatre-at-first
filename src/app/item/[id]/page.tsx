"use client"
import React, { useEffect, useState } from "react";
import ImageCarousel from "../../../components/imageCarousel";  
import ItemDetailTest from "@/components/ItemDetailTest";
import CommentComp from "../../../components/comment-comp-single-view";  
import ResizeableIMG from "../../../components/resizeableIMG";

import CuteDog1 from "../../../../public/images/cute_dog1.jpg";
import CuteDog2 from "../../../../public/images/cute_dog2.jpg";
import CuteDog3 from "../../../../public/images/cute_dog3.jpg";
import CuteDog4 from "../../../../public/images/cute_dog4.jpg";
import CuteDog5 from "../../../../public/images/cute_dog5.jpg";


import { SelectComment } from "@/db/schema";
import { SelectItem } from "@/db/schema";

interface prop {
    label: string;
}

const imageList = [CuteDog1, CuteDog2, CuteDog3, CuteDog4, CuteDog5];


export default function Page({ params }: { params: { id: string } }) {
 
    
    const [description, setDescription] = useState<SelectItem | null>(null);
    const [comment, setComment] = useState<SelectComment | null>(null);

        const getItemDetails = () => {

            setDescription({
                id: 112,
                name: "Item Name",
                desc: "He was aware there were numerous wonders of this world including the unexplained creations of humankind that showed the wonder of our ingenuity. There are huge heads on Easter Island. There are the Egyptian pyramids. There’s Stonehenge. But he now stood in front of a newly discovered monument that simply didn't make any sense and he wondered how he was ever going to be able to explain it.",
                tags: ["hi", "hey"],
                imageUrl: null,
                status: "Something",
            });

            setComment({
                id: 1,
                userId: 123,
                timestamp: "2023-11-18 at 10:00:00",
                message: "This is a test comment",
                itemId: 456, 
            })

        };

        useEffect(() => {
            getItemDetails();
        }, [])

    return  (
        <main className="bg-white">
            <div className="grid grid-cols-2 pt-6">
                <div className="content-center left-0 pl-8 pb-4 pr-20 bg-blue"> 
                    <ImageCarousel imageList={imageList}/>
                </div>
                { description &&
                <ItemDetailTest
                name={description.name}
                tags={description.tags}
                description={description.desc}
                status={description.status}
            ></ItemDetailTest> }
            </div>
            <div className="text-black"> </div>

            <div className="h-screen flex pl-8 justify-left space-x-4">
                <CommentComp itemId={456} />
            </div>
            <div className="text-black bg-red font-sans font-semibold text-[40px]">
                {comment == null ? "Loading comments..." : comment.message}
                <div className="pt-10 pb-3 text-[24px] font-semibold">
                    Comments!!
                </div>
                <div className="text-[18px] text-left text-align-left font-normal">
                        <p>
                        {description == null ? "loading description..." : description.desc}
                        </p>
                </div>
            </div>
            
         </main>
    );
}