// // app/api/contact-form/submit/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import payload from "payload";

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     const {
//       first_name,
//       last_name,
//       phone,
//       email,
//       location_id,
//       location_name,
//       what_service_are_you_interested_in,
//       commentsquestions,
//       optin_for_sms_texting,
//       by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text,
//     } = body;

//     // Validate required fields
//     if (
//       !first_name ||
//       !last_name ||
//       !phone ||
//       !email ||
//       !location_id ||
//       !what_service_are_you_interested_in
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Missing required fields",
//         },
//         { status: 400 }
//       );
//     }

//     // Validate consent
//     if (
//       !by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "You must agree to the follow-up permission",
//         },
//         { status: 400 }
//       );
//     }

//     // Get IP address and user agent
//     const ipAddress =
//       request.headers.get("x-forwarded-for") ||
//       request.headers.get("x-real-ip") ||
//       request.ip ||
//       "unknown";
//     const userAgent = request.headers.get("user-agent") || "unknown";
//     const referrer =
//       request.headers.get("referer") || request.headers.get("referrer") || "";

//     // Create the form submission in Payload
//     const submission = await payload.create({
//       collection: "contact-form-submissions",
//       data: {
//         firstName: first_name,
//         lastName: last_name,
//         phone,
//         email,
//         location: location_id,
//         locationName: location_name || location_id,
//         service: what_service_are_you_interested_in,
//         comments: commentsquestions || "",
//         optInSMS: optin_for_sms_texting === "Yes",
//         consentFollowUp:
//           by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
//           "Yes",
//         status: "new",
//         source: "contact-form",
//         ipAddress,
//         userAgent,
//         referrer,
//       },
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Form submitted successfully",
//       submissionId: submission.id,
//     });
//   } catch (error: any) {
//     console.error("Error submitting contact form:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "An error occurred while submitting the form",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }


// app/api/contact-form/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import payload from 'payload';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      first_name,
      last_name,
      phone,
      email,
      location_id,
      location_name,
      what_service_are_you_interested_in,
      commentsquestions,
      optin_for_sms_texting,
      by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text,
    } = body;

    // Validate required fields
    if (!first_name || !last_name || !phone || !email || !location_id || !what_service_are_you_interested_in) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    // Validate consent
    if (!by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text) {
      return NextResponse.json(
        {
          success: false,
          message: 'You must agree to the follow-up permission',
        },
        { status: 400 }
      );
    }

    // Get IP address and user agent
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referrer = request.headers.get('referer') || request.headers.get('referrer') || '';

    // Create the form submission in Payload
    const submission = await payload.create({
      collection: 'contact-form-submissions',
      data: {
        firstName: first_name,
        lastName: last_name,
        phone,
        email,
        location: location_id,
        locationName: location_name || location_id,
        service: what_service_are_you_interested_in,
        comments: commentsquestions || '',
        optInSMS: optin_for_sms_texting === 'Yes',
        consentFollowUp: by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text === 'Yes',
        status: 'new',
        source: 'contact-form',
        ipAddress,
        userAgent,
        referrer,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: submission.id,
    });
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while submitting the form',
        error: error.message,
      },
      { status: 500 }
    );
  }
}