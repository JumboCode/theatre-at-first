"use client";

import React from "react";


export default function Grid({ components } : { components: any[]}) {
    // Receive components (elements) as a prop
    return (
        <div className="flex flex-wrap gap-10">
            {components.map((element, index) =>
                // Directly render the element without wrapping it in a JSX tag
                React.cloneElement(element, { key: index })
            )}
        </div>
    );
}
