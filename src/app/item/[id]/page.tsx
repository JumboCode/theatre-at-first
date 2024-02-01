"use client"
import React, { useEffect, useState } from "react";
import ImageCarousel from "../../../components/imageCarousel";  
import ItemDetailTest from "@/components/ItemDetailTest";
import CommentComp from "../../../components/comment-comp-single-view";  
import ResizeableIMG from "../../../components/resizeableIMG";
import ItemInput from "../../../components/itemInputForm";

//images for image carouse

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

//Questions to ask:
//Is there a filter component? --> no
//Do we have to link the search and the items below? --> yes :(
//Do we have to be able to press on an item below and get to the item detail 
//page (7th to do on the ticket list) --> yes 
//Very confused about 4th to do 
//Is there any other 
//Do we have to incorporate photos/img carasoul?

//To do:
//Style
//Ask questions

//Notes:
//When we click on an item, we should get the item page and then also have 
//comments there


//we dont have comments yet plus we dont 
//actually have the backend part of the item (like the item route) which we can
// then fetch. After that is pushed, we can fetch the info and post onto the 
//page


//name, 

const imageList = [CuteDog1, CuteDog2, CuteDog3, CuteDog4, CuteDog5];

    // export function ItemDescription(props: prop) {
    //     const [description, setDescription] = useState<SelectItem | null>(null);

    //     const getItemDetails = () => {
    //         fetch(`/items`)
    //             .then((res) => res.json())
    //             .then((res) => {
    //             setDescription({
    //                 id: res.id,
    //                 name: res.name,
    //                 desc: res.desc,
    //                 tags: res.tags,
    //                 imageUrl: res.imageUrl,
    //                 status: res.status
    //                 })
    //             });
    //     };
    // }


export default function Page({ params }: { params: { id: string } }) {
    // const posts = await fetch('/api/route/user/id').then((res) => res.json())

    // return posts.map((post) => ({
    //     IDBCursor: post.id,
    // }))

    const [description, setDescription] = useState<SelectItem | null>(null);

        const getItemDetails = () => {
            // fetch(`/items`)
            //     .then((res) => res.json())
            //     .then((res) => {
            //     setDescription({
            //         id: res.id,
            //         name: res.name,
            //         desc: res.desc,
            //         tags: res.tags,
            //         // imageUrl: res.imageUrl,
            //         // status: res.status
            //         })
            //     });

            setDescription({
                id: 112,
                name: "Name of item --> Nehir",
                desc: "is awesome",
                tags: ["hi", "hey"],
                imageUrl: null,
                status: null,
            })
        };

        //What this code is basically saying, run the code inside 
        //(getItemDetails), and then never again; we do this bc we want to 
        //populate the items 
        useEffect(() => {
            getItemDetails();
        }, [])

    
    const dummyComment1 = {
        id: 1,
        userID: 123,
        timestamp: "2023-11-18 at 10:00:00",
        message: "This is a test comment",
        itemId: 456,
    };
    
    const dummyComment2 = {
        id: 2,
        userID: 987,
        timestamp: "2023-11-28 at 10:00:00",
        message: "This is also a test comment",
        itemId: 456,
    };

    return  (
        <main>
            {/* <h1>Page Id: {params.id}</h1> */}
             <div className="text-align: center indent-[1.5%]">
              {description == null ? "some placeholder" : description.name}
             </div>
             
                
            <div> 
                <ImageCarousel imageList={imageList} />
            </div>

             <div className="h-screen flex items-center justify-center space-x-4">
                <CommentComp itemId={456} />
             </div>
            
         </main>
    );
}




// export default function Home() {
//     return (
//         <main className="justify-between p-24">
//             <CommentComp itemId={456} />
//         </main>
//     );
// }




















// interface Prop {
//     title: string;
//     image: string;
//     status: string;
// }

// export default function itemPage(props: Prop) {
//     const allTags = [
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "oneone",
//     ];

//     "use client";

//     return (
//         <main>
//             <div className="text-align: center indent-[1.5%]">
//                 Inventory Viewing
//                 <div className="w-[588px]">
//                     <TagDropdown tags={allTags}></TagDropdown>
//                 </div>
//             </div>
//             <div className="h-screen flex items-center justify-center space-x-4">
//                 <Item title="Title" status="Status" />
//                 <Item title="Title" status="Status" />
//                 <Item title="Title" status="Status" />
//                 <Item title="Title" status="Status" />
//             </div>
            
//         </main>
//     );
// }