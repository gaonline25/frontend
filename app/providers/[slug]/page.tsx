// // // // "use client";

// // // // import React, { useState } from "react";

// // // // export default function BriaBennieProfile() {
// // // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // // //   const [chatMessage, setChatMessage] = useState("");
// // // //   const [webAccess, setWebAccess] = useState(false);

// // // //   const locations = [
// // // //     {
// // // //       id: 165421400,
// // // //       name: "Lake Mary",
// // // //       phone: "(407) 333-4300",
// // // //       image:
// // // //         "https://www.datocms-assets.com/105497/1694093854-lake-mary.jpg?auto=format,compress",
// // // //     },
// // // //     {
// // // //       id: 165421211,
// // // //       name: "Clermont",
// // // //       phone: "(407) 333-4300",
// // // //       image:
// // // //         "https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress",
// // // //     },
// // // //     {
// // // //       id: 178932259,
// // // //       name: "Lake Nona",
// // // //       phone: "(407) 333-4300",
// // // //       image:
// // // //         "https://www.datocms-assets.com/105497/1738697899-lake-nona.jpg?auto=format,compress",
// // // //     },
// // // //     {
// // // //       id: 165421415,
// // // //       name: "Orlando / Dr. Phillips",
// // // //       phone: "(407) 333-4300",
// // // //       image:
// // // //         "https://www.datocms-assets.com/105497/1694093930-orlando.jpg?auto=format,compress",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <html lang="en">
// // // //       <body className="about meet-the-team bria-bennie sub sticky-header wow-enabled">
// // // //         <main id="main">
// // // //           <div className="container main">
// // // //             <div className="abstract-page provider-page">
// // // //               <div className="main-entry clearfix" data-s3-module="">
// // // //                 {/* Hero Section */}
// // // //                 <div className="row grid half-image-row">
// // // //                   <div className="media">
// // // //                     <picture className="">
// // // //                       <img
// // // //                         src="https://www.datocms-assets.com/105497/1696451062-bria-bennie.jpg?auto=format,compress"
// // // //                         loading="lazy"
// // // //                         alt="Bria Bennie"
// // // //                         draggable="false"
// // // //                         data-api-key="media"
// // // //                       />
// // // //                     </picture>
// // // //                   </div>
// // // //                   <div className="copy">
// // // //                     <div className="inner" data-api-key="bio">
// // // //                       <h1 className="entry-title">
// // // //                         Bria Bennie<span className="credentials">PA-C</span>
// // // //                       </h1>

// // // //                       <div className="bio">
// // // //                         <p>
// // // //                           <span style={{ fontWeight: 400 }}>
// // // //                             Bria Bennie is our superstar-certified physician
// // // //                             assistant with over 15 years of industry experience.
// // // //                             With her vast knowledge, attention to detail, and
// // // //                             outgoing personality, Bria is the perfect choice for
// // // //                             anyone looking to enhance their natural beauty with
// // // //                             facial injections.
// // // //                           </span>
// // // //                         </p>
// // // //                         <p>
// // // //                           <span style={{ fontWeight: 400 }}>
// // // //                             Bria's individualized treatment approach is
// // // //                             genuinely one-of-a-kind. She takes the time to
// // // //                             create customized treatment plans tailored to each
// // // //                             person's unique anatomic needs and aesthetic goals.
// // // //                             Whether you're looking to smooth out fine lines and
// // // //                             wrinkles or add a little volume to your lips, Bria
// // // //                             has the skills and expertise to help you achieve
// // // //                             your desired results.
// // // //                           </span>
// // // //                         </p>
// // // //                         <p>
// // // //                           <span style={{ fontWeight: 400 }}>
// // // //                             As a PA-C at Goldfingers, Bria is highly skilled and
// // // //                             well-trained in aesthetic injections. Her confidence
// // // //                             and passion for her work shine through in every
// // // //                             client she treats. She's dedicated to helping her
// // // //                             clients look and feel their best and is committed to
// // // //                             staying up-to-date on the latest techniques and
// // // //                             technologies in the field.
// // // //                           </span>
// // // //                         </p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Experience & Specialties */}
// // // //                 <div className="row extras">
// // // //                   <div className="item">
// // // //                     <h3>Experience</h3>
// // // //                     <div className="content">
// // // //                       <ul>
// // // //                         <li>
// // // //                           <span style={{ fontWeight: 400 }}>
// // // //                             Certified Physician Assistant;{" "}
// // // //                           </span>
// // // //                           more than{" "}
// // // //                           <span style={{ fontWeight: 400 }}>
// // // //                             15 years of industry experience
// // // //                           </span>
// // // //                         </li>
// // // //                       </ul>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="item">
// // // //                     <h3>Specialties</h3>
// // // //                     <div className="content">
// // // //                       <ul>
// // // //                         <li>
// // // //                           <span style={{ fontWeight: 400 }}>
// // // //                             Aesthetic injections
// // // //                           </span>
// // // //                         </li>
// // // //                       </ul>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Locations & Map */}
// // // //                 <div className="row bottom">
// // // //                   <div className="half">
// // // //                     <h3></h3>
// // // //                     <div className="locations">
// // // //                       {locations.map((location) => (
// // // //                         <div
// // // //                           key={location.id}
// // // //                           className="location result"
// // // //                           data-type="location"
// // // //                           data-id={location.id}
// // // //                         >
// // // //                           <a
// // // //                             href={`/${location.name
// // // //                               .toLowerCase()
// // // //                               .replace(" / ", "-")
// // // //                               .replace(" ", "-")}/`}
// // // //                             className="media"
// // // //                           >
// // // //                             <picture className="background">
// // // //                               <img
// // // //                                 src={location.image}
// // // //                                 loading="lazy"
// // // //                                 alt={location.name}
// // // //                                 draggable="false"
// // // //                               />
// // // //                             </picture>
// // // //                             <span className="title">{location.name}</span>
// // // //                           </a>
// // // //                           <div className="info">
// // // //                             <a
// // // //                               className="tel ppc-href"
// // // //                               href={`tel:+14073334300`}
// // // //                               aria-label={`Call ${location.name} on the phone`}
// // // //                               role="button"
// // // //                             >
// // // //                               <span className="ppc-number">
// // // //                                 {location.phone}
// // // //                               </span>
// // // //                             </a>
// // // //                             <a
// // // //                               href={`/contact/?location=${location.id}`}
// // // //                               data-type="Provider"
// // // //                               data-label={`Bria Bennie - ${location.name}`}
// // // //                               className="btn"
// // // //                               data-add-utm="true"
// // // //                             >
// // // //                               Schedule
// // // //                             </a>
// // // //                           </div>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="half">
// // // //                     <p className="intro"></p>
// // // //                     <div className="partial_locator_minimap">
// // // //                       <div
// // // //                         className="minimap-section"
// // // //                         style={{
// // // //                           overflow: "hidden",
// // // //                           height: "300px",
// // // //                           backgroundColor: "#e5e3df",
// // // //                         }}
// // // //                       >
// // // //                         {/* Map placeholder */}
// // // //                         <div
// // // //                           style={{
// // // //                             width: "100%",
// // // //                             height: "100%",
// // // //                             display: "flex",
// // // //                             alignItems: "center",
// // // //                             justifyContent: "center",
// // // //                             color: "#999",
// // // //                           }}
// // // //                         >
// // // //                           Map Loading...
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* CTA Section */}
// // // //           <div className="partial_cta_sub wow fadeInDown viewport">
// // // //             <div className="row">
// // // //               <div className="text">
// // // //                 <h2>
// // // //                   <a href="/contact/">
// // // //                     <span className="small">enhance your natural beauty</span>
// // // //                     Schedule a Consultation
// // // //                   </a>
// // // //                 </h2>
// // // //                 <p className="italics" role="heading" aria-level="1">
// // // //                   "I'm always treated as a member of their family. They're very
// // // //                   helpful and honest. I would recommend my friends to get any
// // // //                   treatment here with confidence!"
// // // //                 </p>
// // // //                 <a href="/contact/" className="btn">
// // // //                   Book an Appointment
// // // //                 </a>
// // // //               </div>
// // // //               <div className="media">
// // // //                 <p className="title">
// // // //                   <span className="block">Enhance Your</span> Natural Beauty
// // // //                 </p>
// // // //                 <div className="desktop-image">
// // // //                   <picture className="background">
// // // //                     <img
// // // //                       src="https://www.datocms-assets.com/105497/1720632514-subcta.jpg?auto=format,compress&w=1742"
// // // //                       loading="lazy"
// // // //                       alt="Contact us media"
// // // //                       draggable="false"
// // // //                     />
// // // //                   </picture>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </main>

// // // //         {/* Sidebar Chat Widget */}
// // // //         <div id="aifnmjmchg" className="aifnmjmchg dark" data-v-app="">
// // // //           <div
// // // //             id="aifnmjmchg-container"
// // // //             className={`${sidebarOpen ? "open" : "close"}-sidebar`}
// // // //           >
// // // //             <div id="aifnmjmchg-sidebar">
// // // //               <div
// // // //                 id="ai-aifnmjmchgsidebar"
// // // //                 className="aifnmjmchg-flex aifnmjmchg-w-full aifnmjmchg-h-full aifnmjmchg-overflow-hidden"
// // // //               >
// // // //                 <div
// // // //                   className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-w-[calc(100%_-_60px)]"
// // // //                   id="aifnmjmchg-sidebar-chat"
// // // //                 >
// // // //                   <div className="aifnmjmchg-header aifnmjmchg-flex-shrink">
// // // //                     <nav className="aifnmjmchg-w-full aifnmjmchg-bg-[transparent]">
// // // //                       <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-w-full aifnmjmchg-p-0">
// // // //                         <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between aifnmjmchg-w-full">
// // // //                           <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between">
// // // //                             <span
// // // //                               name="logo"
// // // //                               className="aifnmjmchg-w-8 aifnmjmchg-h-8"
// // // //                             >
// // // //                               <svg
// // // //                                 className="aifnmjmchg-w-8 aifnmjmchg-h-8 aifnmjmchg-logo-dark aifnmjmchg-logo aifnmjmchg-p-0.5"
// // // //                                 xmlns="http://www.w3.org/2000/svg"
// // // //                                 viewBox="0 0 830.12 868.33"
// // // //                               >
// // // //                                 <path
// // // //                                   fill="currentColor"
// // // //                                   d="M424.14,825.57c-114.47,0-207.59-93.13-207.59-207.59V261.32c0-114.46,93.12-207.59,207.59-207.59s207.59,93.13,207.59,207.59V618C631.73,732.44,538.6,825.57,424.14,825.57Zm0-713.31c-82.19,0-149.06,66.87-149.06,149.06V618C275.08,700.17,342,767,424.14,767S573.2,700.17,573.2,618V261.32C573.2,179.13,506.33,112.26,424.14,112.26Z"
// // // //                                 />
// // // //                                 <path
// // // //                                   fill="currentColor"
// // // //                                   d="M578.23,736.49a206.33,206.33,0,0,1-103.45-27.9L165.91,530.27a207.59,207.59,0,0,1-76-283.58c57.24-99.13,184.45-133.21,283.58-76L682.37,349c99.13,57.23,133.22,184.45,76,283.58A206.21,206.21,0,0,1,632.3,729.33,208.85,208.85,0,0,1,578.23,736.49ZM270,201.45A149.18,149.18,0,0,0,140.61,276C99.52,347.13,124,438.48,195.17,479.58L504,657.9c71.18,41.1,162.53,16.63,203.62-54.56h0A149.06,149.06,0,0,0,653.1,399.72L344.23,221.39A148.22,148.22,0,0,0,270,201.45Z"
// // // //                                 />
// // // //                                 <path
// // // //                                   fill="currentColor"
// // // //                                   d="M270,736.49A208.9,208.9,0,0,1,216,729.33,207.59,207.59,0,0,1,165.91,349L474.78,170.7c99.12-57.23,226.34-23.14,283.57,76h0c57.24,99.13,23.15,226.34-76,283.58L373.5,708.59A206.37,206.37,0,0,1,270,736.49Zm308.28-535A148.15,148.15,0,0,0,504,221.39L195.17,399.72A149.06,149.06,0,0,0,344.23,657.9L653.1,479.58c71.18-41.1,95.66-132.44,54.56-203.62L733,261.32,707.66,276A149.15,149.15,0,0,0,578.32,201.45Z"
// // // //                                 />
// // // //                               </svg>
// // // //                             </span>
// // // //                             <div className="aifnmjmchg-self-center aifnmjmchg-text-base aifnmjmchg-text-black aifnmjmchg-ml-2 dark:aifnmjmchg-text-gray-200 aifnmjmchg-whitespace-nowrap">
// // // //                               Chat
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </nav>
// // // //                   </div>

// // // //                   {/* Chat Messages Area */}
// // // //                   <div id="ai-aifnmjmchgsidebar-content" className="false">
// // // //                     <div className="aifnmjmchg-h-[calc(100vh_-_70px)] aifnmjmchg-flex aifnmjmchg-flex-col">
// // // //                       <div
// // // //                         id="ai-aifnmjmchgmessage-container"
// // // //                         className="aifnmjmchg-flex aifnmjmchg-relative aifnmjmchg-flex-grow aifnmjmchg-w-full aifnmjmchg-overflow-x-hidden"
// // // //                       >
// // // //                         <div className="aifnmjmchg-w-full">
// // // //                           <div className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-h-full aifnmjmchg-space-y-3">
// // // //                             <div
// // // //                               id="aifnmjmchg-example"
// // // //                               className="aifnmjmchg-p-2"
// // // //                             >
// // // //                               <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between aifnmjmchg-p-3 aifnmjmchg-space-x-3 aifnmjmchg-border aifnmjmchg-rounded-xl aifnmjmchg-bg-neutral-100 dark:aifnmjmchg-bg-neutral-900 dark:aifnmjmchg-text-neutral-200 aifnmjmchg-cursor-pointer">
// // // //                                 <div>
// // // //                                   <p className="aifnmjmchg-font-bold">
// // // //                                     🤓 Explain a complex thing
// // // //                                   </p>
// // // //                                   <p className="aifnmjmchg-opacity-60 aifnmjmchg-text-[11px] example_content">
// // // //                                     Explain Artificial Intelligence so I can
// // // //                                     explain it to my six-year-old child.
// // // //                                   </p>
// // // //                                 </div>
// // // //                               </div>
// // // //                             </div>

// // // //                             <div
// // // //                               id="aifnmjmchg-message"
// // // //                               className="aifnmjmchg-h-full"
// // // //                             >
// // // //                               <div
// // // //                                 aria-details="chat-key-0"
// // // //                                 className="aifnmjmchg-bg-neutral-100 dark:aifnmjmchg-bg-neutral-900 dark:aifnmjmchg-text-gray-200"
// // // //                               >
// // // //                                 <div className="aifnmjmchg-flex aifnmjmchg-p-2 aifnmjmchg-text-[10px] dark:aifnmjmchg-text-gray-200 aifnmjmchg-flex-col aifnmjmchg-items-start aifnmjmchg-justify-start aifnmjmchg-gap-2">
// // // //                                   <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-space-x-2">
// // // //                                     <span>AITOPIA</span>
// // // //                                   </div>
// // // //                                 </div>
// // // //                                 <div className="dark:aifnmjmchg-bg-neutral-900 aifnmjmchg-px-6 aifnmjmchg-py-4 ai_result_container">
// // // //                                   <div className="aifnmjmchg-flex aifnmjmchg-flex-col">
// // // //                                     <div className="aifnmjmchg-flex aifnmjmchg-flex-row aifnmjmchg-items-center">
// // // //                                       <div className="ai_result">
// // // //                                         Hello, how can I help you today?
// // // //                                         <br />
// // // //                                       </div>
// // // //                                     </div>
// // // //                                   </div>
// // // //                                 </div>
// // // //                               </div>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>

// // // //                       {/* Chat Input */}
// // // //                       <div className="aifnmjmchg-px-3 aifnmjmchg-pt-3">
// // // //                         <div className="aifnmjmchg-flex aifnmjmchg-relative aifnmjmchg-w-full aifnmjmchg-items-center aifnmjmchg-justify-start aifnmjmchg-my-3">
// // // //                           <div className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-relative aifnmjmchg-items-end aifnmjmchg-p-1 aifnmjmchg-space-x-1 aifnmjmchg-border aifnmjmchg-rounded-xl aifnmjmchg-h-[140px] aifnmjmchg-w-full">
// // // //                             <textarea
// // // //                               name="ask"
// // // //                               className="aifnmjmchg-selection-container aifnmjmchg-ai-aifnmjmchgtext-item aifnmjmchg-relative aifnmjmchg-w-full aifnmjmchg-h-full aifnmjmchg-p-1 aifnmjmchg-border-0 focus:aifnmjmchg-border-0 focus:aifnmjmchg-shadow-none aifnmjmchg-outline-none aifnmjmchg-resize-none dark:aifnmjmchg-bg-neutral-700 dark:aifnmjmchg-text-neutral-200"
// // // //                               id="ask"
// // // //                               rows="4"
// // // //                               placeholder="Ask me anything..."
// // // //                               value={chatMessage}
// // // //                               onChange={(e) => setChatMessage(e.target.value)}
// // // //                             />
// // // //                             <div className="aifnmjmchg-flex aifnmjmchg-w-full aifnmjmchg-justify-between aifnmjmchg-items-center aifnmjmchg-gap-2 aifnmjmchg-p-0.5">
// // // //                               <div className="aifnmjmchg-flex aifnmjmchg-gap-1.5 aifnmjmchg-ml-1.5">
// // // //                                 <label className="aifnmjmchg-relative aifnmjmchg-inline-flex aifnmjmchg-items-center aifnmjmchg-cursor-pointer">
// // // //                                   <input
// // // //                                     type="checkbox"
// // // //                                     className="aifnmjmchg-ai-aifnmjmchgweb-access-checkbox aifnmjmchg-sr-only aifnmjmchg-peer"
// // // //                                     checked={webAccess}
// // // //                                     onChange={(e) =>
// // // //                                       setWebAccess(e.target.checked)
// // // //                                     }
// // // //                                   />
// // // //                                   <div className="aifnmjmchg-w-7 aifnmjmchg-h-4 aifnmjmchg-bg-neutral-200 aifnmjmchg-rounded-full aifnmjmchg-peer peer-focus:aifnmjmchg-ring-3 dark:peer-focus:aifnmjmchg-ring-[var(--aifnmjmchg-link-color)] dark:aifnmjmchg-bg-neutral-700 peer-checked:after:aifnmjmchg-translate-x-full rtl:peer-checked:after:-aifnmjmchg-translate-x-full peer-checked:after:aifnmjmchg-border-white after:aifnmjmchg-content-[''] after:aifnmjmchg-absolute after:aifnmjmchg-top-0.5 after:aifnmjmchg-start-[2px] after:aifnmjmchg-bg-white after:aifnmjmchg-border-neutral-300 after:aifnmjmchg-border after:aifnmjmchg-rounded-full after:aifnmjmchg-h-3 after:aifnmjmchg-w-3 after:aifnmjmchg-transition-all dark:aifnmjmchg-border-neutral-600 peer-checked:aifnmjmchg-bg-[var(--aifnmjmchg-link-color)]" />
// // // //                                   <span className="aifnmjmchg-ms-1.5 aifnmjmchg-text-xs aifnmjmchg-font-medium aifnmjmchg-text-[var(--aifnmjmchg-link-color)] aifnmjmchg-opacity-60 aifnmjmchg-transition-all aifnmjmchg-select-none peer-checked:aifnmjmchg-opacity-100">
// // // //                                     Web Access
// // // //                                   </span>
// // // //                                 </label>
// // // //                               </div>
// // // //                               <button className="aifnmjmchg-flex aifnmjmchg-gap-4">
// // // //                                 <img
// // // //                                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAz0lEQVR4nN3VoU7CURSH8Y9IsNAwSjDZfALGeAgak2IxWbXpE5jceIZ/hsRG+j8BFDpJosnirnO7bMY/jPNX+W3fdu++O7v3nMOxpokRhjiLkjwiZda4zeKDpvgh2bLCACeRki2LLAuVpEyJbrQkZWa4jpYkfOY7l7tIxjtKUuYDLzivIrnABG97yt7xhFbVqtro4Q6vmGNTUfZ97h4Ne+YKz1hWkPV/rZIOptFvMq7jdxV19EnxVzq+jJxdi8gpfPB98lDHZjzFTfSO92/zBcBszGtUUreMAAAAAElFTkSuQmCC"
// // // //                                   alt="Send"
// // // //                                   className="aifnmjmchg-w-5 aifnmjmchg-h-5"
// // // //                                 />
// // // //                               </button>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </body>
// // // //     </html>
// // // //   );
// // // // }

// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "next/navigation";

// // // export default function ProviderProfile() {
// // //   const params = useParams();
// // //   const slug = params.slug;

// // //   console.log(slug, 'this is slug')

// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [chatMessage, setChatMessage] = useState("");
// // //   const [webAccess, setWebAccess] = useState(false);
// // //   const [provider, setProvider] = useState(null);
// // //   const [locations, setLocations] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchProviderData = async () => {
// // //       try {
// // //         setLoading(true);

// // //         // Fetch provider by slug
// // //         const providerRes = await fetch(
// // //           `https://backend-orpin-six-56.vercel.app/api/providers?where[slug][equals]=${slug}&depth=2`
// // //         );
// // //         const providerData = await providerRes.json();

// // //         if (providerData.docs && providerData.docs.length > 0) {
// // //           const providerInfo = providerData.docs[0];

// // //           // Extract provider data
// // //           const transformedProvider = {
// // //             id: providerInfo.id,
// // //             name: providerInfo.name,
// // //             title: providerInfo.title,
// // //             image:
// // //               providerInfo.image?.cloudinary_url ||
// // //               providerInfo.image?.url ||
// // //               "",
// // //             bio: providerInfo.bio,
// // //             specialties: providerInfo.specialties || [],
// // //             experience: providerInfo.experience || [],
// // //             education: providerInfo.education || [],
// // //             certifications: providerInfo.certifications || [],
// // //             languages: providerInfo.languages || [],
// // //             reviews: providerInfo.reviews,
// // //             slug: providerInfo.slug,
// // //           };

// // //           // Extract locations (primary + additional)
// // //           const allLocations = [];

// // //           if (
// // //             providerInfo.primaryLocation &&
// // //             typeof providerInfo.primaryLocation === "object"
// // //           ) {
// // //             const loc = providerInfo.primaryLocation;
// // //             allLocations.push({
// // //               id: loc.id,
// // //               name: loc.name,
// // //               phone: loc.phone,
// // //               image: loc.image?.cloudinary_url || loc.image?.url || "",
// // //               alt: loc.alt,
// // //               address: loc.address,
// // //               slug: loc.slug,
// // //             });
// // //           }

// // //           if (
// // //             providerInfo.additionalLocations &&
// // //             Array.isArray(providerInfo.additionalLocations)
// // //           ) {
// // //             providerInfo.additionalLocations.forEach((loc) => {
// // //               if (typeof loc === "object") {
// // //                 allLocations.push({
// // //                   id: loc.id,
// // //                   name: loc.name,
// // //                   phone: loc.phone,
// // //                   image: loc.image?.cloudinary_url || loc.image?.url || "",
// // //                   alt: loc.alt,
// // //                   address: loc.address,
// // //                   slug: loc.slug,
// // //                 });
// // //               }
// // //             });
// // //           }

// // //           setProvider(transformedProvider);
// // //           setLocations(allLocations);
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching provider data:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (slug) {
// // //       fetchProviderData();
// // //     }
// // //   }, [slug]);

// // //   // Helper function to render rich text bio
// // //   const renderBio = (bioData) => {
// // //     if (!bioData || !bioData.root || !bioData.root.children) {
// // //       return null;
// // //     }

// // //     return bioData.root.children.map((node, index) => {
// // //       if (node.type === "paragraph" && node.children) {
// // //         return (
// // //           <p key={index}>
// // //             {node.children.map((child, childIndex) => {
// // //               if (child.type === "text") {
// // //                 const style =
// // //                   child.format === 1
// // //                     ? { fontWeight: "bold" }
// // //                     : child.format === 2
// // //                     ? { fontStyle: "italic" }
// // //                     : {};
// // //                 return (
// // //                   <span key={childIndex} style={style}>
// // //                     {child.text}
// // //                   </span>
// // //                 );
// // //               }
// // //               return null;
// // //             })}
// // //           </p>
// // //         );
// // //       }
// // //       return null;
// // //     });
// // //   };

// // //   if (loading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (!provider) {
// // //     return <div>Provider not found</div>;
// // //   }

// // //   return (
// // //     <html lang="en">
// // //       <body className="about meet-the-team bria-bennie sub sticky-header wow-enabled">
// // //         <main id="main">
// // //           <div className="container main">
// // //             <div className="abstract-page provider-page">
// // //               <div className="main-entry clearfix" data-s3-module="">
// // //                 {/* Hero Section */}
// // //                 <div className="row grid half-image-row">
// // //                   <div className="media">
// // //                     <picture className="">
// // //                       <img
// // //                         src={provider.image}
// // //                         loading="lazy"
// // //                         alt={provider.name}
// // //                         draggable="false"
// // //                         data-api-key="media"
// // //                       />
// // //                     </picture>
// // //                   </div>
// // //                   <div className="copy">
// // //                     <div className="inner" data-api-key="bio">
// // //                       <h1 className="entry-title">
// // //                         {provider.name}
// // //                         <span className="credentials">{provider.title}</span>
// // //                       </h1>

// // //                       <div className="bio">{renderBio(provider.bio)}</div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Experience & Specialties */}
// // //                 <div className="row extras">
// // //                   {provider.experience && provider.experience.length > 0 && (
// // //                     <div className="item">
// // //                       <h3>Experience</h3>
// // //                       <div className="content">
// // //                         <ul>
// // //                           {provider.experience.map((exp, index) => (
// // //                             <li key={index}>
// // //                               <span style={{ fontWeight: 400 }}>
// // //                                 {exp.experience}
// // //                               </span>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {provider.specialties && provider.specialties.length > 0 && (
// // //                     <div className="item">
// // //                       <h3>Specialties</h3>
// // //                       <div className="content">
// // //                         <ul>
// // //                           {provider.specialties.map((specialty, index) => (
// // //                             <li key={index}>
// // //                               <span style={{ fontWeight: 400 }}>
// // //                                 {specialty.specialty}
// // //                               </span>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {provider.education && provider.education.length > 0 && (
// // //                     <div className="item">
// // //                       <h3>Education</h3>
// // //                       <div className="content">
// // //                         <ul>
// // //                           {provider.education.map((edu, index) => (
// // //                             <li key={index}>
// // //                               <span style={{ fontWeight: 400 }}>
// // //                                 {edu.degree} - {edu.institution}
// // //                                 {edu.year && ` (${edu.year})`}
// // //                               </span>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {provider.certifications &&
// // //                     provider.certifications.length > 0 && (
// // //                       <div className="item">
// // //                         <h3>Certifications</h3>
// // //                         <div className="content">
// // //                           <ul>
// // //                             {provider.certifications.map((cert, index) => (
// // //                               <li key={index}>
// // //                                 <span style={{ fontWeight: 400 }}>
// // //                                   {cert.certification}
// // //                                 </span>
// // //                               </li>
// // //                             ))}
// // //                           </ul>
// // //                         </div>
// // //                       </div>
// // //                     )}

// // //                   {provider.languages && provider.languages.length > 0 && (
// // //                     <div className="item">
// // //                       <h3>Languages</h3>
// // //                       <div className="content">
// // //                         <ul>
// // //                           {provider.languages.map((lang, index) => (
// // //                             <li key={index}>
// // //                               <span style={{ fontWeight: 400 }}>
// // //                                 {lang.language}
// // //                               </span>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Locations & Map */}
// // //                 <div className="row bottom">
// // //                   <div className="half">
// // //                     <h3></h3>
// // //                     <div className="locations">
// // //                       {locations.map((location) => (
// // //                         <div
// // //                           key={location.id}
// // //                           className="location result"
// // //                           data-type="location"
// // //                           data-id={location.id}
// // //                         >
// // //                           <a
// // //                             href={`/locations${location.slug}`}
// // //                             className="media"
// // //                           >
// // //                             <picture className="background">
// // //                               <img
// // //                                 src={location.image}
// // //                                 loading="lazy"
// // //                                 alt={location.alt || location.name}
// // //                                 draggable="false"
// // //                               />
// // //                             </picture>
// // //                             <span className="title">{location.name}</span>
// // //                           </a>
// // //                           <div className="info">
// // //                             <a
// // //                               className="tel ppc-href"
// // //                               href={`tel:${location.phone.replace(
// // //                                 /[^0-9]/g,
// // //                                 ""
// // //                               )}`}
// // //                               aria-label={`Call ${location.name} on the phone`}
// // //                               role="button"
// // //                             >
// // //                               <span className="ppc-number">
// // //                                 {location.phone}
// // //                               </span>
// // //                             </a>
// // //                             <a
// // //                               href={`/contact/?location=${location.id}`}
// // //                               data-type="Provider"
// // //                               data-label={`${provider.name} - ${location.name}`}
// // //                               className="btn"
// // //                               data-add-utm="true"
// // //                             >
// // //                               Schedule
// // //                             </a>
// // //                           </div>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                   <div className="half">
// // //                     <p className="intro"></p>
// // //                     <div className="partial_locator_minimap">
// // //                       <div
// // //                         className="minimap-section"
// // //                         style={{
// // //                           overflow: "hidden",
// // //                           height: "300px",
// // //                           backgroundColor: "#e5e3df",
// // //                         }}
// // //                       >
// // //                         {/* Map placeholder */}
// // //                         <div
// // //                           style={{
// // //                             width: "100%",
// // //                             height: "100%",
// // //                             display: "flex",
// // //                             alignItems: "center",
// // //                             justifyContent: "center",
// // //                             color: "#999",
// // //                           }}
// // //                         >
// // //                           Map Loading...
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* CTA Section */}
// // //           {/* <div className="partial_cta_sub wow fadeInDown viewport">
// // //             <div className="row">
// // //               <div className="text">
// // //                 <h2>
// // //                   <a href="/contact/">
// // //                     <span className="small">enhance your natural beauty</span>
// // //                     Schedule a Consultation
// // //                   </a>
// // //                 </h2>
// // //                 <p className="italics" role="heading" aria-level="1">
// // //                   "I'm always treated as a member of their family. They're very
// // //                   helpful and honest. I would recommend my friends to get any
// // //                   treatment here with confidence!"
// // //                 </p>
// // //                 <a href="/contact/" className="btn">
// // //                   Book an Appointment
// // //                 </a>
// // //               </div>
// // //               <div className="media">
// // //                 <p className="title">
// // //                   <span className="block">Enhance Your</span> Natural Beauty
// // //                 </p>
// // //                 <div className="desktop-image">
// // //                   <picture className="background">
// // //                     <img
// // //                       src="https://www.datocms-assets.com/105497/1720632514-subcta.jpg?auto=format,compress&w=1742"
// // //                       loading="lazy"
// // //                       alt="Contact us media"
// // //                       draggable="false"
// // //                     />
// // //                   </picture>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div> */}
// // //         </main>

// // //         {/* Sidebar Chat Widget */}
// // //         <div id="aifnmjmchg" className="aifnmjmchg dark" data-v-app="">
// // //           <div
// // //             id="aifnmjmchg-container"
// // //             className={`${sidebarOpen ? "open" : "close"}-sidebar`}
// // //           >
// // //             <div id="aifnmjmchg-sidebar">
// // //               <div
// // //                 id="ai-aifnmjmchgsidebar"
// // //                 className="aifnmjmchg-flex aifnmjmchg-w-full aifnmjmchg-h-full aifnmjmchg-overflow-hidden"
// // //               >
// // //                 <div
// // //                   className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-w-[calc(100%_-_60px)]"
// // //                   id="aifnmjmchg-sidebar-chat"
// // //                 >
// // //                   <div className="aifnmjmchg-header aifnmjmchg-flex-shrink">
// // //                     <nav className="aifnmjmchg-w-full aifnmjmchg-bg-[transparent]">
// // //                       <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-w-full aifnmjmchg-p-0">
// // //                         <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between aifnmjmchg-w-full">
// // //                           <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between">
// // //                             <span
// // //                               name="logo"
// // //                               className="aifnmjmchg-w-8 aifnmjmchg-h-8"
// // //                             >
// // //                               <svg
// // //                                 className="aifnmjmchg-w-8 aifnmjmchg-h-8 aifnmjmchg-logo-dark aifnmjmchg-logo aifnmjmchg-p-0.5"
// // //                                 xmlns="http://www.w3.org/2000/svg"
// // //                                 viewBox="0 0 830.12 868.33"
// // //                               >
// // //                                 <path
// // //                                   fill="currentColor"
// // //                                   d="M424.14,825.57c-114.47,0-207.59-93.13-207.59-207.59V261.32c0-114.46,93.12-207.59,207.59-207.59s207.59,93.13,207.59,207.59V618C631.73,732.44,538.6,825.57,424.14,825.57Zm0-713.31c-82.19,0-149.06,66.87-149.06,149.06V618C275.08,700.17,342,767,424.14,767S573.2,700.17,573.2,618V261.32C573.2,179.13,506.33,112.26,424.14,112.26Z"
// // //                                 />
// // //                                 <path
// // //                                   fill="currentColor"
// // //                                   d="M578.23,736.49a206.33,206.33,0,0,1-103.45-27.9L165.91,530.27a207.59,207.59,0,0,1-76-283.58c57.24-99.13,184.45-133.21,283.58-76L682.37,349c99.13,57.23,133.22,184.45,76,283.58A206.21,206.21,0,0,1,632.3,729.33,208.85,208.85,0,0,1,578.23,736.49ZM270,201.45A149.18,149.18,0,0,0,140.61,276C99.52,347.13,124,438.48,195.17,479.58L504,657.9c71.18,41.1,162.53,16.63,203.62-54.56h0A149.06,149.06,0,0,0,653.1,399.72L344.23,221.39A148.22,148.22,0,0,0,270,201.45Z"
// // //                                 />
// // //                                 <path
// // //                                   fill="currentColor"
// // //                                   d="M270,736.49A208.9,208.9,0,0,1,216,729.33,207.59,207.59,0,0,1,165.91,349L474.78,170.7c99.12-57.23,226.34-23.14,283.57,76h0c57.24,99.13,23.15,226.34-76,283.58L373.5,708.59A206.37,206.37,0,0,1,270,736.49Zm308.28-535A148.15,148.15,0,0,0,504,221.39L195.17,399.72A149.06,149.06,0,0,0,344.23,657.9L653.1,479.58c71.18-41.1,95.66-132.44,54.56-203.62L733,261.32,707.66,276A149.15,149.15,0,0,0,578.32,201.45Z"
// // //                                 />
// // //                               </svg>
// // //                             </span>
// // //                             <div className="aifnmjmchg-self-center aifnmjmchg-text-base aifnmjmchg-text-black aifnmjmchg-ml-2 dark:aifnmjmchg-text-gray-200 aifnmjmchg-whitespace-nowrap">
// // //                               Chat
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </nav>
// // //                   </div>

// // //                   {/* Chat Messages Area */}
// // //                   <div id="ai-aifnmjmchgsidebar-content" className="false">
// // //                     <div className="aifnmjmchg-h-[calc(100vh_-_70px)] aifnmjmchg-flex aifnmjmchg-flex-col">
// // //                       <div
// // //                         id="ai-aifnmjmchgmessage-container"
// // //                         className="aifnmjmchg-flex aifnmjmchg-relative aifnmjmchg-flex-grow aifnmjmchg-w-full aifnmjmchg-overflow-x-hidden"
// // //                       >
// // //                         <div className="aifnmjmchg-w-full">
// // //                           <div className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-h-full aifnmjmchg-space-y-3">
// // //                             <div
// // //                               id="aifnmjmchg-example"
// // //                               className="aifnmjmchg-p-2"
// // //                             >
// // //                               <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between aifnmjmchg-p-3 aifnmjmchg-space-x-3 aifnmjmchg-border aifnmjmchg-rounded-xl aifnmjmchg-bg-neutral-100 dark:aifnmjmchg-bg-neutral-900 dark:aifnmjmchg-text-neutral-200 aifnmjmchg-cursor-pointer">
// // //                                 <div>
// // //                                   <p className="aifnmjmchg-font-bold">
// // //                                     🤓 Explain a complex thing
// // //                                   </p>
// // //                                   <p className="aifnmjmchg-opacity-60 aifnmjmchg-text-[11px] example_content">
// // //                                     Explain Artificial Intelligence so I can
// // //                                     explain it to my six-year-old child.
// // //                                   </p>
// // //                                 </div>
// // //                               </div>
// // //                             </div>

// // //                             <div
// // //                               id="aifnmjmchg-message"
// // //                               className="aifnmjmchg-h-full"
// // //                             >
// // //                               <div
// // //                                 aria-details="chat-key-0"
// // //                                 className="aifnmjmchg-bg-neutral-100 dark:aifnmjmchg-bg-neutral-900 dark:aifnmjmchg-text-gray-200"
// // //                               >
// // //                                 <div className="aifnmjmchg-flex aifnmjmchg-p-2 aifnmjmchg-text-[10px] dark:aifnmjmchg-text-gray-200 aifnmjmchg-flex-col aifnmjmchg-items-start aifnmjmchg-justify-start aifnmjmchg-gap-2">
// // //                                   <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-space-x-2">
// // //                                     <span>AITOPIA</span>
// // //                                   </div>
// // //                                 </div>
// // //                                 <div className="dark:aifnmjmchg-bg-neutral-900 aifnmjmchg-px-6 aifnmjmchg-py-4 ai_result_container">
// // //                                   <div className="aifnmjmchg-flex aifnmjmchg-flex-col">
// // //                                     <div className="aifnmjmchg-flex aifnmjmchg-flex-row aifnmjmchg-items-center">
// // //                                       <div className="ai_result">
// // //                                         Hello, how can I help you today?
// // //                                         <br />
// // //                                       </div>
// // //                                     </div>
// // //                                   </div>
// // //                                 </div>
// // //                               </div>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </div>

// // //                       {/* Chat Input */}
// // //                       <div className="aifnmjmchg-px-3 aifnmjmchg-pt-3">
// // //                         <div className="aifnmjmchg-flex aifnmjmchg-relative aifnmjmchg-w-full aifnmjmchg-items-center aifnmjmchg-justify-start aifnmjmchg-my-3">
// // //                           <div className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-relative aifnmjmchg-items-end aifnmjmchg-p-1 aifnmjmchg-space-x-1 aifnmjmchg-border aifnmjmchg-rounded-xl aifnmjmchg-h-[140px] aifnmjmchg-w-full">
// // //                             <textarea
// // //                               name="ask"
// // //                               className="aifnmjmchg-selection-container aifnmjmchg-ai-aifnmjmchgtext-item aifnmjmchg-relative aifnmjmchg-w-full aifnmjmchg-h-full aifnmjmchg-p-1 aifnmjmchg-border-0 focus:aifnmjmchg-border-0 focus:aifnmjmchg-shadow-none aifnmjmchg-outline-none aifnmjmchg-resize-none dark:aifnmjmchg-bg-neutral-700 dark:aifnmjmchg-text-neutral-200"
// // //                               id="ask"
// // //                               rows="4"
// // //                               placeholder="Ask me anything..."
// // //                               value={chatMessage}
// // //                               onChange={(e) => setChatMessage(e.target.value)}
// // //                             />
// // //                             <div className="aifnmjmchg-flex aifnmjmchg-w-full aifnmjmchg-justify-between aifnmjmchg-items-center aifnmjmchg-gap-2 aifnmjmchg-p-0.5">
// // //                               <div className="aifnmjmchg-flex aifnmjmchg-gap-1.5 aifnmjmchg-ml-1.5">
// // //                                 <label className="aifnmjmchg-relative aifnmjmchg-inline-flex aifnmjmchg-items-center aifnmjmchg-cursor-pointer">
// // //                                   <input
// // //                                     type="checkbox"
// // //                                     className="aifnmjmchg-ai-aifnmjmchgweb-access-checkbox aifnmjmchg-sr-only aifnmjmchg-peer"
// // //                                     checked={webAccess}
// // //                                     onChange={(e) =>
// // //                                       setWebAccess(e.target.checked)
// // //                                     }
// // //                                   />
// // //                                   <div className="aifnmjmchg-w-7 aifnmjmchg-h-4 aifnmjmchg-bg-neutral-200 aifnmjmchg-rounded-full aifnmjmchg-peer peer-focus:aifnmjmchg-ring-3 dark:peer-focus:aifnmjmchg-ring-[var(--aifnmjmchg-link-color)] dark:aifnmjmchg-bg-neutral-700 peer-checked:after:aifnmjmchg-translate-x-full rtl:peer-checked:after:-aifnmjmchg-translate-x-full peer-checked:after:aifnmjmchg-border-white after:aifnmjmchg-content-[''] after:aifnmjmchg-absolute after:aifnmjmchg-top-0.5 after:aifnmjmchg-start-[2px] after:aifnmjmchg-bg-white after:aifnmjmchg-border-neutral-300 after:aifnmjmchg-border after:aifnmjmchg-rounded-full after:aifnmjmchg-h-3 after:aifnmjmchg-w-3 after:aifnmjmchg-transition-all dark:aifnmjmchg-border-neutral-600 peer-checked:aifnmjmchg-bg-[var(--aifnmjmchg-link-color)]" />
// // //                                   <span className="aifnmjmchg-ms-1.5 aifnmjmchg-text-xs aifnmjmchg-font-medium aifnmjmchg-text-[var(--aifnmjmchg-link-color)] aifnmjmchg-opacity-60 aifnmjmchg-transition-all aifnmjmchg-select-none peer-checked:aifnmjmchg-opacity-100">
// // //                                     Web Access
// // //                                   </span>
// // //                                 </label>
// // //                               </div>
// // //                               <button className="aifnmjmchg-flex aifnmjmchg-gap-4">
// // //                                 <img
// // //                                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAz0lEQVR4nN3VoU7DURSH8Y9IsNAwSjDZfALGeAgak2IxWbXpE5jceIZ/hsRG+j8BFDpJosnirnO7bMY/jPNX+W3fdu++O7v3nMOxpokRhjiLkjwiZda4zeKDpvgh2bLCACeRki2LLAuVpEyJbrQkZWa4jpYkfOY7l7tIxjtKUuYDLzivIrnABG97yt7xhFbVqtro4Q6vmGNTUfZ97h4Ne+YKz1hWkPV/rZIOptFvMq7jdxV19EnxVzq+jJxdi8gpfPB98lDHZjzFTfSO92/zBcBszGtUUreMAAAAAElFTkSuQmCC"
// // //                                   alt="Send"
// // //                                   className="aifnmjmchg-w-5 aifnmjmchg-h-5"
// // //                                 />
// // //                               </button>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </body>
// // //     </html>
// // //   );
// // // }

// // "use client";

// // import React, { useState, useEffect, useRef } from "react";
// // import { useParams } from "next/navigation";

// // export default function ProviderProfile() {
// //   const mapRef = useRef<HTMLDivElement>(null);
// //   const [map, setMap] = useState<google.maps.Map | null>(null);
// //   const [marker, setMarker] = useState<google.maps.Marker | null>(null);
// //   // const slug = "bria-bennie";

// //     const params = useParams();
// //     const slug = params.slug;

// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [chatMessage, setChatMessage] = useState("");
// //   const [webAccess, setWebAccess] = useState(false);
// //   const [provider, setProvider] = useState<any>(null);
// //   const [locations, setLocations] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProviderData = async () => {
// //       try {
// //         setLoading(true);

// //         const providerRes = await fetch(
// //           `https://backend-orpin-six-56.vercel.app/api/providers?where[slug][equals]=${slug}&depth=2`
// //         );
// //         const providerData = await providerRes.json();

// //         if (providerData.docs && providerData.docs.length > 0) {
// //           const providerInfo = providerData.docs[0];

// //           const transformedProvider = {
// //             id: providerInfo.id,
// //             name: providerInfo.name,
// //             title: providerInfo.title,
// //             image:
// //               providerInfo.image?.cloudinary_url ||
// //               providerInfo.image?.url ||
// //               "",
// //             bio: providerInfo.bio,
// //             specialties: providerInfo.specialties || [],
// //             experience: providerInfo.experience || [],
// //             education: providerInfo.education || [],
// //             certifications: providerInfo.certifications || [],
// //             languages: providerInfo.languages || [],
// //             reviews: providerInfo.reviews,
// //             slug: providerInfo.slug,
// //             latitude: providerInfo.latitude,
// //             longitude: providerInfo.longitude,
// //             zoom: providerInfo.zoom || 15,
// //           };

// //           const allLocations = [];

// //           if (
// //             providerInfo.primaryLocation &&
// //             typeof providerInfo.primaryLocation === "object"
// //           ) {
// //             const loc = providerInfo.primaryLocation;
// //             allLocations.push({
// //               id: loc.id,
// //               name: loc.name,
// //               phone: loc.phone,
// //               image: loc.image?.cloudinary_url || loc.image?.url || "",
// //               alt: loc.alt,
// //               address: loc.address,
// //               slug: loc.slug,
// //             });
// //           }

// //           if (
// //             providerInfo.additionalLocations &&
// //             Array.isArray(providerInfo.additionalLocations)
// //           ) {
// //             providerInfo.additionalLocations.forEach((loc: any) => {
// //               if (typeof loc === "object") {
// //                 allLocations.push({
// //                   id: loc.id,
// //                   name: loc.name,
// //                   phone: loc.phone,
// //                   image: loc.image?.cloudinary_url || loc.image?.url || "",
// //                   alt: loc.alt,
// //                   address: loc.address,
// //                   slug: loc.slug,
// //                 });
// //               }
// //             });
// //           }

// //           setProvider(transformedProvider);
// //           setLocations(allLocations);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching provider data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (slug) {
// //       fetchProviderData();
// //     }
// //   }, [slug]);

// //   useEffect(() => {
// //     const script = document.createElement("script");
// //     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC6yYDg1RJRILmiOS2yv4uND1R_xKJKS70&libraries=places`;
// //     script.async = true;
// //     script.defer = true;

// //     script.onload = () => {
// //       if (mapRef.current && window.google && provider) {
// //         const mapInstance = new window.google.maps.Map(mapRef.current, {
// //           center: { lat: provider.latitude, lng: provider.longitude },
// //           zoom: provider.zoom,
// //           mapTypeId: "roadmap",
// //         });

// //         setMap(mapInstance);
// //       }
// //     };

// //     if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
// //       document.head.appendChild(script);
// //     }

// //     return () => {
// //       if (script.parentNode) {
// //         script.parentNode.removeChild(script);
// //       }
// //     };
// //   }, [provider]);

// //   useEffect(() => {
// //     if (!map || !window.google || !provider) return;

// //     if (marker) {
// //       marker.setMap(null);
// //     }

// //     if (provider.latitude && provider.longitude) {
// //       const newMarker = new window.google.maps.Marker({
// //         position: {
// //           lat: provider.latitude,
// //           lng: provider.longitude,
// //         },
// //         map: map,
// //         title: provider.name,
// //       });

// //       setMarker(newMarker);

// //       map.setCenter({ lat: provider.latitude, lng: provider.longitude });
// //       map.setZoom(provider.zoom);
// //     }
// //   }, [map, provider]);

// //   const renderBio = (bioData: any) => {
// //     if (!bioData || !bioData.root || !bioData.root.children) {
// //       return null;
// //     }

// //     return bioData.root.children.map((node: any, index: number) => {
// //       if (node.type === "paragraph" && node.children) {
// //         return (
// //           <p key={index}>
// //             {node.children.map((child: any, childIndex: number) => {
// //               if (child.type === "text") {
// //                 const style =
// //                   child.format === 1
// //                     ? { fontWeight: "bold" }
// //                     : child.format === 2
// //                     ? { fontStyle: "italic" }
// //                     : {};
// //                 return (
// //                   <span key={childIndex} style={style}>
// //                     {child.text}
// //                   </span>
// //                 );
// //               }
// //               return null;
// //             })}
// //           </p>
// //         );
// //       }
// //       return null;
// //     });
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (!provider) {
// //     return <div>Provider not found</div>;
// //   }

// //   return (
// //     <html lang="en">
// //       <body className="about meet-the-team bria-bennie sub sticky-header wow-enabled">
// //         <main id="main">
// //           <div className="container main">
// //             <div className="abstract-page provider-page">
// //               <div className="main-entry clearfix" data-s3-module="">
// //                 <div className="row grid half-image-row">
// //                   <div className="media">
// //                     <picture className="">
// //                       <img
// //                         src={provider.image}
// //                         loading="lazy"
// //                         alt={provider.name}
// //                         draggable="false"
// //                         data-api-key="media"
// //                       />
// //                     </picture>
// //                   </div>
// //                   <div className="copy">
// //                     <div className="inner" data-api-key="bio">
// //                       <h1 className="entry-title">
// //                         {provider.name}
// //                         <span className="credentials">{provider.title}</span>
// //                       </h1>

// //                       <div className="bio">{renderBio(provider.bio)}</div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="row extras">
// //                   {provider.experience && provider.experience.length > 0 && (
// //                     <div className="item">
// //                       <h3>Experience</h3>
// //                       <div className="content">
// //                         <ul>
// //                           {provider.experience.map(
// //                             (exp: any, index: number) => (
// //                               <li key={index}>
// //                                 <span style={{ fontWeight: 400 }}>
// //                                   {exp.experience}
// //                                 </span>
// //                               </li>
// //                             )
// //                           )}
// //                         </ul>
// //                       </div>
// //                     </div>
// //                   )}

// //                   {provider.specialties && provider.specialties.length > 0 && (
// //                     <div className="item">
// //                       <h3>Specialties</h3>
// //                       <div className="content">
// //                         <ul>
// //                           {provider.specialties.map(
// //                             (specialty: any, index: number) => (
// //                               <li key={index}>
// //                                 <span style={{ fontWeight: 400 }}>
// //                                   {specialty.specialty}
// //                                 </span>
// //                               </li>
// //                             )
// //                           )}
// //                         </ul>
// //                       </div>
// //                     </div>
// //                   )}

// //                   {provider.education && provider.education.length > 0 && (
// //                     <div className="item">
// //                       <h3>Education</h3>
// //                       <div className="content">
// //                         <ul>
// //                           {provider.education.map((edu: any, index: number) => (
// //                             <li key={index}>
// //                               <span style={{ fontWeight: 400 }}>
// //                                 {edu.degree} - {edu.institution}
// //                                 {edu.year && ` (${edu.year})`}
// //                               </span>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     </div>
// //                   )}

// //                   {provider.certifications &&
// //                     provider.certifications.length > 0 && (
// //                       <div className="item">
// //                         <h3>Certifications</h3>
// //                         <div className="content">
// //                           <ul>
// //                             {provider.certifications.map(
// //                               (cert: any, index: number) => (
// //                                 <li key={index}>
// //                                   <span style={{ fontWeight: 400 }}>
// //                                     {cert.certification}
// //                                   </span>
// //                                 </li>
// //                               )
// //                             )}
// //                           </ul>
// //                         </div>
// //                       </div>
// //                     )}

// //                   {provider.languages && provider.languages.length > 0 && (
// //                     <div className="item">
// //                       <h3>Languages</h3>
// //                       <div className="content">
// //                         <ul>
// //                           {provider.languages.map(
// //                             (lang: any, index: number) => (
// //                               <li key={index}>
// //                                 <span style={{ fontWeight: 400 }}>
// //                                   {lang.language}
// //                                 </span>
// //                               </li>
// //                             )
// //                           )}
// //                         </ul>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="row bottom">
// //                   <div className="half">
// //                     <h3></h3>
// //                     <div className="locations">
// //                       {locations.map((location) => (
// //                         <div
// //                           key={location.id}
// //                           className="location result"
// //                           data-type="location"
// //                           data-id={location.id}
// //                         >
// //                           <a
// //                             href={`/locations${location.slug}`}
// //                             className="media"
// //                           >
// //                             <picture className="background">
// //                               <img
// //                                 src={location.image}
// //                                 loading="lazy"
// //                                 alt={location.alt || location.name}
// //                                 draggable="false"
// //                               />
// //                             </picture>
// //                             <span className="title">{location.name}</span>
// //                           </a>
// //                           <div className="info">
// //                             <a
// //                               className="tel ppc-href"
// //                               href={`tel:${location.phone.replace(
// //                                 /[^0-9]/g,
// //                                 ""
// //                               )}`}
// //                               aria-label={`Call ${location.name} on the phone`}
// //                               role="button"
// //                             >
// //                               <span className="ppc-number">
// //                                 {location.phone}
// //                               </span>
// //                             </a>
// //                             <a
// //                               href={`/contact/?location=${location.id}`}
// //                               data-type="Provider"
// //                               data-label={`${provider.name} - ${location.name}`}
// //                               className="btn"
// //                               data-add-utm="true"
// //                             >
// //                               Schedule
// //                             </a>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="half">
// //                     <p className="intro"></p>
// //                     <div className="partial_locator_minimap">
// //                       <div
// //                         className="minimap-section"
// //                         style={{
// //                           overflow: "hidden",
// //                           height: "300px",
// //                           backgroundColor: "#e5e3df",
// //                         }}
// //                       >
// //                         <div
// //                           ref={mapRef}
// //                           style={{
// //                             width: "100%",
// //                             height: "100%",
// //                           }}
// //                         ></div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </main>

// //         <div id="aifnmjmchg" className="aifnmjmchg dark" data-v-app="">
// //           <div
// //             id="aifnmjmchg-container"
// //             className={`${sidebarOpen ? "open" : "close"}-sidebar`}
// //           >
// //             <div id="aifnmjmchg-sidebar">
// //               <div
// //                 id="ai-aifnmjmchgsidebar"
// //                 className="aifnmjmchg-flex aifnmjmchg-w-full aifnmjmchg-h-full aifnmjmchg-overflow-hidden"
// //               >
// //                 <div
// //                   className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-w-[calc(100%_-_60px)]"
// //                   id="aifnmjmchg-sidebar-chat"
// //                 >
// //                   <div className="aifnmjmchg-header aifnmjmchg-flex-shrink">
// //                     <nav className="aifnmjmchg-w-full aifnmjmchg-bg-[transparent]">
// //                       <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-w-full aifnmjmchg-p-0">
// //                         <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between aifnmjmchg-w-full">
// //                           <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between">
// //                             <span
// //                               name="logo"
// //                               className="aifnmjmchg-w-8 aifnmjmchg-h-8"
// //                             >
// //                               <svg
// //                                 className="aifnmjmchg-w-8 aifnmjmchg-h-8 aifnmjmchg-logo-dark aifnmjmchg-logo aifnmjmchg-p-0.5"
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 viewBox="0 0 830.12 868.33"
// //                               >
// //                                 <path
// //                                   fill="currentColor"
// //                                   d="M424.14,825.57c-114.47,0-207.59-93.13-207.59-207.59V261.32c0-114.46,93.12-207.59,207.59-207.59s207.59,93.13,207.59,207.59V618C631.73,732.44,538.6,825.57,424.14,825.57Zm0-713.31c-82.19,0-149.06,66.87-149.06,149.06V618C275.08,700.17,342,767,424.14,767S573.2,700.17,573.2,618V261.32C573.2,179.13,506.33,112.26,424.14,112.26Z"
// //                                 />
// //                                 <path
// //                                   fill="currentColor"
// //                                   d="M578.23,736.49a206.33,206.33,0,0,1-103.45-27.9L165.91,530.27a207.59,207.59,0,0,1-76-283.58c57.24-99.13,184.45-133.21,283.58-76L682.37,349c99.13,57.23,133.22,184.45,76,283.58A206.21,206.21,0,0,1,632.3,729.33,208.85,208.85,0,0,1,578.23,736.49ZM270,201.45A149.18,149.18,0,0,0,140.61,276C99.52,347.13,124,438.48,195.17,479.58L504,657.9c71.18,41.1,162.53,16.63,203.62-54.56h0A149.06,149.06,0,0,0,653.1,399.72L344.23,221.39A148.22,148.22,0,0,0,270,201.45Z"
// //                                 />
// //                                 <path
// //                                   fill="currentColor"
// //                                   d="M270,736.49A208.9,208.9,0,0,1,216,729.33,207.59,207.59,0,0,1,165.91,349L474.78,170.7c99.12-57.23,226.34-23.14,283.57,76h0c57.24,99.13,23.15,226.34-76,283.58L373.5,708.59A206.37,206.37,0,0,1,270,736.49Zm308.28-535A148.15,148.15,0,0,0,504,221.39L195.17,399.72A149.06,149.06,0,0,0,344.23,657.9L653.1,479.58c71.18-41.1,95.66-132.44,54.56-203.62L733,261.32,707.66,276A149.15,149.15,0,0,0,578.32,201.45Z"
// //                                 />
// //                               </svg>
// //                             </span>
// //                             <div className="aifnmjmchg-self-center aifnmjmchg-text-base aifnmjmchg-text-black aifnmjmchg-ml-2 dark:aifnmjmchg-text-gray-200 aifnmjmchg-whitespace-nowrap">
// //                               Chat
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </nav>
// //                   </div>

// //                   <div id="ai-aifnmjmchgsidebar-content" className="false">
// //                     <div className="aifnmjmchg-h-[calc(100vh_-_70px)] aifnmjmchg-flex aifnmjmchg-flex-col">
// //                       <div
// //                         id="ai-aifnmjmchgmessage-container"
// //                         className="aifnmjmchg-flex aifnmjmchg-relative aifnmjmchg-flex-grow aifnmjmchg-w-full aifnmjmchg-overflow-x-hidden"
// //                       >
// //                         <div className="aifnmjmchg-w-full">
// //                           <div className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-h-full aifnmjmchg-space-y-3">
// //                             <div
// //                               id="aifnmjmchg-example"
// //                               className="aifnmjmchg-p-2"
// //                             >
// //                               <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-justify-between aifnmjmchg-p-3 aifnmjmchg-space-x-3 aifnmjmchg-border aifnmjmchg-rounded-xl aifnmjmchg-bg-neutral-100 dark:aifnmjmchg-bg-neutral-900 dark:aifnmjmchg-text-neutral-200 aifnmjmchg-cursor-pointer">
// //                                 <div>
// //                                   <p className="aifnmjmchg-font-bold">
// //                                     🤓 Explain a complex thing
// //                                   </p>
// //                                   <p className="aifnmjmchg-opacity-60 aifnmjmchg-text-[11px] example_content">
// //                                     Explain Artificial Intelligence so I can
// //                                     explain it to my six-year-old child.
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </div>

// //                             <div
// //                               id="aifnmjmchg-message"
// //                               className="aifnmjmchg-h-full"
// //                             >
// //                               <div
// //                                 aria-details="chat-key-0"
// //                                 className="aifnmjmchg-bg-neutral-100 dark:aifnmjmchg-bg-neutral-900 dark:aifnmjmchg-text-gray-200"
// //                               >
// //                                 <div className="aifnmjmchg-flex aifnmjmchg-p-2 aifnmjmchg-text-[10px] dark:aifnmjmchg-text-gray-200 aifnmjmchg-flex-col aifnmjmchg-items-start aifnmjmchg-justify-start aifnmjmchg-gap-2">
// //                                   <div className="aifnmjmchg-flex aifnmjmchg-items-center aifnmjmchg-space-x-2">
// //                                     <span>AITOPIA</span>
// //                                   </div>
// //                                 </div>
// //                                 <div className="dark:aifnmjmchg-bg-neutral-900 aifnmjmchg-px-6 aifnmjmchg-py-4 ai_result_container">
// //                                   <div className="aifnmjmchg-flex aifnmjmchg-flex-col">
// //                                     <div className="aifnmjmchg-flex aifnmjmchg-flex-row aifnmjmchg-items-center">
// //                                       <div className="ai_result">
// //                                         Hello, how can I help you today?
// //                                         <br />
// //                                       </div>
// //                                     </div>
// //                                   </div>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>

// //                       <div className="aifnmjmchg-px-3 aifnmjmchg-pt-3">
// //                         <div className="aifnmjmchg-flex aifnmjmchg-relative aifnmjmchg-w-full aifnmjmchg-items-center aifnmjmchg-justify-start aifnmjmchg-my-3">
// //                           <div className="aifnmjmchg-flex aifnmjmchg-flex-col aifnmjmchg-relative aifnmjmchg-items-end aifnmjmchg-p-1 aifnmjmchg-space-x-1 aifnmjmchg-border aifnmjmchg-rounded-xl aifnmjmchg-h-[140px] aifnmjmchg-w-full">
// //                             <textarea
// //                               name="ask"
// //                               className="aifnmjmchg-selection-container aifnmjmchg-ai-aifnmjmchgtext-item aifnmjmchg-relative aifnmjmchg-w-full aifnmjmchg-h-full aifnmjmchg-p-1 aifnmjmchg-border-0 focus:aifnmjmchg-border-0 focus:aifnmjmchg-shadow-none aifnmjmchg-outline-none aifnmjmchg-resize-none dark:aifnmjmchg-bg-neutral-700 dark:aifnmjmchg-text-neutral-200"
// //                               id="ask"
// //                               rows={4}
// //                               placeholder="Ask me anything..."
// //                               value={chatMessage}
// //                               onChange={(e) => setChatMessage(e.target.value)}
// //                             />
// //                             <div className="aifnmjmchg-flex aifnmjmchg-w-full aifnmjmchg-justify-between aifnmjmchg-items-center aifnmjmchg-gap-2 aifnmjmchg-p-0.5">
// //                               <div className="aifnmjmchg-flex aifnmjmchg-gap-1.5 aifnmjmchg-ml-1.5">
// //                                 <label className="aifnmjmchg-relative aifnmjmchg-inline-flex aifnmjmchg-items-center aifnmjmchg-cursor-pointer">
// //                                   <input
// //                                     type="checkbox"
// //                                     className="aifnmjmchg-ai-aifnmjmchgweb-access-checkbox aifnmjmchg-sr-only aifnmjmchg-peer"
// //                                     checked={webAccess}
// //                                     onChange={(e) =>
// //                                       setWebAccess(e.target.checked)
// //                                     }
// //                                   />
// //                                   <div className="aifnmjmchg-w-7 aifnmjmchg-h-4 aifnmjmchg-bg-neutral-200 aifnmjmchg-rounded-full aifnmjmchg-peer peer-focus:aifnmjmchg-ring-3 dark:peer-focus:aifnmjmchg-ring-[var(--aifnmjmchg-link-color)] dark:aifnmjmchg-bg-neutral-700 peer-checked:after:aifnmjmchg-translate-x-full rtl:peer-checked:after:-aifnmjmchg-translate-x-full peer-checked:after:aifnmjmchg-border-white after:aifnmjmchg-content-[''] after:aifnmjmchg-absolute after:aifnmjmchg-top-0.5 after:aifnmjmchg-start-[2px] after:aifnmjmchg-bg-white after:aifnmjmchg-border-neutral-300 after:aifnmjmchg-border after:aifnmjmchg-rounded-full after:aifnmjmchg-h-3 after:aifnmjmchg-w-3 after:aifnmjmchg-transition-all dark:aifnmjmchg-border-neutral-600 peer-checked:aifnmjmchg-bg-[var(--aifnmjmchg-link-color)]" />
// //                                   <span className="aifnmjmchg-ms-1.5 aifnmjmchg-text-xs aifnmjmchg-font-medium aifnmjmchg-text-[var(--aifnmjmchg-link-color)] aifnmjmchg-opacity-60 aifnmjmchg-transition-all aifnmjmchg-select-none peer-checked:aifnmjmchg-opacity-100">
// //                                     Web Access
// //                                   </span>
// //                                 </label>
// //                               </div>
// //                               <button className="aifnmjmchg-flex aifnmjmchg-gap-4">
// //                                 <img
// //                                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAz0lEQVR4nN3VoU7DURSH8Y9IsNAwSjDZfALGeAgak2IxWbXpE5jceIZ/hsRG+j8BFDpJosnirnO7bMY/jPNX+W3fdu++O7v3nMOxpokRhjiLkjwiZda4zeKDpvgh2bLCACeRki2LLAuVpEyJbrQkZWa4jpYkfOY7l7tIxjtKUuYDLzivIrnABG97yt7xhFbVqtro4Q6vmGNTUfZ97h4Ne+YKz1hWkPV/rZIOptFvMq7jdxV19EnxVzq+jJxdi8gpfPB98lDHZjzFTfSO92/zBcBszGtUUreMAAAAAElFTkSuQmCC"
// //                                   alt="Send"
// //                                   className="aifnmjmchg-w-5 aifnmjmchg-h-5"
// //                                 />
// //                               </button>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </body>
// //     </html>
// //   );
// // }

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { useParams } from "next/navigation";

// export default function ProviderProfile() {
//   const mapRef = useRef<HTMLDivElement>(null);
//   const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [marker, setMarker] = useState<google.maps.Marker | null>(null);
//   const PAYLOAD_API_URL =
//     process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://backend-orpin-six-56.vercel.app";

//     const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

//   // const slug = "bria-bennie";

//       const params = useParams();
//       const slug = params.slug;

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [chatMessage, setChatMessage] = useState("");
//   const [webAccess, setWebAccess] = useState(false);
//   const [provider, setProvider] = useState<any>(null);
//   const [locations, setLocations] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProviderData = async () => {
//       try {
//         setLoading(true);

//         // const providerRes = await fetch(
//         //   `https://backend-orpin-six-56.vercel.app/api/providers?where[slug][equals]=${slug}&depth=2`
//         // );
//         const providerRes = await fetch(
//           `${PAYLOAD_API_URL}/api/providers?where[slug][equals]=${slug}&depth=2`
//         );

//         const providerData = await providerRes.json();

//         if (providerData.docs && providerData.docs.length > 0) {
//           const providerInfo = providerData.docs[0];

//           // const transformedProvider = {
//           //   id: providerInfo.id,
//           //   name: providerInfo.name,
//           //   title: providerInfo.title,
//           //   image:
//           //     providerInfo.image?.cloudinary_url ||
//           //     providerInfo.image?.url ||
//           //     "",
//           //   bio: providerInfo.bio,
//           //   specialties: providerInfo.specialties || [],
//           //   experience: providerInfo.experience || [],
//           //   education: providerInfo.education || [],
//           //   certifications: providerInfo.certifications || [],
//           //   languages: providerInfo.languages || [],
//           //   reviews: providerInfo.reviews,
//           //   slug: providerInfo.slug,
//           //   latitude: providerInfo.latitude,
//           //   longitude: providerInfo.longitude,
//           //   zoom: providerInfo.zoom || 15,
//           // };

//           const transformedProvider = {
//             id: providerInfo.id,
//             name: providerInfo.name,
//             title: providerInfo.title,
//             image:
//               providerInfo.image?.cloudinary_url ||
//               providerInfo.image?.url ||
//               "",
//             bio: providerInfo.bio,
//             specialties: providerInfo.specialties || [],
//             experience: providerInfo.experience || [],
//             education: providerInfo.education || [],
//             certifications: providerInfo.certifications || [],
//             awards: providerInfo.awards || [],
//             memberships: providerInfo.memberships || [],
//             personal: providerInfo.personal || [],
//             languages: providerInfo.languages || [],
//             reviews: providerInfo.reviews,
//             slug: providerInfo.slug,
//             latitude: providerInfo.latitude,
//             longitude: providerInfo.longitude,
//             zoom: providerInfo.zoom || 15,
//           };

//           const allLocations = [];

//           if (
//             providerInfo.primaryLocation &&
//             typeof providerInfo.primaryLocation === "object"
//           ) {
//             const loc = providerInfo.primaryLocation;
//             allLocations.push({
//               id: loc.id,
//               name: loc.name,
//               phone: loc.phone,
//               image: loc.image?.cloudinary_url || loc.image?.url || "",
//               alt: loc.alt,
//               address: loc.address,
//               slug: loc.slug,
//             });
//           }

//           if (
//             providerInfo.additionalLocations &&
//             Array.isArray(providerInfo.additionalLocations)
//           ) {
//             providerInfo.additionalLocations.forEach((loc: any) => {
//               if (typeof loc === "object") {
//                 allLocations.push({
//                   id: loc.id,
//                   name: loc.name,
//                   phone: loc.phone,
//                   image: loc.image?.cloudinary_url || loc.image?.url || "",
//                   alt: loc.alt,
//                   address: loc.address,
//                   slug: loc.slug,
//                 });
//               }
//             });
//           }

//           setProvider(transformedProvider);
//           setLocations(allLocations);
//         }
//       } catch (error) {
//         console.error("Error fetching provider data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       fetchProviderData();
//     }
//   }, [slug]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
//     // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC6yYDg1RJRILmiOS2yv4uND1R_xKJKS70&libraries=places`;
//     script.async = true;
//     script.defer = true;

//     script.onload = () => {
//       if (mapRef.current && window.google && provider) {
//         const mapInstance = new window.google.maps.Map(mapRef.current, {
//           center: { lat: provider.latitude, lng: provider.longitude },
//           zoom: provider.zoom,
//           mapTypeId: "roadmap",
//         });

//         setMap(mapInstance);
//       }
//     };

//     if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
//       document.head.appendChild(script);
//     }

//     return () => {
//       if (script.parentNode) {
//         script.parentNode.removeChild(script);
//       }
//     };
//   }, [provider]);

//   useEffect(() => {
//     if (!map || !window.google || !provider) return;

//     if (marker) {
//       marker.setMap(null);
//     }

//     if (provider.latitude && provider.longitude) {
//       const newMarker = new window.google.maps.Marker({
//         position: {
//           lat: provider.latitude,
//           lng: provider.longitude,
//         },
//         map: map,
//         title: provider.name,
//         icon: {
//           url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//         },
//       });

//       setMarker(newMarker);

//       map.setCenter({ lat: provider.latitude, lng: provider.longitude });
//       map.setZoom(provider.zoom);
//     }
//   }, [map, provider]);

//   const renderBio = (bioData: any) => {
//     if (!bioData || !bioData.root || !bioData.root.children) {
//       return null;
//     }

//     return bioData.root.children.map((node: any, index: number) => {
//       if (node.type === "paragraph" && node.children) {
//         return (
//           <p key={index}>
//             {node.children.map((child: any, childIndex: number) => {
//               if (child.type === "text") {
//                 const style =
//                   child.format === 1
//                     ? { fontWeight: "bold" }
//                     : child.format === 2
//                     ? { fontStyle: "italic" }
//                     : {};
//                 return (
//                   <span key={childIndex} style={style}>
//                     {child.text}
//                   </span>
//                 );
//               }
//               return null;
//             })}
//           </p>
//         );
//       }
//       return null;
//     });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!provider) {
//     return <div>Provider not found</div>;
//   }

//   return (
//     <html lang="en">
//       <body className="about meet-the-team bria-bennie sub sticky-header wow-enabled">
//         <main id="main">
//           <div className="container main">
//             <div className="abstract-page provider-page">
//               <div className="main-entry clearfix" data-s3-module="">
//                 <div className="row grid half-image-row">
//                   <div className="media">
//                     <picture className="">
//                       <img
//                         src={provider.image}
//                         loading="lazy"
//                         alt={provider.name}
//                         draggable="false"
//                         data-api-key="media"
//                       />
//                     </picture>
//                   </div>
//                   <div className="copy">
//                     <div className="inner" data-api-key="bio">
//                       <h1 className="entry-title">
//                         {provider.name}
//                         <span className="credentials">{provider.title}</span>
//                       </h1>

//                       <div className="bio">{renderBio(provider.bio)}</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div className="row extras">
//                   {provider.experience && provider.experience.length > 0 && (
//                     <div className="item">
//                       <h3>Experience</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.experience.map(
//                             (exp: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {exp.experience}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.specialties && provider.specialties.length > 0 && (
//                     <div className="item">
//                       <h3>Specialties</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.specialties.map(
//                             (specialty: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {specialty.specialty}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.education && provider.education.length > 0 && (
//                     <div className="item">
//                       <h3>Education</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.education.map((edu: any, index: number) => (
//                             <li key={index}>
//                               <span style={{ fontWeight: 400 }}>
//                                 {edu.degree} - {edu.institution}
//                                 {edu.year && ` (${edu.year})`}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.certifications &&
//                     provider.certifications.length > 0 && (
//                       <div className="item">
//                         <h3>Certifications</h3>
//                         <div className="content">
//                           <ul>
//                             {provider.certifications.map(
//                               (cert: any, index: number) => (
//                                 <li key={index}>
//                                   <span style={{ fontWeight: 400 }}>
//                                     {cert.certification}
//                                   </span>
//                                 </li>
//                               )
//                             )}
//                           </ul>
//                         </div>
//                       </div>
//                     )}

//                   {provider.languages && provider.languages.length > 0 && (
//                     <div className="item">
//                       <h3>Languages</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.languages.map(
//                             (lang: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {lang.language}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}
//                 </div> */}

//                 <div className="row extras">
//                   {provider.experience && provider.experience.length > 0 && (
//                     <div className="item">
//                       <h3>Experience</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.experience.map(
//                             (exp: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {exp.experience}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.specialties && provider.specialties.length > 0 && (
//                     <div className="item">
//                       <h3>Specialties</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.specialties.map(
//                             (specialty: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {specialty.specialty}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.education && provider.education.length > 0 && (
//                     <div className="item">
//                       <h3>Education</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.education.map((edu: any, index: number) => (
//                             <li key={index}>
//                               <span style={{ fontWeight: 400 }}>
//                                 {edu.degree} - {edu.institution}
//                                 {edu.year && ` (${edu.year})`}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.certifications &&
//                     provider.certifications.length > 0 && (
//                       <div className="item">
//                         <h3>Certifications</h3>
//                         <div className="content">
//                           <ul>
//                             {provider.certifications.map(
//                               (cert: any, index: number) => (
//                                 <li key={index}>
//                                   <span style={{ fontWeight: 400 }}>
//                                     {cert.certification}
//                                   </span>
//                                 </li>
//                               )
//                             )}
//                           </ul>
//                         </div>
//                       </div>
//                     )}

//                   {provider.awards && provider.awards.length > 0 && (
//                     <div className="item">
//                       <h3>Awards</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.awards.map((award: any, index: number) => (
//                             <li key={index}>
//                               <span style={{ fontWeight: 400 }}>
//                                 {award.Awards}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.memberships && provider.memberships.length > 0 && (
//                     <div className="item">
//                       <h3>Memberships</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.memberships.map(
//                             (membership: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {membership.Memberships}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.personal && provider.personal.length > 0 && (
//                     <div className="item">
//                       <h3>Personal</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.personal.map(
//                             (personal: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {personal.Personal}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {provider.languages && provider.languages.length > 0 && (
//                     <div className="item">
//                       <h3>Languages</h3>
//                       <div className="content">
//                         <ul>
//                           {provider.languages.map(
//                             (lang: any, index: number) => (
//                               <li key={index}>
//                                 <span style={{ fontWeight: 400 }}>
//                                   {lang.language}
//                                 </span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="row bottom">
//                   <div className="half">
//                     <h3></h3>
//                     <div className="locations">
//                       {locations.map((location) => (
//                         <div
//                           key={location.id}
//                           className="location result"
//                           data-type="location"
//                           data-id={location.id}
//                         >
//                           <a
//                             href={`/locations${location.slug}`}
//                             className="media"
//                           >
//                             <picture className="background">
//                               <img
//                                 src={location.image}
//                                 loading="lazy"
//                                 alt={location.alt || location.name}
//                                 draggable="false"
//                               />
//                             </picture>
//                             <span className="title">{location.name}</span>
//                           </a>
//                           <div className="info">
//                             <a
//                               className="tel ppc-href"
//                               href={`tel:${location.phone.replace(
//                                 /[^0-9]/g,
//                                 ""
//                               )}`}
//                               aria-label={`Call ${location.name} on the phone`}
//                               role="button"
//                             >
//                               <span className="ppc-number">
//                                 {location.phone}
//                               </span>
//                             </a>
//                             <a
//                               href={`/contact/?location=${location.id}`}
//                               data-type="Provider"
//                               data-label={`${provider.name} - ${location.name}`}
//                               className="btn"
//                               data-add-utm="true"
//                             >
//                               Schedule
//                             </a>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="half">
//                     <p className="intro"></p>
//                     <div className="partial_locator_minimap">
//                       <div
//                         className="minimap-section"
//                         style={{
//                           overflow: "hidden",
//                           height: "300px",
//                           backgroundColor: "#e5e3df",
//                         }}
//                       >
//                         <div
//                           ref={mapRef}
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//       </body>
//     </html>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";

export default function ProviderProfile() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const PAYLOAD_API_URL =
    process.env.NEXT_PUBLIC_PAYLOAD_URL ||
    "https://backend-orpin-six-56.vercel.app";

  const googleMapsApiKey = "AIzaSyCcWunoBpxSOoSPvplvrAzIaTh9pI6QfdU";

  const params = useParams();
  const slug = params.slug;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [webAccess, setWebAccess] = useState(false);
  const [provider, setProvider] = useState<any>(null);
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    const fetchProviderData = async () => {
      try {
        setLoading(true);

        const providerRes = await fetch(
          `${PAYLOAD_API_URL}/api/providers?where[slug][equals]=${slug}&depth=2`
        );

        const providerData = await providerRes.json();

        if (providerData.docs && providerData.docs.length > 0) {
          const providerInfo = providerData.docs[0];

          const transformedProvider = {
            id: providerInfo.id,
            name: providerInfo.name,
            title: providerInfo.title,
            image:
              providerInfo.image?.cloudinary_url ||
              providerInfo.image?.url ||
              "",
            bio: providerInfo.bio,
            specialties: providerInfo.specialties || [],
            experience: providerInfo.experience || [],
            education: providerInfo.education || [],
            certifications: providerInfo.certifications || [],
            awards: providerInfo.awards || [],
            memberships: providerInfo.memberships || [],
            personal: providerInfo.personal || [],
            languages: providerInfo.languages || [],
            reviews: providerInfo.reviews,
            slug: providerInfo.slug,
            latitude: providerInfo.latitude,
            longitude: providerInfo.longitude,
            zoom: providerInfo.zoom || 15,
          };

          const allLocations = [];

          if (
            providerInfo.primaryLocation &&
            typeof providerInfo.primaryLocation === "object"
          ) {
            const loc = providerInfo.primaryLocation;
            allLocations.push({
              id: loc.id,
              name: loc.name,
              phone: loc.phone,
              image: loc.image?.cloudinary_url || loc.image?.url || "",
              alt: loc.alt,
              address: loc.address,
              slug: loc.slug,
            });
          }

          if (
            providerInfo.additionalLocations &&
            Array.isArray(providerInfo.additionalLocations)
          ) {
            providerInfo.additionalLocations.forEach((loc: any) => {
              if (typeof loc === "object") {
                allLocations.push({
                  id: loc.id,
                  name: loc.name,
                  phone: loc.phone,
                  image: loc.image?.cloudinary_url || loc.image?.url || "",
                  alt: loc.alt,
                  address: loc.address,
                  slug: loc.slug,
                });
              }
            });
          }

          setProvider(transformedProvider);
          setLocations(allLocations);
        }
      } catch (error) {
        console.error("Error fetching provider data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProviderData();
    }
  }, [slug]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (mapRef.current && window.google && provider) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: provider.latitude, lng: provider.longitude },
          zoom: provider.zoom,
          mapTypeId: "roadmap",
        });

        setMap(mapInstance);
      }
    };

    if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      document.head.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [provider]);

  useEffect(() => {
    if (!map || !window.google || !provider) return;

    if (marker) {
      marker.setMap(null);
    }

    if (provider.latitude && provider.longitude) {
      const newMarker = new window.google.maps.Marker({
        position: {
          lat: provider.latitude,
          lng: provider.longitude,
        },
        map: map,
        title: provider.name,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        },
      });

      setMarker(newMarker);

      map.setCenter({ lat: provider.latitude, lng: provider.longitude });
      map.setZoom(provider.zoom);
    }
  }, [map, provider]);

  const renderBio = (bioData: any) => {
    if (!bioData || !bioData.root || !bioData.root.children) {
      return null;
    }

    return bioData.root.children.map((node: any, index: number) => {
      if (node.type === "paragraph" && node.children) {
        return (
          <p key={index}>
            {node.children.map((child: any, childIndex: number) => {
              if (child.type === "text") {
                const style =
                  child.format === 1
                    ? { fontWeight: "bold" }
                    : child.format === 2
                      ? { fontStyle: "italic" }
                      : {};
                return (
                  <span key={childIndex} style={style}>
                    {child.text}
                  </span>
                );
              }
              return null;
            })}
          </p>
        );
      }
      return null;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!provider) {
    return <div>Provider not found</div>;
  }

  return (
    <html lang="en">
      <body className="about meet-the-team bria-bennie sub sticky-header wow-enabled">
        <main id="main">
          <div className="container main">
            <div className="abstract-page provider-page">
              <div className="main-entry clearfix" data-s3-module="">
                <div className="row grid half-image-row">
                  <div className="media">
                    <picture className="">
                      <img
                        src={provider.image}
                        loading="lazy"
                        alt={provider.name}
                        draggable="false"
                        data-api-key="media"
                      />
                    </picture>
                  </div>
                  <div className="copy">
                    <div className="inner" data-api-key="bio">
                      <h1 className="entry-title">
                        {provider.name}
                        <span className="credentials">{provider.title}</span>
                      </h1>

                      <div className="bio">{renderBio(provider.bio)}</div>
                    </div>
                  </div>
                </div>

                <div className="row extras">
                  {provider.experience && provider.experience.length > 0 && (
                    <div
                      className={`item ${openSections.experience ? "active" : ""}`}
                    >
                      <h3
                        onClick={() => toggleSection("experience")}
                        style={{ cursor: "pointer" }}
                      >
                        Experience
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: openSections.experience ? "block" : "none",
                        }}
                      >
                        <ul>
                          {provider.experience.map(
                            (exp: any, index: number) => (
                              <li key={index}>
                                <span style={{ fontWeight: 400 }}>
                                  {exp.experience}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}

                  {provider.specialties && provider.specialties.length > 0 && (
                    <div
                      className={`item ${openSections.specialties ? "active" : ""}`}
                    >
                      <h3
                        onClick={() => toggleSection("specialties")}
                        style={{ cursor: "pointer" }}
                      >
                        Specialties
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: openSections.specialties ? "block" : "none",
                        }}
                      >
                        <ul>
                          {provider.specialties.map(
                            (specialty: any, index: number) => (
                              <li key={index}>
                                <span style={{ fontWeight: 400 }}>
                                  {specialty.specialty}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}

                  {provider.education && provider.education.length > 0 && (
                    <div
                      className={`item ${openSections.education ? "active" : ""}`}
                    >
                      <h3
                        onClick={() => toggleSection("education")}
                        style={{ cursor: "pointer" }}
                      >
                        Education
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: openSections.education ? "block" : "none",
                        }}
                      >
                        <ul>
                          {provider.education.map((edu: any, index: number) => (
                            <li key={index}>
                              <span style={{ fontWeight: 400 }}>
                                {edu.degree} - {edu.institution}
                                {edu.year && ` (${edu.year})`}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {provider.certifications &&
                    provider.certifications.length > 0 && (
                      <div
                        className={`item ${openSections.certifications ? "active" : ""}`}
                      >
                        <h3
                          onClick={() => toggleSection("certifications")}
                          style={{ cursor: "pointer" }}
                        >
                          Certifications
                        </h3>
                        <div
                          className="content"
                          style={{
                            display: openSections.certifications
                              ? "block"
                              : "none",
                          }}
                        >
                          <ul>
                            {provider.certifications.map(
                              (cert: any, index: number) => (
                                <li key={index}>
                                  <span style={{ fontWeight: 400 }}>
                                    {cert.certification}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    )}

                  {provider.awards && provider.awards.length > 0 && (
                    <div
                      className={`item ${openSections.awards ? "active" : ""}`}
                    >
                      <h3
                        onClick={() => toggleSection("awards")}
                        style={{ cursor: "pointer" }}
                      >
                        Awards
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: openSections.awards ? "block" : "none",
                        }}
                      >
                        <ul>
                          {provider.awards.map((award: any, index: number) => (
                            <li key={index}>
                              <span style={{ fontWeight: 400 }}>
                                {award.Awards}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {provider.memberships && provider.memberships.length > 0 && (
                    <div
                      className={`item ${openSections.memberships ? "active" : ""}`}
                    >
                      <h3
                        onClick={() => toggleSection("memberships")}
                        style={{ cursor: "pointer" }}
                      >
                        Memberships
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: openSections.memberships ? "block" : "none",
                        }}
                      >
                        <ul>
                          {provider.memberships.map(
                            (membership: any, index: number) => (
                              <li key={index}>
                                <span style={{ fontWeight: 400 }}>
                                  {membership.Memberships}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}

                  {provider.personal && provider.personal.length > 0 && (
                    <div
                      className={`item ${openSections.personal ? "active" : ""}`}
                    >
                      <h3
                        onClick={() => toggleSection("personal")}
                        style={{ cursor: "pointer" }}
                      >
                        Personal
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: openSections.personal ? "block" : "none",
                        }}
                      >
                        <ul>
                          {provider.personal.map(
                            (personal: any, index: number) => (
                              <li key={index}>
                                <span style={{ fontWeight: 400 }}>
                                  {personal.Personal}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}

                  {provider.languages && provider.languages.length > 0 && (
                    <div
                      className={`item ${openSections.languages ? "active" : ""}`}
                    >
                      <h3
                        onClick={() => toggleSection("languages")}
                        style={{ cursor: "pointer" }}
                      >
                        Languages
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: openSections.languages ? "block" : "none",
                        }}
                      >
                        <ul>
                          {provider.languages.map(
                            (lang: any, index: number) => (
                              <li key={index}>
                                <span style={{ fontWeight: 400 }}>
                                  {lang.language}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="row bottom">
                  <div className="half">
                    <h3></h3>
                    <div className="locations">
                      {locations.map((location) => (
                        <div
                          key={location.id}
                          className="location result"
                          data-type="location"
                          data-id={location.id}
                        >
                          <a
                            href={`/locations${location.slug}`}
                            className="media"
                          >
                            <picture className="background">
                              <img
                                src={location.image}
                                loading="lazy"
                                alt={location.alt || location.name}
                                draggable="false"
                              />
                            </picture>
                            <span className="title">{location.name}</span>
                          </a>
                          <div className="info">
                            <a
                              className="tel ppc-href"
                              href={`tel:${location.phone.replace(
                                /[^0-9]/g,
                                ""
                              )}`}
                              aria-label={`Call ${location.name} on the phone`}
                              role="button"
                            >
                              <span className="ppc-number">
                                {location.phone}
                              </span>
                            </a>
                            <a
                              href={`/contact/?location=${location.id}`}
                              data-type="Provider"
                              data-label={`${provider.name} - ${location.name}`}
                              className="btn"
                              data-add-utm="true"
                            >
                              Schedule
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="half">
                    <p className="intro"></p>
                    <div className="partial_locator_minimap">
                      <div
                        className="minimap-section"
                        style={{
                          overflow: "hidden",
                          height: "300px",
                          backgroundColor: "#e5e3df",
                        }}
                      >
                        <div
                          ref={mapRef}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}