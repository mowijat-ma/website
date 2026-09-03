import { apiClient } from '@/lib/apiclient';
import { getSearchResultsContents } from '@/services/post.services';
import { Post } from '@/types';
import { NextResponse } from 'next/server';

type Props = {
  params: Promise<{ locale: string }> // Next.js params are treated as Promises
}
const BASE_URL = "https://public-api.wordpress.com/wp/v2/sites/mowijat.wordpress.com";

export async function GET(request: Request, { params }: Props) {
  // 1. Await the params to get the route segments
  const { locale } = await params; 
   
  try {
    
    const res = await fetch(BASE_URL + `/posts?lang=${locale}`);
    const data = await res.json();
    return NextResponse.json({ 
      message: `Hello from the API!`,
      data: data,
      currentLocale: locale // This will output "fr", "ar", etc.
    });
  }
   catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}