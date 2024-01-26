import TagDropdown from "@/components/TagDropdown";
import Item from "../../components/item";
// import ImageCarousel from "../../components/imageCarousel";  
import ItemDetailTest from "@/components/ItemDetailTest";
import CommentComp from "../../components/comment-comp-single-view";  
import ResizeableIMG from "../../components/resizeableIMG";
import ItemInput from "../../components/itemInputForm";


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

interface Prop {
    title: string;
    image: string;
    status: string;
}

export default function itemPage(props: Prop) {
    const allTags = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "oneone",
    ];

    "use client";

    return (
        <main>
            <div className="text-align: center indent-[1.5%]">
                Inventory Viewing
                <div className="w-[588px]">
                    <TagDropdown tags={allTags}></TagDropdown>
                </div>
            </div>
            <div className="h-screen flex items-center justify-center space-x-4">
                <Item title="Title" status="Status" />
                <Item title="Title" status="Status" />
                <Item title="Title" status="Status" />
                <Item title="Title" status="Status" />
            </div>
            
        </main>
    );
}

