// app/api/contact-form/submissions/route.ts
import { NextRequest, NextResponse } from "next/server";
import payload from "payload";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const status = searchParams.get("status");
    const location = searchParams.get("location");
    const service = searchParams.get("service");

    const where: any = {};

    if (status) {
      where.status = { equals: status };
    }

    if (location) {
      where.location = { equals: location };
    }

    if (service) {
      where.service = { equals: service };
    }

    const submissions = await payload.find({
      collection: "contact-form-submissions",
      page,
      limit,
      where,
      sort: "-createdAt",
    });

    return NextResponse.json({
      success: true,
      ...submissions,
    });
  } catch (error: any) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching submissions",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
