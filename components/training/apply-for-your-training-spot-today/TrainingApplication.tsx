// // import React from "react";

// // const TrainingApplication: React.FC = () => {
// //   return (
// //     <main id="main">
// //       {/* Page Layout */}
// //       {/* Intro Module */}
// //       <div
// //         className="mod_intro container viewport option-1 wow fadeInUp"
// //         data-s3-module=""
// //       >
// //         <div className="row ">
// //           <picture className="logo">
// //             <img
// //               src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
// //               width={58}
// //               height={64}
// //               loading="lazy"
// //               alt="Goldfingers aesthetic logo"
// //               draggable="false"
// //               data-api-key="logo"
// //             />
// //           </picture>
// //           <div className="inner" data-api-key="content">
// //             <center>
// //               <h1>Apply for Your Training Spot Today</h1>
// //             </center>
// //           </div>
// //           <div className="bullet-points">
// //             <center>
// //               <p>
// //                 <span style={{ fontWeight: 400 }}>
// //                   Begin your journey with the #1 aesthetics training program in
// //                   Florida. Fill out the form below to apply for hands-on
// //                   instruction, expert guidance, and AMI certification.
// //                 </span>
// //               </p>
// //             </center>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Contact Form Module */}
// //       <div className="mod_contact_form" data-s3-module="">
// //         <div className="wrapper">
// //           <div className="row">
// //             <h2 data-api-key="title">Apply Now</h2>
// //             <div className="partial_form" data-s3-partial="">
// //               <form
// //                 id="form_training"
// //                 className="s3-form"
// //                 method="post"
// //                 action="/validate/"
// //                 data-abide=""
// //                 encType="multipart/form-data"
// //                 noValidate
// //               >
// //                 <div className="fields">
// //                   <div className="field-row col1 hidden-row">
// //                     <div className="field hidden">
// //                       <input
// //                         type="hidden"
// //                         name="subject"
// //                         id="training_subject"
// //                         value="Training Sign Up Form"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1 hidden-row">
// //                     <div className="field hidden">
// //                       <input
// //                         type="hidden"
// //                         name="redirect"
// //                         id="training_redirect"
// //                         value="/contact/thank-you/"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field text">
// //                       <label htmlFor="training_first_name">First Name*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="text"
// //                         size={50}
// //                         name="first_name"
// //                         id="training_first_name"
// //                         value=""
// //                         required
// //                         aria-required="true"
// //                         placeholder="First Name*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field text">
// //                       <label htmlFor="training_last_name">Last Name*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="text"
// //                         size={50}
// //                         name="last_name"
// //                         id="training_last_name"
// //                         value=""
// //                         required
// //                         aria-required="true"
// //                         placeholder="Last Name*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field tel">
// //                       <label htmlFor="training_phone">Phone*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="tel"
// //                         size={50}
// //                         name="phone"
// //                         id="training_phone"
// //                         value=""
// //                         required
// //                         aria-required="true"
// //                         placeholder="Phone*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field email">
// //                       <label htmlFor="training_email">Email*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="email"
// //                         size={50}
// //                         name="email"
// //                         id="training_email"
// //                         value=""
// //                         required
// //                         aria-required="true"
// //                         placeholder="Email*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field text">
// //                       <label htmlFor="training_preferred_training_month">
// //                         Preferred Training Month
// //                       </label>
// //                       <input
// //                         type="text"
// //                         size={50}
// //                         name="preferred_training_month"
// //                         id="training_preferred_training_month"
// //                         value=""
// //                         placeholder="Preferred Training Month"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field select">
// //                       <label htmlFor="training_preferred_training_program">
// //                         Preferred Training Program*
// //                       </label>
// //                       <small>This field is required.</small>
// //                       <select
// //                         name="preferred_training_program"
// //                         id="training_preferred_training_program"
// //                         required
// //                         aria-required="true"
// //                       >
// //                         <option value="" selected disabled>
// //                           Preferred Training Program*
// //                         </option>
// //                         <option value="Foundational">Foundational</option>
// //                         <option value="Comprehensive">Comprehensive</option>
// //                       </select>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field textarea">
// //                       <label htmlFor="training_questions_or_comments">
// //                         Questions or Comments
// //                       </label>
// //                       <textarea
// //                         rows={6}
// //                         cols={48}
// //                         defaultValue=""
// //                         name="questions_or_comments"
// //                         id="training_questions_or_comments"
// //                         placeholder="Questions or Comments"
// //                       ></textarea>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field checkbox opt-in follow-up">
// //                       <div className="field-item checkbox-item">
// //                         <input
// //                           type="checkbox"
// //                           id="training_optin_for_sms_texting"
// //                           name="optin_for_sms_texting"
// //                           value="Yes"
// //                         />
// //                         <label htmlFor="training_optin_for_sms_texting">
// //                           Opt-In For SMS Texting
// //                         </label>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field checkbox follow-up">
// //                       <small>This field is required.</small>
// //                       <div className="field-item checkbox-item">
// //                         <input
// //                           type="checkbox"
// //                           id="training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
// //                           name="by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
// //                           value="Yes"
// //                           required
// //                           aria-required="true"
// //                         />
// //                         <label htmlFor="training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text">
// //                           By completing this form, you are giving us permission
// //                           to follow-up by phone, email or text.
// //                         </label>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="section-label follow-up">
// //                       <p>
// //                         Messaging frequency may vary. Message and data rates may
// //                         apply. You can opt out any time by texting STOP. For
// //                         assistance, text HELP or visit our website at{" "}
// //                         <a href="https://goldfingersaesthetics.com">
// //                           Goldfingers Aesthetics
// //                         </a>
// //                         . Visit{" "}
// //                         <a href="https://goldfingersaesthetics.com/privacy-policy">
// //                           Privacy Policy
// //                         </a>
// //                         and{" "}
// //                         <a href="https://www.goldfingersaesthetics.com/terms-and-conditions/">
// //                           Terms and Conditions
// //                         </a>
// //                         .
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <input
// //                     id="training_recaptchaV3"
// //                     name="g-recaptcha-response-v3"
// //                     type="hidden"
// //                   />
// //                   <div id="training_recaptchaV2" data-recaptcha=""></div>
// //                   <div id="training_recaptcha" data-recaptcha-error="">
// //                     <small>This field is required.</small>
// //                   </div>
// //                 </div>
// //                 <input
// //                   type="hidden"
// //                   name="form_id"
// //                   id="form_id"
// //                   value="training"
// //                 />
// //                 <input name="human_check" type="hidden" />
// //                 <div className="submit-holder">
// //                   <div
// //                     className="btn validate disabled"
// //                     id="validate_training"
// //                     tabIndex={0}
// //                   >
// //                     Submit
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     id="submit_training"
// //                     value="submitted"
// //                     name="submit"
// //                     className="submit btn"
// //                     tabIndex={0}
// //                   >
// //                     Submit
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630 2x"
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200 2x"
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100 2x"
// //           />
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// //           />
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// //             loading="lazy"
// //             data-lazyload="img"
// //             width={2200}
// //             height={1160}
// //             alt="Image of a bridge with an overlay"
// //             draggable="false"
// //             data-api-key="image"
// //           />
// //         </picture>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default TrainingApplication;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   fetchTrainingApplicationSimplePageData,
//   submitTrainingFormSimple,
//   lexicalToHtml,
//   getImageUrl,
//   getResponsiveImageUrls,
//   getPlaceholderImage,
// } from "@/lib/api/traning/fetchTrainingApplicationSimple";

// interface TrainingApplicationSimpleData {
//   componentName?: string;
//   introSection?: any;
//   formSection?: any;
//   sectionOrder?: Array<{ section: string }>;
//   globalStyles?: any;
// }

// const TrainingApplicationSimple: React.FC = () => {
//   const [pageData, setPageData] =
//     useState<TrainingApplicationSimpleData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [formSubmitting, setFormSubmitting] = useState(false);
//   const [formMessage, setFormMessage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchTrainingApplicationSimplePageData();
//         setPageData(data);
//       } catch (error) {
//         console.error(
//           "Error fetching Training Application Simple page data:",
//           error
//         );
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
//       const result = await submitTrainingFormSimple(data);

//       if (result.success) {
//         setFormMessage(
//           "Thank you! Your application has been submitted successfully."
//         );
//         form.reset();

//         // Redirect after success
//         const redirectUrl =
//           pageData?.formSection?.formSettings?.redirectUrl ||
//           "/contact/thank-you/";
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

//   const { introSection, formSection, sectionOrder } = pageData;

//   const renderSection = (section: string) => {
//     switch (section) {
//       case "intro":
//         if (!introSection || !introSection.show) return null;
//         const logoImage = introSection.logo?.image
//           ? getImageUrl(introSection.logo.image)
//           : null;
//         const HeadingTag = introSection.headingTag || "h1";

//         return (
//           <div
//             className={
//               introSection.containerClass ||
//               "mod_intro container viewport option-1 wow fadeInUp"
//             }
//             data-s3-module=""
//             style={{
//               backgroundColor: introSection.backgroundColor,
//               color: introSection.textColor,
//             }}
//           >
//             <div className="row ">
//               {introSection.logo?.show && logoImage && (
//                 <picture className="logo">
//                   <img
//                     src={logoImage}
//                     width={introSection.logo.width || 58}
//                     height={introSection.logo.height || 64}
//                     loading={introSection.logo.loading || "lazy"}
//                     alt={introSection.logo.alt || "Goldfingers aesthetic logo"}
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}

//               <div className="inner" data-api-key="content">
//                 {introSection.centerHeading ? (
//                   <center>
//                     <HeadingTag style={{ color: introSection.headingColor }}>
//                       {introSection.heading}
//                     </HeadingTag>
//                   </center>
//                 ) : (
//                   <HeadingTag style={{ color: introSection.headingColor }}>
//                     {introSection.heading}
//                   </HeadingTag>
//                 )}
//               </div>

//               {introSection.bulletPoints &&
//                 introSection.bulletPoints.length > 0 && (
//                   <div className="bullet-points">
//                     {introSection.bulletPoints.map(
//                       (bullet: any, idx: number) => (
//                         <React.Fragment key={idx}>
//                           {bullet.centerAlign ? (
//                             <center>
//                               <div
//                                 style={{
//                                   color: bullet.textColor,
//                                   fontWeight: bullet.fontWeight || "400",
//                                 }}
//                                 dangerouslySetInnerHTML={{
//                                   __html: lexicalToHtml(bullet.content),
//                                 }}
//                               />
//                             </center>
//                           ) : (
//                             <div
//                               style={{
//                                 color: bullet.textColor,
//                                 fontWeight: bullet.fontWeight || "400",
//                               }}
//                               dangerouslySetInnerHTML={{
//                                 __html: lexicalToHtml(bullet.content),
//                               }}
//                             />
//                           )}
//                         </React.Fragment>
//                       )
//                     )}
//                   </div>
//                 )}
//             </div>
//           </div>
//         );

//       case "form":
//         if (!formSection || !formSection.show) return null;
//         const formBgImages = formSection.backgroundImage?.show
//           ? getResponsiveImageUrls(formSection.backgroundImage)
//           : null;
//         const FormHeadingTag = formSection.headingTag || "h2";
//         const placeholder = getPlaceholderImage();

//         return (
//           <div
//             className={formSection.containerClass || "mod_contact_form"}
//             data-s3-module=""
//             style={{
//               backgroundColor: formSection.backgroundColor,
//               color: formSection.textColor,
//             }}
//           >
//             <div className="wrapper">
//               <div className="row">
//                 {formSection.heading && (
//                   <FormHeadingTag
//                     data-api-key="title"
//                     style={{ color: formSection.headingColor }}
//                   >
//                     {formSection.heading}
//                   </FormHeadingTag>
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
//                     id={formSection.formSettings?.formId || "form_training"}
//                     className={formSection.formSettings?.formClass || "s3-form"}
//                     method={formSection.formSettings?.method || "post"}
//                     action={formSection.formSettings?.action || "/validate/"}
//                     onSubmit={handleSubmit}
//                     data-abide=""
//                     encType={
//                       formSection.formSettings?.encType || "multipart/form-data"
//                     }
//                     noValidate
//                   >
//                     <div className="fields">
//                       {/* Hidden fields for subject and redirect */}
//                       <div className="field-row col1 hidden-row">
//                         <div className="field hidden">
//                           <input
//                             type="hidden"
//                             name="subject"
//                             id={`${
//                               formSection.formSettings?.formId || "training"
//                             }_subject`}
//                             value={
//                               formSection.formSettings?.subject ||
//                               "Training Sign Up Form"
//                             }
//                           />
//                         </div>
//                       </div>
//                       <div className="field-row col1 hidden-row">
//                         <div className="field hidden">
//                           <input
//                             type="hidden"
//                             name="redirect"
//                             id={`${
//                               formSection.formSettings?.formId || "training"
//                             }_redirect`}
//                             value={
//                               formSection.formSettings?.redirectUrl ||
//                               "/contact/thank-you/"
//                             }
//                           />
//                         </div>
//                       </div>

//                       {/* Dynamic form fields */}
//                       {formSection.formFields &&
//                         formSection.formFields.map(
//                           (field: any, idx: number) => {
//                             const fieldKey = `field-${idx}`;
//                             const rowClass = `field-row ${
//                               field.columnClass || "col1"
//                             }${field.hiddenRow ? " hidden-row" : ""}`;

//                             // Text, Email, Tel inputs
//                             if (
//                               ["text", "email", "tel"].includes(field.fieldType)
//                             ) {
//                               return (
//                                 <div key={fieldKey} className={rowClass}>
//                                   <div className={`field ${field.fieldType}`}>
//                                     {field.label && (
//                                       <label htmlFor={field.fieldId}>
//                                         {field.label}
//                                       </label>
//                                     )}
//                                     {field.required && (
//                                       <small>
//                                         {field.requiredMessage ||
//                                           "This field is required."}
//                                       </small>
//                                     )}
//                                     <input
//                                       type={field.fieldType}
//                                       size={field.size || 50}
//                                       name={field.fieldName}
//                                       id={field.fieldId}
//                                       defaultValue={field.defaultValue || ""}
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
//                                 <div key={fieldKey} className={rowClass}>
//                                   <div className="field select">
//                                     {field.label && (
//                                       <label htmlFor={field.fieldId}>
//                                         {field.label}
//                                       </label>
//                                     )}
//                                     {field.required && (
//                                       <small>
//                                         {field.requiredMessage ||
//                                           "This field is required."}
//                                       </small>
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
//                                 <div key={fieldKey} className={rowClass}>
//                                   <div className="field textarea">
//                                     {field.label && (
//                                       <label htmlFor={field.fieldId}>
//                                         {field.label}
//                                       </label>
//                                     )}
//                                     <textarea
//                                       rows={field.rows || 6}
//                                       cols={field.cols || 48}
//                                       defaultValue={field.defaultValue || ""}
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
//                                 <div key={fieldKey} className={rowClass}>
//                                   <div
//                                     className={`field checkbox ${
//                                       field.additionalClasses || ""
//                                     }`}
//                                   >
//                                     {field.required && (
//                                       <small>
//                                         {field.requiredMessage ||
//                                           "This field is required."}
//                                       </small>
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
//                                         {field.checkboxLabel ? (
//                                           <div
//                                             dangerouslySetInnerHTML={{
//                                               __html: lexicalToHtml(
//                                                 field.checkboxLabel
//                                               ),
//                                             }}
//                                           />
//                                         ) : (
//                                           field.label
//                                         )}
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </div>
//                               );
//                             }

//                             return null;
//                           }
//                         )}

//                       {/* Disclaimer Section */}
//                       {formSection.disclaimerSection?.show &&
//                         formSection.disclaimerSection.content && (
//                           <div className="field-row col1">
//                             <div
//                               className={
//                                 formSection.disclaimerSection.className ||
//                                 "section-label follow-up"
//                               }
//                               style={{
//                                 color: formSection.disclaimerSection.textColor,
//                               }}
//                             >
//                               <div
//                                 dangerouslySetInnerHTML={{
//                                   __html: lexicalToHtml(
//                                     formSection.disclaimerSection.content
//                                   ),
//                                 }}
//                               />
//                             </div>
//                           </div>
//                         )}
//                     </div>

//                     {/* reCAPTCHA */}
//                     {formSection.recaptchaSettings && (
//                       <div>
//                         {formSection.recaptchaSettings.enableV3 && (
//                           <input
//                             id={
//                               formSection.recaptchaSettings.v3FieldId ||
//                               "training_recaptchaV3"
//                             }
//                             name="g-recaptcha-response-v3"
//                             type="hidden"
//                           />
//                         )}
//                         {formSection.recaptchaSettings.enableV2 && (
//                           <div
//                             id={
//                               formSection.recaptchaSettings.v2ContainerId ||
//                               "training_recaptchaV2"
//                             }
//                             data-recaptcha=""
//                           ></div>
//                         )}
//                         <div
//                           id={
//                             formSection.recaptchaSettings.errorContainerId ||
//                             "training_recaptcha"
//                           }
//                           data-recaptcha-error=""
//                         >
//                           <small>
//                             {formSection.recaptchaSettings.errorMessage ||
//                               "This field is required."}
//                           </small>
//                         </div>
//                       </div>
//                     )}

//                     {/* Additional hidden fields */}
//                     {formSection.hiddenFields &&
//                       formSection.hiddenFields.map(
//                         (hidden: any, idx: number) => (
//                           <input
//                             key={idx}
//                             type="hidden"
//                             name={hidden.fieldName}
//                             id={hidden.fieldId || hidden.fieldName}
//                             value={hidden.value || ""}
//                           />
//                         )
//                       )}

//                     {/* Submit button holder */}
//                     <div className="submit-holder">
//                       {/* Validate button (display only) */}
//                       <div
//                         className={
//                           formSection.submitButton?.validateButton?.className ||
//                           "btn validate disabled"
//                         }
//                         id={
//                           formSection.submitButton?.validateButton?.id ||
//                           "validate_training"
//                         }
//                         tabIndex={0}
//                         style={{
//                           backgroundColor:
//                             formSection.submitButton?.backgroundColor,
//                           color: formSection.submitButton?.textColor,
//                         }}
//                       >
//                         {formSection.submitButton?.validateButton?.text ||
//                           "Submit"}
//                       </div>
//                       {/* Actual submit button */}
//                       <button
//                         type="submit"
//                         id={
//                           formSection.submitButton?.submitButton?.id ||
//                           "submit_training"
//                         }
//                         value={
//                           formSection.submitButton?.submitButton?.value ||
//                           "submitted"
//                         }
//                         name={
//                           formSection.submitButton?.submitButton?.name ||
//                           "submit"
//                         }
//                         className={
//                           formSection.submitButton?.submitButton?.className ||
//                           "submit btn"
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
//                           : formSection.submitButton?.submitButton?.text ||
//                             "Submit"}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* Background image with lazy loading */}
//             {formBgImages && (
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${formBgImages.mobile}?auto=format,compress&w=420, ${formBgImages.mobileRetina}`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${formBgImages.tablet}?auto=format,compress&w=800, ${formBgImages.tabletRetina}`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${formBgImages.desktop}?auto=format,compress&w=1400, ${formBgImages.desktopRetina}`}
//                 />
//                 <source
//                   srcSet={placeholder}
//                   data-lazyload-srcset={formBgImages.large}
//                 />
//                 <img
//                   src={placeholder}
//                   data-lazyload-src={formBgImages.large}
//                   loading={formBgImages.loading}
//                   data-lazyload="img"
//                   width={formBgImages.width}
//                   height={formBgImages.height}
//                   alt={formBgImages.alt}
//                   draggable="false"
//                   data-api-key="image"
//                 />
//               </picture>
//             )}
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

// export default TrainingApplicationSimple;

"use client";

import React, { useState } from "react";

interface CloudinaryImage {
  cloudinary_url?: string;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
}

interface TrainingApplicationData {
  introModule: {
    logo?: CloudinaryImage;
    heading: string;
    description: string;
  };
  formSection: {
    formTitle: string;
    backgroundColor: string;
    formId: string;
    redirectUrl: string;
    subjectLine: string;
    fields: Array<{
      fieldType: string;
      name: string;
      label?: string;
      placeholder?: string;
      required: boolean;
      options?: Array<{ label: string; value: string }>;
      defaultValue?: string;
      rows?: number;
      cols?: number;
    }>;
    trainingProgramOptions: Array<{ label: string; value: string }>;
    privacySection: {
      privacyText: string;
      privacyLinks: Array<{ text: string; url: string; order: number }>;
    };
    submitButton: {
      text: string;
      backgroundColor: string;
      textColor: string;
    };
    backgroundImage?: CloudinaryImage;
  };
}

interface TrainingApplicationProps {
  data: TrainingApplicationData;
}

const TrainingApplication: React.FC<TrainingApplicationProps> = ({ data }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked ? "Yes" : "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/training-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(
          "Thank you! Your training application has been submitted successfully."
        );
        setFormData({});

        // Redirect after successful submission
        if (data.formSection.redirectUrl) {
          // setTimeout(() => {
          //   window.location.href = data.formSection.redirectUrl;
          // }, 2000);
        }
      } else {
        setSubmitMessage(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormField = (field: any, index: number) => {
    const commonProps = {
      name: field.name,
      id: `training_${field.name}`,
      required: field.required,
      onChange: handleInputChange,
      value: formData[field.name] || field.defaultValue || "",
    };

    switch (field.fieldType) {
      case "hidden":
        return <input key={index} type="hidden" {...commonProps} />;

      case "text":
      case "email":
      case "tel":
        return (
          <div key={index} className="field-row col1">
            <div className={`field ${field.fieldType}`}>
              {field.label && (
                <label htmlFor={commonProps.id}>{field.label}</label>
              )}
              {field.required && <small>This field is required.</small>}
              <input
                type={field.fieldType}
                size={50}
                placeholder={field.placeholder}
                aria-required={field.required ? "true" : undefined}
                {...commonProps}
              />
            </div>
          </div>
        );

      case "textarea":
        return (
          <div key={index} className="field-row col1">
            <div className="field textarea">
              {field.label && (
                <label htmlFor={commonProps.id}>{field.label}</label>
              )}
              <textarea
                rows={field.rows || 6}
                cols={field.cols || 48}
                placeholder={field.placeholder}
                name={field.name}
                id={commonProps.id}
                onChange={handleInputChange}
                value={formData[field.name] || ""}
                defaultValue=""
              />
            </div>
          </div>
        );

      case "select":
        // Special handling for training program select
        if (field.name === "preferred_training_program") {
          return (
            <div key={index} className="field-row col1">
              <div className="field select">
                {field.label && (
                  <label htmlFor={commonProps.id}>{field.label}</label>
                )}
                {field.required && <small>This field is required.</small>}
                <select
                  name={field.name}
                  id={commonProps.id}
                  required={field.required}
                  aria-required={field.required ? "true" : undefined}
                  onChange={handleInputChange}
                  value={formData[field.name] || ""}
                >
                  <option value="" disabled>
                    {field.placeholder || "Select an option"}
                  </option>
                  {data.formSection.trainingProgramOptions.map(
                    (option, optIndex) => (
                      <option key={optIndex} value={option.value}>
                        {option.label}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          );
        }

        return (
          <div key={index} className="field-row col1">
            <div className="field select">
              {field.label && (
                <label htmlFor={commonProps.id}>{field.label}</label>
              )}
              {field.required && <small>This field is required.</small>}
              <select {...commonProps}>
                <option value="" disabled>
                  {field.placeholder || "Select an option"}
                </option>
                {field.options?.map((option: any, optIndex: number) => (
                  <option key={optIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case "checkbox":
        const isOptIn = field.name === "optin_for_sms_texting";
        const checkboxClass = isOptIn
          ? "field checkbox opt-in follow-up"
          : "field checkbox follow-up";

        return (
          <div key={index} className="field-row col1">
            <div className={checkboxClass}>
              {field.required && <small>This field is required.</small>}
              <div className="field-item checkbox-item">
                <input
                  type="checkbox"
                  id={commonProps.id}
                  name={field.name}
                  value="Yes"
                  onChange={handleInputChange}
                  checked={formData[field.name] === "Yes"}
                  required={field.required}
                  aria-required={field.required ? "true" : undefined}
                />
                {field.label && (
                  <label htmlFor={commonProps.id}>{field.label}</label>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main id="main">
      {/* Page Layout */}
      {/* Intro Module */}
      <div
        className="mod_intro container viewport option-1 wow fadeInUp"
        data-s3-module=""
      >
        <div className="row ">
          {data.introModule.logo?.cloudinary_url && (
            <picture className="logo">
              <img
                src={data.introModule.logo.cloudinary_url}
                width={58}
                height={64}
                loading="lazy"
                alt="Goldfingers aesthetic logo"
                draggable="false"
                data-api-key="logo"
              />
            </picture>
          )}
          <div className="inner" data-api-key="content">
            <center>
              <h1>{data.introModule.heading}</h1>
            </center>
          </div>
          <div className="bullet-points">
            <center>
              <p>
                <span style={{ fontWeight: 400 }}>
                  {data.introModule.description}
                </span>
              </p>
            </center>
          </div>
        </div>
      </div>

      {/* Contact Form Module */}
      <div className="mod_contact_form" data-s3-module="">
        <div className="wrapper">
          <div className="row">
            <h2 data-api-key="title">{data.formSection.formTitle}</h2>
            <div className="partial_form" data-s3-partial="">
              <form
                id={data.formSection.formId}
                className="s3-form"
                method="post"
                data-abide=""
                encType="multipart/form-data"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="fields">
                  {/* Hidden Fields */}
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="subject"
                        id="training_subject"
                        value={data.formSection.subjectLine}
                      />
                    </div>
                  </div>
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="redirect"
                        id="training_redirect"
                        value={data.formSection.redirectUrl}
                      />
                    </div>
                  </div>

                  {/* Dynamic Form Fields */}
                  {data.formSection.fields.map((field, index) =>
                    renderFormField(field, index)
                  )}

                  {/* Privacy Text */}
                  {data.formSection.privacySection.privacyText && (
                    <div className="field-row col1">
                      <div className="section-label follow-up">
                        <p>
                          {data.formSection.privacySection.privacyText
                            .split(/(https?:\/\/[^\s]+)/g)
                            .map((part, i) => {
                              const link =
                                data.formSection.privacySection.privacyLinks.find(
                                  (l) =>
                                    part.includes(l.url) ||
                                    data.formSection.privacySection.privacyText.includes(
                                      l.text
                                    )
                                );
                              if (link) {
                                return (
                                  <a key={i} href={link.url}>
                                    {link.text}
                                  </a>
                                );
                              }
                              return part;
                            })}{" "}
                          Visit{" "}
                          {data.formSection.privacySection.privacyLinks
                            .filter((l) => l.text !== "Goldfingers Aesthetics")
                            .map((link, idx, arr) => (
                              <React.Fragment key={link.url}>
                                <a href={link.url}>{link.text}</a>
                                {idx < arr.length - 1 ? " and " : "."}
                              </React.Fragment>
                            ))}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* reCAPTCHA placeholders */}
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

                {/* <div className="submit-holder">
                  <div
                    className="btn validate disabled"
                    id="validate_training"
                    tabIndex={0}
                  >
                    {data.formSection.submitButton.text}
                  </div>
                  <button
                    type="submit"
                    id="submit_training"
                    value="submitted"
                    name="submit"
                    className="submit btn"
                    tabIndex={0}
                    disabled={isSubmitting}
                    style={{
                      backgroundColor:
                        data.formSection.submitButton.backgroundColor,
                      color: data.formSection.submitButton.textColor,
                    }}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : data.formSection.submitButton.text}
                  </button>
                </div> */}

                <button
                  type="submit"
                  id="submit_training"
                  value="submitted"
                  name="submit"
                  className="submit btn"
                  tabIndex={0}
                  disabled={isSubmitting}
                  style={{
                    backgroundColor:
                      data.formSection.submitButton.backgroundColor,
                    color: data.formSection.submitButton.textColor,
                  }}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : data.formSection.submitButton.text}
                </button>

                {submitMessage && (
                  <div
                    className={`submit-message ${submitMessage.includes("error") ? "error" : "success"}`}
                    style={{ marginTop: "20px", textAlign: "center" }}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Background Image from Cloudinary */}
        {data.formSection.backgroundImage?.cloudinary_url ? (
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${data.formSection.backgroundImage.cloudinary_url}, ${data.formSection.backgroundImage.cloudinary_url} 2x`}
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${data.formSection.backgroundImage.cloudinary_url}, ${data.formSection.backgroundImage.cloudinary_url} 2x`}
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={`${data.formSection.backgroundImage.cloudinary_url}, ${data.formSection.backgroundImage.cloudinary_url} 2x`}
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset={
                data.formSection.backgroundImage.cloudinary_url
              }
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src={
                data.formSection.backgroundImage.cloudinary_url
              }
              loading="lazy"
              data-lazyload="img"
              width={data.formSection.backgroundImage.width || 2200}
              height={data.formSection.backgroundImage.height || 1160}
              alt={
                data.formSection.backgroundImage.filename ||
                "Image of a bridge with an overlay"
              }
              draggable="false"
              data-api-key="image"
            />
          </picture>
        ) : (
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630 2x"
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200 2x"
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100 2x"
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
              loading="lazy"
              data-lazyload="img"
              width={2200}
              height={1160}
              alt="Image of a bridge with an overlay"
              draggable="false"
              data-api-key="image"
            />
          </picture>
        )}
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default TrainingApplication;