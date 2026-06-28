'use client'

// import { searchWpPosts } from "@/app/api/posts"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as React from "react"
import { Search } from "lucide-react"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Post } from "@/types"
import { searchWpPosts } from "@/api/posts"
import { cn } from "@/lib/utils"


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
        router.push('/articles/30/content')
    }

    const [searchResults, setSearchResults] = useState<Post[]>([])
    const OnUpdateQuery = async (e: any) => {
        setQuery(e.target.value)
        if (e.target.value.length > 0) setOpen(true)
        // if (e.target.value !== "") {
        //     const res: any = await searchWpPosts(e.target.value)
        //     setSearchResults(res)
        //     console.log(res)

        // }

    }
    const isSearchPath = pathname === "/search";
    const onSubmit = (e: any) => {
        e.preventDefault()
        if (query.trim() !== "") {
            // if(!isSearchPath){
                router.push(`/search?query=${encodeURIComponent(query)}`)
            // }
            setOpen(false)
            // setQuery("")
        }
        // console.log(e.target.value)
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
            <form onSubmit={onSubmit} className="bg-muted px-2 rounded-full border-mesure flex items-center justify-between gap-2">
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
    return (
        <div className="relative w-full max-w-sm">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <div className="relative bg-slate-50 rounded-full px-2 sm:rounded-lg">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <input
                            placeholder={t('placeholder')}
                            //   placeholder="Search..."
                            className="max-w-48 border-none- p-none ring-none outline-none border-input-0 bg-transparent p-2"
                            //   className="flex h-9 w-full rounded-md border border-input bg-transparent px-9 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            value={query}
                            onChange={OnUpdateQuery}
                            onFocus={() => query.length > 0 && setOpen(true)}
                        />
                    </div>
                </PopoverTrigger>

                {/* align="start" makes it sit flush with the input */}
                <PopoverContent
                    className="p-0 w-[var(--radix-popover-trigger-width)]"
                    align="start"
                    onOpenAutoFocus={(e) => e.preventDefault()} // Prevents focus jump
                >
                    <Command>
                        <CommandList>
                            {/* <CommandEmpty>No results found.</CommandEmpty> */}
                            <CommandGroup 
                            heading={t("results")}
                            >
                                {searchResults.map((item) => (
                                    <CommandItem 
                                        key={item.id}
                                        value={item.title}
                                        >
                                        <Link
                                            key={item.id}
                                            // value={item.title}
                                            // onSelect={onSelect}
                                            href={`/cinema/${item.id}/content`}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: item.title }} className="line-clamp-1"></span>
                                            {/* <span className="ml-auto text-xs text-muted-foreground">
                      {item.category}
                    </span> */}
                                        </Link>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}