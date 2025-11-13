// "use client";

// import React, { useState } from "react";

// interface ContactComponentData {
//   contactSection: {
//     backgroundColor: string;
//     infoSection: {
//       heading: string;
//       headingColor: string;
//       phoneNumber: string;
//       phoneColor: string;
//       specialsButton: {
//         text: string;
//         url: string;
//         backgroundColor: string;
//         textColor: string;
//       };
//     };
//     formSection: {
//       backgroundColor: string;
//       subject: string;
//       redirectUrl: string;
//       fields: Array<{
//         fieldType: string;
//         name: string;
//         label?: string;
//         placeholder?: string;
//         required: boolean;
//         options?: Array<{ label: string; value: string }>;
//         defaultValue?: string;
//         rows?: number;
//         cols?: number;
//       }>;
//       submitButton: {
//         text: string;
//         backgroundColor: string;
//         textColor: string;
//       };
//       privacyText: string;
//       privacyLinks: Array<{ text: string; url: string }>;
//     };
//     backgroundImages: {
//       desktopImage?: { url: string; alt?: string };
//       mobileImage?: { url: string; alt?: string };
//     };
//   };
//   locationsBanner: {
//     backgroundColor: string;
//     heading: {
//       smallText: string;
//       mainText: string;
//       color: string;
//     };
//     locations: Array<{
//       name: string;
//       address: string;
//       phone: string;
//       slug: string;
//       mapPosition: {
//         left?: string;
//         top?: string;
//       };
//     }>;
//     mapImage?: { url: string; alt?: string };
//   };
// }

// interface ContactSectionProps {
//   data: ContactComponentData;
// }

// const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
//   const [formData, setFormData] = useState<Record<string, any>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

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
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage("");

//     try {
//       const response = await fetch("/api/contact-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSubmitMessage(
//           "Thank you! Your form has been submitted successfully."
//         );
//         setFormData({});

//         // Redirect after successful submission
//         if (data.contactSection.formSection.redirectUrl) {
//         //   setTimeout(() => {
//         //     window.location.href = data.contactSection.formSection.redirectUrl;
//         //   }, 2000);
//         }
//       } else {
//         setSubmitMessage(
//           "There was an error submitting your form. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setSubmitMessage(
//         "There was an error submitting your form. Please try again."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderFormField = (field: any, index: number) => {
//     const commonProps = {
//       name: field.name,
//       id: `contact_${field.name}`,
//       required: field.required,
//       onChange: handleInputChange,
//       value: formData[field.name] || field.defaultValue || "",
//     };

//     switch (field.fieldType) {
//       case "hidden":
//         return <input key={index} type="hidden" {...commonProps} />;

//       case "text":
//       case "email":
//       case "tel":
//         return (
//           <div key={index} className="field-row col1">
//             <div className={`field ${field.fieldType}`}>
//               {field.label && (
//                 <label htmlFor={commonProps.id}>{field.label}</label>
//               )}
//               {field.required && <small>This field is required.</small>}
//               <input
//                 type={field.fieldType}
//                 placeholder={field.placeholder}
//                 {...commonProps}
//               />
//             </div>
//           </div>
//         );

//       case "textarea":
//         return (
//           <div key={index} className="field-row col1">
//             <div className="field textarea">
//               {field.label && (
//                 <label htmlFor={commonProps.id}>{field.label}</label>
//               )}
//               <textarea
//                 rows={field.rows || 6}
//                 cols={field.cols || 48}
//                 placeholder={field.placeholder}
//                 {...commonProps}
//               />
//             </div>
//           </div>
//         );

//       case "select":
//         return (
//           <div key={index} className="field-row col1">
//             <div className="field select">
//               {field.label && (
//                 <label htmlFor={commonProps.id}>{field.label}</label>
//               )}
//               {field.required && <small>This field is required.</small>}
//               <select {...commonProps}>
//                 <option value="" disabled>
//                   {field.placeholder || "Select an option"}
//                 </option>
//                 {field.options?.map((option: any, optIndex: number) => (
//                   <option key={optIndex} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         );

//       case "checkbox":
//         return (
//           <div key={index} className="field-row col1">
//             <div className="field checkbox">
//               {field.required && <small>This field is required.</small>}
//               <div className="field-item checkbox-item">
//                 <input
//                   type="checkbox"
//                   id={commonProps.id}
//                   name={field.name}
//                   value={field.defaultValue || "Yes"}
//                   onChange={handleInputChange}
//                   checked={formData[field.name] === "Yes"}
//                   required={field.required}
//                 />
//                 {field.label && (
//                   <label htmlFor={commonProps.id}>{field.label}</label>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   console.log(data, 'this is contact data')

//   return (
//     <main id="main">
//       {/* Contact Module */}
//       <div
//         className="mod_contact banner stack phone-background"
//         style={{ backgroundColor: data.contactSection.backgroundColor }}
//       >
//         <div className="row">
//           <section className="info">
//             <h1 style={{ color: data.contactSection.infoSection.headingColor }}>
//               {data.contactSection.infoSection.heading}
//             </h1>
//             <div className="phone">
//               <a
//                 className="tel ppc-href"
//                 href={`tel:${data.contactSection.infoSection.phoneNumber.replace(/[^0-9+]/g, "")}`}
//                 style={{ color: data.contactSection.infoSection.phoneColor }}
//               >
//                 <span className="ppc-number">
//                   {data.contactSection.infoSection.phoneNumber}
//                 </span>
//               </a>
//             </div>
//             <a
//               className="btn"
//               href={data.contactSection.infoSection.specialsButton.url}
//               style={{
//                 backgroundColor:
//                   data.contactSection.infoSection.specialsButton
//                     .backgroundColor,
//                 color: data.contactSection.infoSection.specialsButton.textColor,
//               }}
//             >
//               {data.contactSection.infoSection.specialsButton.text}
//             </a>
//           </section>

//           <section
//             className="content"
//             style={{
//               backgroundColor: data.contactSection.formSection.backgroundColor,
//             }}
//           >
//             <div className="partial_form">
//               <form
//                 id="form_contact"
//                 className="s3-form"
//                 onSubmit={handleSubmit}
//               >
//                 <div className="fields">
//                   {data.contactSection.formSection.fields.map((field, index) =>
//                     renderFormField(field, index)
//                   )}

//                   {data.contactSection.formSection.privacyText && (
//                     <div className="field-row col1">
//                       <div className="section-label follow-up">
//                         <p>
//                           {data.contactSection.formSection.privacyText
//                             .split(/(https?:\/\/[^\s]+)/g)
//                             .map((part, i) => {
//                               const link =
//                                 data.contactSection.formSection.privacyLinks.find(
//                                   (l) =>
//                                     part.includes(l.url) ||
//                                     data.contactSection.formSection.privacyText.includes(
//                                       l.text
//                                     )
//                                 );
//                               return link ? (
//                                 <a key={i} href={link.url}>
//                                   {link.text}
//                                 </a>
//                               ) : (
//                                 part
//                               );
//                             })}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* <div className="submit-holder">
//                   <button
//                     type="submit"
//                     className="submit btn"
//                     disabled={isSubmitting}
//                     style={{
//                       backgroundColor:
//                         data.contactSection.formSection.submitButton
//                           .backgroundColor,
//                       color:
//                         data.contactSection.formSection.submitButton.textColor,
//                     }}
//                   >
//                     {isSubmitting
//                       ? "Submitting..."
//                       : data.contactSection.formSection.submitButton.text}
//                   </button>
//                 </div> */}

//                 <button
//                   type="submit"
//                   className="submit btn"
//                   disabled={isSubmitting}
//                   style={{
//                     backgroundColor:
//                       data.contactSection.formSection.submitButton
//                         .backgroundColor,
//                     color:
//                       data.contactSection.formSection.submitButton.textColor,
//                   }}
//                 >
//                   {isSubmitting
//                     ? "Submitting..."
//                     : data.contactSection.formSection.submitButton.text}
//                 </button>

//                 {submitMessage && (
//                   <div
//                     className={`submit-message ${submitMessage.includes("error") ? "error" : "success"}`}
//                   >
//                     {submitMessage}
//                   </div>
//                 )}
//               </form>
//             </div>
//           </section>
//         </div>

//         {data.contactSection.backgroundImages.desktopImage && (
//           <picture className="background desktop">
//             <img
//               src={data.contactSection.backgroundImages.desktopImage.url}
//               alt={
//                 data.contactSection.backgroundImages.desktopImage.alt ||
//                 "Background"
//               }
//               draggable="false"
//             />
//           </picture>
//         )}

//         {data.contactSection.backgroundImages.mobileImage && (
//           <picture className="background phone">
//             <img
//               src={data.contactSection.backgroundImages.mobileImage.url}
//               alt={
//                 data.contactSection.backgroundImages.mobileImage.alt ||
//                 "Mobile Background"
//               }
//               draggable="false"
//             />
//           </picture>
//         )}
//       </div>

//       {/* Locations Banner Module */}
//       <div
//         className="mod_locations_banner container viewport"
//         style={{ backgroundColor: data.locationsBanner.backgroundColor }}
//       >
//         <div className="row wow fadeIn has-phone-list" data-wow-duration="2s">
//           <div className="inner">
//             <div className="content">
//               <h2 style={{ color: data.locationsBanner.heading.color }}>
//                 <span className="small">
//                   {data.locationsBanner.heading.smallText}
//                 </span>
//                 {data.locationsBanner.heading.mainText}
//               </h2>
//               <div className="phone-list">
//                 {data.locationsBanner.locations.map((location, index) => (
//                   <div key={index} className="inner-list">
//                     <p>{location.name}</p>
//                     <a
//                       className="tel ppc-href"
//                       href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
//                       aria-label={`Call ${location.name}`}
//                     >
//                       <span className="ppc-number">{location.phone}</span>
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="locations">
//               {data.locationsBanner.locations.map(
//                 (location, index) =>
//                   location.mapPosition.left &&
//                   location.mapPosition.top && (
//                     <span
//                       key={index}
//                       className="location"
//                       style={{
//                         left: location.mapPosition.left,
//                         top: location.mapPosition.top,
//                       }}
//                     >
//                       <a
//                         className="pin-link"
//                         aria-label={`${location.name} pin on map`}
//                         href={location.slug}
//                       >
//                         <span className="pin"></span>
//                       </a>
//                       <span className="tip">
//                         <span className="info">
//                           <h3>{location.name}</h3>
//                           <hr />
//                           <span className="address">
//                             <p>{location.address}</p>
//                           </span>
//                           <a
//                             className="tel ppc-href"
//                             href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
//                           >
//                             <span className="ppc-number">{location.phone}</span>
//                           </a>
//                         </span>
//                       </span>
//                     </span>
//                   )
//               )}
//             </div>
//           </div>
//         </div>

//         {data.locationsBanner.mapImage && (
//           <picture className="background">
//             <img
//               src={data.locationsBanner.mapImage.url}
//               alt={data.locationsBanner.mapImage.alt || "Florida map"}
//               draggable="false"
//             />
//           </picture>
//         )}
//       </div>
//     </main>
//   );
// };

// export default ContactSection;

// "use client";

// import React, { useState } from "react";

// interface CloudinaryImage {
//   cloudinary_url?: string;
//   url?: string;
//   filename?: string;
//   width?: number;
//   height?: number;
// }

// interface ContactComponentData {
//   contactSection: {
//     backgroundColor: string;
//     infoSection: {
//       heading: string;
//       headingColor: string;
//       phoneNumber: string;
//       phoneColor: string;
//       specialsButton: {
//         text: string;
//         url: string;
//         backgroundColor: string;
//         textColor: string;
//       };
//     };
//     formSection: {
//       backgroundColor: string;
//       subject: string;
//       redirectUrl: string;
//       fields: Array<{
//         fieldType: string;
//         name: string;
//         label?: string;
//         placeholder?: string;
//         required: boolean;
//         options?: Array<{ label: string; value: string }>;
//         defaultValue?: string;
//         rows?: number;
//         cols?: number;
//       }>;
//       submitButton: {
//         text: string;
//         backgroundColor: string;
//         textColor: string;
//       };
//       privacyText: string;
//       privacyLinks: Array<{ text: string; url: string }>;
//     };
//     backgroundImages?: {
//       desktopImage?: CloudinaryImage;
//       mobileImage?: CloudinaryImage;
//     };
//   };
//   locationsBanner: {
//     backgroundColor: string;
//     heading: {
//       smallText: string;
//       mainText: string;
//       color: string;
//     };
//     locations: Array<{
//       name: string;
//       address: string;
//       phone: string;
//       slug: string;
//       mapPosition: {
//         left?: string;
//         top?: string;
//       };
//     }>;
//     mapImage?: CloudinaryImage;
//   };
// }

// interface ContactSectionProps {
//   data: ContactComponentData;
// }

// const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
//   const [formData, setFormData] = useState<Record<string, any>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

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
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage("");

//     try {
//       const response = await fetch("/api/contact-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSubmitMessage(
//           "Thank you! Your form has been submitted successfully."
//         );
//         setFormData({});

//         // Redirect after successful submission
//         if (data.contactSection.formSection.redirectUrl) {
//           //   setTimeout(() => {
//           //     window.location.href = data.contactSection.formSection.redirectUrl;
//           //   }, 2000);
//         }
//       } else {
//         setSubmitMessage(
//           "There was an error submitting your form. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setSubmitMessage(
//         "There was an error submitting your form. Please try again."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderFormField = (field: any, index: number) => {
//     const commonProps = {
//       name: field.name,
//       id: `contact_${field.name}`,
//       required: field.required,
//       onChange: handleInputChange,
//       value: formData[field.name] || field.defaultValue || "",
//     };

//     switch (field.fieldType) {
//       case "hidden":
//         return <input key={index} type="hidden" {...commonProps} />;

//       case "text":
//       case "email":
//       case "tel":
//         return (
//           <div key={index} className="field-row col1">
//             <div className={`field ${field.fieldType}`}>
//               {field.label && (
//                 <label htmlFor={commonProps.id}>{field.label}</label>
//               )}
//               {field.required && <small>This field is required.</small>}
//               <input
//                 type={field.fieldType}
//                 placeholder={field.placeholder}
//                 {...commonProps}
//               />
//             </div>
//           </div>
//         );

//       case "textarea":
//         return (
//           <div key={index} className="field-row col1">
//             <div className="field textarea">
//               {field.label && (
//                 <label htmlFor={commonProps.id}>{field.label}</label>
//               )}
//               <textarea
//                 rows={field.rows || 6}
//                 cols={field.cols || 48}
//                 placeholder={field.placeholder}
//                 {...commonProps}
//               />
//             </div>
//           </div>
//         );

//       case "select":
//         return (
//           <div key={index} className="field-row col1">
//             <div className="field select">
//               {field.label && (
//                 <label htmlFor={commonProps.id}>{field.label}</label>
//               )}
//               {field.required && <small>This field is required.</small>}
//               <select {...commonProps}>
//                 <option value="" disabled>
//                   {field.placeholder || "Select an option"}
//                 </option>
//                 {field.options?.map((option: any, optIndex: number) => (
//                   <option key={optIndex} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         );

//       case "checkbox":
//         return (
//           <div key={index} className="field-row col1">
//             <div className="field checkbox">
//               {field.required && <small>This field is required.</small>}
//               <div className="field-item checkbox-item">
//                 <input
//                   type="checkbox"
//                   id={commonProps.id}
//                   name={field.name}
//                   value={field.defaultValue || "Yes"}
//                   onChange={handleInputChange}
//                   checked={formData[field.name] === "Yes"}
//                   required={field.required}
//                 />
//                 {field.label && (
//                   <label htmlFor={commonProps.id}>{field.label}</label>
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
//       {/* Contact Module */}
//       <div
//         className="mod_contact banner stack phone-background"
//         style={{ backgroundColor: data.contactSection.backgroundColor }}
//       >
//         <div className="row">
//           <section className="info">
//             <h1 style={{ color: data.contactSection.infoSection.headingColor }}>
//               {data.contactSection.infoSection.heading}
//             </h1>
//             <div className="phone">
//               <a
//                 className="tel ppc-href"
//                 href={`tel:${data.contactSection.infoSection.phoneNumber.replace(/[^0-9+]/g, "")}`}
//                 style={{ color: data.contactSection.infoSection.phoneColor }}
//               >
//                 <span className="ppc-number">
//                   {data.contactSection.infoSection.phoneNumber}
//                 </span>
//               </a>
//             </div>
//             <a
//               className="btn"
//               href={data.contactSection.infoSection.specialsButton.url}
//               style={{
//                 backgroundColor:
//                   data.contactSection.infoSection.specialsButton
//                     .backgroundColor,
//                 color: data.contactSection.infoSection.specialsButton.textColor,
//               }}
//             >
//               {data.contactSection.infoSection.specialsButton.text}
//             </a>
//           </section>

//           <section
//             className="content"
//             style={{
//               backgroundColor: data.contactSection.formSection.backgroundColor,
//             }}
//           >
//             <div className="partial_form">
//               <form
//                 id="form_contact"
//                 className="s3-form"
//                 onSubmit={handleSubmit}
//               >
//                 <div className="fields">
//                   {data.contactSection.formSection.fields.map((field, index) =>
//                     renderFormField(field, index)
//                   )}

//                   {data.contactSection.formSection.privacyText && (
//                     <div className="field-row col1">
//                       <div className="section-label follow-up">
//                         <p>
//                           {data.contactSection.formSection.privacyText
//                             .split(/(https?:\/\/[^\s]+)/g)
//                             .map((part, i) => {
//                               const link =
//                                 data.contactSection.formSection.privacyLinks.find(
//                                   (l) =>
//                                     part.includes(l.url) ||
//                                     data.contactSection.formSection.privacyText.includes(
//                                       l.text
//                                     )
//                                 );
//                               return link ? (
//                                 <a key={i} href={link.url}>
//                                   {link.text}
//                                 </a>
//                               ) : (
//                                 part
//                               );
//                             })}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   className="submit btn"
//                   disabled={isSubmitting}
//                   style={{
//                     backgroundColor:
//                       data.contactSection.formSection.submitButton
//                         .backgroundColor,
//                     color:
//                       data.contactSection.formSection.submitButton.textColor,
//                   }}
//                 >
//                   {isSubmitting
//                     ? "Submitting..."
//                     : data.contactSection.formSection.submitButton.text}
//                 </button>

//                 {submitMessage && (
//                   <div
//                     className={`submit-message ${submitMessage.includes("error") ? "error" : "success"}`}
//                   >
//                     {submitMessage}
//                   </div>
//                 )}
//               </form>
//             </div>
//           </section>
//         </div>

//         {/* Desktop Background Image from Cloudinary */}
//         {data.contactSection.backgroundImages?.desktopImage?.cloudinary_url && (
//           <picture className="background desktop">
//             <img
//               src={
//                 data.contactSection.backgroundImages.desktopImage.cloudinary_url
//               }
//               alt={
//                 data.contactSection.backgroundImages.desktopImage.filename ||
//                 "Contact Background"
//               }
//               draggable="false"
//             />
//           </picture>
//         )}

//         {/* Mobile Background Image from Cloudinary */}
//         {data.contactSection.backgroundImages?.mobileImage?.cloudinary_url && (
//           <picture className="background phone">
//             <img
//               src={
//                 data.contactSection.backgroundImages.mobileImage.cloudinary_url
//               }
//               alt={
//                 data.contactSection.backgroundImages.mobileImage.filename ||
//                 "Mobile Background"
//               }
//               draggable="false"
//             />
//           </picture>
//         )}
//       </div>

//       {/* Locations Banner Module */}
//       <div
//         className="mod_locations_banner container viewport"
//         style={{ backgroundColor: data.locationsBanner.backgroundColor }}
//       >
//         <div className="row wow fadeIn has-phone-list" data-wow-duration="2s">
//           <div className="inner">
//             <div className="content">
//               <h2 style={{ color: data.locationsBanner.heading.color }}>
//                 <span className="small">
//                   {data.locationsBanner.heading.smallText}
//                 </span>
//                 {data.locationsBanner.heading.mainText}
//               </h2>
//               <div className="phone-list">
//                 {data.locationsBanner.locations.map((location, index) => (
//                   <div key={index} className="inner-list">
//                     <p>{location.name}</p>
//                     <a
//                       className="tel ppc-href"
//                       href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
//                       aria-label={`Call ${location.name}`}
//                     >
//                       <span className="ppc-number">{location.phone}</span>
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="locations">
//               {data.locationsBanner.locations.map(
//                 (location, index) =>
//                   location.mapPosition.left &&
//                   location.mapPosition.top && (
//                     <span
//                       key={index}
//                       className="location"
//                       style={{
//                         left: location.mapPosition.left,
//                         top: location.mapPosition.top,
//                       }}
//                     >
//                       <a
//                         className="pin-link"
//                         aria-label={`${location.name} pin on map`}
//                         href={location.slug}
//                       >
//                         <span className="pin"></span>
//                       </a>
//                       <span className="tip">
//                         <span className="info">
//                           <h3>{location.name}</h3>
//                           <hr />
//                           <span className="address">
//                             <p>{location.address}</p>
//                           </span>
//                           <a
//                             className="tel ppc-href"
//                             href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
//                           >
//                             <span className="ppc-number">{location.phone}</span>
//                           </a>
//                         </span>
//                       </span>
//                     </span>
//                   )
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Map Background from Cloudinary */}
//         {data.locationsBanner.mapImage?.cloudinary_url && (
//           <picture className="background">
//             <img
//               src={data.locationsBanner.mapImage.cloudinary_url}
//               alt={data.locationsBanner.mapImage.filename || "Florida map"}
//               draggable="false"
//             />
//           </picture>
//         )}
//       </div>
//     </main>
//   );
// };

// export default ContactSection;

"use client"; 

import React, { useState } from "react";

interface CloudinaryImage {
  cloudinary_url?: string;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
}

interface ContactComponentData {
  contactSection: {
    backgroundColor: string;
    infoSection: {
      heading: string;
      headingColor: string;
      phoneNumber: string;
      phoneColor: string;
      specialsButton: {
        text: string;
        url: string;
        backgroundColor: string;
        textColor: string;
      };
    };
    formSection: {
      backgroundColor: string;
      subject: string;
      redirectUrl: string;
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
      submitButton: {
        text: string;
        backgroundColor: string;
        textColor: string;
      };
      privacyText: string;
      privacyLinks: Array<{ text: string; url: string }>;
    };
    backgroundImages?: {
      desktopImage?: CloudinaryImage;
      mobileImage?: CloudinaryImage;
    };
  };
  locationsBanner: {
    backgroundColor: string;
    heading: {
      smallText: string;
      mainText: string;
      color: string;
    };
    locations: Array<{
      id?: string;
      name: string;
      address: string;
      phone: string;
      slug: string;
      mapPosition: {
        left?: string;
        top?: string;
      };
    }>;
    mapImage?: CloudinaryImage;
  };
}

interface ContactSectionProps {
  data: ContactComponentData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
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

  // Special handler for location select to capture both ID and name
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocationId = e.target.value;
    const selectedLocation = data.locationsBanner.locations.find(
      (loc) => (loc.id || loc.name) === selectedLocationId
    );

    setFormData((prev) => ({
      ...prev,
      location_id: selectedLocationId,
      location_name: selectedLocation?.name || "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(
          "Thank you! Your form has been submitted successfully."
        );
        setFormData({});

        // Redirect after successful submission
        if (data.contactSection.formSection.redirectUrl) {
          //   setTimeout(() => {
          //     window.location.href = data.contactSection.formSection.redirectUrl;
          //   }, 2000);
        }
      } else {
        setSubmitMessage(
          "There was an error submitting your form. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage(
        "There was an error submitting your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormField = (field: any, index: number) => {
    // Special handling for location field
    if (field.name === "location_id" || field.fieldType === "location") {
      return (
        <div key={index} className="field-row col1">
          <div className="field select">
            {field.label && (
              <label htmlFor="contact_location_id">{field.label}</label>
            )}
            {field.required && <small>This field is required.</small>}
            <select
              name="location_id"
              id="contact_location_id"
              required={field.required}
              onChange={handleLocationChange}
              value={formData.location_id || ""}
            >
              <option value="" disabled>
                {field.placeholder || "Select a location"}
              </option>
              {data.locationsBanner.locations.map((location, locIndex) => (
                <option key={locIndex} value={location.id || location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }

    const commonProps = {
      name: field.name,
      id: `contact_${field.name}`,
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
                placeholder={field.placeholder}
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
                {...commonProps}
              />
            </div>
          </div>
        );

      case "select":
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
        return (
          <div key={index} className="field-row col1">
            <div className="field checkbox">
              {field.required && <small>This field is required.</small>}
              <div className="field-item checkbox-item">
                <input
                  type="checkbox"
                  id={commonProps.id}
                  name={field.name}
                  value={field.defaultValue || "Yes"}
                  onChange={handleInputChange}
                  checked={formData[field.name] === "Yes"}
                  required={field.required}
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
      {/* Contact Module */}
      <div
        className="mod_contact banner stack phone-background"
        style={{ backgroundColor: data.contactSection.backgroundColor }}
      >
        <div className="row">
          <section className="info">
            <h1 style={{ color: data.contactSection.infoSection.headingColor }}>
              {data.contactSection.infoSection.heading}
            </h1>
            {/* <div className="phone">
              <a
                className="tel ppc-href"
                href={`tel:${data.contactSection.infoSection.phoneNumber.replace(/[^0-9+]/g, "")}`}
                style={{ color: data.contactSection.infoSection.phoneColor }}
              >
                <span className="ppc-number">
                  {data.contactSection.infoSection.phoneNumber}
                </span>
              </a>
            </div> */}
            {/* <a
              className="btn"
              href={data.contactSection.infoSection.specialsButton.url}
              style={{
                backgroundColor:
                  data.contactSection.infoSection.specialsButton
                    .backgroundColor,
                color: data.contactSection.infoSection.specialsButton.textColor,
              }}
            >
              {data.contactSection.infoSection.specialsButton.text}
            </a> */}
          </section>

          <section
            className="content"
            style={{
              backgroundColor: data.contactSection.formSection.backgroundColor,
            }}
          >
            <div className="partial_form">
              <form
                id="form_contact"
                className="s3-form"
                onSubmit={handleSubmit}
              >
                <div className="fields">
                  {data.contactSection.formSection.fields.map((field, index) =>
                    renderFormField(field, index)
                  )}

                  {/* Hidden fields for location data */}
                  <input
                    type="hidden"
                    name="location_name"
                    value={formData.location_name || ""}
                  />

                  {data.contactSection.formSection.privacyText && (
                    <div className="field-row col1">
                      <div className="section-label follow-up">
                        <p>
                          {data.contactSection.formSection.privacyText
                            .split(/(https?:\/\/[^\s]+)/g)
                            .map((part, i) => {
                              const link =
                                data.contactSection.formSection.privacyLinks.find(
                                  (l) =>
                                    part.includes(l.url) ||
                                    data.contactSection.formSection.privacyText.includes(
                                      l.text
                                    )
                                );
                              return link ? (
                                <a key={i} href={link.url}>
                                  {link.text}
                                </a>
                              ) : (
                                part
                              );
                            })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit btn"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor:
                      data.contactSection.formSection.submitButton
                        .backgroundColor,
                    color:
                      data.contactSection.formSection.submitButton.textColor,
                  }}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : data.contactSection.formSection.submitButton.text}
                </button>

                {submitMessage && (
                  <div
                    className={`submit-message ${submitMessage.includes("error") ? "error" : "success"}`}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </section>
        </div>

        {/* Desktop Background Image from Cloudinary */}
        {data.contactSection.backgroundImages?.desktopImage?.cloudinary_url && (
          <picture className="background desktop">
            <img
              src={
                data.contactSection.backgroundImages.desktopImage.cloudinary_url
              }
              alt={
                data.contactSection.backgroundImages.desktopImage.filename ||
                "Contact Background"
              }
              draggable="false"
            />
          </picture>
        )}

        {/* Mobile Background Image from Cloudinary */}
        {data.contactSection.backgroundImages?.mobileImage?.cloudinary_url && (
          <picture className="background phone">
            <img
              src={
                data.contactSection.backgroundImages.mobileImage.cloudinary_url
              }
              alt={
                data.contactSection.backgroundImages.mobileImage.filename ||
                "Mobile Background"
              }
              draggable="false"
            />
          </picture>
        )}
      </div>

      {/* Locations Banner Module */}
      <div
        className="mod_locations_banner container viewport"
        style={{ backgroundColor: data.locationsBanner.backgroundColor }}
      >
        <div className="row wow fadeIn has-phone-list" data-wow-duration="2s">
          <div className="inner">
            <div className="content">
              <h2 style={{ color: data.locationsBanner.heading.color }}>
                <span className="small">
                  {data.locationsBanner.heading.smallText}
                </span>
                {data.locationsBanner.heading.mainText}
              </h2>
              <div className="phone-list">
                {data.locationsBanner.locations.map((location, index) => (
                  <div key={index} className="inner-list">
                    <p>{location.name}</p>
                    <a
                      className="tel ppc-href"
                      href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                      aria-label={`Call ${location.name}`}
                    >
                      <span className="ppc-number">{location.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="locations">
              {data.locationsBanner.locations.map(
                (location, index) =>
                  location.mapPosition.left &&
                  location.mapPosition.top && (
                    <span
                      key={index}
                      className="location"
                      style={{
                        left: location.mapPosition.left,
                        top: location.mapPosition.top,
                      }}
                    >
                      <a
                        className="pin-link"
                        aria-label={`${location.name} pin on map`}
                        href={location.slug}
                      >
                        <span className="pin"></span>
                      </a>
                      <span className="tip">
                        <span className="info">
                          <h3>{location.name}</h3>
                          <hr />
                          <span className="address">
                            <p>{location.address}</p>
                          </span>
                          <a
                            className="tel ppc-href"
                            href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                          >
                            <span className="ppc-number">{location.phone}</span>
                          </a>
                        </span>
                      </span>
                    </span>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Map Background from Cloudinary */}
        {data.locationsBanner.mapImage?.cloudinary_url && (
          <picture className="background">
            <img
              src={data.locationsBanner.mapImage.cloudinary_url}
              alt={data.locationsBanner.mapImage.filename || "Florida map"}
              draggable="false"
            />
          </picture>
        )}
      </div>
    </main>
  );
};

export default ContactSection;