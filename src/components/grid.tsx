"use client"

import React from "react";

export default function Grid({ components }) { // Receive components (elements) as a prop
    return (
        <div className="grid-container flex flex-row gap-4 m-8 h-3/4">
            {components.map((element, index) => (
                // Directly render the element without wrapping it in a JSX tag
                React.cloneElement(element, { key: index })
            ))}
        </div>          
    );
}