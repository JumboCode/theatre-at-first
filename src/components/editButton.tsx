"use client";

import { useUser } from "@clerk/nextjs";
import { Edit2 } from "./buttonGraphics";
import { useRouter } from "next/navigation";

export default function EditButton({ id }: { id: number }) {
    const { user } = useUser();
    const userIsAdmin = user?.publicMetadata.role === "admin";

    const router = useRouter();

    if (!userIsAdmin) return <div></div>;

    function deleteItem() {
        if (confirm("Are you sure you want to delete this item?")) {
            fetch(`/delete`, { method: "POST", body: JSON.stringify({ itemId: id }) });
            router.push("/inventory");
        }
    }

    return (
        <span className="flex flex-row items-center gap-2">
            <button className="text-red-400 flex border-red-400 border-2 p-2 rounded-lg" onClick={deleteItem}>
                <div className="pl-1">Delete</div>
            </button>
            <a className="text-orange-400 flex border-orange-400 border-2 p-2 rounded-lg"
               href={`http://localhost:3000/edit/${id}`}>
                <Edit2 />
                <div className="pl-1">Edit</div>
            </a>
        </span>
    );
}
