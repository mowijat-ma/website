import { NextResponse } from 'next/server';

type Props = {
  params: Promise<{ locale: string }> // Next.js params are treated as Promises
}

export async function GET(request: Request, { params }: Props) {
  // 1. Await the params to get the route segments
  const { locale } = await params; 

  try {
    // 2. Use the locale variable in your response
    return NextResponse.json({ 
      message: `Hello from the API!`,
      currentLocale: locale // This will output "fr", "ar", etc.
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}