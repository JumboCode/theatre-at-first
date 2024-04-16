import ImageCarousel from "@/components/imageCarousel";
import ItemDetail from "@/components/ItemDetail";
import CommentComp from "@/components/comment-comp-single-view";

import { Edit2 } from "@/components/Button-Graphics";
import { ArrowLeftCircle } from "@/components/Button-Graphics";

import CuteDog1 from "@/../public/images/cute_dog1.jpg";
import ImageNotFound from "@/../public/images/imageNotFound.jpg";

import { items } from "@/db/schema";
import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
    /* WHY AM I MAKING A DB QUERY DIRECTLY IN THE COMPONENT?
    *  This component is a server component. That means that none of the code
    *  in this file executes on the client -- it is all executed on the server
    *  the resulting markdown is all that is sent to the client. This means that
    *  we can safely make database requests (and perform other backend
    *  operations) here without a problem.
    *                                                                - Amitav
    */
    const itemData = await db.query.items.findFirst({ where: eq(items.id, params.id) });

    if (!itemData) {
        // TODO: make a proper not found page
        // redirect("/");
        return (
            <main>
                <div className="w-screen h-screen flex flex-row justify-center items-center">
                    <h1 className="text-4xl font-serif">Item Not Found</h1>
                </div>
            </main>
        );
    }

    let images;
    if (itemData?.imageUrl) {
        images = [CuteDog1];
    } else {
        images = [ImageNotFound];
    }

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
