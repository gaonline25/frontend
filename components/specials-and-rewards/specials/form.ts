export interface ContactFormData {
  formType: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  location_id: string;
  location_name: string;
  what_service_are_you_interested_in: string;
  commentsquestions?: string;
  optin_for_sms_texting: boolean;
  by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text: boolean;
  ipAddress?: string;
  userAgent?: string;
  referrer?: string;
  submittedAt: string;
  status: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
  error?: string;
}
