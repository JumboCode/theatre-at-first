"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
    id: string;
    access: "admin" | "editor" | "viewer";
    firstname: string;
    lastname: string;
    email: string;
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "userinfo",
        header: ({ column }) => {
            return (
                <button
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="font-medium"
                >
                    Name
                </button>
            );
        },
        cell: ({ row }) => {
            const email = row.getValue<string>("userinfo")[1];
            const name = row.getValue<string>("userinfo")[0];

            return (
                <div>
                    <p className="font-medium">{name}</p>
                    <p>{email}</p>
                </div>
            );
        },
    },
    {
        accessorKey: "access",
        header: ({ column }) => {
            return (
                <button
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="font-medium"
                >
                    Role
                </button>
            );
        },
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <button
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="font-medium"
                >
                    ID
                </button>
            );
        },
    },
];
