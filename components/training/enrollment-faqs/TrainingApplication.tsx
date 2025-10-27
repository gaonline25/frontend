import React from "react";

const TrainingApplication: React.FC = () => {
  return (
    <main id="main">
      {/* Page Layout */}
      {/* Two Column Module */}
      <div className="mod_columns_two viewport container" data-s3-module="">
        <div className="row ">
          <div className="content vertical-align">
            <div className="item wow fadeInLeft" data-api-key="content_left">
              <h1>Apply for Your Training Spot Today</h1>
              <p>
                Launch your career in aesthetics with Goldfingers Aesthetics,
                the #1 aesthetic center for BOTOX ®treatment in Florida. The
                Gold Standard Aesthetics Training Program delivers elite
                education for future injectors —led by industry leaders, powered
                by over 20 years of expertise, and designed for providers who
                are ready to elevate their craft.
              </p>
              <p>
                Whether you're new to aesthetic injectables or seeking to refine
                and expand your skillset, our AMI-certified program offers
                hands-on, real-world training at Florida's largest aesthetics
                center. Join the program that reflects the same artistry,
                consistency, and results that made Goldfingers Aesthetics a top
                1% national provider.
              </p>
              <p></p>
            </div>
            <div className="item wow fadeInRight" data-api-key="content_right">
              <p>
                <img
                  alt="woman handing clipboard back to nurse"
                  src="https://www.datocms-assets.com/105497/1694722251-gallery-banner.jpg"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Column Module */}
      <div className="mod_column viewport container" data-s3-module="">
        <div className="row " data-api-key="content">
          <div className="item">
            <h1>How to Enroll</h1>
            <ul>
              <li>
                <strong>Fill Out the Initial Application below</strong>
              </li>
              <li>
                <strong>Receive Confirmation &amp;Payment Instructions:</strong>
                Once accepted, you'll receive next steps to finalize your
                enrollment.
              </li>
              <li>
                <strong>
                  Start Your Online Training &amp;Get Ready for Hands-On
                  Experience:
                </strong>
                Dive into our online modules and prepare for in-person training
                at one of our clinic locations.
                <br />
                &nbsp;
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Form Module */}
      <div className="mod_contact_form dark" data-s3-module="">
        <div className="wrapper">
          <div className="row">
            <h2 data-api-key="title">Apply Now</h2>
            <div className="partial_form" data-s3-partial="">
              <form
                id="form_training"
                className="s3-form"
                method="post"
                action="/validate/"
                data-abide=""
                encType="multipart/form-data"
                noValidate
              >
                <div className="fields">
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="subject"
                        id="training_subject"
                        value="Training Sign Up Form"
                      />
                    </div>
                  </div>
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="redirect"
                        id="training_redirect"
                        value="/contact/thank-you/"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="training_first_name">First Name*</label>
                      <small>This field is required.</small>
                      <input
                        type="text"
                        size={50}
                        name="first_name"
                        id="training_first_name"
                        value=""
                        required
                        aria-required="true"
                        placeholder="First Name*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="training_last_name">Last Name*</label>
                      <small>This field is required.</small>
                      <input
                        type="text"
                        size={50}
                        name="last_name"
                        id="training_last_name"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Last Name*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field tel">
                      <label htmlFor="training_phone">Phone*</label>
                      <small>This field is required.</small>
                      <input
                        type="tel"
                        size={50}
                        name="phone"
                        id="training_phone"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Phone*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field email">
                      <label htmlFor="training_email">Email*</label>
                      <small>This field is required.</small>
                      <input
                        type="email"
                        size={50}
                        name="email"
                        id="training_email"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="training_preferred_training_month">
                        Preferred Training Month
                      </label>
                      <input
                        type="text"
                        size={50}
                        name="preferred_training_month"
                        id="training_preferred_training_month"
                        value=""
                        placeholder="Preferred Training Month"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field select">
                      <label htmlFor="training_preferred_training_program">
                        Preferred Training Program*
                      </label>
                      <small>This field is required.</small>
                      <select
                        name="preferred_training_program"
                        id="training_preferred_training_program"
                        required
                        aria-required="true"
                      >
                        <option value="" selected disabled>
                          Preferred Training Program*
                        </option>
                        <option value="Foundational">Foundational</option>
                        <option value="Comprehensive">Comprehensive</option>
                      </select>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field textarea">
                      <label htmlFor="training_questions_or_comments">
                        Questions or Comments
                      </label>
                      <textarea
                        rows={6}
                        cols={48}
                        defaultValue=""
                        name="questions_or_comments"
                        id="training_questions_or_comments"
                        placeholder="Questions or Comments"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field checkbox opt-in follow-up">
                      <div className="field-item checkbox-item">
                        <input
                          type="checkbox"
                          id="training_optin_for_sms_texting"
                          name="optin_for_sms_texting"
                          value="Yes"
                        />
                        <label htmlFor="training_optin_for_sms_texting">
                          Opt-In For SMS Texting
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field checkbox follow-up">
                      <small>This field is required.</small>
                      <div className="field-item checkbox-item">
                        <input
                          type="checkbox"
                          id="training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
                          name="by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
                          value="Yes"
                          required
                          aria-required="true"
                        />
                        <label htmlFor="training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text">
                          By completing this form, you are giving us permission
                          to follow-up by phone, email or text.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="section-label follow-up">
                      <p>
                        Messaging frequency may vary. Message and data rates may
                        apply. You can opt out any time by texting STOP. For
                        assistance, text HELP or visit our website at{" "}
                        <a href="https://goldfingersaesthetics.com">
                          Goldfingers Aesthetics
                        </a>
                        . Visit{" "}
                        <a href="https://goldfingersaesthetics.com/privacy-policy">
                          Privacy Policy
                        </a>
                        and{" "}
                        <a href="https://www.goldfingersaesthetics.com/terms-and-conditions/">
                          Terms and Conditions
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    id="training_recaptchaV3"
                    name="g-recaptcha-response-v3"
                    type="hidden"
                  />
                  <div id="training_recaptchaV2" data-recaptcha=""></div>
                  <div id="training_recaptcha" data-recaptcha-error="">
                    <small>This field is required.</small>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="form_id"
                  id="form_id"
                  value="training"
                />
                <input name="human_check" type="hidden" />
                <div className="submit-holder">
                  <div
                    className="btn validate disabled"
                    id="validate_training"
                    tabIndex={0}
                  >
                    Submit
                  </div>
                  <button
                    type="submit"
                    id="submit_training"
                    value="submitted"
                    name="submit"
                    className="submit btn"
                    tabIndex={0}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Box Grid Module */}
      <div
        className="mod_box_grid viewport    container option-3 single  bkg-image wider "
        data-s3-module=""
      >
        <div className="row">
          <div className="content-before">
            <h1>FAQs</h1>
          </div>
          <div className="boxes wider">
            <div className="box wow fadeInLeft">
              <h5>
                <span
                  style={{
                    backgroundColor: "transparent",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    fontStyle: "inherit",
                    fontVariantLigatures: "inherit",
                    fontVariantCaps: "inherit",
                    fontWeight: "inherit",
                    letterSpacing: "0px",
                  }}
                >
                  <strong>Who is eligible for this training?</strong>
                </span>
                <span
                  style={{
                    backgroundColor: "transparent",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    fontStyle: "inherit",
                    fontVariantLigatures: "inherit",
                    fontVariantCaps: "inherit",
                    fontWeight: "inherit",
                    letterSpacing: "0px",
                  }}
                ></span>
              </h5>
              <p>
                <span
                  style={{
                    backgroundColor: "transparent",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    fontStyle: "inherit",
                    fontVariantLigatures: "inherit",
                    fontVariantCaps: "inherit",
                    fontWeight: "inherit",
                    letterSpacing: "0px",
                  }}
                >
                  <strong></strong>
                </span>
              </p>
              <p>
                <span
                  style={{
                    backgroundColor: "transparent",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    fontStyle: "inherit",
                    fontVariantLigatures: "inherit",
                    fontVariantCaps: "inherit",
                    fontWeight: "inherit",
                    letterSpacing: "0px",
                  }}
                >
                  NPs, PAs, and MDs are welcome to apply. We do not currently
                  accept RNs.
                  <br />
                </span>
              </p>
            </div>
            <div className="box wow fadeInLeft">
              <h5>
                <strong>What certification will I receive?</strong>
              </h5>
              <p></p>
              <p>
                Graduates will earn an AMI (Allergan Medical Institute)
                Certification.
              </p>
            </div>
            <div className="box wow fadeInLeft">
              <h5>
                <strong>Do I need prior experience?</strong>
              </h5>
              <p></p>
              <p>
                No experience is necessary. Our program is designed for all
                levels.
              </p>
            </div>
            <div className="box wow fadeInLeft">
              <h5>
                <strong>Where are the trainings held?</strong>
              </h5>
              <p></p>
              <p>
                In-person training sessions are held at Goldfingers Aesthetics
                clinics throughout Florida.
              </p>
            </div>
            <div className="box wow fadeInLeft">
              <h5>
                <strong>What is included in the tuition?</strong>
              </h5>
              <p></p>
              <p>
                Your tuition includes hands-on training, access to online
                learning modules, and certification upon completion.
              </p>
            </div>
            <div className="box wow fadeInLeft">
              <h5>
                <strong>Are payment plans available?</strong>
              </h5>
              <p>Not at this time. Full tuition is required at enrollment.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Column Module */}
      <div className="mod_column viewport container" data-s3-module="">
        <div className="row " data-api-key="content">
          <div className="item">
            <center>
              <p>
                <a
                  href="https://www.goldfingersaesthetics.com/the-gold-standard-aesthetics-training-program/apply-for-your-training-spot-today/"
                  target="_blank"
                  className="btn"
                  rel="noopener"
                >
                  Apply Now &amp;Secure Your Spot
                </a>
              </p>
            </center>
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default TrainingApplication;




// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchTrainingApplicationPageData,
//   submitTrainingForm,
//   lexicalToHtml,
//   getImageUrl,
//   getResponsiveImageUrls,
// } from "@/lib/api/traning/fetchTrainingPageComponent";

// interface TrainingApplicationData {
//   componentName?: string;
//   heroSection?: any;
//   enrollSection?: any;
//   formSection?: any;
//   faqSection?: any;
//   finalCtaSection?: any;
//   sectionOrder?: Array<{ section: string }>;
//   globalStyles?: any;
// }

// const TrainingApplication: React.FC = () => {
//   const [pageData, setPageData] = useState<TrainingApplicationData | null>(
//     null
//   );
//   const [loading, setLoading] = useState(true);
//   const [formSubmitting, setFormSubmitting] = useState(false);
//   const [formMessage, setFormMessage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchTrainingApplicationPageData();
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching Training Application page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormSubmitting(true);
//     setFormMessage("");

//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);

//     try {
//       const result = await submitTrainingForm(data);

//       if (result.success) {
//         setFormMessage(
//           "Thank you! Your application has been submitted successfully."
//         );
//         form.reset();

//         // Redirect after success
//         const redirectUrl =
//           pageData?.formSection?.redirectUrl || "/contact/thank-you/";
//         setTimeout(() => {
//           window.location.href = redirectUrl;
//         }, 2000);
//       } else {
//         setFormMessage(
//           result.message ||
//             "There was an error submitting your application. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setFormMessage(
//         "There was an error submitting your application. Please try again."
//       );
//     } finally {
//       setFormSubmitting(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const {
//     heroSection,
//     enrollSection,
//     formSection,
//     faqSection,
//     finalCtaSection,
//     sectionOrder,
//   } = pageData;

//   const renderSection = (section: string) => {
//     switch (section) {
//       case "hero":
//         if (!heroSection || !heroSection.show) return null;
//         const heroRightImage = heroSection.rightContent?.image
//           ? getImageUrl(heroSection.rightContent.image)
//           : null;

//         return (
//           <div
//             className={
//               heroSection.containerClass || "mod_columns_two viewport container"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: heroSection.backgroundColor,
//               color: heroSection.textColor,
//             }}
//           >
//             <div className="row ">
//               <div
//                 className={`content ${
//                   heroSection.verticalAlign ? "vertical-align" : ""
//                 }`}
//               >
//                 <div
//                   className={`item wow ${
//                     heroSection.leftContent?.animation || "fadeInLeft"
//                   }`}
//                   data-api-key="content_left"
//                 >
//                   {heroSection.leftContent?.heading && (
//                     <h1 style={{ color: heroSection.leftContent.headingColor }}>
//                       {heroSection.leftContent.heading}
//                     </h1>
//                   )}
//                   {heroSection.leftContent?.paragraphs &&
//                     heroSection.leftContent.paragraphs.map(
//                       (para: any, idx: number) => (
//                         <div
//                           key={idx}
//                           style={{ color: para.textColor }}
//                           dangerouslySetInnerHTML={{
//                             __html: lexicalToHtml(para.text),
//                           }}
//                         />
//                       )
//                     )}
//                 </div>
//                 <div
//                   className={`item wow ${
//                     heroSection.rightContent?.animation || "fadeInRight"
//                   }`}
//                   data-api-key="content_right"
//                 >
//                   {heroRightImage && (
//                     <p>
//                       <img
//                         alt={
//                           heroSection.rightContent.alt ||
//                           "woman handing clipboard back to nurse"
//                         }
//                         src={heroRightImage}
//                       />
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "enroll":
//         if (!enrollSection || !enrollSection.show) return null;
//         return (
//           <div
//             className={
//               enrollSection.containerClass || "mod_column viewport container"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: enrollSection.backgroundColor,
//               color: enrollSection.textColor,
//             }}
//           >
//             <div className="row " data-api-key="content">
//               <div className="item">
//                 {enrollSection.heading && (
//                   <h1 style={{ color: enrollSection.headingColor }}>
//                     {enrollSection.heading}
//                   </h1>
//                 )}
//                 {enrollSection.steps && enrollSection.steps.length > 0 && (
//                   <ul>
//                     {enrollSection.steps.map((step: any, idx: number) => (
//                       <li key={idx} style={{ color: step.textColor }}>
//                         <strong>{step.boldText}</strong>
//                         {step.description && (
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: lexicalToHtml(step.description),
//                             }}
//                           />
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       case "form":
//         if (!formSection || !formSection.show) return null;
//         return (
//           <div
//             className={formSection.containerClass || "mod_contact_form dark"}
//             data-s3-module=""
//             style={{
//               backgroundColor: formSection.backgroundColor,
//               color: formSection.textColor,
//             }}
//           >
//             <div className="wrapper">
//               <div className="row">
//                 {formSection.heading && (
//                   <h2
//                     data-api-key="title"
//                     style={{ color: formSection.headingColor }}
//                   >
//                     {formSection.heading}
//                   </h2>
//                 )}

//                 {formMessage && (
//                   <div
//                     style={{
//                       padding: "15px",
//                       margin: "20px 0",
//                       backgroundColor: formMessage.includes("error")
//                         ? "#fee"
//                         : "#efe",
//                       border: `1px solid ${
//                         formMessage.includes("error") ? "#fcc" : "#cfc"
//                       }`,
//                       borderRadius: "4px",
//                       textAlign: "center",
//                       color: formMessage.includes("error") ? "#c00" : "#060",
//                     }}
//                   >
//                     {formMessage}
//                   </div>
//                 )}

//                 <div className="partial_form" data-s3-partial="">
//                   <form
//                     id={formSection.formId || "form_training"}
//                     className="s3-form"
//                     method="post"
//                     action={formSection.formAction || "/validate/"}
//                     onSubmit={handleSubmit}
//                     data-abide=""
//                     encType="multipart/form-data"
//                     noValidate
//                   >
//                     <div className="fields">
//                       {formSection.formFields &&
//                         formSection.formFields.map(
//                           (field: any, idx: number) => {
//                             const fieldKey = `field-${idx}`;

//                             // Text, Email, Tel inputs
//                             if (
//                               ["text", "email", "tel"].includes(field.fieldType)
//                             ) {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div className={`field ${field.fieldType}`}>
//                                     <label htmlFor={field.fieldId}>
//                                       {field.label}
//                                     </label>
//                                     {field.required && (
//                                       <small>This field is required.</small>
//                                     )}
//                                     <input
//                                       type={field.fieldType}
//                                       size={50}
//                                       name={field.fieldName}
//                                       id={field.fieldId}
//                                       defaultValue=""
//                                       required={field.required}
//                                       aria-required={
//                                         field.required ? "true" : "false"
//                                       }
//                                       placeholder={field.placeholder || ""}
//                                     />
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             // Select dropdown
//                             if (field.fieldType === "select") {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div className="field select">
//                                     <label htmlFor={field.fieldId}>
//                                       {field.label}
//                                     </label>
//                                     {field.required && (
//                                       <small>This field is required.</small>
//                                     )}
//                                     <select
//                                       name={field.fieldName}
//                                       id={field.fieldId}
//                                       required={field.required}
//                                       aria-required={
//                                         field.required ? "true" : "false"
//                                       }
//                                     >
//                                       {field.selectOptions &&
//                                         field.selectOptions.map(
//                                           (option: any, optIdx: number) => (
//                                             <option
//                                               key={optIdx}
//                                               value={option.value}
//                                               disabled={option.disabled}
//                                             >
//                                               {option.label}
//                                             </option>
//                                           )
//                                         )}
//                                     </select>
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             // Textarea
//                             if (field.fieldType === "textarea") {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div className="field textarea">
//                                     <label htmlFor={field.fieldId}>
//                                       {field.label}
//                                     </label>
//                                     <textarea
//                                       rows={field.rows || 6}
//                                       cols={field.cols || 48}
//                                       defaultValue=""
//                                       name={field.fieldName}
//                                       id={field.fieldId}
//                                       placeholder={field.placeholder || ""}
//                                     />
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             // Checkbox
//                             if (field.fieldType === "checkbox") {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div
//                                     className={`field checkbox ${
//                                       field.fieldClass || ""
//                                     }`}
//                                   >
//                                     {field.required && (
//                                       <small>This field is required.</small>
//                                     )}
//                                     <div className="field-item checkbox-item">
//                                       <input
//                                         type="checkbox"
//                                         id={field.fieldId}
//                                         name={field.fieldName}
//                                         value={field.checkboxValue || "Yes"}
//                                         required={field.required}
//                                         aria-required={
//                                           field.required ? "true" : "false"
//                                         }
//                                       />
//                                       <label htmlFor={field.fieldId}>
//                                         {field.label}
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             return null;
//                           }
//                         )}

//                       {/* Disclaimer Text */}
//                       {formSection.disclaimerText && (
//                         <div className="field-row col1">
//                           <div
//                             className="section-label follow-up"
//                             style={{ color: formSection.disclaimerTextColor }}
//                           >
//                             <div
//                               dangerouslySetInnerHTML={{
//                                 __html: lexicalToHtml(
//                                   formSection.disclaimerText
//                                 ),
//                               }}
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* reCAPTCHA */}
//                     {formSection.enableRecaptcha && (
//                       <div>
//                         <input
//                           id={`${formSection.formId}_recaptchaV3`}
//                           name="g-recaptcha-response-v3"
//                           type="hidden"
//                         />
//                         <div
//                           id={`${formSection.formId}_recaptchaV2`}
//                           data-recaptcha=""
//                         ></div>
//                         <div
//                           id={`${formSection.formId}_recaptcha`}
//                           data-recaptcha-error=""
//                         >
//                           <small>This field is required.</small>
//                         </div>
//                       </div>
//                     )}

//                     {/* Hidden fields */}
//                     <input
//                       type="hidden"
//                       name="form_id"
//                       id="form_id"
//                       value="training"
//                     />
//                     <input name="human_check" type="hidden" />

//                     {/* Submit button */}
//                     <div className="submit-holder">
//                       <button
//                         type="submit"
//                         id={`submit_${formSection.formId || "training"}`}
//                         value="submitted"
//                         name="submit"
//                         className={
//                           formSection.submitButton?.className || "submit btn"
//                         }
//                         tabIndex={0}
//                         disabled={formSubmitting}
//                         style={{
//                           backgroundColor:
//                             formSection.submitButton?.backgroundColor,
//                           color: formSection.submitButton?.textColor,
//                         }}
//                       >
//                         {formSubmitting
//                           ? "Submitting..."
//                           : formSection.submitButton?.text || "Submit"}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "faq":
//         if (!faqSection || !faqSection.show) return null;
//         const faqBgImages = faqSection.backgroundImage
//           ? getResponsiveImageUrls(faqSection.backgroundImage)
//           : null;

//         return (
//           <div
//             className={
//               faqSection.containerClass ||
//               "mod_box_grid viewport container option-3 single bkg-image wider"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: faqSection.backgroundColor,
//               color: faqSection.textColor,
//             }}
//           >
//             <div className="row">
//               {faqSection.heading && (
//                 <div className="content-before">
//                   <h1 style={{ color: faqSection.headingColor }}>
//                     {faqSection.heading}
//                   </h1>
//                 </div>
//               )}
//               <div className="boxes wider">
//                 {faqSection.faqs &&
//                   faqSection.faqs.map((faq: any, idx: number) => (
//                     <div
//                       key={idx}
//                       className={`box wow ${faq.animation || "fadeInLeft"}`}
//                       style={{
//                         backgroundColor: faq.boxBackgroundColor,
//                         color: faq.answerColor,
//                       }}
//                     >
//                       {faq.question && (
//                         <h5>
//                           <strong style={{ color: faq.questionColor }}>
//                             {faq.question}
//                           </strong>
//                         </h5>
//                       )}
//                       {faq.answer && (
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: lexicalToHtml(faq.answer),
//                           }}
//                         />
//                       )}
//                     </div>
//                   ))}
//               </div>
//             </div>
//             {faqBgImages && (
//               <picture className="background">
//                 <source media="(max-width:420px)" srcSet={faqBgImages.mobile} />
//                 <source media="(max-width:800px)" srcSet={faqBgImages.tablet} />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={faqBgImages.desktop}
//                 />
//                 <source srcSet={faqBgImages.large} />
//                 <img
//                   src={faqBgImages.large}
//                   loading="lazy"
//                   alt={faqBgImages.alt || ""}
//                   draggable="false"
//                 />
//               </picture>
//             )}
//           </div>
//         );

//       case "finalCta":
//         if (!finalCtaSection || !finalCtaSection.show) return null;
//         return (
//           <div
//             className={
//               finalCtaSection.containerClass || "mod_column viewport container"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: finalCtaSection.backgroundColor,
//               color: finalCtaSection.textColor,
//             }}
//           >
//             <div className="row " data-api-key="content">
//               <div className="item">
//                 {finalCtaSection.centerAlign ? (
//                   <center>
//                     {finalCtaSection.ctaButton?.show && (
//                       <p>
//                         <a
//                           href={finalCtaSection.ctaButton.url || "#"}
//                           target={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "_blank"
//                               : "_self"
//                           }
//                           className={
//                             finalCtaSection.ctaButton.className || "btn"
//                           }
//                           rel={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "noopener"
//                               : undefined
//                           }
//                           style={{
//                             backgroundColor:
//                               finalCtaSection.ctaButton.backgroundColor,
//                             color: finalCtaSection.ctaButton.textColor,
//                           }}
//                           onMouseOver={(e) =>
//                             finalCtaSection.ctaButton?.hoverBackgroundColor &&
//                             (e.currentTarget.style.backgroundColor =
//                               finalCtaSection.ctaButton.hoverBackgroundColor)
//                           }
//                           onMouseOut={(e) =>
//                             finalCtaSection.ctaButton?.backgroundColor &&
//                             (e.currentTarget.style.backgroundColor =
//                               finalCtaSection.ctaButton.backgroundColor)
//                           }
//                         >
//                           {finalCtaSection.ctaButton.text ||
//                             "Apply Now & Secure Your Spot"}
//                         </a>
//                       </p>
//                     )}
//                   </center>
//                 ) : (
//                   <>
//                     {finalCtaSection.ctaButton?.show && (
//                       <p>
//                         <a
//                           href={finalCtaSection.ctaButton.url || "#"}
//                           target={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "_blank"
//                               : "_self"
//                           }
//                           className={
//                             finalCtaSection.ctaButton.className || "btn"
//                           }
//                           rel={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "noopener"
//                               : undefined
//                           }
//                           style={{
//                             backgroundColor:
//                               finalCtaSection.ctaButton.backgroundColor,
//                             color: finalCtaSection.ctaButton.textColor,
//                           }}
//                         >
//                           {finalCtaSection.ctaButton.text ||
//                             "Apply Now & Secure Your Spot"}
//                         </a>
//                       </p>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {sectionOrder &&
//         sectionOrder.map((item, index) => (
//           <React.Fragment key={index}>
//             {renderSection(item.section)}
//           </React.Fragment>
//         ))}
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default TrainingApplication;



// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchTrainingApplicationPageData,
//   submitTrainingForm,
//   lexicalToHtml,
//   getImageUrl,
//   getResponsiveImageUrls,
// } from "@/lib/api/traning/fetchTrainingPageComponent";

// interface TrainingApplicationData {
//   componentName?: string;
//   heroSection?: any;
//   enrollSection?: any;
//   formSection?: any;
//   faqSection?: any;
//   finalCtaSection?: any;
//   sectionOrder?: Array<{ section: string }>;
//   globalStyles?: any;
// }

// const TrainingApplication: React.FC = () => {
//   const [pageData, setPageData] = useState<TrainingApplicationData | null>(
//     null
//   );
//   const [loading, setLoading] = useState(true);
//   const [formSubmitting, setFormSubmitting] = useState(false);
//   const [formMessage, setFormMessage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchTrainingApplicationPageData();
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching Training Application page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormSubmitting(true);
//     setFormMessage("");

//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);

//     try {
//       const result = await submitTrainingForm(data);

//       if (result.success) {
//         setFormMessage(
//           "Thank you! Your application has been submitted successfully."
//         );
//         form.reset();

//         // Redirect after success
//         const redirectUrl =
//           pageData?.formSection?.redirectUrl || "/contact/thank-you/";
//         setTimeout(() => {
//           window.location.href = redirectUrl;
//         }, 2000);
//       } else {
//         setFormMessage(
//           result.message ||
//             "There was an error submitting your application. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setFormMessage(
//         "There was an error submitting your application. Please try again."
//       );
//     } finally {
//       setFormSubmitting(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   const {
//     heroSection,
//     enrollSection,
//     formSection,
//     faqSection,
//     finalCtaSection,
//     sectionOrder,
//   } = pageData;

//   const renderSection = (section: string) => {
//     switch (section) {
//       case "hero":
//         if (!heroSection || !heroSection.show) return null;
//         const heroRightImage = heroSection.rightContent?.image
//           ? getImageUrl(heroSection.rightContent.image)
//           : null;

//         return (
//           <div
//             className={
//               heroSection.containerClass || "mod_columns_two viewport container"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: heroSection.backgroundColor,
//               color: heroSection.textColor,
//             }}
//           >
//             <div className="row ">
//               <div
//                 className={`content ${
//                   heroSection.verticalAlign ? "vertical-align" : ""
//                 }`}
//               >
//                 <div
//                   className={`item wow ${
//                     heroSection.leftContent?.animation || "fadeInLeft"
//                   }`}
//                   data-api-key="content_left"
//                 >
//                   {heroSection.leftContent?.heading && (
//                     <h1 style={{ color: heroSection.leftContent.headingColor }}>
//                       {heroSection.leftContent.heading}
//                     </h1>
//                   )}
//                   {heroSection.leftContent?.paragraphs &&
//                     heroSection.leftContent.paragraphs.map(
//                       (para: any, idx: number) => (
//                         <div
//                           key={idx}
//                           style={{ color: para.textColor }}
//                           dangerouslySetInnerHTML={{
//                             __html: lexicalToHtml(para.text),
//                           }}
//                         />
//                       )
//                     )}
//                 </div>
//                 <div
//                   className={`item wow ${
//                     heroSection.rightContent?.animation || "fadeInRight"
//                   }`}
//                   data-api-key="content_right"
//                 >
//                   {heroRightImage && (
//                     <p>
//                       <img
//                         alt={
//                           heroSection.rightContent.alt ||
//                           "woman handing clipboard back to nurse"
//                         }
//                         src={heroRightImage}
//                       />
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "enroll":
//         if (!enrollSection || !enrollSection.show) return null;
//         return (
//           <div
//             className={
//               enrollSection.containerClass || "mod_column viewport container"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: enrollSection.backgroundColor,
//               color: enrollSection.textColor,
//             }}
//           >
//             <div className="row " data-api-key="content">
//               <div className="item">
//                 {enrollSection.heading && (
//                   <h1 style={{ color: enrollSection.headingColor }}>
//                     {enrollSection.heading}
//                   </h1>
//                 )}
//                 {enrollSection.steps && enrollSection.steps.length > 0 && (
//                   <ul>
//                     {enrollSection.steps.map((step: any, idx: number) => (
//                       <li key={idx} style={{ color: step.textColor }}>
//                         <strong>{step.boldText}</strong>
//                         {step.description && (
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: lexicalToHtml(step.description),
//                             }}
//                           />
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       case "form":
//         if (!formSection || !formSection.show) return null;
//         return (
//           <div
//             className={formSection.containerClass || "mod_contact_form dark"}
//             data-s3-module=""
//             style={{
//               backgroundColor: formSection.backgroundColor,
//               color: formSection.textColor,
//             }}
//           >
//             <div className="wrapper">
//               <div className="row">
//                 {formSection.heading && (
//                   <h2
//                     data-api-key="title"
//                     style={{ color: formSection.headingColor }}
//                   >
//                     {formSection.heading}
//                   </h2>
//                 )}

//                 {formMessage && (
//                   <div
//                     style={{
//                       padding: "15px",
//                       margin: "20px 0",
//                       backgroundColor: formMessage.includes("error")
//                         ? "#fee"
//                         : "#efe",
//                       border: `1px solid ${
//                         formMessage.includes("error") ? "#fcc" : "#cfc"
//                       }`,
//                       borderRadius: "4px",
//                       textAlign: "center",
//                       color: formMessage.includes("error") ? "#c00" : "#060",
//                     }}
//                   >
//                     {formMessage}
//                   </div>
//                 )}

//                 <div className="partial_form" data-s3-partial="">
//                   <form
//                     id={formSection.formId || "form_training"}
//                     className="s3-form"
//                     method="post"
//                     action={formSection.formAction || "/validate/"}
//                     onSubmit={handleSubmit}
//                     data-abide=""
//                     encType="multipart/form-data"
//                     noValidate
//                   >
//                     <div className="fields">
//                       {formSection.formFields &&
//                         formSection.formFields.map(
//                           (field: any, idx: number) => {
//                             const fieldKey = `field-${idx}`;

//                             // Text, Email, Tel inputs
//                             if (
//                               ["text", "email", "tel"].includes(field.fieldType)
//                             ) {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div className={`field ${field.fieldType}`}>
//                                     <label htmlFor={field.fieldId}>
//                                       {field.label}
//                                     </label>
//                                     {field.required && (
//                                       <small>This field is required.</small>
//                                     )}
//                                     <input
//                                       type={field.fieldType}
//                                       size={50}
//                                       name={field.fieldName}
//                                       id={field.fieldId}
//                                       defaultValue=""
//                                       required={field.required}
//                                       aria-required={
//                                         field.required ? "true" : "false"
//                                       }
//                                       placeholder={field.placeholder || ""}
//                                     />
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             // Select dropdown
//                             if (field.fieldType === "select") {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div className="field select">
//                                     <label htmlFor={field.fieldId}>
//                                       {field.label}
//                                     </label>
//                                     {field.required && (
//                                       <small>This field is required.</small>
//                                     )}
//                                     <select
//                                       name={field.fieldName}
//                                       id={field.fieldId}
//                                       required={field.required}
//                                       aria-required={
//                                         field.required ? "true" : "false"
//                                       }
//                                     >
//                                       {field.selectOptions &&
//                                         field.selectOptions.map(
//                                           (option: any, optIdx: number) => (
//                                             <option
//                                               key={optIdx}
//                                               value={option.value}
//                                               disabled={option.disabled}
//                                             >
//                                               {option.label}
//                                             </option>
//                                           )
//                                         )}
//                                     </select>
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             // Textarea
//                             if (field.fieldType === "textarea") {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div className="field textarea">
//                                     <label htmlFor={field.fieldId}>
//                                       {field.label}
//                                     </label>
//                                     <textarea
//                                       rows={field.rows || 6}
//                                       cols={field.cols || 48}
//                                       defaultValue=""
//                                       name={field.fieldName}
//                                       id={field.fieldId}
//                                       placeholder={field.placeholder || ""}
//                                     />
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             // Checkbox
//                             if (field.fieldType === "checkbox") {
//                               return (
//                                 <div key={fieldKey} className="field-row col1">
//                                   <div
//                                     className={`field checkbox ${
//                                       field.fieldClass || ""
//                                     }`}
//                                   >
//                                     {field.required && (
//                                       <small>This field is required.</small>
//                                     )}
//                                     <div className="field-item checkbox-item">
//                                       <input
//                                         type="checkbox"
//                                         id={field.fieldId}
//                                         name={field.fieldName}
//                                         value={field.checkboxValue || "Yes"}
//                                         required={field.required}
//                                         aria-required={
//                                           field.required ? "true" : "false"
//                                         }
//                                       />
//                                       <label htmlFor={field.fieldId}>
//                                         {field.label}
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             return null;
//                           }
//                         )}

//                       {/* Disclaimer Text */}
//                       {formSection.disclaimerText && (
//                         <div className="field-row col1">
//                           <div
//                             className="section-label follow-up"
//                             style={{ color: formSection.disclaimerTextColor }}
//                           >
//                             <div
//                               dangerouslySetInnerHTML={{
//                                 __html: lexicalToHtml(
//                                   formSection.disclaimerText
//                                 ),
//                               }}
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* reCAPTCHA */}
//                     {formSection.enableRecaptcha && (
//                       <div>
//                         <input
//                           id={`${formSection.formId}_recaptchaV3`}
//                           name="g-recaptcha-response-v3"
//                           type="hidden"
//                         />
//                         <div
//                           id={`${formSection.formId}_recaptchaV2`}
//                           data-recaptcha=""
//                         ></div>
//                         <div
//                           id={`${formSection.formId}_recaptcha`}
//                           data-recaptcha-error=""
//                         >
//                           <small>This field is required.</small>
//                         </div>
//                       </div>
//                     )}

//                     {/* Hidden fields */}
//                     <input
//                       type="hidden"
//                       name="form_id"
//                       id="form_id"
//                       value="training"
//                     />
//                     <input name="human_check" type="hidden" />

//                     {/* Submit button */}
//                     <div className="submit-holder">
//                       <div
//                         className="btn validate disabled"
//                         id={`validate_${formSection.formId || "training"}`}
//                         tabIndex={0}
//                       >
//                         {formSection.submitButton?.text || "Submit"}
//                       </div>
//                       <button
//                         type="submit"
//                         id={`submit_${formSection.formId || "training"}`}
//                         value="submitted"
//                         name="submit"
//                         className={
//                           formSection.submitButton?.className || "submit btn"
//                         }
//                         tabIndex={0}
//                         disabled={formSubmitting}
//                         style={{
//                           backgroundColor:
//                             formSection.submitButton?.backgroundColor,
//                           color: formSection.submitButton?.textColor,
//                         }}
//                       >
//                         {formSubmitting
//                           ? "Submitting..."
//                           : formSection.submitButton?.text || "Submit"}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "faq":
//         if (!faqSection || !faqSection.show) return null;
//         const faqBgImages = faqSection.backgroundImage
//           ? getResponsiveImageUrls(faqSection.backgroundImage)
//           : null;

//         return (
//           <div
//             className={
//               faqSection.containerClass ||
//               "mod_box_grid viewport container option-3 single bkg-image wider"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: faqSection.backgroundColor,
//               color: faqSection.textColor,
//             }}
//           >
//             <div className="row">
//               {faqSection.heading && (
//                 <div className="content-before">
//                   <h1 style={{ color: faqSection.headingColor }}>
//                     {faqSection.heading}
//                   </h1>
//                 </div>
//               )}
//               <div className="boxes wider">
//                 {faqSection.faqs &&
//                   faqSection.faqs.map((faq: any, idx: number) => (
//                     <div
//                       key={idx}
//                       className={`box wow ${faq.animation || "fadeInLeft"}`}
//                       style={{
//                         backgroundColor: faq.boxBackgroundColor,
//                         color: faq.answerColor,
//                       }}
//                     >
//                       {faq.question && (
//                         <h5>
//                           <strong style={{ color: faq.questionColor }}>
//                             {faq.question}
//                           </strong>
//                         </h5>
//                       )}
//                       {faq.answer && (
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: lexicalToHtml(faq.answer),
//                           }}
//                         />
//                       )}
//                     </div>
//                   ))}
//               </div>
//             </div>
//             {faqBgImages && (
//               <picture className="background">
//                 <source media="(max-width:420px)" srcSet={faqBgImages.mobile} />
//                 <source media="(max-width:800px)" srcSet={faqBgImages.tablet} />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={faqBgImages.desktop}
//                 />
//                 <source srcSet={faqBgImages.large} />
//                 <img
//                   src={faqBgImages.large}
//                   loading="lazy"
//                   alt={faqBgImages.alt || ""}
//                   draggable="false"
//                 />
//               </picture>
//             )}
//           </div>
//         );

//       case "finalCta":
//         if (!finalCtaSection || !finalCtaSection.show) return null;
//         return (
//           <div
//             className={
//               finalCtaSection.containerClass || "mod_column viewport container"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: finalCtaSection.backgroundColor,
//               color: finalCtaSection.textColor,
//             }}
//           >
//             <div className="row " data-api-key="content">
//               <div className="item">
//                 {finalCtaSection.centerAlign ? (
//                   <center>
//                     {finalCtaSection.ctaButton?.show && (
//                       <p>
//                         <a
//                           href={finalCtaSection.ctaButton.url || "#"}
//                           target={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "_blank"
//                               : "_self"
//                           }
//                           className={
//                             finalCtaSection.ctaButton.className || "btn"
//                           }
//                           rel={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "noopener"
//                               : undefined
//                           }
//                           style={{
//                             backgroundColor:
//                               finalCtaSection.ctaButton.backgroundColor,
//                             color: finalCtaSection.ctaButton.textColor,
//                           }}
//                           onMouseOver={(e) =>
//                             finalCtaSection.ctaButton?.hoverBackgroundColor &&
//                             (e.currentTarget.style.backgroundColor =
//                               finalCtaSection.ctaButton.hoverBackgroundColor)
//                           }
//                           onMouseOut={(e) =>
//                             finalCtaSection.ctaButton?.backgroundColor &&
//                             (e.currentTarget.style.backgroundColor =
//                               finalCtaSection.ctaButton.backgroundColor)
//                           }
//                         >
//                           {finalCtaSection.ctaButton.text ||
//                             "Apply Now & Secure Your Spot"}
//                         </a>
//                       </p>
//                     )}
//                   </center>
//                 ) : (
//                   <>
//                     {finalCtaSection.ctaButton?.show && (
//                       <p>
//                         <a
//                           href={finalCtaSection.ctaButton.url || "#"}
//                           target={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "_blank"
//                               : "_self"
//                           }
//                           className={
//                             finalCtaSection.ctaButton.className || "btn"
//                           }
//                           rel={
//                             finalCtaSection.ctaButton.openInNewTab
//                               ? "noopener"
//                               : undefined
//                           }
//                           style={{
//                             backgroundColor:
//                               finalCtaSection.ctaButton.backgroundColor,
//                             color: finalCtaSection.ctaButton.textColor,
//                           }}
//                         >
//                           {finalCtaSection.ctaButton.text ||
//                             "Apply Now & Secure Your Spot"}
//                         </a>
//                       </p>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {sectionOrder &&
//         sectionOrder.map((item, index) => (
//           <React.Fragment key={index}>
//             {renderSection(item.section)}
//           </React.Fragment>
//         ))}
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default TrainingApplication;