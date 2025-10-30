// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://goldfingerbackend.vercel.app/api";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    if (!query || query.trim().length < 2) {
      return NextResponse.json({ results: [] });
    }

    // Call your Payload search endpoint
    const response = await fetch(
      `${PAYLOAD_API_URL}/search?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Payload search failed:", response.statusText);
      return NextResponse.json(
        { error: "Search failed", results: [] },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      results: data.results || [],
      total: data.results?.length || 0,
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "An error occurred while searching", results: [] },
      { status: 500 }
    );
  }
}
