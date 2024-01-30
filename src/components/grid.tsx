"use client"

import React from "react";

export default function Grid({ components }) { // Receive components (elements) as a prop
    return (
        <main className="grid-container">
            {components.map((element, index) => (
                // Directly render the element without wrapping it in a JSX tag
                // The key should have been provided already on the elements
                React.cloneElement(element, { key: index })
            ))}
        </main>          
    );
}