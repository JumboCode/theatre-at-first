"use client"

export default function Button1(label: string) {
        
    const handleClick = () => {
        fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
            .then((res) => res.json())
            .then((json) => {
                console.log("somethingggg");
                console.log(json);
            });
    };

    label = "Sidrah and Oliver";
    
    return (
        <button 
            type="button" 
            onClick={handleClick} 
            className="p-3 px-6 border-2 border-blue-500 hover:bg-blue-500 
            hover:text-white duration-300 rounded-full">
            {label}
        </button>
    );
}
