import ItemDetailTest from "@/components/ItemDetailTest";

export default function testPage() {

    
    
    const name = "Item Name";
    const tags = ["tag1", "longtag2", "reallyreallylongtag3", "tag4"];
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const status = "Most Recent Status";

    return (
        <main>
            <ItemDetailTest name={name} tags={tags} description={description} status={status}></ItemDetailTest>
        </main>
    )
}