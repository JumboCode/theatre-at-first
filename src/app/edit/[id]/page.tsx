import ImageCarousel from "@/components/imageCarousel";
import { ArrowLeftCircle } from "@/components/buttonGraphics";
import { items } from "@/db/schema";
import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import TagEditor from "@/components/tagEditor";

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

    const tags = await getAllTags();

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

    let images: string[];
    if (itemData.imageUrl) {
        images = [itemData.imageUrl];
    } else {
        images = [];
    }

    async function updateItem(formData: FormData) {
        // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
        "use server";
        if (!itemData) return;

        const name = (formData.get('name') || itemData.name).toString();
        const desc = (formData.get('description') || itemData.desc).toString();
        const category = (formData.get('category') || itemData.category || "").toString();

        let result = await db.update(items)
                             .set({ name, desc, category })
                             .where(eq(items.id, itemData.id))
                             .returning();

        revalidatePath(`/item/${itemData.id}`);
        revalidatePath("/list-items");
        revalidatePath("list-categories");
        revalidatePath("list-tags");
        redirect(`http://localhost:3000/item/${itemData.id}`);
    }

    return (
        <main className="bg-white">
            <div className="p-8 w-full h-full flex flex-col lg:flex-row justify-center items-center">
                <ImageCarousel imageList={images}/>
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
                        <input className="text-gray-950 text-2xl rounded-lg border border-amber-400 font-light pl-3 pr-3 py-3 focus:placeholder-gray-800 focus:outline-none"
                               name="category"
                               defaultValue={itemData.category || ""}
                               placeholder="Category"/>                        
                        <TagEditor itemId={itemData.id} tags={tags} initialTags={itemData.tags}/>

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
