import ImageCarousel from "@/components/imageCarousel";
import ItemDetail from "@/components/ItemDetail";
import CommentComp from "@/components/comment-comp-single-view";

import { ArrowLeftCircle } from "@/components/Button-Graphics";

import CuteDog1 from "@/../public/images/cute_dog1.jpg";
import ImageNotFound from "@/../public/images/imageNotFound.jpg";

import { items } from "@/db/schema";
import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { StaticImageData } from "next/image";
import TagDropdown from "@/components/TagDropdown";

import { revalidatePath } from "next/cache";
import TagEditor from "@/components/TagEditor";

export default async function Page({ params }: { params: { id: number } }) {
    /* WHY AM I MAKING A DB QUERY DIRECTLY IN THE COMPONENT?
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

    let images: StaticImageData[];
    if (itemData?.imageUrl) {
        // TODO: load images properly
        images = [CuteDog1];
    } else {
        images = [ImageNotFound];
    }

    async function updateItem(formData: FormData) {
        // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
        "use server";
        if (!itemData) return;

        const name = (formData.get('name') || itemData.name).toString();
        const desc = (formData.get('description') || itemData.desc).toString();

        let result = await db.update(items)
                             .set({ name, desc })
                             .where(eq(items.id, itemData.id))
                             .returning();
        console.log(result);

        revalidatePath(`/item/${itemData.id}`);
        redirect(`http://localhost:3000/item/${itemData.id}`);
    }

    return (
        <main className="bg-white">
            <div className="p-8 w-full h-full flex flex-col lg:flex-row justify-center items-center">
                <ImageCarousel imageList={images} />
                <div className="py-10 lg:px-10 bg-white lg:w-[50%] space-y-5 w-full h-full">
                    <div className="flex flex-row justify-between items-center">
                        <button className="text-black flex shrink-0">
                            <ArrowLeftCircle />
                            <div className="pl-2">Back to inventory list</div>
                        </button>
                    </div>
                    <form className="w-full h-full flex flex-col gap-3"
                          action={updateItem}>
                        <input className="text-gray-950 text-2xl rounded-lg border border-amber-400 font-light pl-3 pr-3 py-3 focus:placeholder-gray-800 focus:outline-none"
                               name="name"
                               defaultValue={itemData.name}
                               placeholder="Name"/>                        
                        <div className="w-full flex flex-row gap-3 flex-wrap">
                        {itemData.tags.map((tag) => (
                            <span
                                key={tag}
                                className="border-2 border-black rounded-lg px-6 py-2 bg-gray-50"
                            >
                                <p>{tag}</p>
                            </span>
                        ))}
                        </div>
                        <TagEditor itemId={itemData.id}/>

                        <textarea
                            className="text-gray-950 rounded-lg border border-amber-400 font-light pl-3 pr-3 py-3 focus:placeholder-gray-800 focus:outline-none"
                            name="description"
                            defaultValue={itemData.desc}
                            placeholder="Description"
                            // onChange={(e) => props.setDescription(e.target.value)}
                            style={{
                                maxHeight: "200px",
                                height: "200px",
                                width: "100%",
                            }}
                        />
                        <span className="flex flex-row justify-end">
                            <button className="text-orange-400 flex border-orange-400 border-2 p-2 rounded-lg"
                                    type="submit">
                                Done
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </main>
    );
}
