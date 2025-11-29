// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Get user's IP and User Agent
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Submit to Payload CMS
    const response = await fetch(
      `https://backend-orpin-six-56.vercel.app/api/form-submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "training",
          firstName: formData.first_name,
          lastName: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          preferredTrainingMonth: formData.preferred_training_month || "",
          preferredTrainingProgram: formData.preferred_training_program || "",
          questionsOrComments: formData.questions_or_comments || "",
          optinForSmsTexting: formData.optin_for_sms_texting === "Yes",
          permissionToFollowUp:
            formData.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
            "Yes",
          ipAddress,
          userAgent,
          rawFormData: formData,
          status: "new",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Payload API Error:", errorData);
      throw new Error("Failed to submit form");
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      id: data.doc.id,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
