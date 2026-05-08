'use client';
import { searchWpPosts } from '@/api/posts';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';



interface SearchResult {
    id: string;
    title: string;
    description?: string;
}

export default async function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState<SearchResult[]>([]);
    const res = await searchWpPosts(query);
    // useEffect(() => {
    //     if (!query) {
    //         setResults([]);
    //         return;
    //     }

    //     // Replace with your actual search API call
    //     const fetchResults = async () => {
    //         try {
    //             const response :any= await searchWpPosts(query);
    //             // const data = await response.json();
    //             console.log('Search results:', response);
    //             setResults(response);
    //         } catch (error) {
    //             console.error('Search error:', error);
    //             setResults([]);
    //         } finally {
    //         }
    //     };

    //     fetchResults();
    // }, [query]);

    return (
        // <div className="container mx-auto px-4 py-8">
        //     <h1 className="text-3xl font-bold mb-6">Search Results</h1>
            
        //     <p className="text-gray-600 mb-6">
        //         {query ? `Results for: "${query}"` : 'Enter a search query'}
        //     </p>

        //     {/* {loading && <p className="text-lg">Loading...</p>}

        //     {!loading && results.length === 0 && query && (
        //         <p className="text-gray-500">No results found</p>
        //     )} */}

        //     <div className="space-y-4">
        //         {results.map((result) => (
        //             <div key={result.id} className="border rounded-lg p-4 hover:shadow-md">
        //                 <h2 className="text-xl font-semibold">{result.title}</h2>
        //                 <p className="text-gray-600">{result.description}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div className="bg-background rounded mx-auto  p-8">
            <h1 className="text-3xl font-bold mb-6">Search Results</h1>
        {/* {JSON.stringify(res)}     */}
        <p className="text-gray-600 mb-6">
            {query ? `Results for: "${query}"` : 'Enter a search query'}
        </p>
        
        </div>

    );
}