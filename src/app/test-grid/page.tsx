import Item from "./../../components/item";
import Grid from "./../../components/grid";



export default function Home() {
        // Store components in an array to use in <Grid/>
        // Grid can be found in components folder
        const componentsArray = [
                <Item title="Title 1" status="Status 1" image="image1.png"/>,
                <Item title="Title 2" status="Status 2" image="image2.png"/>,
                <Item title="Title 3" status="Status 3" image="image3.png"/>,
                <Item title="Title 4" status="Status 4" image="image4.png"/>,
        ];
    
        return (
        <div className="h-screen">
                <Grid components={componentsArray} />
        </div>
        );
}