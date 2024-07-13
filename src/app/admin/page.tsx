"use client";

import { useState, useEffect } from "react";
import { SelectItem } from "@/db/schema";
import { User, columns } from "./columns";
import { DataTable } from "./dataTable";

import Header from "@/components/header";
import Footer from "@/components/footer";

async function getMyData(): Promise<User[]> {
    return fetch("/list-users", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) =>
            json.results.map((user: User) => ({
                userinfo: [
                    `${user.firstname} ${user.lastname}`,
                    `${user.email}`,
                ],
                access: user.access,
                id: user.id,
            }))
        );
}

export default function Home() {
    const [searchInput, setSearchInput] = useState("");
    const [unfiltered, setUnfiltered] = useState<SelectItem[]>([]);
    const [filteredResults, setFilteredResults] = useState<SelectItem[]>([]);
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        getMyData().then((data) => {
            setData(data); // Update the state with the fetched data
        });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <main className="min-h-max bg-white">
            <Header />
            <div className="p-4 w-10/12 mx-auto">
                <h1 className="text-4xl font-bold pb-12">Admin Dashboard</h1>
                <DataTable columns={columns} data={data} />
            </div>
            <Footer />
        </main>
    );
}
