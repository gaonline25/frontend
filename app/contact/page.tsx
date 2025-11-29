// // // // import ContactSection from "@/components/contact/ContactSection";

// // // // export default function Contact() {
// // // //     return (
// // // //         <>
// // // //             <ContactSection />
// // // //         </>
// // // //     )
// // // // }

// // // "use client";

// // // import React, { useState, useEffect } from "react";

// // // const ContactSection: React.FC = () => {
// // //   const [sectionData, setSectionData] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [formData, setFormData] = useState({
// // //     subject: "Contact Form",
// // //     redirect: "/contact/thank-you/",
// // //     first_name: "",
// // //     last_name: "",
// // //     phone: "",
// // //     email: "",
// // //     location_id: "",
// // //     location_name: "",
// // //     what_service_are_you_interested_in: "",
// // //     commentsquestions: "",
// // //     optin_for_sms_texting: "",
// // //     by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text:
// // //       "",
// // //   });
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [submitMessage, setSubmitMessage] = useState("");

// // //   // Fetch section data from Payload CMS
// // //   useEffect(() => {
// // //     const fetchSectionData = async () => {
// // //       try {
// // //         const response = await fetch(
// // //           "https://backend-orpin-six-56.vercel.app/api/contact-section?where[isActive][equals]=true&limit=1"
// // //         );
// // //         const data = await response.json();
// // //         if (data.docs && data.docs.length > 0) {
// // //           setSectionData(data.docs[0]);
// // //         }
// // //         setLoading(false);
// // //       } catch (error) {
// // //         console.error("Error fetching section data:", error);
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchSectionData();
// // //   }, []);

// // //   // Handle form input changes
// // //   const handleInputChange = (
// // //     e: React.ChangeEvent<
// // //       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
// // //     >
// // //   ) => {
// // //     const { name, value, type } = e.target;
// // //     if (type === "checkbox") {
// // //       const checked = (e.target as HTMLInputElement).checked;
// // //       setFormData((prev) => ({ ...prev, [name]: checked ? "Yes" : "" }));
// // //     } else {
// // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // //       // Update location name when location is selected
// // //       if (name === "location_id" && sectionData?.locations) {
// // //         const selectedLocation = sectionData.locations.find(
// // //           (loc: any) => loc.name === value
// // //         );
// // //         if (selectedLocation) {
// // //           setFormData((prev) => ({
// // //             ...prev,
// // //             location_name: selectedLocation.name,
// // //           }));
// // //         }
// // //       }
// // //     }
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setSubmitting(true);
// // //     setSubmitMessage("");

// // //     try {
// // //       const response = await fetch("/api/contact-form/submit", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(formData),
// // //       });
// // //       const result = await response.json();
// // //       if (result.success) {
// // //         setSubmitMessage(
// // //           "Thank you! Your form has been submitted successfully."
// // //         );
// // //         setTimeout(() => {
// // //           window.location.href = formData.redirect;
// // //         }, 1500);
// // //       } else {
// // //         setSubmitMessage(
// // //           result.message || "An error occurred. Please try again."
// // //         );
// // //       }
// // //     } catch (error) {
// // //       console.error("Error submitting form:", error);
// // //       setSubmitMessage("An error occurred. Please try again.");
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   if (loading) return <div>Loading...</div>;
// // //   if (!sectionData) return <div>Section not found</div>;

// // //   const {
// // //     infoSection,
// // //     formSection,
// // //     backgroundImages,
// // //     locations = [],
// // //     legalSection,
// // //   } = sectionData;
// // //   const sortedLocations = [...locations].sort(
// // //     (a: any, b: any) => a.order - b.order
// // //   );
// // //   const sortedServices = formSection?.serviceOptions
// // //     ? [...formSection.serviceOptions].sort(
// // //         (a: any, b: any) => a.order - b.order
// // //       )
// // //     : [];

// // //   return (
// // //     <main id="main">
// // //       {/* Page Layout */}
// // //       {/* Contact Module */}
// // //       <div className="mod_contact banner stack phone-background" data-s3-module>
// // //         <div className="row">
// // //           <section className="info">
// // //             <h1>{infoSection?.heading || "Contact Us"}</h1>
// // //             <div className="phone">
// // //               <a
// // //                 className="tel ppc-href"
// // //                 href={`tel:${infoSection?.phoneNumber || "+14073334300"}`}
// // //               >
// // //                 <span className="ppc-number">
// // //                   {infoSection?.phoneDisplay || "(407) 333-4300"}
// // //                 </span>
// // //               </a>
// // //             </div>
// // //             <a
// // //               className="btn"
// // //               href={
// // //                 infoSection?.specialsButton?.url ||
// // //                 "/specials-and-rewards/specials/"
// // //               }
// // //             >
// // //               {infoSection?.specialsButton?.text || "Specials"}
// // //             </a>
// // //           </section>
// // //           <section className="content">
// // //             <div className="partial_form" data-s3-partial>
// // //               <form
// // //                 id="form_contact"
// // //                 className="s3-form"
// // //                 method="post"
// // //                 action="/validate/"
// // //                 data-abide=""
// // //                 encType="multipart/form-data"
// // //                 noValidate
// // //                 onSubmit={handleSubmit}
// // //               >
// // //                 <div className="fields">
// // //                   <div className="field-row col1 hidden-row">
// // //                     <div className="field hidden">
// // //                       <input
// // //                         type="hidden"
// // //                         name="subject"
// // //                         id="contact_subject"
// // //                         value={formData.subject}
// // //                         onChange={handleInputChange}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1 hidden-row">
// // //                     <div className="field hidden">
// // //                       <input
// // //                         type="hidden"
// // //                         name="redirect"
// // //                         id="contact_redirect"
// // //                         value={formData.redirect}
// // //                         onChange={handleInputChange}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field text">
// // //                       <label htmlFor="contact_first_name">First Name*</label>
// // //                       <small>This field is required.</small>
// // //                       <input
// // //                         type="text"
// // //                         size={50}
// // //                         name="first_name"
// // //                         id="contact_first_name"
// // //                         value={formData.first_name}
// // //                         onChange={handleInputChange}
// // //                         required
// // //                         aria-required="true"
// // //                         placeholder="First Name*"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field text">
// // //                       <label htmlFor="contact_last_name">Last Name*</label>
// // //                       <small>This field is required.</small>
// // //                       <input
// // //                         type="text"
// // //                         size={50}
// // //                         name="last_name"
// // //                         id="contact_last_name"
// // //                         value={formData.last_name}
// // //                         onChange={handleInputChange}
// // //                         required
// // //                         aria-required="true"
// // //                         placeholder="Last Name*"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field tel">
// // //                       <label htmlFor="contact_phone">Phone*</label>
// // //                       <small>This field is required.</small>
// // //                       <input
// // //                         type="tel"
// // //                         size={50}
// // //                         name="phone"
// // //                         id="contact_phone"
// // //                         value={formData.phone}
// // //                         onChange={handleInputChange}
// // //                         required
// // //                         aria-required="true"
// // //                         placeholder="Phone*"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field email">
// // //                       <label htmlFor="contact_email">Email*</label>
// // //                       <small>This field is required.</small>
// // //                       <input
// // //                         type="email"
// // //                         size={50}
// // //                         name="email"
// // //                         id="contact_email"
// // //                         value={formData.email}
// // //                         onChange={handleInputChange}
// // //                         required
// // //                         aria-required="true"
// // //                         placeholder="Email*"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field select">
// // //                       <label htmlFor="contact_location_id">Location*</label>
// // //                       <small>This field is required.</small>
// // //                       <select
// // //                         name="location_id"
// // //                         id="contact_location_id"
// // //                         value={formData.location_id}
// // //                         onChange={handleInputChange}
// // //                         required
// // //                         aria-required="true"
// // //                       >
// // //                         <option value="" disabled>
// // //                           Location*
// // //                         </option>
// // //                         {sortedLocations.map((location: any) => (
// // //                           <option key={location.name} value={location.name}>
// // //                             {location.name}
// // //                           </option>
// // //                         ))}
// // //                       </select>
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1 hidden-row">
// // //                     <div className="field hidden">
// // //                       <input
// // //                         type="hidden"
// // //                         name="location_name"
// // //                         id="contact_location_name"
// // //                         value={formData.location_name}
// // //                         onChange={handleInputChange}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field select">
// // //                       <label htmlFor="contact_what_service_are_you_interested_in">
// // //                         What Service Are You Interested In?*
// // //                       </label>
// // //                       <small>This field is required.</small>
// // //                       <select
// // //                         name="what_service_are_you_interested_in"
// // //                         id="contact_what_service_are_you_interested_in"
// // //                         value={formData.what_service_are_you_interested_in}
// // //                         onChange={handleInputChange}
// // //                         required
// // //                         aria-required="true"
// // //                       >
// // //                         <option value="" disabled>
// // //                           What Service Are You Interested In?*
// // //                         </option>
// // //                         {sortedServices.map((service: any) => (
// // //                           <option key={service.value} value={service.value}>
// // //                             {service.label}
// // //                           </option>
// // //                         ))}
// // //                       </select>
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field textarea">
// // //                       <label htmlFor="contact_commentsquestions">
// // //                         Comments/Questions
// // //                       </label>
// // //                       <textarea
// // //                         rows={6}
// // //                         cols={48}
// // //                         value={formData.commentsquestions}
// // //                         onChange={handleInputChange}
// // //                         name="commentsquestions"
// // //                         id="contact_commentsquestions"
// // //                         placeholder="Comments/Questions"
// // //                       ></textarea>
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field checkbox opt-in follow-up">
// // //                       <div className="field-item checkbox-item">
// // //                         <input
// // //                           type="checkbox"
// // //                           id="contact_optin_for_sms_texting"
// // //                           name="optin_for_sms_texting"
// // //                           value="Yes"
// // //                           checked={formData.optin_for_sms_texting === "Yes"}
// // //                           onChange={handleInputChange}
// // //                         />
// // //                         <label htmlFor="contact_optin_for_sms_texting">
// // //                           Opt-In For SMS Texting
// // //                         </label>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="field checkbox follow-up">
// // //                       <small>This field is required.</small>
// // //                       <div className="field-item checkbox-item">
// // //                         <input
// // //                           type="checkbox"
// // //                           id="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
// // //                           name="by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
// // //                           value="Yes"
// // //                           required
// // //                           aria-required="true"
// // //                           checked={
// // //                             formData.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
// // //                             "Yes"
// // //                           }
// // //                           onChange={handleInputChange}
// // //                         />
// // //                         <label htmlFor="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text">
// // //                           By completing this form, you are giving us permission
// // //                           to follow-up by phone, email or text.
// // //                         </label>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1">
// // //                     <div className="section-label follow-up">
// // //                       <p>
// // //                         {legalSection?.messagingText ||
// // //                           "Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website at"}{" "}
// // //                         {legalSection?.links?.map(
// // //                           (link: any, index: number) => (
// // //                             <span key={link.url}>
// // //                               {index > 0 && " and "}
// // //                               <a href={link.url}>{link.text}</a>
// // //                             </span>
// // //                           )
// // //                         ) || (
// // //                           <>
// // //                             <a href="https://goldfingersaesthetics.com">
// // //                               Goldfingers Aesthetics
// // //                             </a>
// // //                             . Visit{" "}
// // //                             <a href="https://goldfingersaesthetics.com/privacy-policy">
// // //                               Privacy Policy
// // //                             </a>{" "}
// // //                             and{" "}
// // //                             <a href="https://www.goldfingersaesthetics.com/terms-and-conditions/">
// // //                               Terms and Conditions
// // //                             </a>
// // //                           </>
// // //                         )}
// // //                         .
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div>
// // //                   <input
// // //                     id="contact_recaptchaV3"
// // //                     name="g-recaptcha-response-v3"
// // //                     type="hidden"
// // //                   />
// // //                   <div id="contact_recaptchaV2" data-recaptcha></div>
// // //                   <div id="contact_recaptcha" data-recaptcha-error>
// // //                     <small>This field is required.</small>
// // //                   </div>
// // //                 </div>
// // //                 <input
// // //                   type="hidden"
// // //                   name="form_id"
// // //                   id="form_id"
// // //                   value="contact"
// // //                 />
// // //                 <input name="human_check" type="hidden" />
// // //                 {submitMessage && (
// // //                   <div
// // //                     className="submit-message"
// // //                     style={{
// // //                       marginBottom: "1rem",
// // //                       color: submitMessage.includes("success")
// // //                         ? "green"
// // //                         : "red",
// // //                     }}
// // //                   >
// // //                     {submitMessage}
// // //                   </div>
// // //                 )}
// // //                 <div className="submit-holder">
// // //                   <div
// // //                     className="btn validate disabled"
// // //                     id="validate_contact"
// // //                     tabIndex={0}
// // //                   >
// // //                     Submit
// // //                   </div>
// // //                   <button
// // //                     type="submit"
// // //                     id="submit_contact"
// // //                     value="submitted"
// // //                     name="submit"
// // //                     className="submit btn"
// // //                     tabIndex={0}
// // //                     disabled={submitting}
// // //                   >
// // //                     {submitting ? "Submitting..." : "Submit"}
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </section>
// // //         </div>
// // //         <picture className="background desktop">
// // //           <source
// // //             media="(max-width:420px)"
// // //             srcSet={`${backgroundImages?.desktopBackground?.mobile || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420"}, ${backgroundImages?.desktopBackground?.mobile?.replace("w=420", "w=630") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630"} 2x`}
// // //             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.mobile || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420"}, ${backgroundImages?.desktopBackground?.mobile?.replace("w=420", "w=630") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630"} 2x`}
// // //           />
// // //           <source
// // //             media="(max-width:800px)"
// // //             srcSet={`${backgroundImages?.desktopBackground?.tablet || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800"}, ${backgroundImages?.desktopBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200"} 2x`}
// // //             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.tablet || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800"}, ${backgroundImages?.desktopBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200"} 2x`}
// // //           />
// // //           <source
// // //             media="(max-width:1400px)"
// // //             srcSet={`${backgroundImages?.desktopBackground?.desktop || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400"}, ${backgroundImages?.desktopBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100"} 2x`}
// // //             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.desktop || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400"}, ${backgroundImages?.desktopBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100"} 2x`}
// // //           />
// // //           <source
// // //             srcSet={
// // //               backgroundImages?.desktopBackground?.large ||
// // //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// // //             }
// // //             data-lazyload-srcset={
// // //               backgroundImages?.desktopBackground?.large ||
// // //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// // //             }
// // //           />
// // //           <img
// // //             src={
// // //               backgroundImages?.desktopBackground?.large ||
// // //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// // //             }
// // //             data-lazyload-src={
// // //               backgroundImages?.desktopBackground?.large ||
// // //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// // //             }
// // //             loading="lazy"
// // //             data-lazyload="img"
// // //             width="2200"
// // //             height="1467"
// // //             alt="contact background"
// // //             draggable="false"
// // //           />
// // //         </picture>
// // //       </div>
// // //       <div className="mod_map_locations full-height" data-s3-module="">
// // //         <div className="content">
// // //           <div className="map-wrapper">
// // //             <div className="locations">
// // //               {sortedLocations.map((location: any) => (
// // //                 <span
// // //                   key={location.name}
// // //                   className="location"
// // //                   style={{
// // //                     left: location.mapPosition?.left || "",
// // //                     top: location.mapPosition?.top || "",
// // //                   }}
// // //                 >
// // //                   <a
// // //                     className="pin-link"
// // //                     aria-label={`${location.name} pin on a map`}
// // //                     href={location.url}
// // //                   >
// // //                     <span className="pin"></span>
// // //                   </a>
// // //                   <span className="tip">
// // //                     <span className="info">
// // //                       <h3>{location.name}</h3>
// // //                       <hr />
// // //                       <span className="address">
// // //                         {location.googleMapsUrl ? (
// // //                           <>
// // //                             <p>
// // //                               <a
// // //                                 href={location.googleMapsUrl}
// // //                                 target="_blank"
// // //                                 rel="noopener"
// // //                               >
// // //                                 {location.address.split(",")[0]}
// // //                               </a>
// // //                               <br />
// // //                               <a
// // //                                 href={location.googleMapsUrl}
// // //                                 target="_blank"
// // //                                 rel="noopener"
// // //                               >
// // //                                 {location.address.split(",").slice(1).join(",")}
// // //                               </a>
// // //                             </p>
// // //                           </>
// // //                         ) : (
// // //                           <p>{location.address}</p>
// // //                         )}
// // //                       </span>
// // //                       <a
// // //                         className="tel ppc-href"
// // //                         href={`tel:${location.phone}`}
// // //                         aria-label="Call Goldfingers Aesthetics on the phone"
// // //                         role="link"
// // //                       >
// // //                         <span className="ppc-number">
// // //                           {location.phoneDisplay}
// // //                         </span>
// // //                       </a>
// // //                     </span>
// // //                   </span>
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <picture className="background">
// // //           <source
// // //             media="(max-width:420px)"
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset={`${backgroundImages?.mapBackground?.mobile || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800"}, ${backgroundImages?.mapBackground?.mobile?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200"} 2x`}
// // //           />
// // //           <source
// // //             media="(max-width:800px)"
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset={`${backgroundImages?.mapBackground?.tablet || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800&q=100"}, ${backgroundImages?.mapBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200&q=100"} 2x`}
// // //           />
// // //           <source
// // //             media="(max-width:1400px)"
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset={`${backgroundImages?.mapBackground?.desktop || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1400&q=100"}, ${backgroundImages?.mapBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2100&q=100"} 2x`}
// // //           />
// // //           <source
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset={
// // //               backgroundImages?.mapBackground?.large ||
// // //               "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
// // //             }
// // //           />
// // //           <img
// // //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-src={
// // //               backgroundImages?.mapBackground?.large ||
// // //               "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
// // //             }
// // //             loading="lazy"
// // //             data-lazyload="img"
// // //             width="2200"
// // //             height="1208"
// // //             alt="map of florida"
// // //             draggable="false"
// // //           />
// // //         </picture>
// // //       </div>
// // //       {/* /Page Layout */}
// // //     </main>
// // //   );
// // // };

// // // export default ContactSection;

// // "use client";

// // import React, { useState, useEffect } from "react";

// // const ContactSection: React.FC = () => {
// //   const [sectionData, setSectionData] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [formData, setFormData] = useState({
// //     subject: "Contact Form",
// //     redirect: "/contact/thank-you/",
// //     first_name: "",
// //     last_name: "",
// //     phone: "",
// //     email: "",
// //     location_id: "",
// //     location_name: "",
// //     what_service_are_you_interested_in: "",
// //     commentsquestions: "",
// //     optin_for_sms_texting: "",
// //     by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text:
// //       "",
// //   });
// //   const [submitting, setSubmitting] = useState(false);
// //   const [submitMessage, setSubmitMessage] = useState("");

// //   // Fetch section data from Payload CMS
// //   useEffect(() => {
// //     const fetchSectionData = async () => {
// //       try {
// //         const response = await fetch(
// //           "https://backend-orpin-six-56.vercel.app/api/contact-section?where[isActive][equals]=true&limit=1"
// //         );
// //         const data = await response.json();
// //         if (data.docs && data.docs.length > 0) {
// //           setSectionData(data.docs[0]);
// //         }
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching section data:", error);
// //         setLoading(false);
// //       }
// //     };
// //     fetchSectionData();
// //   }, []);

// //   // Handle form input changes
// //   const handleInputChange = (
// //     e: React.ChangeEvent<
// //       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
// //     >
// //   ) => {
// //     const { name, value, type } = e.target;
// //     if (type === "checkbox") {
// //       const checked = (e.target as HTMLInputElement).checked;
// //       setFormData((prev) => ({ ...prev, [name]: checked ? "Yes" : "" }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //       // Update location name when location is selected
// //       if (name === "location_id" && sectionData?.locations) {
// //         const selectedLocation = sectionData.locations.find(
// //           (loc: any) => loc.name === value
// //         );
// //         if (selectedLocation) {
// //           setFormData((prev) => ({
// //             ...prev,
// //             location_name: selectedLocation.name,
// //           }));
// //         }
// //       }
// //     }
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitting(true);
// //     setSubmitMessage("");

// //     try {
// //       const response = await fetch("/api/contact-form/submit", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });
// //       const result = await response.json();
// //       if (result.success) {
// //         setSubmitMessage(
// //           "Thank you! Your form has been submitted successfully."
// //         );
// //         setTimeout(() => {
// //           window.location.href = formData.redirect;
// //         }, 1500);
// //       } else {
// //         setSubmitMessage(
// //           result.message || "An error occurred. Please try again."
// //         );
// //       }
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //       setSubmitMessage("An error occurred. Please try again.");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (!sectionData) return <div>Section not found</div>;

// //   const {
// //     infoSection,
// //     formSection,
// //     backgroundImages,
// //     locations = [],
// //     legalSection,
// //   } = sectionData;
// //   const sortedLocations = [...locations].sort(
// //     (a: any, b: any) => a.order - b.order
// //   );
// //   const sortedServices = formSection?.serviceOptions
// //     ? [...formSection.serviceOptions].sort(
// //         (a: any, b: any) => a.order - b.order
// //       )
// //     : [];

// //   return (
// //     <main id="main">
// //       {/* Page Layout */}
// //       {/* Contact Module */}
// //       <div className="mod_contact banner stack phone-background" data-s3-module>
// //         <div className="row">
// //           <section className="info">
// //             <h1>{infoSection?.heading || "Contact Us"}</h1>
// //             <div className="phone">
// //               <a
// //                 className="tel ppc-href"
// //                 href={`tel:${infoSection?.phoneNumber || "+14073334300"}`}
// //               >
// //                 <span className="ppc-number">
// //                   {infoSection?.phoneDisplay || "(407) 333-4300"}
// //                 </span>
// //               </a>
// //             </div>
// //             <a
// //               className="btn"
// //               href={
// //                 infoSection?.specialsButton?.url ||
// //                 "/specials-and-rewards/specials/"
// //               }
// //             >
// //               {infoSection?.specialsButton?.text || "Specials"}
// //             </a>
// //           </section>
// //           <section className="content">
// //             <div className="partial_form" data-s3-partial>
// //               <form
// //                 id="form_contact"
// //                 className="s3-form"
// //                 method="post"
// //                 action="/validate/"
// //                 data-abide=""
// //                 encType="multipart/form-data"
// //                 noValidate
// //                 onSubmit={handleSubmit}
// //               >
// //                 <div className="fields">
// //                   <div className="field-row col1 hidden-row">
// //                     <div className="field hidden">
// //                       <input
// //                         type="hidden"
// //                         name="subject"
// //                         id="contact_subject"
// //                         value={formData.subject}
// //                         onChange={handleInputChange}
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1 hidden-row">
// //                     <div className="field hidden">
// //                       <input
// //                         type="hidden"
// //                         name="redirect"
// //                         id="contact_redirect"
// //                         value={formData.redirect}
// //                         onChange={handleInputChange}
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field text">
// //                       <label htmlFor="contact_first_name">First Name*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="text"
// //                         size={50}
// //                         name="first_name"
// //                         id="contact_first_name"
// //                         value={formData.first_name}
// //                         onChange={handleInputChange}
// //                         required
// //                         aria-required="true"
// //                         placeholder="First Name*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field text">
// //                       <label htmlFor="contact_last_name">Last Name*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="text"
// //                         size={50}
// //                         name="last_name"
// //                         id="contact_last_name"
// //                         value={formData.last_name}
// //                         onChange={handleInputChange}
// //                         required
// //                         aria-required="true"
// //                         placeholder="Last Name*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field tel">
// //                       <label htmlFor="contact_phone">Phone*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="tel"
// //                         size={50}
// //                         name="phone"
// //                         id="contact_phone"
// //                         value={formData.phone}
// //                         onChange={handleInputChange}
// //                         required
// //                         aria-required="true"
// //                         placeholder="Phone*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field email">
// //                       <label htmlFor="contact_email">Email*</label>
// //                       <small>This field is required.</small>
// //                       <input
// //                         type="email"
// //                         size={50}
// //                         name="email"
// //                         id="contact_email"
// //                         value={formData.email}
// //                         onChange={handleInputChange}
// //                         required
// //                         aria-required="true"
// //                         placeholder="Email*"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field select">
// //                       <label htmlFor="contact_location_id">Location*</label>
// //                       <small>This field is required.</small>
// //                       <select
// //                         name="location_id"
// //                         id="contact_location_id"
// //                         value={formData.location_id}
// //                         onChange={handleInputChange}
// //                         required
// //                         aria-required="true"
// //                       >
// //                         <option value="" disabled>
// //                           Location*
// //                         </option>
// //                         {sortedLocations.map((location: any) => (
// //                           <option key={location.name} value={location.name}>
// //                             {location.name}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1 hidden-row">
// //                     <div className="field hidden">
// //                       <input
// //                         type="hidden"
// //                         name="location_name"
// //                         id="contact_location_name"
// //                         value={formData.location_name}
// //                         onChange={handleInputChange}
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field select">
// //                       <label htmlFor="contact_what_service_are_you_interested_in">
// //                         What Service Are You Interested In?*
// //                       </label>
// //                       <small>This field is required.</small>
// //                       <select
// //                         name="what_service_are_you_interested_in"
// //                         id="contact_what_service_are_you_interested_in"
// //                         value={formData.what_service_are_you_interested_in}
// //                         onChange={handleInputChange}
// //                         required
// //                         aria-required="true"
// //                       >
// //                         <option value="" disabled>
// //                           What Service Are You Interested In?*
// //                         </option>
// //                         {sortedServices.map((service: any) => (
// //                           <option key={service.value} value={service.value}>
// //                             {service.label}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field textarea">
// //                       <label htmlFor="contact_commentsquestions">
// //                         Comments/Questions
// //                       </label>
// //                       <textarea
// //                         rows={6}
// //                         cols={48}
// //                         value={formData.commentsquestions}
// //                         onChange={handleInputChange}
// //                         name="commentsquestions"
// //                         id="contact_commentsquestions"
// //                         placeholder="Comments/Questions"
// //                       ></textarea>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="field checkbox opt-in follow-up">
// //                       <div className="field-item checkbox-item">
// //                         <input
// //                           type="checkbox"
// //                           id="contact_optin_for_sms_texting"
// //                           name="optin_for_sms_texting"
// //                           value="Yes"
// //                           checked={formData.optin_for_sms_texting === "Yes"}
// //                           onChange={handleInputChange}
// //                         />
// //                         <label htmlFor="contact_optin_for_sms_texting">
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
// //                           id="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
// //                           name="by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
// //                           value="Yes"
// //                           required
// //                           aria-required="true"
// //                           checked={
// //                             formData.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
// //                             "Yes"
// //                           }
// //                           onChange={handleInputChange}
// //                         />
// //                         <label htmlFor="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text">
// //                           By completing this form, you are giving us permission
// //                           to follow-up by phone, email or text.
// //                         </label>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="field-row col1">
// //                     <div className="section-label follow-up">
// //                       <p>
// //                         {legalSection?.messagingText ||
// //                           "Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website at"}{" "}
// //                         {legalSection?.links?.map(
// //                           (link: any, index: number) => (
// //                             <span key={link.url}>
// //                               {index > 0 && " and "}
// //                               <a href={link.url}>{link.text}</a>
// //                             </span>
// //                           )
// //                         ) || (
// //                           <>
// //                             <a href="https://goldfingersaesthetics.com">
// //                               Goldfingers Aesthetics
// //                             </a>
// //                             . Visit{" "}
// //                             <a href="https://goldfingersaesthetics.com/privacy-policy">
// //                               Privacy Policy
// //                             </a>{" "}
// //                             and{" "}
// //                             <a href="https://www.goldfingersaesthetics.com/terms-and-conditions/">
// //                               Terms and Conditions
// //                             </a>
// //                           </>
// //                         )}
// //                         .
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <input
// //                     id="contact_recaptchaV3"
// //                     name="g-recaptcha-response-v3"
// //                     type="hidden"
// //                   />
// //                   <div id="contact_recaptchaV2" data-recaptcha></div>
// //                   <div id="contact_recaptcha" data-recaptcha-error>
// //                     <small>This field is required.</small>
// //                   </div>
// //                 </div>
// //                 <input
// //                   type="hidden"
// //                   name="form_id"
// //                   id="form_id"
// //                   value="contact"
// //                 />
// //                 <input name="human_check" type="hidden" />
// //                 {submitMessage && (
// //                   <div
// //                     className="submit-message"
// //                     style={{
// //                       marginBottom: "1rem",
// //                       color: submitMessage.includes("success")
// //                         ? "green"
// //                         : "red",
// //                     }}
// //                   >
// //                     {submitMessage}
// //                   </div>
// //                 )}
// //                 <div className="submit-holder">
// //                   <div
// //                     className="btn validate disabled"
// //                     id="validate_contact"
// //                     tabIndex={0}
// //                   >
// //                     Submit
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     id="submit_contact"
// //                     value="submitted"
// //                     name="submit"
// //                     className="submit btn"
// //                     tabIndex={0}
// //                     disabled={submitting}
// //                   >
// //                     {submitting ? "Submitting..." : "Submit"}
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </section>
// //         </div>
// //         <picture className="background desktop">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet={`${backgroundImages?.desktopBackground?.mobile || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420"}, ${backgroundImages?.desktopBackground?.mobile?.replace("w=420", "w=630") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630"} 2x`}
// //             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.mobile || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420"}, ${backgroundImages?.desktopBackground?.mobile?.replace("w=420", "w=630") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630"} 2x`}
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet={`${backgroundImages?.desktopBackground?.tablet || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800"}, ${backgroundImages?.desktopBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200"} 2x`}
// //             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.tablet || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800"}, ${backgroundImages?.desktopBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200"} 2x`}
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet={`${backgroundImages?.desktopBackground?.desktop || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400"}, ${backgroundImages?.desktopBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100"} 2x`}
// //             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.desktop || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400"}, ${backgroundImages?.desktopBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100"} 2x`}
// //           />
// //           <source
// //             srcSet={
// //               backgroundImages?.desktopBackground?.large ||
// //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// //             }
// //             data-lazyload-srcset={
// //               backgroundImages?.desktopBackground?.large ||
// //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// //             }
// //           />
// //           <img
// //             src={
// //               backgroundImages?.desktopBackground?.large ||
// //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// //             }
// //             data-lazyload-src={
// //               backgroundImages?.desktopBackground?.large ||
// //               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
// //             }
// //             loading="lazy"
// //             data-lazyload="img"
// //             width="2200"
// //             height="1467"
// //             alt="contact background"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>
// //       <div className="mod_map_locations full-height" data-s3-module="">
// //         <div className="content">
// //           <div className="map-wrapper">
// //             <div className="locations">
// //               {sortedLocations.map((location: any) => (
// //                 <span
// //                   key={location.name}
// //                   className="location"
// //                   style={{
// //                     left: location.mapPosition?.left || "",
// //                     top: location.mapPosition?.top || "",
// //                   }}
// //                 >
// //                   <a
// //                     className="pin-link"
// //                     aria-label={`${location.name} pin on a map`}
// //                     href={location.url}
// //                   >
// //                     <span className="pin"></span>
// //                   </a>
// //                   <span className="tip">
// //                     <span className="info">
// //                       <h3>{location.name}</h3>
// //                       <hr />
// //                       <span className="address">
// //                         {location.googleMapsUrl ? (
// //                           <>
// //                             <p>
// //                               <a
// //                                 href={location.googleMapsUrl}
// //                                 target="_blank"
// //                                 rel="noopener"
// //                               >
// //                                 {location.address.split(",")[0]}
// //                               </a>
// //                               <br />
// //                               <a
// //                                 href={location.googleMapsUrl}
// //                                 target="_blank"
// //                                 rel="noopener"
// //                               >
// //                                 {location.address.split(",").slice(1).join(",")}
// //                               </a>
// //                             </p>
// //                           </>
// //                         ) : (
// //                           <p>{location.address}</p>
// //                         )}
// //                       </span>
// //                       <a
// //                         className="tel ppc-href"
// //                         href={`tel:${location.phone}`}
// //                         aria-label="Call Goldfingers Aesthetics on the phone"
// //                         role="link"
// //                       >
// //                         <span className="ppc-number">
// //                           {location.phoneDisplay}
// //                         </span>
// //                       </a>
// //                     </span>
// //                   </span>
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //         <picture className="background">
// //           <source
// //             media="(max-width:420px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset={`${backgroundImages?.mapBackground?.mobile || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800"}, ${backgroundImages?.mapBackground?.mobile?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200"} 2x`}
// //           />
// //           <source
// //             media="(max-width:800px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset={`${backgroundImages?.mapBackground?.tablet || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800&q=100"}, ${backgroundImages?.mapBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200&q=100"} 2x`}
// //           />
// //           <source
// //             media="(max-width:1400px)"
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset={`${backgroundImages?.mapBackground?.desktop || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1400&q=100"}, ${backgroundImages?.mapBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2100&q=100"} 2x`}
// //           />
// //           <source
// //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-srcset={
// //               backgroundImages?.mapBackground?.large ||
// //               "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
// //             }
// //           />
// //           <img
// //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// //             data-lazyload-src={
// //               backgroundImages?.mapBackground?.large ||
// //               "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
// //             }
// //             loading="lazy"
// //             data-lazyload="img"
// //             width="2200"
// //             height="1208"
// //             alt="map of florida"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default ContactSection;

// "use client";

// import React, { useState, useEffect } from "react";

// const ContactSection: React.FC = () => {
//   const [sectionData, setSectionData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     subject: "Contact Form",
//     redirect: "/",
//     first_name: "",
//     last_name: "",
//     phone: "",
//     email: "",
//     location_id: "",
//     location_name: "",
//     what_service_are_you_interested_in: "",
//     commentsquestions: "",
//     optin_for_sms_texting: "",
//     by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text:
//       "",
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   // Fetch section data from Payload CMS
//   useEffect(() => {
//     const fetchSectionData = async () => {
//       try {
//         const response = await fetch(
//           "https://backend-orpin-six-56.vercel.app/api/contact-section?where[isActive][equals]=true&limit=1"
//         );
//         const data = await response.json();
//         if (data.docs && data.docs.length > 0) {
//           setSectionData(data.docs[0]);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching section data:", error);
//         setLoading(false);
//       }
//     };
//     fetchSectionData();
//   }, []);

//   // Handle form input changes
//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value, type } = e.target;
//     if (type === "checkbox") {
//       const checked = (e.target as HTMLInputElement).checked;
//       setFormData((prev) => ({ ...prev, [name]: checked ? "Yes" : "" }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       // Update location name when location is selected
//       if (name === "location_id" && sectionData?.locations) {
//         const selectedLocation = sectionData.locations.find(
//           (loc: any) => loc.name === value
//         );
//         if (selectedLocation) {
//           setFormData((prev) => ({
//             ...prev,
//             location_name: selectedLocation.name,
//           }));
//         }
//       }
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setSubmitMessage("");

//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/contact-form/submit",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const result = await response.json();
//       if (result.success) {
//         setSubmitMessage(
//           "Thank you! Your form has been submitted successfully."
//         );
//         setTimeout(() => {
//           window.location.href = formData.redirect;
//         }, 1500);
//       } else {
//         setSubmitMessage(
//           result.message || "An error occurred. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setSubmitMessage("An error occurred. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!sectionData) return <div>Section not found</div>;

//   const {
//     infoSection,
//     formSection,
//     backgroundImages,
//     locations = [],
//     legalSection,
//   } = sectionData;
//   const sortedLocations = [...locations].sort(
//     (a: any, b: any) => a.order - b.order
//   );
//   const sortedServices = formSection?.serviceOptions
//     ? [...formSection.serviceOptions].sort(
//         (a: any, b: any) => a.order - b.order
//       )
//     : [];

//   return (
//     <main id="main">
//       {/* Page Layout */}
//       {/* Contact Module */}
//       <div className="mod_contact banner stack phone-background" data-s3-module>
//         <div className="row">
//           <section className="info">
//             <h1>{infoSection?.heading || "Contact Us"}</h1>
//             <div className="phone">
//               <a
//                 className="tel ppc-href"
//                 href={`tel:${infoSection?.phoneNumber || "+14073334300"}`}
//               >
//                 <span className="ppc-number">
//                   {infoSection?.phoneDisplay || "(407) 333-4300"}
//                 </span>
//               </a>
//             </div>
//             <a
//               className="btn"
//               href={
//                 infoSection?.specialsButton?.url ||
//                 "/specials-and-rewards/specials/"
//               }
//             >
//               {infoSection?.specialsButton?.text || "Specials"}
//             </a>
//           </section>
//           <section className="content">
//             <div className="partial_form" data-s3-partial>
//               <form
//                 id="form_contact"
//                 className="s3-form"
//                 method="post"
//                 action="/validate/"
//                 data-abide=""
//                 encType="multipart/form-data"
//                 noValidate
//                 onSubmit={handleSubmit}
//               >
//                 <div className="fields">
//                   <div className="field-row col1 hidden-row">
//                     <div className="field hidden">
//                       <input
//                         type="hidden"
//                         name="subject"
//                         id="contact_subject"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field-row col1 hidden-row">
//                     <div className="field hidden">
//                       <input
//                         type="hidden"
//                         name="redirect"
//                         id="contact_redirect"
//                         value={formData.redirect}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field text">
//                       <label htmlFor="contact_first_name">First Name*</label>
//                       <small>This field is required.</small>
//                       <input
//                         type="text"
//                         size={50}
//                         name="first_name"
//                         id="contact_first_name"
//                         value={formData.first_name}
//                         onChange={handleInputChange}
//                         required
//                         aria-required="true"
//                         placeholder="First Name*"
//                       />
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field text">
//                       <label htmlFor="contact_last_name">Last Name*</label>
//                       <small>This field is required.</small>
//                       <input
//                         type="text"
//                         size={50}
//                         name="last_name"
//                         id="contact_last_name"
//                         value={formData.last_name}
//                         onChange={handleInputChange}
//                         required
//                         aria-required="true"
//                         placeholder="Last Name*"
//                       />
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field tel">
//                       <label htmlFor="contact_phone">Phone*</label>
//                       <small>This field is required.</small>
//                       <input
//                         type="tel"
//                         size={50}
//                         name="phone"
//                         id="contact_phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         required
//                         aria-required="true"
//                         placeholder="Phone*"
//                       />
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field email">
//                       <label htmlFor="contact_email">Email*</label>
//                       <small>This field is required.</small>
//                       <input
//                         type="email"
//                         size={50}
//                         name="email"
//                         id="contact_email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         aria-required="true"
//                         placeholder="Email*"
//                       />
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field select">
//                       <label htmlFor="contact_location_id">Location*</label>
//                       <small>This field is required.</small>
//                       <select
//                         name="location_id"
//                         id="contact_location_id"
//                         value={formData.location_id}
//                         onChange={handleInputChange}
//                         required
//                         aria-required="true"
//                       >
//                         <option value="" disabled>
//                           Location*
//                         </option>
//                         {sortedLocations.map((location: any) => (
//                           <option key={location.name} value={location.name}>
//                             {location.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                   <div className="field-row col1 hidden-row">
//                     <div className="field hidden">
//                       <input
//                         type="hidden"
//                         name="location_name"
//                         id="contact_location_name"
//                         value={formData.location_name}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field select">
//                       <label htmlFor="contact_what_service_are_you_interested_in">
//                         What Service Are You Interested In?*
//                       </label>
//                       <small>This field is required.</small>
//                       <select
//                         name="what_service_are_you_interested_in"
//                         id="contact_what_service_are_you_interested_in"
//                         value={formData.what_service_are_you_interested_in}
//                         onChange={handleInputChange}
//                         required
//                         aria-required="true"
//                       >
//                         <option value="" disabled>
//                           What Service Are You Interested In?*
//                         </option>
//                         {sortedServices.map((service: any) => (
//                           <option key={service.value} value={service.value}>
//                             {service.label}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field textarea">
//                       <label htmlFor="contact_commentsquestions">
//                         Comments/Questions
//                       </label>
//                       <textarea
//                         rows={6}
//                         cols={48}
//                         value={formData.commentsquestions}
//                         onChange={handleInputChange}
//                         name="commentsquestions"
//                         id="contact_commentsquestions"
//                         placeholder="Comments/Questions"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field checkbox opt-in follow-up">
//                       <div className="field-item checkbox-item">
//                         <input
//                           type="checkbox"
//                           id="contact_optin_for_sms_texting"
//                           name="optin_for_sms_texting"
//                           value="Yes"
//                           checked={formData.optin_for_sms_texting === "Yes"}
//                           onChange={handleInputChange}
//                         />
//                         <label htmlFor="contact_optin_for_sms_texting">
//                           Opt-In For SMS Texting
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="field checkbox follow-up">
//                       <small>This field is required.</small>
//                       <div className="field-item checkbox-item">
//                         <input
//                           type="checkbox"
//                           id="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
//                           name="by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
//                           value="Yes"
//                           required
//                           aria-required="true"
//                           checked={
//                             formData.by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text ===
//                             "Yes"
//                           }
//                           onChange={handleInputChange}
//                         />
//                         <label htmlFor="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text">
//                           By completing this form, you are giving us permission
//                           to follow-up by phone, email or text.
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="field-row col1">
//                     <div className="section-label follow-up">
//                       <p>
//                         {legalSection?.messagingText ||
//                           "Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website at"}{" "}
//                         {legalSection?.links?.map(
//                           (link: any, index: number) => (
//                             <span key={link.url}>
//                               {index > 0 && " and "}
//                               <a href={link.url}>{link.text}</a>
//                             </span>
//                           )
//                         ) || (
//                           <>
//                             <a href="https://goldfingersaesthetics.com">
//                               Goldfingers Aesthetics
//                             </a>
//                             . Visit{" "}
//                             <a href="https://goldfingersaesthetics.com/privacy-policy">
//                               Privacy Policy
//                             </a>{" "}
//                             and{" "}
//                             <a href="https://www.goldfingersaesthetics.com/terms-and-conditions/">
//                               Terms and Conditions
//                             </a>
//                           </>
//                         )}
//                         .
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <input
//                     id="contact_recaptchaV3"
//                     name="g-recaptcha-response-v3"
//                     type="hidden"
//                   />
//                   <div id="contact_recaptchaV2" data-recaptcha></div>
//                   <div id="contact_recaptcha" data-recaptcha-error>
//                     <small>This field is required.</small>
//                   </div>
//                 </div>
//                 <input
//                   type="hidden"
//                   name="form_id"
//                   id="form_id"
//                   value="contact"
//                 />
//                 <input name="human_check" type="hidden" />
//                 {submitMessage && (
//                   <div
//                     className="submit-message"
//                     style={{
//                       marginBottom: "1rem",
//                       color: submitMessage.includes("success")
//                         ? "green"
//                         : "red",
//                     }}
//                   >
//                     {submitMessage}
//                   </div>
//                 )}
//                 {/* <div className="submit-holder"></div> */}
//                 <button
//                   type="submit"
//                   id="submit_contact"
//                   value="submitted"
//                   name="submit"
//                   className="submit btn"
//                   tabIndex={0}
//                   disabled={submitting}
//                 >
//                   {submitting ? "Submitting..." : "Submit"}
//                 </button>
//                 {/* <div className="submit-holder">
//                   <div
//                     className="btn validate disabled"
//                     id="validate_contact"
//                     tabIndex={0}
//                     style={{ pointerEvents: "none" }}
//                   >
//                     Submit
//                   </div>
//                   <button
//                     type="submit"
//                     id="submit_contact"
//                     value="submitted"
//                     name="submit"
//                     className="submit btn"
//                     tabIndex={0}
//                     disabled={submitting}
//                   >
//                     {submitting ? "Submitting..." : "Submit"}
//                   </button>
//                 </div> */}
//               </form>
//             </div>
//           </section>
//         </div>
//         <picture className="background desktop">
//           <source
//             media="(max-width:420px)"
//             srcSet={`${backgroundImages?.desktopBackground?.mobile || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420"}, ${backgroundImages?.desktopBackground?.mobile?.replace("w=420", "w=630") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630"} 2x`}
//             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.mobile || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420"}, ${backgroundImages?.desktopBackground?.mobile?.replace("w=420", "w=630") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630"} 2x`}
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet={`${backgroundImages?.desktopBackground?.tablet || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800"}, ${backgroundImages?.desktopBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200"} 2x`}
//             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.tablet || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800"}, ${backgroundImages?.desktopBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200"} 2x`}
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet={`${backgroundImages?.desktopBackground?.desktop || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400"}, ${backgroundImages?.desktopBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100"} 2x`}
//             data-lazyload-srcset={`${backgroundImages?.desktopBackground?.desktop || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400"}, ${backgroundImages?.desktopBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100"} 2x`}
//           />
//           <source
//             srcSet={
//               backgroundImages?.desktopBackground?.large ||
//               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
//             }
//             data-lazyload-srcset={
//               backgroundImages?.desktopBackground?.large ||
//               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
//             }
//           />
//           <img
//             src={
//               backgroundImages?.desktopBackground?.large ||
//               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
//             }
//             data-lazyload-src={
//               backgroundImages?.desktopBackground?.large ||
//               "https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
//             }
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="1467"
//             alt="contact background"
//             draggable="false"
//           />
//         </picture>
//       </div>
//       <div className="mod_map_locations full-height" data-s3-module="">
//         <div className="content">
//           <div className="map-wrapper">
//             <div className="locations">
//               {sortedLocations.map((location: any) => (
//                 <span
//                   key={location.name}
//                   className="location"
//                   style={{
//                     left: location.mapPosition?.left || "",
//                     top: location.mapPosition?.top || "",
//                   }}
//                 >
//                   <a
//                     className="pin-link"
//                     aria-label={`${location.name} pin on a map`}
//                     href={location.url}
//                   >
//                     <span className="pin"></span>
//                   </a>
//                   <span className="tip">
//                     <span className="info">
//                       <h3>{location.name}</h3>
//                       <hr />
//                       <span className="address">
//                         {location.googleMapsUrl ? (
//                           <>
//                             <p>
//                               <a
//                                 href={location.googleMapsUrl}
//                                 target="_blank"
//                                 rel="noopener"
//                               >
//                                 {location.address.split(",")[0]}
//                               </a>
//                               <br />
//                               <a
//                                 href={location.googleMapsUrl}
//                                 target="_blank"
//                                 rel="noopener"
//                               >
//                                 {location.address.split(",").slice(1).join(",")}
//                               </a>
//                             </p>
//                           </>
//                         ) : (
//                           <p>{location.address}</p>
//                         )}
//                       </span>
//                       <a
//                         className="tel ppc-href"
//                         href={`tel:${location.phone}`}
//                         aria-label="Call Goldfingers Aesthetics on the phone"
//                         role="link"
//                       >
//                         <span className="ppc-number">
//                           {location.phoneDisplay}
//                         </span>
//                       </a>
//                     </span>
//                   </span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//         <picture className="background">
//           <source
//             media="(max-width:420px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset={`${backgroundImages?.mapBackground?.mobile || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800"}, ${backgroundImages?.mapBackground?.mobile?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200"} 2x`}
//           />
//           <source
//             media="(max-width:800px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset={`${backgroundImages?.mapBackground?.tablet || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800&q=100"}, ${backgroundImages?.mapBackground?.tablet?.replace("w=800", "w=1200") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200&q=100"} 2x`}
//           />
//           <source
//             media="(max-width:1400px)"
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset={`${backgroundImages?.mapBackground?.desktop || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1400&q=100"}, ${backgroundImages?.mapBackground?.desktop?.replace("w=1400", "w=2100") || "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2100&q=100"} 2x`}
//           />
//           <source
//             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-srcset={
//               backgroundImages?.mapBackground?.large ||
//               "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
//             }
//           />
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             data-lazyload-src={
//               backgroundImages?.mapBackground?.large ||
//               "https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
//             }
//             loading="lazy"
//             data-lazyload="img"
//             width="2200"
//             height="1208"
//             alt="map of florida"
//             draggable="false"
//           />
//         </picture>
//       </div>
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default ContactSection;



// Example usage in a Next.js page
// app/contact/page.tsx (App Router)

import ContactSection from '@/components/ContactSection';

async function getContactData() {
  const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'https://backend-orpin-six-56.vercel.app';

  try {
    const response = await fetch(`${payloadUrl}/api/contact-component`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch contact data');
    }

    const data = await response.json();

    // Assuming you have one contact component, get the first one
    return data.docs[0];
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return null;
  }
}

export default async function ContactPage() {
  const contactData = await getContactData();

  if (!contactData) {
    return <div>Error loading contact page</div>;
  }

  return <ContactSection data={contactData} />;
}

// Alternative: For Pages Router (pages/contact.tsx)
/*
import ContactSection from '@/components/ContactSection';
import { GetStaticProps } from 'next';

interface ContactPageProps {
  contactData: any;
}

export default function ContactPage({ contactData }: ContactPageProps) {
  if (!contactData) {
    return <div>Error loading contact page</div>;
  }

  return <ContactSection data={contactData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';

  try {
    const response = await fetch(`${payloadUrl}/api/contact-component`);

    if (!response.ok) {
      throw new Error('Failed to fetch contact data');
    }

    const data = await response.json();

    return {
      props: {
        contactData: data.docs[0],
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return {
      props: {
        contactData: null,
      },
    };
  }
};
*/
