"use client";
import { useState } from "react";

interface UserDetailTestProps {
    //is the access an array?
    access: string;
    firstname: string;
    lastname: string;
    email: string;
}

// make request to API to get list of updates
//const updates: string[] = ["Update One", "Update Two", "Update Three"];

export default function UserDetail(props: UserDetailTestProps) {
    // const [display, setDisplay] = useState(false);

    //complete setters to make page.tsx happy
    return (
        <main className="text-black">
            <div>
                {props.firstname}
                {props.lastname}
                {props.access}
                {props.email}
            </div>            
        </main>
    );
}
