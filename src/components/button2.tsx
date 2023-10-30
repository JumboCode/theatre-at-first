"use client";

//the button function takes in a prop, which is like the parameter for the func
//props is a typescript object that has a label property which is a string 
//(label is the key which maps to a string). 
export default function Button2(props: {label: string}) {
    const handleClick = () => {
        console.log("Clicked!");
    }


    return (
        <div>
            {/*now instead of having text in the button, you can call the label
            of the prop, which is set to a string in the page.tsx file*/}
            <button onClick={handleClick} className="bg-emerald-800 px-5 border-double border-8 border-teal-500 rounded-lg text-fuchsia-800">{props.label}</button>
        </div>
    );
}