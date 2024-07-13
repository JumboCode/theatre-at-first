import ImageCarousel from "@/components/imageCarousel";
import Image from "next/image";
import ItemDetail from "@/components/itemDetail";

import { ArrowLeftCircle } from "@/components/buttonGraphics";
import ImageNotFound from "@/../public/images/imageNotFound.jpg";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { items } from "@/db/schema";
import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import EditButton from "@/components/editButton";

async function getAllTags() {
    let results = await db.query.items.findMany({
        columns: {
            tags: true,
        },
    });

    let allTags = [...new Set(results.flatMap((e) => e.tags))];
    return allTags;
}

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

    const allTags = await getAllTags();

    return (
        <main className="bg-white min-h-screen flex flex-col justify-between">
            <Header />
            <div className="p-8 w-full h-full flex flex-col lg:flex-row justify-center items-center">
                <Image
                    src={ itemData.imageUrl || ImageNotFound}
                    className="overflow-hidden object-cover rounded-lg"
                    alt=""
                    width={400}
                    height={600}
                />
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

                        <EditButton id={params.id}/>
                    </div>
                    {itemData && (
                        <ItemDetail
                            id={itemData.id}
                            name={itemData.name}
                            tags={itemData.tags}
                            allTags={allTags}
                            category={itemData.category || "Uncategorized"}
                            description={itemData.desc}
                            status={itemData.status || "Unknown"}
                        ></ItemDetail>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    );
}
