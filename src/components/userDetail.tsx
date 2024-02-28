"use client";
import { useState } from "react";

interface UserDetailTestProps {
    /* We wanted to make this an array of strings with just the options from the
    schema, but the compiler did not like it */
    access: string;
    firstname: string;
    lastname: string;
    email: string;
}

export default function UserDetail(props: UserDetailTestProps) {
    return (
        <main className ="bg-white">
            <div className="text-black font-bold font-sans"> {props.firstname} {props.lastname} </div>    
            <div className="text-black font-serif"> {props.access} </div>   
            <div className="text-black font-serif"> {props.email} </div>           
        </main>
    );
}
