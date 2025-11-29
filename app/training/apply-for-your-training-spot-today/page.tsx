// // import TrainingApplication from "@/components/training/apply-for-your-training-spot-today/TrainingApplication";

// import TrainingApplication from "@/components/training/apply-for-your-training-spot-today/TrainingApplication";


// // export default function ApplyFor() {
// //     return (
// //         <>
// //             <TrainingApplication />
// //         </>
// //     )
// // }






// // Example usage in a Next.js page
// // app/contact/page.tsx (App Router)

// // import ContactSection from '@/components/ContactSection';

// async function getContactData() {
//   const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'https://backend-orpin-six-56.vercel.app';

//   try {
//     const response = await fetch(`${payloadUrl}/api/training-application`, {
//       next: { revalidate: 60 }, // Revalidate every 60 seconds
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch contact data');
//     }

//     const data = await response.json();

//     // Assuming you have one contact component, get the first one
//     return data.docs[0];
//   } catch (error) {
//     console.error('Error fetching contact data:', error);
//     return null;
//   }
// }

// export default async function ContactPage() {
//   const data = await getContactData();

//   if (!data) {
//     return <div>Error loading contact page</div>;
//   }

//   return <TrainingApplication data={data} />;
// }

// // Alternative: For Pages Router (pages/contact.tsx)
// /*
// import ContactSection from '@/components/ContactSection';
// import { GetStaticProps } from 'next';

// interface ContactPageProps {
//   contactData: any;
// }

// export default function ContactPage({ contactData }: ContactPageProps) {
//   if (!contactData) {
//     return <div>Error loading contact page</div>;
//   }

//   return <ContactSection data={contactData} />;
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';

//   try {
//     const response = await fetch(`${payloadUrl}/api/contact-component`);

//     if (!response.ok) {
//       throw new Error('Failed to fetch contact data');
//     }

//     const data = await response.json();

//     return {
//       props: {
//         contactData: data.docs[0],
//       },
//       revalidate: 60, // Revalidate every 60 seconds
//     };
//   } catch (error) {
//     console.error('Error fetching contact data:', error);
//     return {
//       props: {
//         contactData: null,
//       },
//     };
//   }
// };
// */



// app/training/page.tsx
// Clean implementation using the transformation helper

import TrainingApplication from "@/components/training/apply-for-your-training-spot-today/TrainingApplication";
import { transformTrainingData } from "@/components/transformTrainingData";

async function getTrainingApplicationData() {
  const payloadUrl =
    process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://backend-orpin-six-56.vercel.app";

  try {
    const response = await fetch(
      `${payloadUrl}/api/training-application?depth=2`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch training application data");
    }

    const data = await response.json();
    
    // Transform the Payload data to component format
    return transformTrainingData(data.docs[0]);
  } catch (error) {
    console.error("Error fetching training application data:", error);
    return null;
  }
}

export default async function TrainingPage() {
  const trainingData = await getTrainingApplicationData();

  if (!trainingData) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Unable to load training application</h1>
        <p>Please try again later or contact support.</p>
      </div>
    );
  }

  return <TrainingApplication data={trainingData} />;
}