// // // // Next.js API Route: app/api/special-form/route.ts

// // // import { NextRequest, NextResponse } from "next/server";

// // // // For App Router (app/api/special-form/route.ts)
// // // export async function POST(request: NextRequest) {
// // //   try {
// // //     const body = await request.json();

// // //     // Get client information
// // //     const ipAddress =
// // //       request.headers.get("x-forwarded-for") ||
// // //       request.headers.get("x-real-ip") ||
// // //       "unknown";
// // //     const userAgent = request.headers.get("user-agent") || "";
// // //     const referrer = request.headers.get("referer") || "";

// // //     // Prepare submission data
// // //     const submissionData = {
// // //       formType: "contact",
// // //       first_name: body.first_name,
// // //       last_name: body.last_name,
// // //       email: body.email,
// // //       phone: body.phone,
// // //       location_id: body.location_id,
// // //       location_name: body.location_name,
// // //       what_service_are_you_interested_in:
// // //         body.what_service_are_you_interested_in,
// // //       commentsquestions: body.commentsquestions || "",
// // //       optin_for_sms_texting:
// // //         body.optin_for_sms_texting === "Yes" ||
// // //         body.optin_for_sms_texting === true,
// // //       by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text:
// // //         body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
// // //           "Yes" ||
// // //         body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
// // //           true,
// // //       ipAddress: ipAddress,
// // //       userAgent: userAgent,
// // //       referrer: referrer,
// // //       submittedAt: new Date().toISOString(),
// // //       status: "new",
// // //     };

// // //     // Submit to Payload CMS
// // //     const payloadUrl =
// // //       process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://backend-orpin-six-56.vercel.app";
// // //     const payloadApiKey = process.env.PAYLOAD_API_KEY;

// // //     const response = await fetch(
// // //       `${payloadUrl}/api/special-contact-form-submissions`,
// // //       {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           ...(payloadApiKey && { Authorization: `Bearer ${payloadApiKey}` }),
// // //         },
// // //         body: JSON.stringify(submissionData),
// // //       }
// // //     );

// // //     if (!response.ok) {
// // //       const errorData = await response.json();
// // //       console.error("Payload API Error:", errorData);
// // //       throw new Error("Failed to submit form to Payload CMS");
// // //     }

// // //     const result = await response.json();

// // //     // Optional: Send email notification
// // //     // await sendEmailNotification(submissionData);

// // //     return NextResponse.json(
// // //       {
// // //         success: true,
// // //         message: "Form submitted successfully",
// // //         id: result.doc.id,
// // //       },
// // //       { status: 200 }
// // //     );
// // //   } catch (error) {
// // //     console.error("Form submission error:", error);
// // //     return NextResponse.json(
// // //       {
// // //         success: false,
// // //         message: "Failed to submit form. Please try again.",
// // //         error: error instanceof Error ? error.message : "Unknown error",
// // //       },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }

// // // // For Pages Router (pages/api/contact-form.ts)
// // // /*
// // // import type { NextApiRequest, NextApiResponse } from 'next';

// // // export default async function handler(
// // //   req: NextApiRequest,
// // //   res: NextApiResponse
// // // ) {
// // //   if (req.method !== 'POST') {
// // //     return res.status(405).json({ message: 'Method not allowed' });
// // //   }

// // //   try {
// // //     const body = req.body;

// // //     // Get client information
// // //     const ipAddress = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown';
// // //     const userAgent = req.headers['user-agent'] || '';
// // //     const referrer = req.headers['referer'] || '';

// // //     // Prepare submission data
// // //     const submissionData = {
// // //       formType: 'contact',
// // //       first_name: body.first_name,
// // //       last_name: body.last_name,
// // //       email: body.email,
// // //       phone: body.phone,
// // //       location_id: body.location_id,
// // //       location_name: body.location_name,
// // //       what_service_are_you_interested_in: body.what_service_are_you_interested_in,
// // //       commentsquestions: body.commentsquestions || '',
// // //       optin_for_sms_texting: body.optin_for_sms_texting === 'Yes' || body.optin_for_sms_texting === true,
// // //       by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text:
// // //         body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text === 'Yes' ||
// // //         body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text === true,
// // //       ipAddress: ipAddress,
// // //       userAgent: userAgent,
// // //       referrer: referrer,
// // //       submittedAt: new Date().toISOString(),
// // //       status: 'new',
// // //     };

// // //     // Submit to Payload CMS
// // //     const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';
// // //     const payloadApiKey = process.env.PAYLOAD_API_KEY;

// // //     const response = await fetch(`${payloadUrl}/api/form-submissions`, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //         ...(payloadApiKey && { 'Authorization': `Bearer ${payloadApiKey}` }),
// // //       },
// // //       body: JSON.stringify(submissionData),
// // //     });

// // //     if (!response.ok) {
// // //       const errorData = await response.json();
// // //       console.error('Payload API Error:', errorData);
// // //       throw new Error('Failed to submit form to Payload CMS');
// // //     }

// // //     const result = await response.json();

// // //     return res.status(200).json({
// // //       success: true,
// // //       message: 'Form submitted successfully',
// // //       id: result.doc.id,
// // //     });

// // //   } catch (error) {
// // //     console.error('Form submission error:', error);
// // //     return res.status(500).json({
// // //       success: false,
// // //       message: 'Failed to submit form. Please try again.',
// // //       error: error instanceof Error ? error.message : 'Unknown error',
// // //     });
// // //   }
// // // }
// // // */

// // // // app/api/special-form/route.ts
// // // import { NextRequest, NextResponse } from "next/server";

// // // export async function POST(request: NextRequest) {
// // //   try {
// // //     const body = await request.json();

// // //     // Get client information
// // //     const ipAddress =
// // //       request.headers.get("x-forwarded-for") ||
// // //       request.headers.get("x-real-ip") ||
// // //       "unknown";
// // //     const userAgent = request.headers.get("user-agent") || "";
// // //     const referrer = request.headers.get("referer") || "";

// // //     // Map frontend field names to Payload CMS field names
// // //     const submissionData = {
// // //       // ✅ Map to correct Payload field names
// // //       firstName: body.first_name,
// // //       lastName: body.last_name,
// // //       email: body.email,
// // //       phone: body.phone,
// // //       location: body.location_id,
// // //       locationName: body.location_name,
// // //       service: body.what_service_are_you_interested_in,
// // //       comments: body.commentsquestions || "",
// // //       optInSMS:
// // //         body.optin_for_sms_texting === "Yes" ||
// // //         body.optin_for_sms_texting === true,
// // //       consentFollowUp:
// // //         body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text === "Yes" ||
// // //         body.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text === true,

// // //       // These will be set by Payload hooks, but including for completeness
// // //       ipAddress: ipAddress,
// // //       userAgent: userAgent,
// // //       referrer: referrer,
// // //       source: "contact-form",
// // //       status: "new",
// // //     };

// // //     // Submit to Payload CMS
// // //     const payloadUrl = "https://backend-orpin-six-56.vercel.app";
// // //     const payloadApiKey = process.env.PAYLOAD_API_KEY;

// // //     const response = await fetch(
// // //       `${payloadUrl}/api/special-contact-form-submissions`,
// // //       {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           ...(payloadApiKey && { Authorization: `Bearer ${payloadApiKey}` }),
// // //         },
// // //         body: JSON.stringify(submissionData),
// // //       }
// // //     );

// // //     if (!response.ok) {
// // //       const errorData = await response.json();
// // //       console.error("Payload API Error:", errorData);
// // //       console.error("Response status:", response.status);
// // //       throw new Error(`Failed to submit form to Payload CMS: ${errorData.message || 'Unknown error'}`);
// // //     }

// // //     const result = await response.json();

// // //     // Optional: Send email notification
// // //     // await sendEmailNotification(submissionData);

// // //     return NextResponse.json(
// // //       {
// // //         success: true,
// // //         message: "Form submitted successfully",
// // //         id: result.doc.id,
// // //       },
// // //       { status: 200 }
// // //     );
// // //   } catch (error) {
// // //     console.error("Form submission error:", error);
// // //     return NextResponse.json(
// // //       {
// // //         success: false,
// // //         message: "Failed to submit form. Please try again.",
// // //         error: error instanceof Error ? error.message : "Unknown error",
// // //       },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }

// // import { NextRequest, NextResponse } from "next/server";

// // export async function POST(request: NextRequest) {
// //   try {
// //     const body = await request.json();
// //     console.log("Received form data:", body);

// //     // Get client information
// //     const ipAddress =
// //       request.headers.get("x-forwarded-for") ||
// //       request.headers.get("x-real-ip") ||
// //       "unknown";
// //     const userAgent = request.headers.get("user-agent") || "";
// //     const referrer = request.headers.get("referer") || "";

// //     // ✅ Map frontend field names to Payload CMS field names
// //     const submissionData = {
// //       firstName: body.first_name || "",
// //       lastName: body.last_name || "",
// //       email: body.email || "",
// //       phone: body.phone || "",
// //       location: body.location_id || "",
// //       service: body.what_service_are_you_interested_in || "",
// //       comments: body.commentsquestions || "",
// //       optInSMS: body.optin_for_sms_texting === "Yes",
// //       consentFollowUp: true, // ✅ Set this to true since it's required
// //       ipAddress: ipAddress,
// //       userAgent: userAgent,
// //       referrer: referrer,
// //       source: "contact-form",
// //       status: "new",
// //     };

// //     console.log("Mapped submission data:", submissionData);

// //     // Submit to Payload CMS
// //     const payloadUrl =
// //       process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://backend-orpin-six-56.vercel.app";
// //     const payloadApiKey = process.env.PAYLOAD_API_KEY;

// //     const response = await fetch(
// //       `${payloadUrl}/api/special-contact-form-submissions`,
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           ...(payloadApiKey && {
// //             Authorization: `users API-Key ${payloadApiKey}`,
// //           }),
// //         },
// //         body: JSON.stringify(submissionData),
// //       }
// //     );

// //     const result = await response.json();
// //     console.log("Payload response:", result);

// //     if (!response.ok) {
// //       console.error("Payload API Error:", result);
// //       throw new Error(
// //         result.errors?.[0]?.message || "Failed to submit form to Payload CMS"
// //       );
// //     }

// //     return NextResponse.json(
// //       {
// //         success: true,
// //         message: "Thank you! Your form has been submitted successfully.",
// //         id: result.doc?.id,
// //       },
// //       { status: 200 }
// //     );
// //   } catch (error) {
// //     console.error("Form submission error:", error);
// //     return NextResponse.json(
// //       {
// //         success: false,
// //         message: "Failed to submit form. Please try again.",
// //         error: error instanceof Error ? error.message : "Unknown error",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// /* =====================================================
//    LOCATION → EMAIL ROUTING (MATCH SLUG VALUES)
// ===================================================== */

// const LOCATION_EMAILS: Record<string, string> = {
//   clearwater: "clearwater@goldfingersaesthetics.com",
//   clermont: "clermont@goldfingersaesthetics.com",
//   "lake-nona": "lakenona@goldfingersaesthetics.com",
//   "winter-garden": "wintergarden@goldfingersaesthetics.com",
//   "thornton-park": "thornton-park@goldfingersaesthetics.com",
//   "dr-phillips": "dr-phillips@goldfingersaesthetics.com",
//   "winter-springs": "dr-phillips@goldfingersaesthetics.com",
//   "daytona-beach": "daytona-beach@goldfingersaesthetics.com",
//   "lady-lake": "villages@goldfingersaesthetics.com",
//   "lake-mary": "lakemary@goldfingersaesthetics.com",
//   longwood: "longwood@goldfingersaesthetics.com",
//   "mount-dora": "villages@goldfingersaesthetics.com",
//   "new-smyrna-beach": "nsb@goldfingersaesthetics.com",
//   ocala: "villages@goldfingersaesthetics.com",
//   orlando: "allyoj@aol.com",
//   "port-orange": "port-orange@goldfingersaesthetics.com",
//   sarasota: "sarasota@goldfingersaesthetics.com",
//   "downtown-tampa": "downtown-tampa@goldfingersaesthetics.com",
//   "st-petersburg": "st-petersburg@goldfingersaesthetics.com",
//   tampa: "tampa@goldfingersaesthetics.com",
//   "downtown-orlando": "allyoj@aol.com",
//   "wesley-chapel": "wesley-chapel@goldfingersaesthetics.com",
//   "winter-park": "winter-park@goldfingersaesthetics.com",
// };

// const DEFAULT_EMAIL = "clearwater@goldfingersaesthetics.com";

// /* =====================================================
//    NODEMAILER
// ===================================================== */

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "gawebsite25@gmail.com",
//     pass: "vhljxxgiyptmhzhg",
//   },
// });

// /* =====================================================
//    POST ROUTE
// ===================================================== */

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     const ipAddress =
//       request.headers.get("x-forwarded-for") ||
//       request.headers.get("x-real-ip") ||
//       "unknown";

//     const submissionData = {
//       ...body,
//       ipAddress,
//       userAgent: request.headers.get("user-agent"),
//       referrer: request.headers.get("referer"),
//       submittedAt: new Date().toISOString(),
//       status: "new",
//     };

//     /* =====================
//        SAVE TO PAYLOAD
//     ===================== */

//     const response = await fetch(
//       "https://backend-orpin-six-56.vercel.app/api/special-contact-form-submissions",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           ...(process.env.PAYLOAD_API_KEY && {
//             Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`,
//           }),
//         },
//         body: JSON.stringify(submissionData),
//       }
//     );

//     if (!response.ok) {
//       const error = await response.text();
//       console.error("Payload API Error:", error);
//       throw new Error("Failed to submit form to Payload");
//     }

//     const result = await response.json();

//     /* =====================
//        SEND EMAIL
//     ===================== */

//     // Get the slug, remove slashes, convert to lowercase, and trim
//     const slug = body.location_id
//       ?.replace(/^\/+|\/+$/g, "") // Remove leading/trailing slashes
//       ?.toLowerCase()
//       ?.trim();

//     // Log for debugging (remove in production)
//     console.log("=== SPECIAL FORM EMAIL ROUTING DEBUG ===");
//     console.log("Received location_id:", body.location_id);
//     console.log("Processed slug:", slug);
//     console.log("Available email keys:", Object.keys(LOCATION_EMAILS));

//     // Look up the email
//     const toEmail =
//       slug && LOCATION_EMAILS[slug] ? LOCATION_EMAILS[slug] : DEFAULT_EMAIL;

//     console.log("Selected email:", toEmail);
//     console.log("Is default email?", toEmail === DEFAULT_EMAIL);
//     console.log("========================================");

//     // Build email HTML content dynamically based on what fields exist
//     let emailContent = `
//       <h3>New Special Offer Lead</h3>
//       <p><b>Name:</b> ${body.first_name || ""} ${body.last_name || ""}</p>
//     `;

//     if (body.email) {
//       emailContent += `<p><b>Email:</b> ${body.email}</p>`;
//     }

//     if (body.phone) {
//       emailContent += `<p><b>Phone:</b> ${body.phone}</p>`;
//     }

//     if (body.location_name || body.location_id) {
//       emailContent += `<p><b>Location:</b> ${body.location_name || body.location_id}</p>`;
//     }

//     if (body.service || body.what_service_are_you_interested_in) {
//       emailContent += `<p><b>Service:</b> ${body.service || body.what_service_are_you_interested_in}</p>`;
//     }

//     if (body.comments || body.commentsquestions) {
//       emailContent += `
//         <p><b>Comments:</b><br>
//         ${body.comments || body.commentsquestions || "None"}</p>
//       `;
//     }

//     if (body.optin_for_sms_texting) {
//       emailContent += `<p><b>SMS Opt-in:</b> ${body.optin_for_sms_texting}</p>`;
//     }

//     emailContent += `
//       <hr>
//       <p style="color: #666; font-size: 12px;">
//         Routed to: ${toEmail}<br>
//         Slug received: ${slug || "MISSING"}<br>
//         Form Type: Special Offer
//       </p>
//     `;

//     await transporter.sendMail({
//       from: `"Goldfingers Special Offer" <${process.env.SMTP_USER || "gawebsite25@gmail.com"}>`,
//       to: toEmail,
//       replyTo: body.email,
//       subject: `New Special Offer Lead – ${body.location_name || body.location_id || "No Location"} [${slug || "NO SLUG"}]`,
//       html: emailContent,
//     });

//     /* =====================
//        SUCCESS RESPONSE
//     ===================== */

//     return NextResponse.json({
//       success: true,
//       message: "Thank you! We'll be in touch soon.",
//       id: result.doc?.id,
//       debug: {
//         slug,
//         emailSentTo: toEmail,
//       },
//     });
//   } catch (error) {
//     console.error("SPECIAL FORM ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to submit form. Please try again.",
//         error: error instanceof Error ? error.message : "Unknown server error",
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* =====================================================
   LOCATION → EMAIL ROUTING (MATCH SLUG VALUES)
===================================================== */

const LOCATION_EMAILS: Record<string, string> = {
  clearwater: "clearwater@goldfingersaesthetics.com",
  clermont: "clermont@goldfingersaesthetics.com",
  "lake-nona": "lakenona@goldfingersaesthetics.com",
  "winter-garden": "wintergarden@goldfingersaesthetics.com",
  "thornton-park": "thornton-park@goldfingersaesthetics.com",
  "dr-phillips": "dr-phillips@goldfingersaesthetics.com",
  "winter-springs": "dr-phillips@goldfingersaesthetics.com",
  "daytona-beach": "daytona-beach@goldfingersaesthetics.com",
  "lady-lake": "villages@goldfingersaesthetics.com",
  "lake-mary": "lakemary@goldfingersaesthetics.com",
  longwood: "longwood@goldfingersaesthetics.com",
  "mount-dora": "villages@goldfingersaesthetics.com",
  "new-smyrna-beach": "nsb@goldfingersaesthetics.com",
  ocala: "villages@goldfingersaesthetics.com",
  orlando: "allyson@goldfingersaesthetics.com",
  "port-orange": "port-orange@goldfingersaesthetics.com",
  sarasota: "sarasota@goldfingersaesthetics.com",
  "downtown-tampa": "downtown-tampa@goldfingersaesthetics.com",
  "st-petersburg": "st-petersburg@goldfingersaesthetics.com",
  tampa: "tampa@goldfingersaesthetics.com",
  "downtown-orlando": "allyson@goldfingersaesthetics.com",
  "wesley-chapel": "wesley-chapel@goldfingersaesthetics.com",
  "winter-park": "winter-park@goldfingersaesthetics.com",
};

const DEFAULT_EMAIL = "clearwater@goldfingersaesthetics.com";

/* =====================================================
   NODEMAILER
===================================================== */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "gawebsite25@gmail.com",
    pass: "vhljxxgiyptmhzhg",
  },
});

/* =====================================================
   POST ROUTE
===================================================== */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("=== SPECIAL FORM RECEIVED DATA ===");
    console.log("Body:", body);
    console.log("==================================");

    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // ✅ Map frontend field names to Payload CMS field names
    const submissionData = {
      firstName: body.first_name || "",
      lastName: body.last_name || "",
      email: body.email || "",
      phone: body.phone || "",
      location: body.location_id || "",
      service: body.what_service_are_you_interested_in || "",
      comments: body.commentsquestions || "",
      optInSMS:
        body.optin_for_sms_texting === "Yes" ||
        body.optin_for_sms_texting === true,
      consentFollowUp:
        body.consent_followup === "Yes" ||
        body.consent_followup === true ||
        true,
      ipAddress: ipAddress,
      userAgent: request.headers.get("user-agent") || "",
      referrer: request.headers.get("referer") || "",
      source: "special-form",
      status: "new",
    };

    console.log("=== MAPPED SUBMISSION DATA ===");
    console.log("Submission Data:", submissionData);
    console.log("==============================");

    /* =====================
       SAVE TO PAYLOAD
    ===================== */

    const response = await fetch(
      "https://backend-orpin-six-56.vercel.app/api/special-contact-form-submissions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.PAYLOAD_API_KEY && {
            Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`,
          }),
        },
        body: JSON.stringify(submissionData),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Payload API Error:", error);
      throw new Error("Failed to submit form to Payload");
    }

    const result = await response.json();

    /* =====================
       SEND EMAIL
    ===================== */

    // Get the slug, remove slashes, convert to lowercase, and trim
    const slug = body.location_id
      ?.replace(/^\/+|\/+$/g, "") // Remove leading/trailing slashes
      ?.toLowerCase()
      ?.trim();

    // Log for debugging (remove in production)
    console.log("=== SPECIAL FORM EMAIL ROUTING DEBUG ===");
    console.log("Received location_id:", body.location_id);
    console.log("Processed slug:", slug);
    console.log("Available email keys:", Object.keys(LOCATION_EMAILS));

    // Look up the email
    const toEmail =
      slug && LOCATION_EMAILS[slug] ? LOCATION_EMAILS[slug] : DEFAULT_EMAIL;

    console.log("Selected email:", toEmail);
    console.log("Is default email?", toEmail === DEFAULT_EMAIL);
    console.log("========================================");

    // Build email HTML content dynamically based on what fields exist
    let emailContent = `
      <h3>New Special Offer Lead</h3>
      <p><b>Name:</b> ${body.first_name || ""} ${body.last_name || ""}</p>
    `;

    if (body.email) {
      emailContent += `<p><b>Email:</b> ${body.email}</p>`;
    }

    if (body.phone) {
      emailContent += `<p><b>Phone:</b> ${body.phone}</p>`;
    }

    if (body.location_name || body.location_id) {
      emailContent += `<p><b>Location:</b> ${body.location_name || body.location_id}</p>`;
    }

    if (body.service || body.what_service_are_you_interested_in) {
      emailContent += `<p><b>Service:</b> ${body.service || body.what_service_are_you_interested_in}</p>`;
    }

    if (body.comments || body.commentsquestions) {
      emailContent += `
        <p><b>Comments:</b><br>
        ${body.comments || body.commentsquestions || "None"}</p>
      `;
    }

    if (body.optin_for_sms_texting) {
      emailContent += `<p><b>SMS Opt-in:</b> ${body.optin_for_sms_texting}</p>`;
    }

    emailContent += `
      <hr>
      <p style="color: #666; font-size: 12px;">
        Routed to: ${toEmail}<br>
        Slug received: ${slug || "MISSING"}<br>
        Form Type: Special Offer
      </p>
    `;

    await transporter.sendMail({
      from: `"Goldfingers Special Offer" <${process.env.SMTP_USER || "gawebsite25@gmail.com"}>`,
      to: toEmail,
      replyTo: body.email,
      subject: `New Special Offer Lead – ${body.location_name || body.location_id || "No Location"} [${slug || "NO SLUG"}]`,
      html: emailContent,
    });

    /* =====================
       SUCCESS RESPONSE
    ===================== */

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
      id: result.doc?.id,
      debug: {
        slug,
        emailSentTo: toEmail,
      },
    });
  } catch (error) {
    console.error("SPECIAL FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form. Please try again.",
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}