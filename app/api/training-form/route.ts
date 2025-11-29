// Next.js API Route: app/api/training-form/route.ts
// or pages/api/training-form.ts (if using pages router)

import { NextRequest, NextResponse } from "next/server";

// For App Router (app/api/training-form/route.ts)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Get client information
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "";
    const referrer = request.headers.get("referer") || "";

    // Prepare submission data
    const submissionData = {
      formType: "training",
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone: body.phone,
      preferred_training_month: body.preferred_training_month || "",
      preferred_training_program: body.preferred_training_program,
      questions_or_comments: body.questions_or_comments || "",
      optin_for_sms_texting:
        body.optin_for_sms_texting === "Yes" ||
        body.optin_for_sms_texting === true,
      by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text:
        body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
          "Yes" ||
        body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
          true,
      ipAddress: ipAddress,
      userAgent: userAgent,
      referrer: referrer,
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    // Submit to Payload CMS
    const payloadUrl = "https://backend-orpin-six-56.vercel.app";
    const payloadApiKey = process.env.PAYLOAD_API_KEY;

    const response = await fetch(
      `${payloadUrl}/api/training-form-submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(payloadApiKey && { Authorization: `Bearer ${payloadApiKey}` }),
        },
        body: JSON.stringify(submissionData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Payload API Error:", errorData);
      throw new Error("Failed to submit training form to Payload CMS");
    }

    const result = await response.json();

    // Optional: Send email notification
    // await sendTrainingEmailNotification(submissionData);

    return NextResponse.json(
      {
        success: true,
        message: "Training application submitted successfully",
        id: result.doc.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Training form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit training application. Please try again.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// For Pages Router (pages/api/training-form.ts)
/*
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = req.body;

    // Get client information
    const ipAddress =
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.socket.remoteAddress ||
      'unknown';
    const userAgent = req.headers['user-agent'] || '';
    const referrer = req.headers['referer'] || '';

    // Prepare submission data
    const submissionData = {
      formType: 'training',
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone: body.phone,
      preferred_training_month: body.preferred_training_month || '',
      preferred_training_program: body.preferred_training_program,
      questions_or_comments: body.questions_or_comments || '',
      optin_for_sms_texting:
        body.optin_for_sms_texting === 'Yes' ||
        body.optin_for_sms_texting === true,
      by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text:
        body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
          'Yes' ||
        body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
          true,
      ipAddress: typeof ipAddress === 'string' ? ipAddress : ipAddress[0],
      userAgent: userAgent,
      referrer: referrer,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };

    // Submit to Payload CMS
    const payloadUrl =
      process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001';
    const payloadApiKey = process.env.PAYLOAD_API_KEY;

    const response = await fetch(`${payloadUrl}/api/training-form-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(payloadApiKey && { Authorization: `Bearer ${payloadApiKey}` }),
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Payload API Error:', errorData);
      throw new Error('Failed to submit training form to Payload CMS');
    }

    const result = await response.json();

    return res.status(200).json({
      success: true,
      message: 'Training application submitted successfully',
      id: result.doc.id,
    });
  } catch (error) {
    console.error('Training form submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit training application. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
*/
