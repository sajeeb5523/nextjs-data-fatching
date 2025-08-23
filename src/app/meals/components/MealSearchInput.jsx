"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";     

export default function MealSearchInput() {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    }, [search]);

    return (
        <div>
            <input
                className="border border-gray-400 rounded px-2 py-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search meals..."
            />
        </div>
    );
}