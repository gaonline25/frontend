// lib/transformTrainingData.ts
// Helper function to transform Payload CMS data to TrainingApplication component format

interface PayloadTrainingData {
  introModule?: {
    logo?: any;
    heading?: string;
    description?: string;
  };
  formSection?: {
    formTitle?: string;
    backgroundColor?: string;
    formId?: string;
    redirectUrl?: string;
    subjectLine?: string;
    formFields?: Array<any>; // Note: Payload uses formFields
    trainingProgramOptions?: Array<{ label: string; value: string }>;
    privacySection?: {
      privacyText?: string;
      privacyLinks?: Array<{ text: string; url: string; order: number }>;
    };
    submitButton?: {
      text?: string;
      backgroundColor?: string;
      textColor?: string;
    };
    backgroundImage?: any;
  };
}

export function transformTrainingData(payloadData: PayloadTrainingData | null) {
  if (!payloadData) {
    return null;
  }

  return {
    introModule: {
      logo: payloadData.introModule?.logo || undefined,
      heading:
        payloadData.introModule?.heading ||
        "Apply for Your Training Spot Today",
      description:
        payloadData.introModule?.description ||
        "Begin your journey with the #1 aesthetics training program in Florida. Fill out the form below to apply for hands-on instruction, expert guidance, and AMI certification.",
    },
    formSection: {
      formTitle: payloadData.formSection?.formTitle || "Apply Now",
      backgroundColor: payloadData.formSection?.backgroundColor || "#ffffff",
      formId: payloadData.formSection?.formId || "form_training",
      redirectUrl:
        payloadData.formSection?.redirectUrl || "/contact/thank-you/",
      subjectLine:
        payloadData.formSection?.subjectLine || "Training Sign Up Form",
      // CRITICAL: Map formFields to fields (Payload uses formFields, component expects fields)
      fields: payloadData.formSection?.formFields || [],
      trainingProgramOptions: payloadData.formSection
        ?.trainingProgramOptions || [
        { label: "Foundational", value: "Foundational" },
        { label: "Comprehensive", value: "Comprehensive" },
      ],
      privacySection: {
        privacyText:
          payloadData.formSection?.privacySection?.privacyText ||
          "Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website.",
        privacyLinks: payloadData.formSection?.privacySection?.privacyLinks || [
          {
            text: "Goldfingers Aesthetics",
            url: "https://goldfingersaesthetics.com",
            order: 1,
          },
          {
            text: "Privacy Policy",
            url: "https://goldfingersaesthetics.com/privacy-policy",
            order: 2,
          },
          {
            text: "Terms and Conditions",
            url: "https://www.goldfingersaesthetics.com/terms-and-conditions/",
            order: 3,
          },
        ],
      },
      submitButton: {
        text: payloadData.formSection?.submitButton?.text || "Submit",
        backgroundColor:
          payloadData.formSection?.submitButton?.backgroundColor || "#007bff",
        textColor:
          payloadData.formSection?.submitButton?.textColor || "#ffffff",
      },
      backgroundImage: payloadData.formSection?.backgroundImage || undefined,
    },
  };
}

// Usage Example:
/*
  import { transformTrainingData } from '@/lib/transformTrainingData';
  
  async function getTrainingData() {
    const response = await fetch(`${payloadUrl}/api/training-application?depth=2`);
    const data = await response.json();
    return transformTrainingData(data.docs[0]);
  }
  
  export default async function TrainingPage() {
    const trainingData = await getTrainingData();
    
    if (!trainingData) {
      return <div>Error loading training application</div>;
    }
  
    return <TrainingApplication data={trainingData} />;
  }
  */
