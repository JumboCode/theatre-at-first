import Item from "./../../components/item";
import Grid from "./../../components/grid";



// Render the Home component somewhere in your app with the array of components
export default function Home() {
        // Create an array of Item components or any other components
        const componentsArray = [
                <Item title="Title 1" status="Status 1" image="image1.png"/>,
                <Item title="Title 2" status="Status 2" image="image2.png"/>,
                // Add more components as needed
        ];
    
        return (
                <Grid components={componentsArray} />
        );
}