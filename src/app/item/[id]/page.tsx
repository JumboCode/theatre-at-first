import ImageCarousel from "@/components/imageCarousel";
import ItemDetail from "@/components/itemDetail";
import CommentComp from "@/components/commentCompSingleView";

import { Edit2, ArrowLeftCircle } from "@/components/buttonGraphics";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { items } from "@/db/schema";
import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { StaticImageData } from "next/image";
import Head from "next/head";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
    /*  WHY AM I MAKING A DB QUERY DIRECTLY IN THE COMPONENT?
     *  This component is a server component. That means that none of the code
     *  in this file executes on the client -- it is all executed on the server
     *  the resulting markdown is all that is sent to the client. This means that
     *  we can safely make database requests (and perform other backend
     *  operations) here without a problem.
     *                                                                - Amitav
     */
    const itemData = await db.query.items.findFirst({
        where: eq(items.id, params.id),
    });

    if (!itemData) {
        return (
            <main>
                <div className="w-screen h-screen flex flex-row justify-center items-center">
                    <h1 className="text-4xl font-serif">Item Not Found</h1>
                </div>
            </main>
        );
    }

    revalidatePath(`/edit/${itemData.id}`);
    let images: string[];
    if (itemData.imageUrl) {
        images = [itemData.imageUrl];
    } else {
        images = [];
    }

    return (
        <>
        <Head>
            <meta http-equiv='cache-control' content='no-cache'/>
            <meta http-equiv='expires' content='0'/>
            <meta http-equiv='pragma' content='no-cache'/>
        </Head>
        <main className="bg-white">
            <Header />
            <div className="p-8 w-full h-full flex flex-col lg:flex-row justify-center items-center">
                <ImageCarousel imageList={images} />
                <div className="py-10 lg:px-10 bg-white lg:w-[50%] space-y-5">
                    <div className="flex flex-row justify-between">
                        <a href="/inventory">
                            <button className="text-black flex shrink-0">
                                <ArrowLeftCircle />
                                <div className="pl-2">
                                    Back to inventory list
                                </div>
                            </button>
                        </a>
                        <a className="text-orange-400 flex border-orange-400 border-2 p-2 rounded-lg"
                           href={`http://localhost:3000/edit/${params.id}`}>
                            <Edit2 />
                            <div className="pl-1">Edit</div>
                        </a>
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
            <Footer />
        </main>
        </>
    );
}
