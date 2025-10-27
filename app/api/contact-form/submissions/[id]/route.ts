// app/api/contact-form/submissions/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import payload from "payload";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status, notes, assignedTo } = body;

    const updateData: any = {};

    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;
    if (assignedTo !== undefined) updateData.assignedTo = assignedTo;

    const submission = await payload.update({
      collection: "contact-form-submissions",
      id: params.id,
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      submission,
    });
  } catch (error: any) {
    console.error("Error updating submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while updating the submission",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await payload.delete({
      collection: "contact-form-submissions",
      id: params.id,
    });

    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while deleting the submission",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
