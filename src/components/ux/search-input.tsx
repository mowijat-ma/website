'use client'

// import { searchWpPosts } from "@/app/api/posts"
import { useTranslations } from "next-intl"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as React from "react"
import { Search } from "lucide-react"
import { Post } from "@/types"
import { cn } from "@/lib/utils"
import { searchWpPosts } from "@/api-services/posts"


export function SearchInput() {
    const pathname = usePathname();
    const searchParams = useSearchParams() 
    const urlQuery = searchParams.get("query") || ""
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState(urlQuery)
    // const query 
    // <-- Access the current URL parameters
    
    const t = useTranslations("ui.search")
    const router = useRouter()
    
    // Close dropdown when clicking an item or pressing Esc


    
    const onSelect = (value: string) => {
        console.log("Selected:", value)
        setOpen(false)
        setQuery("")
        // router.push('/articles/30/content')
    }

    const [searchResults, setSearchResults] = useState<Post[]>([])
    const OnUpdateQuery = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setQuery(value)
        if (value.length > 0) setOpen(true)
        if (value !== "") {
            const res = await searchWpPosts(value)
            setSearchResults(Array.isArray(res) ? res : [])
        }
    }
    const isSearchPath = pathname === "/search";
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query.trim() !== "") {
            router.push(`/search?query=${encodeURIComponent(query)}`)
            setOpen(false)
        }
    }
    const isSearchPage = () => {
    // Check 1: Is the URL path exactly '/search'?
            const isSearchPath = pathname === "/search";

            // Check 2: Does the URL have a 'q' or 'query' parameter? (e.g., ?q=something)
            const hasSearchQuery = searchParams.has("q") || searchParams.has("query");

            // Return true if either condition is met
            return isSearchPath || hasSearchQuery;
        };
    return (
        <>
        <div className="">
            <form 

            onSubmit={onSubmit} className="bg-muted px-2 rounded-full border-mesure flex items-center justify-between gap-2">
                <input
                placeholder={t('placeholder')}
                //   placeholder="Search..."
                className="w-full border-mesure p-none ring-none outline-none border-input-0 bg-transparent p-2"
                //   className="flex h-9 w-full rounded-md border border-input bg-transparent px-9 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={query}
                onChange={OnUpdateQuery}
                onFocus={() => query.length > 0 && setOpen(true)}
            />
            <Search className={cn(
                "h-6 w-6 p-1 rounded-full",
                query !== "" ? "text-primary bg-background": "text-muted-foreground"
             )} />
             
            </form>
        </div>
        </>
    )

}