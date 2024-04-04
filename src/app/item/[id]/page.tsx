"use client";
import React, { useEffect, useState } from "react";
import ImageCarousel from "@/components/imageCarousel";
import ItemDetail from "@/components/ItemDetail";
import CommentComp from "@/components/comment-comp-single-view";

import { Edit2 } from "@/components/Button-Graphics";
import { PlusCircle } from "@/components/Button-Graphics";
import { ArrowLeftCircle } from "@/components/Button-Graphics";

//how do we import our get and post handlers
//and allow the image carousel image data to be pulled from the schem
//(potentially using image api routes)

import CuteDog1 from "@/../public/images/cute_dog1.jpg";
import ImageNotFound from "@/../public/images/imageNotFound.jpg";

import { SelectItem } from "@/db/schema";
import { StaticImageData } from "next/image";

async function getItemData(id: number): Promise<SelectItem> {
    console.log("getting data");
    return await fetch(`/item?item_id=${id}`, {
        method: "GET",
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((json) => json.results);
}

export default function Page({ params }: { params: { id: number } }) {
    const [itemData, setItemData] = useState<SelectItem | null>(null);
    const [images, setImages] = useState<StaticImageData[]>([]);

    useEffect(() => {
        getItemData(params.id).then((data) => {
            setItemData(data);
            if (data.imageUrl != null) {
                setImages([CuteDog1]);
            } else {
                setImages([ImageNotFound]);
            }
        });
    }, [params.id]);

    return (
        <main className="bg-white">
            <div className="p-8 w-full h-full flex flex-col lg:flex-row justify-center items-center">
                <ImageCarousel imageList={images} />
                <div className="py-10 lg:px-10 bg-white lg:w-[50%] space-y-5">
                    <div className="flex flex-row justify-between">
                        <button className="text-black flex shrink-0">
                            <ArrowLeftCircle />
                            <div className="pl-2">Back to inventory list</div>
                        </button>
                        <button className="text-orange-400 flex border-orange-400 border-2 p-2 rounded-lg">
                            <Edit2 />
                            <div className="pl-1">Edit</div>
                        </button>
                    </div>
                    {itemData && (
                        <ItemDetail
                            name={itemData.name}
                            tags={itemData.tags}
                            description={itemData.desc}
                            status={itemData.status || "Unknown"}
                        ></ItemDetail>
                    )}
                </div>
            </div>
            <div className="flex p-8 justify-left space-x-4">
                <CommentComp itemId={params.id} />
            </div>
        </main>
    );
}
