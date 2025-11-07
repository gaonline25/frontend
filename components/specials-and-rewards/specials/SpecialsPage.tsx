// // // import React from "react";

// // // const SpecialsPage: React.FC = () => {
// // //   return (
// // //     <main id="main">
// // //       {/* Page Layout */}
// // //       {/* Hero Module */}
// // //       <div className="mod_hero banner less-padding mobile-stack" data-s3-module>
// // //         <div className="wrapper">
// // //           <picture className="background">
// // //             <source
// // //               media="(max-width:420px)"
// // //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
// // //             />
// // //             <source
// // //               media="(max-width:800px)"
// // //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
// // //             />
// // //             <source
// // //               media="(max-width:1400px)"
// // //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
// // //             />
// // //             <source
// // //               srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //               data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
// // //             />
// // //             <img
// // //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //               data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
// // //               loading="lazy"
// // //               data-lazyload="img"
// // //               width="1994"
// // //               height="1206"
// // //               alt="Background Texture"
// // //               draggable="false"
// // //             />
// // //           </picture>
// // //           <div className="row">
// // //             <div className="inner">
// // //               <ul className="partial_breadcrumb" data-s3-partial>
// // //                 <li>
// // //                   <a
// // //                     href="/"
// // //                     role="link"
// // //                     aria-label="Breadcrumbs to help navigate the user"
// // //                   >
// // //                     Home
// // //                   </a>
// // //                 </li>
// // //                 <li>
// // //                   <a
// // //                     href="/specials-and-rewards/"
// // //                     role="link"
// // //                     aria-label="Breadcrumbs to help navigate the user"
// // //                   >
// // //                     Specials And Rewards
// // //                   </a>
// // //                 </li>
// // //                 <li>
// // //                   <a
// // //                     href="/specials-and-rewards/specials/"
// // //                     role="link"
// // //                     aria-label="Breadcrumbs to help navigate the user"
// // //                   >
// // //                     Specials
// // //                   </a>
// // //                 </li>
// // //               </ul>
// // //               <h1>Specials</h1>
// // //             </div>
// // //           </div>
// // //           <div className="media">
// // //             <picture className="background">
// // //               <source
// // //                 media="(max-width:420px)"
// // //                 srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=630 2x"
// // //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=630 2x"
// // //               />
// // //               <source
// // //                 media="(max-width:800px)"
// // //                 srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1200 2x"
// // //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1200 2x"
// // //               />
// // //               <source
// // //                 media="(max-width:1400px)"
// // //                 srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=2100 2x"
// // //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=2100 2x"
// // //               />
// // //               <source
// // //                 srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1600"
// // //                 data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1600"
// // //               />
// // //               <img
// // //                 src="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1600"
// // //                 width="1600"
// // //                 height="730"
// // //                 alt="team photo"
// // //                 draggable="false"
// // //               />
// // //             </picture>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Intro Module */}
// // //       <div
// // //         className="mod_intro container viewport option-1 wide wow fadeInUp"
// // //         data-s3-module
// // //       >
// // //         <div className="row pb-0">
// // //           <picture className="logo">
// // //             <img
// // //               src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
// // //               width={58}
// // //               height={64}
// // //               loading="lazy"
// // //               alt="Goldfingers aesthetic logo"
// // //               draggable="false"
// // //               data-api-key="logo"
// // //             />
// // //           </picture>
// // //           <div className="inner" data-api-key="content">
// // //             <h2>Goldfingers Aesthetics Specials</h2>
// // //             <p>
// // //               At Goldfingers Aesthetics we want you to look and feel your best
// // //               all the time. which is why we offer monthly specials on our
// // //               medical spa services. &nbsp;We are the largest medical spa in
// // //               Florida and offer the latest medical aesthetic services ranging
// // //               from BOTOX &reg;&amp;Dysport &reg;, to dermal fillers like
// // //               Restylane &reg;and Juvederm &reg;.{" "}
// // //               <a href="/contact/">Book an appointment</a>
// // //               with our medical aesthetics spa today. We would love to see you!
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Banner Module */}
// // //       <div
// // //         className="mod_banner dark  hide-divider viewport background-1"
// // //         data-s3-module
// // //       >
// // //         <div className="row wow fadeInUp">
// // //           <div className="content" data-api-key="top_content">
// // //             <div className="text-center">
// // //               <h2>Price Match Guarantee for all Dermal Fillers!</h2>
// // //               <p>(Valid for any quote on or before 30 days)</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <picture className="background">
// // //           <source
// // //             media="(max-width:420px)"
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200 2x"
// // //           />
// // //           <source
// // //             media="(max-width:800px)"
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
// // //           />
// // //           <source
// // //             media="(max-width:1400px)"
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
// // //           />
// // //           <source
// // //             srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// // //           />
// // //           <img
// // //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
// // //             data-lazyload-src="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
// // //             loading="lazy"
// // //             data-lazyload="img"
// // //             width="2200"
// // //             height="802"
// // //             alt="Banner media"
// // //             draggable="false"
// // //           />
// // //         </picture>
// // //       </div>

// // //       {/* Column Module */}
// // //       <div className="mod_column viewport container" data-s3-module>
// // //         <div className="row text-center" data-api-key="content">
// // //           <div className="item">
// // //             <p>
// // //               <img
// // //                 src="https://www.datocms-assets.com/105497/1756830299-unnamed-1.png"
// // //                 width="578"
// // //                 height="723"
// // //               />
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Column Module */}
// // //       <div className="mod_column viewport container" data-s3-module>
// // //         <div className="row text-center" data-api-key="content">
// // //           <div className="item">
// // //             <div className="mw-50">
// // //               <p>
// // //                 <img
// // //                   src="https://www.datocms-assets.com/105497/1738187926-become-a-vip-member-for-one-year-for-only-199-receive-the-following-specials-for-one-year-after-purchase-8-99-botox-cosmetic-25-additional-savings-off-any-special-pricing-of-dermal-fillers-1.png"
// // //                   width="576"
// // //                   height="791"
// // //                 />
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Contact Form Module */}
// // //       <div className="mod_contact_form" data-s3-module>
// // //         <div className="wrapper">
// // //           <div className="row">
// // //             <h2>Contact Us</h2>
// // //             <div className="partial_form" data-s3-partial>
// // //               <form
// // //                 id="form_contact"
// // //                 className="s3-form"
// // //                 method="post"
// // //                 action="/validate/"
// // //                 data-abide=""
// // //                 encType="multipart/form-data"
// // //                 noValidate
// // //               >
// // //                 <div className="fields">
// // //                   <div className="field-row col1 hidden-row">
// // //                     <div className="field hidden">
// // //                       <input
// // //                         type="hidden"
// // //                         name="subject"
// // //                         id="contact_subject"
// // //                         value="Contact Form"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1 hidden-row">
// // //                     <div className="field hidden">
// // //                       <input
// // //                         type="hidden"
// // //                         name="redirect"
// // //                         id="contact_redirect"
// // //                         value="/contact/thank-you/"
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
// // //                         value=""
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
// // //                         value=""
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
// // //                         value=""
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
// // //                         value=""
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
// // //                         required
// // //                         aria-required="true"
// // //                       >
// // //                         <option value="" selected disabled>
// // //                           Location*
// // //                         </option>
// // //                       </select>
// // //                     </div>
// // //                   </div>
// // //                   <div className="field-row col1 hidden-row">
// // //                     <div className="field hidden">
// // //                       <input
// // //                         type="hidden"
// // //                         name="location_name"
// // //                         id="contact_location_name"
// // //                         value=""
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
// // //                         required
// // //                         aria-required="true"
// // //                       >
// // //                         <option value="" selected disabled>
// // //                           What Service Are You Interested In?*
// // //                         </option>
// // //                         <option value="Liposuction">Liposuction</option>
// // //                         <option value="BOTOX">BOTOX</option>
// // //                         <option value="Plastic Surgery">Plastic Surgery</option>
// // //                         <option value="Micro-channeling">
// // //                           Micro-channeling
// // //                         </option>
// // //                         <option value="Med Spa">Med Spa</option>
// // //                         <option value="Skin Care">Skin Care</option>
// // //                         <option value="Dermal Fillers">Dermal Fillers</option>
// // //                         <option value="Face Lift">Face Lift</option>
// // //                         <option value="Weight Loss Injections">
// // //                           Weight Loss Injections
// // //                         </option>
// // //                         <option value="I Have a Question">
// // //                           I Have a Question
// // //                         </option>
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
// // //                         defaultValue=""
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
// // //                         Messaging frequency may vary. Message and data rates may
// // //                         apply. You can opt out any time by texting STOP. For
// // //                         assistance, text HELP or visit our website at{" "}
// // //                         <a href="https://goldfingersaesthetics.com">
// // //                           Goldfingers Aesthetics
// // //                         </a>
// // //                         . Visit{" "}
// // //                         <a href="https://goldfingersaesthetics.com/privacy-policy">
// // //                           Privacy Policy
// // //                         </a>
// // //                         and{" "}
// // //                         <a href="https://www.goldfingersaesthetics.com/terms-and-conditions/">
// // //                           Terms and Conditions
// // //                         </a>
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
// // //                   >
// // //                     Submit
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {/* /Page Layout */}
// // //     </main>
// // //   );
// // // };

// // // export default SpecialsPage;

// // // // "use client";

// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //   fetchSpecicalFillersPageData,
// // // //   getResponsiveImageUrls,
// // // //   lexicalToHtml,
// // // //   getImageUrl,
// // // // } from "@/lib/api/specials/fetchSpecialsPageComponent"; // Adjust path to your API utilities

// // // // interface SpecialsPageData {
// // // //   heroSection: {
// // // //     show: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     backgroundImage: {
// // // //       mobile?: any;
// // // //       tablet?: any;
// // // //       desktop?: any;
// // // //       large?: any;
// // // //       alt?: string;
// // // //     };
// // // //     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
// // // //     title: string;
// // // //     titleColor?: string;
// // // //     titleFontSize?: string;
// // // //     mediaImage: {
// // // //       mobile?: any;
// // // //       tablet?: any;
// // // //       desktop?: any;
// // // //       large?: any;
// // // //       alt?: string;
// // // //     };
// // // //   };
// // // //   introSection: {
// // // //     show: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     textColor?: string;
// // // //     paddingBottom?: string;
// // // //     logo?: any;
// // // //     logoAlt?: string;
// // // //     logoWidth?: string;
// // // //     logoHeight?: string;
// // // //     heading: string;
// // // //     headingColor?: string;
// // // //     content: any;
// // // //   };
// // // //   bannerSection1: {
// // // //     show: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     textColor?: string;
// // // //     textAlign?: string;
// // // //     backgroundImage: {
// // // //       mobile?: any;
// // // //       tablet?: any;
// // // //       desktop?: any;
// // // //       large?: any;
// // // //       alt?: string;
// // // //     };
// // // //     heading: string;
// // // //     headingColor?: string;
// // // //     content?: any;
// // // //   };
// // // //   columnSection1: {
// // // //     show: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     textAlign?: string;
// // // //     columns: Array<{
// // // //       columnWidth?: string;
// // // //       content: any;
// // // //       image?: {
// // // //         url?: any;
// // // //         width?: string;
// // // //         height?: string;
// // // //         alt?: string;
// // // //       };
// // // //     }>;
// // // //   };
// // // //   columnSection2: {
// // // //     show: boolean;
// // // //     className?: string;
// // // //     backgroundColor?: string;
// // // //     textAlign?: string;
// // // //     columns: Array<{
// // // //       columnWidth?: string;
// // // //       content: any;
// // // //       image?: {
// // // //         url?: any;
// // // //         width?: string;
// // // //         height?: string;
// // // //         alt?: string;
// // // //       };
// // // //     }>;
// // // //   };
// // // //   contactFormSection: {
// // // //     show: boolean;
// // // //     backgroundColor?: string;
// // // //     textColor?: string;
// // // //     heading: string;
// // // //     headingColor?: string;
// // // //     formSettings: {
// // // //       formId: string;
// // // //       formAction: string;
// // // //       redirectUrl: string;
// // // //       emailSubject: string;
// // // //     };
// // // //     formFields: Array<{
// // // //       fieldType: string;
// // // //       fieldName: string;
// // // //       fieldId: string;
// // // //       label?: string;
// // // //       placeholder?: string;
// // // //       required?: boolean;
// // // //       defaultValue?: string;
// // // //       columnClass?: string;
// // // //       additionalClasses?: string;
// // // //       selectOptions?: Array<{ label: string; value: string }>;
// // // //       validationMessage?: string;
// // // //     }>;
// // // //     buttonText: string;
// // // //     buttonBackgroundColor?: string;
// // // //     buttonTextColor?: string;
// // // //     buttonHoverBackgroundColor?: string;
// // // //     privacyNotice?: any;
// // // //     enableRecaptcha: boolean;
// // // //   };
// // // //   sectionOrder: Array<{ section: string }>;
// // // //   globalStyles: {
// // // //     containerMaxWidth?: string;
// // // //     containerPadding?: string;
// // // //     sectionSpacing?: string;
// // // //     fontFamily?: string;
// // // //     primaryColor?: string;
// // // //     secondaryColor?: string;
// // // //     textColor?: string;
// // // //     linkColor?: string;
// // // //     linkHoverColor?: string;
// // // //   };
// // // // }

// // // // const SpecialsPage: React.FC = () => {
// // // //   const [pageData, setPageData] = useState<SpecialsPageData | null>(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         const data = await fetchSpecicalFillersPageData();
// // // //         setPageData(data);
// // // //       } catch (error) {
// // // //         console.error("Error fetching Specials page data:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     fetchData();
// // // //   }, []);

// // // //   if (loading) return <div>Loading...</div>;
// // // //   if (!pageData) return <div>No data available</div>;

// // // //   const {
// // // //     heroSection,
// // // //     introSection,
// // // //     bannerSection1,
// // // //     columnSection1,
// // // //     columnSection2,
// // // //     contactFormSection,
// // // //     sectionOrder,
// // // //     globalStyles,
// // // //   } = pageData;

// // // //   const placeholder =
// // // //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// // // //   const renderSection = (section: string) => {
// // // //     switch (section) {
// // // //       case "hero":
// // // //         if (!heroSection.show) return null;
// // // //         const heroBgImages = getResponsiveImageUrls(
// // // //           heroSection.backgroundImage
// // // //         );
// // // //         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
// // // //         return (
// // // //           <div
// // // //             className={`mod_hero banner ${
// // // //               heroSection.className || "less-padding mobile-stack"
// // // //             }`}
// // // //             data-s3-module
// // // //             style={{ backgroundColor: heroSection.backgroundColor }}
// // // //           >
// // // //             <div className="wrapper">
// // // //               <picture className="background">
// // // //                 <source
// // // //                   media="(max-width:420px)"
// // // //                   srcSet={placeholder}
// // // //                   data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
// // // //                 />
// // // //                 <source
// // // //                   media="(max-width:800px)"
// // // //                   srcSet={placeholder}
// // // //                   data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
// // // //                 />
// // // //                 <source
// // // //                   media="(max-width:1400px)"
// // // //                   srcSet={placeholder}
// // // //                   data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
// // // //                 />
// // // //                 <source
// // // //                   srcSet={placeholder}
// // // //                   data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
// // // //                 />
// // // //                 <img
// // // //                   src={placeholder}
// // // //                   data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
// // // //                   loading="lazy"
// // // //                   data-lazyload="img"
// // // //                   width="1994"
// // // //                   height="1206"
// // // //                   alt={heroBgImages.alt || "Background Texture"}
// // // //                   draggable="false"
// // // //                 />
// // // //               </picture>
// // // //               <div className="row">
// // // //                 <div className="inner">
// // // //                   <ul className="partial_breadcrumb" data-s3-partial>
// // // //                     {heroSection.breadcrumbs.map((crumb, index) => (
// // // //                       <li key={index}>
// // // //                         <a
// // // //                           href={crumb.url}
// // // //                           role="link"
// // // //                           aria-label={
// // // //                             crumb.ariaLabel ||
// // // //                             "Breadcrumbs to help navigate the user"
// // // //                           }
// // // //                         >
// // // //                           {crumb.label}
// // // //                         </a>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                   <h1
// // // //                     style={{
// // // //                       color: heroSection.titleColor,
// // // //                       fontSize: heroSection.titleFontSize,
// // // //                     }}
// // // //                   >
// // // //                     {heroSection.title}
// // // //                   </h1>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="media">
// // // //                 <picture className="background">
// // // //                   <source
// // // //                     media="(max-width:420px)"
// // // //                     srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
// // // //                     data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
// // // //                   />
// // // //                   <source
// // // //                     media="(max-width:800px)"
// // // //                     srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
// // // //                     data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
// // // //                   />
// // // //                   <source
// // // //                     media="(max-width:1400px)"
// // // //                     srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
// // // //                     data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
// // // //                   />
// // // //                   <source
// // // //                     srcSet={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// // // //                     data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// // // //                   />
// // // //                   <img
// // // //                     src={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// // // //                     width="1600"
// // // //                     height="730"
// // // //                     alt={heroMediaImages.alt || "team photo"}
// // // //                     draggable="false"
// // // //                   />
// // // //                 </picture>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "intro":
// // // //         if (!introSection.show) return null;
// // // //         const introLogo = getImageUrl(introSection.logo);
// // // //         return (
// // // //           <div
// // // //             className={`mod_intro container viewport ${
// // // //               introSection.className || "option-1 wide"
// // // //             } wow fadeInUp`}
// // // //             data-s3-module
// // // //             style={{
// // // //               backgroundColor: introSection.backgroundColor,
// // // //               color: introSection.textColor,
// // // //               paddingBottom: introSection.paddingBottom,
// // // //             }}
// // // //           >
// // // //             <div className="row pb-0">
// // // //               {introLogo && (
// // // //                 <picture className="logo">
// // // //                   <img
// // // //                     src={introLogo}
// // // //                     width={introSection.logoWidth || 58}
// // // //                     height={introSection.logoHeight || 64}
// // // //                     loading="lazy"
// // // //                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
// // // //                     draggable="false"
// // // //                     data-api-key="logo"
// // // //                   />
// // // //                 </picture>
// // // //               )}
// // // //               <div className="inner" data-api-key="content">
// // // //                 <h2 style={{ color: introSection.headingColor }}>
// // // //                   {introSection.heading}
// // // //                 </h2>
// // // //                 <div
// // // //                   dangerouslySetInnerHTML={{
// // // //                     __html: lexicalToHtml(introSection.content),
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "bannerSection1":
// // // //         if (!bannerSection1.show) return null;
// // // //         const bannerImages = getResponsiveImageUrls(
// // // //           bannerSection1.backgroundImage
// // // //         );
// // // //         return (
// // // //           <div
// // // //             className={`mod_banner ${
// // // //               bannerSection1.className ||
// // // //               "dark hide-divider viewport background-1"
// // // //             }`}
// // // //             data-s3-module
// // // //             style={{
// // // //               backgroundColor: bannerSection1.backgroundColor,
// // // //               color: bannerSection1.textColor,
// // // //             }}
// // // //           >
// // // //             <div className="row wow fadeInUp">
// // // //               <div className="content" data-api-key="top_content">
// // // //                 <div className={`text-${bannerSection1.textAlign || "center"}`}>
// // // //                   <h2 style={{ color: bannerSection1.headingColor }}>
// // // //                     {bannerSection1.heading}
// // // //                   </h2>
// // // //                   {bannerSection1.content && (
// // // //                     <div
// // // //                       dangerouslySetInnerHTML={{
// // // //                         __html: lexicalToHtml(bannerSection1.content),
// // // //                       }}
// // // //                     />
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <picture className="background">
// // // //               <source
// // // //                 media="(max-width:420px)"
// // // //                 srcSet={placeholder}
// // // //                 data-lazyload-srcset={`${bannerImages.mobile}?auto=format,compress&w=800, ${bannerImages.mobile}?auto=format,compress&w=1200 2x`}
// // // //               />
// // // //               <source
// // // //                 media="(max-width:800px)"
// // // //                 srcSet={placeholder}
// // // //                 data-lazyload-srcset={`${bannerImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${bannerImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
// // // //               />
// // // //               <source
// // // //                 media="(max-width:1400px)"
// // // //                 srcSet={placeholder}
// // // //                 data-lazyload-srcset={`${bannerImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
// // // //               />
// // // //               <source
// // // //                 srcSet={placeholder}
// // // //                 data-lazyload-srcset={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
// // // //               />
// // // //               <img
// // // //                 src={placeholder}
// // // //                 data-lazyload-src={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
// // // //                 loading="lazy"
// // // //                 data-lazyload="img"
// // // //                 width="2200"
// // // //                 height="802"
// // // //                 alt={bannerImages.alt || "Banner media"}
// // // //                 draggable="false"
// // // //               />
// // // //             </picture>
// // // //           </div>
// // // //         );

// // // //       case "columnSection1":
// // // //         if (!columnSection1.show) return null;
// // // //         return (
// // // //           <div
// // // //             className={`mod_column viewport container ${
// // // //               columnSection1.className || ""
// // // //             }`}
// // // //             data-s3-module
// // // //             style={{ backgroundColor: columnSection1.backgroundColor }}
// // // //           >
// // // //             <div
// // // //               className={`row text-${columnSection1.textAlign || "center"}`}
// // // //               data-api-key="content"
// // // //             >
// // // //               {columnSection1.columns.map((column, index) => (
// // // //                 <div className="item" key={index}>
// // // //                   {column.columnWidth ? (
// // // //                     <div className={column.columnWidth}>
// // // //                       <div
// // // //                         dangerouslySetInnerHTML={{
// // // //                           __html: lexicalToHtml(column.content),
// // // //                         }}
// // // //                       />
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div
// // // //                       dangerouslySetInnerHTML={{
// // // //                         __html: lexicalToHtml(column.content),
// // // //                       }}
// // // //                     />
// // // //                   )}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "columnSection2":
// // // //         if (!columnSection2.show) return null;
// // // //         return (
// // // //           <div
// // // //             className={`mod_column viewport container ${
// // // //               columnSection2.className || ""
// // // //             }`}
// // // //             data-s3-module
// // // //             style={{ backgroundColor: columnSection2.backgroundColor }}
// // // //           >
// // // //             <div
// // // //               className={`row text-${columnSection2.textAlign || "center"}`}
// // // //               data-api-key="content"
// // // //             >
// // // //               {columnSection2.columns.map((column, index) => (
// // // //                 <div className="item" key={index}>
// // // //                   {column.columnWidth ? (
// // // //                     <div className={column.columnWidth}>
// // // //                       <div
// // // //                         dangerouslySetInnerHTML={{
// // // //                           __html: lexicalToHtml(column.content),
// // // //                         }}
// // // //                       />
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div
// // // //                       dangerouslySetInnerHTML={{
// // // //                         __html: lexicalToHtml(column.content),
// // // //                       }}
// // // //                     />
// // // //                   )}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "contactForm":
// // // //         if (!contactFormSection.show) return null;
// // // //         return (
// // // //           <div
// // // //             className="mod_contact_form"
// // // //             data-s3-module
// // // //             style={{
// // // //               backgroundColor: contactFormSection.backgroundColor,
// // // //               color: contactFormSection.textColor,
// // // //             }}
// // // //           >
// // // //             <div className="wrapper">
// // // //               <div className="row">
// // // //                 <h2 style={{ color: contactFormSection.headingColor }}>
// // // //                   {contactFormSection.heading}
// // // //                 </h2>
// // // //                 <div className="partial_form" data-s3-partial>
// // // //                   <form
// // // //                     id={`form_${contactFormSection.formSettings.formId}`}
// // // //                     className="s3-form"
// // // //                     method="post"
// // // //                     action={contactFormSection.formSettings.formAction}
// // // //                     data-abide=""
// // // //                     encType="multipart/form-data"
// // // //                     noValidate
// // // //                   >
// // // //                     <div className="fields">
// // // //                       {contactFormSection.formFields.map((field, index) => {
// // // //                         const fieldClasses = `field-row ${
// // // //                           field.columnClass || "col1"
// // // //                         } ${field.additionalClasses || ""}`.trim();

// // // //                         if (field.fieldType === "hidden") {
// // // //                           return (
// // // //                             <div key={index} className={fieldClasses}>
// // // //                               <div className="field hidden">
// // // //                                 <input
// // // //                                   type="hidden"
// // // //                                   name={field.fieldName}
// // // //                                   id={field.fieldId}
// // // //                                   value={field.defaultValue || ""}
// // // //                                 />
// // // //                               </div>
// // // //                             </div>
// // // //                           );
// // // //                         }

// // // //                         if (field.fieldType === "textarea") {
// // // //                           return (
// // // //                             <div key={index} className={fieldClasses}>
// // // //                               <div className="field textarea">
// // // //                                 {field.label && (
// // // //                                   <label htmlFor={field.fieldId}>
// // // //                                     {field.label}
// // // //                                   </label>
// // // //                                 )}
// // // //                                 <textarea
// // // //                                   rows={6}
// // // //                                   cols={48}
// // // //                                   name={field.fieldName}
// // // //                                   id={field.fieldId}
// // // //                                   placeholder={field.placeholder}
// // // //                                   required={field.required}
// // // //                                   aria-required={
// // // //                                     field.required ? "true" : "false"
// // // //                                   }
// // // //                                   defaultValue=""
// // // //                                 ></textarea>
// // // //                               </div>
// // // //                             </div>
// // // //                           );
// // // //                         }

// // // //                         if (field.fieldType === "select") {
// // // //                           return (
// // // //                             <div key={index} className={fieldClasses}>
// // // //                               <div className="field select">
// // // //                                 {field.label && (
// // // //                                   <label htmlFor={field.fieldId}>
// // // //                                     {field.label}
// // // //                                   </label>
// // // //                                 )}
// // // //                                 {field.required && (
// // // //                                   <small>
// // // //                                     {field.validationMessage ||
// // // //                                       "This field is required."}
// // // //                                   </small>
// // // //                                 )}
// // // //                                 <select
// // // //                                   name={field.fieldName}
// // // //                                   id={field.fieldId}
// // // //                                   required={field.required}
// // // //                                   aria-required={
// // // //                                     field.required ? "true" : "false"
// // // //                                   }
// // // //                                 >
// // // //                                   <option value="" disabled>
// // // //                                     {field.placeholder}
// // // //                                   </option>
// // // //                                   {field.selectOptions?.map(
// // // //                                     (option, optIndex) => (
// // // //                                       <option
// // // //                                         key={optIndex}
// // // //                                         value={option.value}
// // // //                                       >
// // // //                                         {option.label}
// // // //                                       </option>
// // // //                                     )
// // // //                                   )}
// // // //                                 </select>
// // // //                               </div>
// // // //                             </div>
// // // //                           );
// // // //                         }

// // // //                         if (field.fieldType === "checkbox") {
// // // //                           return (
// // // //                             <div key={index} className={fieldClasses}>
// // // //                               <div
// // // //                                 className={`field checkbox ${
// // // //                                   field.additionalClasses || ""
// // // //                                 }`}
// // // //                               >
// // // //                                 {field.required && (
// // // //                                   <small>
// // // //                                     {field.validationMessage ||
// // // //                                       "This field is required."}
// // // //                                   </small>
// // // //                                 )}
// // // //                                 <div className="field-item checkbox-item">
// // // //                                   <input
// // // //                                     type="checkbox"
// // // //                                     id={field.fieldId}
// // // //                                     name={field.fieldName}
// // // //                                     value={field.defaultValue || "Yes"}
// // // //                                     required={field.required}
// // // //                                     aria-required={
// // // //                                       field.required ? "true" : "false"
// // // //                                     }
// // // //                                   />
// // // //                                   {field.label && (
// // // //                                     <label htmlFor={field.fieldId}>
// // // //                                       {field.label}
// // // //                                     </label>
// // // //                                   )}
// // // //                                 </div>
// // // //                               </div>
// // // //                             </div>
// // // //                           );
// // // //                         }

// // // //                         return (
// // // //                           <div key={index} className={fieldClasses}>
// // // //                             <div className={`field ${field.fieldType}`}>
// // // //                               {field.label && (
// // // //                                 <label htmlFor={field.fieldId}>
// // // //                                   {field.label}
// // // //                                 </label>
// // // //                               )}
// // // //                               {field.required && (
// // // //                                 <small>
// // // //                                   {field.validationMessage ||
// // // //                                     "This field is required."}
// // // //                                 </small>
// // // //                               )}
// // // //                               <input
// // // //                                 type={field.fieldType}
// // // //                                 size={50}
// // // //                                 name={field.fieldName}
// // // //                                 id={field.fieldId}
// // // //                                 defaultValue=""
// // // //                                 required={field.required}
// // // //                                 aria-required={
// // // //                                   field.required ? "true" : "false"
// // // //                                 }
// // // //                                 placeholder={field.placeholder}
// // // //                               />
// // // //                             </div>
// // // //                           </div>
// // // //                         );
// // // //                       })}
// // // //                     </div>
// // // //                     {contactFormSection.enableRecaptcha && (
// // // //                       <div>
// // // //                         <input
// // // //                           id={`${contactFormSection.formSettings.formId}_recaptchaV3`}
// // // //                           name="g-recaptcha-response-v3"
// // // //                           type="hidden"
// // // //                         />
// // // //                         <div
// // // //                           id={`${contactFormSection.formSettings.formId}_recaptchaV2`}
// // // //                           data-recaptcha
// // // //                         ></div>
// // // //                         <div
// // // //                           id={`${contactFormSection.formSettings.formId}_recaptcha`}
// // // //                           data-recaptcha-error
// // // //                         >
// // // //                           <small>This field is required.</small>
// // // //                         </div>
// // // //                       </div>
// // // //                     )}
// // // //                     <input
// // // //                       type="hidden"
// // // //                       name="form_id"
// // // //                       id="form_id"
// // // //                       value={contactFormSection.formSettings.formId}
// // // //                     />
// // // //                     <input name="human_check" type="hidden" />
// // // //                     <div className="submit-holder">
// // // //                       <div
// // // //                         className="btn validate disabled"
// // // //                         id={`validate_${contactFormSection.formSettings.formId}`}
// // // //                         tabIndex={0}
// // // //                       >
// // // //                         {contactFormSection.buttonText}
// // // //                       </div>
// // // //                       <button
// // // //                         type="submit"
// // // //                         id={`submit_${contactFormSection.formSettings.formId}`}
// // // //                         value="submitted"
// // // //                         name="submit"
// // // //                         className="submit btn"
// // // //                         tabIndex={0}
// // // //                         style={{
// // // //                           backgroundColor:
// // // //                             contactFormSection.buttonBackgroundColor,
// // // //                           color: contactFormSection.buttonTextColor,
// // // //                         }}
// // // //                       >
// // // //                         {contactFormSection.buttonText}
// // // //                       </button>
// // // //                     </div>
// // // //                   </form>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <main
// // // //       id="main"
// // // //       style={{
// // // //         maxWidth: globalStyles.containerMaxWidth,
// // // //         padding: globalStyles.containerPadding,
// // // //         fontFamily: globalStyles.fontFamily,
// // // //         color: globalStyles.textColor,
// // // //         margin: "0 auto",
// // // //       }}
// // // //     >
// // // //       {/* Page Layout */}
// // // //       {sectionOrder.map((item, index) => (
// // // //         <React.Fragment key={index}>
// // // //           {renderSection(item.section)}
// // // //         </React.Fragment>
// // // //       ))}
// // // //       {/* /Page Layout */}
// // // //     </main>
// // // //   );
// // // // };

// // // // export default SpecialsPage;

// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   fetchSpecicalFillersPageData,
// // //   getResponsiveImageUrls,
// // //   lexicalToHtml,
// // //   getImageUrl,
// // // } from "@/lib/api/specials/fetchSpecialsPageComponent";

// // // interface SpecialsPageData {
// // //   heroSection: {
// // //     show: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     backgroundImage: {
// // //       mobile?: any;
// // //       tablet?: any;
// // //       desktop?: any;
// // //       large?: any;
// // //       alt?: string;
// // //     };
// // //     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
// // //     title: string;
// // //     titleColor?: string;
// // //     titleFontSize?: string;
// // //     mediaImage: {
// // //       mobile?: any;
// // //       tablet?: any;
// // //       desktop?: any;
// // //       large?: any;
// // //       alt?: string;
// // //     };
// // //   };
// // //   introSection: {
// // //     show: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     paddingBottom?: string;
// // //     logo?: any;
// // //     logoAlt?: string;
// // //     logoWidth?: string;
// // //     logoHeight?: string;
// // //     heading: string;
// // //     headingColor?: string;
// // //     content: any;
// // //   };
// // //   bannerSection1: {
// // //     show: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     textAlign?: string;
// // //     backgroundImage: {
// // //       mobile?: any;
// // //       tablet?: any;
// // //       desktop?: any;
// // //       large?: any;
// // //       alt?: string;
// // //     };
// // //     heading: string;
// // //     headingColor?: string;
// // //     content?: any;
// // //   };
// // //   columnSection1: {
// // //     show: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textAlign?: string;
// // //     columns: Array<{
// // //       columnWidth?: string;
// // //       content: any;
// // //       image?: {
// // //         url?: any;
// // //         width?: string;
// // //         height?: string;
// // //         alt?: string;
// // //       };
// // //     }>;
// // //   };
// // //   columnSection2: {
// // //     show: boolean;
// // //     className?: string;
// // //     backgroundColor?: string;
// // //     textAlign?: string;
// // //     columns: Array<{
// // //       columnWidth?: string;
// // //       content: any;
// // //       image?: {
// // //         url?: any;
// // //         width?: string;
// // //         height?: string;
// // //         alt?: string;
// // //       };
// // //     }>;
// // //   };
// // //   contactFormSection: {
// // //     show: boolean;
// // //     backgroundColor?: string;
// // //     textColor?: string;
// // //     heading: string;
// // //     headingColor?: string;
// // //     formSettings: {
// // //       formId: string;
// // //       formAction: string;
// // //       redirectUrl: string;
// // //       emailSubject: string;
// // //     };
// // //     formFields: Array<{
// // //       fieldType: string;
// // //       fieldName: string;
// // //       fieldId: string;
// // //       label?: string;
// // //       placeholder?: string;
// // //       required?: boolean;
// // //       defaultValue?: string;
// // //       columnClass?: string;
// // //       additionalClasses?: string;
// // //       selectOptions?: Array<{ label: string; value: string }>;
// // //       validationMessage?: string;
// // //     }>;
// // //     buttonText: string;
// // //     buttonBackgroundColor?: string;
// // //     buttonTextColor?: string;
// // //     buttonHoverBackgroundColor?: string;
// // //     privacyNotice?: any;
// // //     enableRecaptcha: boolean;
// // //   };
// // //   sectionOrder: Array<{ section: string }>;
// // //   globalStyles: {
// // //     containerMaxWidth?: string;
// // //     containerPadding?: string;
// // //     sectionSpacing?: string;
// // //     fontFamily?: string;
// // //     primaryColor?: string;
// // //     secondaryColor?: string;
// // //     textColor?: string;
// // //     linkColor?: string;
// // //     linkHoverColor?: string;
// // //   };
// // // }

// // // const SpecialsPage: React.FC = () => {
// // //   const [pageData, setPageData] = useState<SpecialsPageData | null>(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const data = await fetchSpecicalFillersPageData();
// // //         setPageData(data);
// // //       } catch (error) {
// // //         console.error("Error fetching Specials page data:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   if (loading) return <div>Loading...</div>;
// // //   if (!pageData) return <div>No data available</div>;

// // //   const {
// // //     heroSection,
// // //     introSection,
// // //     bannerSection1,
// // //     columnSection1,
// // //     columnSection2,
// // //     contactFormSection,
// // //     sectionOrder,
// // //     globalStyles,
// // //   } = pageData;

// // //   const placeholder =
// // //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// // //   const renderSection = (section: string) => {
// // //     switch (section) {
// // //       case "hero":
// // //         if (!heroSection.show) return null;
// // //         const heroBgImages = getResponsiveImageUrls(
// // //           heroSection.backgroundImage
// // //         );
// // //         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
// // //         return (
// // //           <div
// // //             className={`mod_hero banner ${
// // //               heroSection.className || "less-padding mobile-stack"
// // //             }`}
// // //             data-s3-module
// // //             style={{ backgroundColor: heroSection.backgroundColor }}
// // //           >
// // //             <div className="wrapper">
// // //               <picture className="background">
// // //                 <source
// // //                   media="(max-width:420px)"
// // //                   srcSet={placeholder}
// // //                   data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
// // //                 />
// // //                 <source
// // //                   media="(max-width:800px)"
// // //                   srcSet={placeholder}
// // //                   data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
// // //                 />
// // //                 <source
// // //                   media="(max-width:1400px)"
// // //                   srcSet={placeholder}
// // //                   data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
// // //                 />
// // //                 <source
// // //                   srcSet={placeholder}
// // //                   data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
// // //                 />
// // //                 <img
// // //                   src={placeholder}
// // //                   data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
// // //                   loading="lazy"
// // //                   data-lazyload="img"
// // //                   width="1994"
// // //                   height="1206"
// // //                   alt={heroBgImages.alt || "Background Texture"}
// // //                   draggable="false"
// // //                 />
// // //               </picture>
// // //               <div className="row">
// // //                 <div className="inner">
// // //                   <ul className="partial_breadcrumb" data-s3-partial>
// // //                     {heroSection.breadcrumbs.map((crumb, index) => (
// // //                       <li key={index}>
// // //                         <a
// // //                           href={crumb.url}
// // //                           role="link"
// // //                           aria-label={
// // //                             crumb.ariaLabel ||
// // //                             "Breadcrumbs to help navigate the user"
// // //                           }
// // //                         >
// // //                           {crumb.label}
// // //                         </a>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                   <h1
// // //                     style={{
// // //                       color: heroSection.titleColor,
// // //                       fontSize: heroSection.titleFontSize,
// // //                     }}
// // //                   >
// // //                     {heroSection.title}
// // //                   </h1>
// // //                 </div>
// // //               </div>
// // //               <div className="media">
// // //                 <picture className="background">
// // //                   <source
// // //                     media="(max-width:420px)"
// // //                     srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
// // //                   />
// // //                   <source
// // //                     media="(max-width:800px)"
// // //                     srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
// // //                   />
// // //                   <source
// // //                     media="(max-width:1400px)"
// // //                     srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
// // //                     data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
// // //                   />
// // //                   <source
// // //                     srcSet={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// // //                     data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// // //                   />
// // //                   <img
// // //                     src={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// // //                     width="1600"
// // //                     height="730"
// // //                     alt={heroMediaImages.alt || "team photo"}
// // //                     draggable="false"
// // //                   />
// // //                 </picture>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "intro":
// // //         if (!introSection.show) return null;
// // //         const introLogo = getImageUrl(introSection.logo);
// // //         return (
// // //           <div
// // //             className={`mod_intro container viewport ${
// // //               introSection.className || "option-1 wide"
// // //             } wow fadeInUp`}
// // //             data-s3-module
// // //             style={{
// // //               backgroundColor: introSection.backgroundColor,
// // //               color: introSection.textColor,
// // //               paddingBottom: introSection.paddingBottom,
// // //             }}
// // //           >
// // //             <div className="row pb-0">
// // //               {introLogo && (
// // //                 <picture className="logo">
// // //                   <img
// // //                     src={introLogo}
// // //                     width={introSection.logoWidth || 58}
// // //                     height={introSection.logoHeight || 64}
// // //                     loading="lazy"
// // //                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
// // //                     draggable="false"
// // //                     data-api-key="logo"
// // //                   />
// // //                 </picture>
// // //               )}
// // //               <div className="inner" data-api-key="content">
// // //                 <h2 style={{ color: introSection.headingColor }}>
// // //                   {introSection.heading}
// // //                 </h2>
// // //                 <div
// // //                   dangerouslySetInnerHTML={{
// // //                     __html: lexicalToHtml(introSection.content),
// // //                   }}
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case "bannerSection1":
// // //         if (!bannerSection1.show) return null;
// // //         const bannerImages = getResponsiveImageUrls(
// // //           bannerSection1.backgroundImage
// // //         );
// // //         return (
// // //           <div
// // //             className={`mod_banner ${
// // //               bannerSection1.className ||
// // //               "dark hide-divider viewport background-1"
// // //             }`}
// // //             data-s3-module
// // //             style={{
// // //               backgroundColor: bannerSection1.backgroundColor,
// // //               color: bannerSection1.textColor,
// // //             }}
// // //           >
// // //             <div className="row wow fadeInUp">
// // //               <div className="content" data-api-key="top_content">
// // //                 <div className={`text-${bannerSection1.textAlign || "center"}`}>
// // //                   <h2 style={{ color: bannerSection1.headingColor }}>
// // //                     {bannerSection1.heading}
// // //                   </h2>
// // //                   {bannerSection1.content && (
// // //                     <div
// // //                       dangerouslySetInnerHTML={{
// // //                         __html: lexicalToHtml(bannerSection1.content),
// // //                       }}
// // //                     />
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <picture className="background">
// // //               <source
// // //                 media="(max-width:420px)"
// // //                 srcSet={placeholder}
// // //                 data-lazyload-srcset={`${bannerImages.mobile}?auto=format,compress&w=800, ${bannerImages.mobile}?auto=format,compress&w=1200 2x`}
// // //               />
// // //               <source
// // //                 media="(max-width:800px)"
// // //                 srcSet={placeholder}
// // //                 data-lazyload-srcset={`${bannerImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${bannerImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
// // //               />
// // //               <source
// // //                 media="(max-width:1400px)"
// // //                 srcSet={placeholder}
// // //                 data-lazyload-srcset={`${bannerImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
// // //               />
// // //               <source
// // //                 srcSet={placeholder}
// // //                 data-lazyload-srcset={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
// // //               />
// // //               <img
// // //                 src={placeholder}
// // //                 data-lazyload-src={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
// // //                 loading="lazy"
// // //                 data-lazyload="img"
// // //                 width="2200"
// // //                 height="802"
// // //                 alt={bannerImages.alt || "Banner media"}
// // //                 draggable="false"
// // //               />
// // //             </picture>
// // //           </div>
// // //         );

// // //       case "columnSection1":
// // //         if (!columnSection1.show) return null;
// // //         return (
// // //           <div
// // //             className={`mod_column viewport container ${
// // //               columnSection1.className || ""
// // //             }`}
// // //             data-s3-module
// // //             style={{ backgroundColor: columnSection1.backgroundColor }}
// // //           >
// // //             <div
// // //               className={`row text-${columnSection1.textAlign || "center"}`}
// // //               data-api-key="content"
// // //             >
// // //               {columnSection1.columns.map((column, index) => (
// // //                 <div className="item" key={index}>
// // //                   {column.columnWidth ? (
// // //                     <div className={column.columnWidth}>
// // //                       {column.content && (
// // //                         <div
// // //                           dangerouslySetInnerHTML={{
// // //                             __html: lexicalToHtml(column.content),
// // //                           }}
// // //                         />
// // //                       )}
// // //                       {column.image?.url && (
// // //                         <img
// // //                           src={getImageUrl(column.image.url)}
// // //                           width={column.image.width || "auto"}
// // //                           height={column.image.height || "auto"}
// // //                           alt={column.image.alt || "Column image"}
// // //                           loading="lazy"
// // //                         />
// // //                       )}
// // //                     </div>
// // //                   ) : (
// // //                     <>
// // //                       {column.content && (
// // //                         <div
// // //                           dangerouslySetInnerHTML={{
// // //                             __html: lexicalToHtml(column.content),
// // //                           }}
// // //                         />
// // //                       )}
// // //                       {column.image?.url && (
// // //                         <img
// // //                           src={getImageUrl(column.image.url)}
// // //                           width={column.image.width || "auto"}
// // //                           height={column.image.height || "auto"}
// // //                           alt={column.image.alt || "Column image"}
// // //                           loading="lazy"
// // //                         />
// // //                       )}
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         );

// // //       case "columnSection2":
// // //         if (!columnSection2.show) return null;
// // //         return (
// // //           <div
// // //             className={`mod_column viewport container ${
// // //               columnSection2.className || ""
// // //             }`}
// // //             data-s3-module
// // //             style={{ backgroundColor: columnSection2.backgroundColor }}
// // //           >
// // //             <div
// // //               className={`row text-${columnSection2.textAlign || "center"}`}
// // //               data-api-key="content"
// // //             >
// // //               {columnSection2.columns.map((column, index) => (
// // //                 <div className="item" key={index}>
// // //                   {column.columnWidth ? (
// // //                     <div className={column.columnWidth}>
// // //                       {column.content && (
// // //                         <div
// // //                           dangerouslySetInnerHTML={{
// // //                             __html: lexicalToHtml(column.content),
// // //                           }}
// // //                         />
// // //                       )}
// // //                       {column.image?.url && (
// // //                         <img
// // //                           src={getImageUrl(column.image.url)}
// // //                           width={column.image.width || "auto"}
// // //                           height={column.image.height || "auto"}
// // //                           alt={column.image.alt || "Column image"}
// // //                           loading="lazy"
// // //                         />
// // //                       )}
// // //                     </div>
// // //                   ) : (
// // //                     <>
// // //                       {column.content && (
// // //                         <div
// // //                           dangerouslySetInnerHTML={{
// // //                             __html: lexicalToHtml(column.content),
// // //                           }}
// // //                         />
// // //                       )}
// // //                       {column.image?.url && (
// // //                         <img
// // //                           src={getImageUrl(column.image.url)}
// // //                           width={column.image.width || "auto"}
// // //                           height={column.image.height || "auto"}
// // //                           alt={column.image.alt || "Column image"}
// // //                           loading="lazy"
// // //                         />
// // //                       )}
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         );

// // //       case "contactForm":
// // //         if (!contactFormSection.show) return null;
// // //         return (
// // //           <div
// // //             className="mod_contact_form"
// // //             data-s3-module
// // //             style={{
// // //               backgroundColor: contactFormSection.backgroundColor,
// // //               color: contactFormSection.textColor,
// // //             }}
// // //           >
// // //             <div className="wrapper">
// // //               <div className="row">
// // //                 <h2 style={{ color: contactFormSection.headingColor }}>
// // //                   {contactFormSection.heading}
// // //                 </h2>
// // //                 <div className="partial_form" data-s3-partial>
// // //                   <form
// // //                     id={`form_${contactFormSection.formSettings.formId}`}
// // //                     className="s3-form"
// // //                     method="post"
// // //                     action={contactFormSection.formSettings.formAction}
// // //                     data-abide=""
// // //                     encType="multipart/form-data"
// // //                     noValidate
// // //                   >
// // //                     <div className="fields">
// // //                       {contactFormSection.formFields.map((field, index) => {
// // //                         const fieldClasses = `field-row ${
// // //                           field.columnClass || "col1"
// // //                         } ${field.additionalClasses || ""}`.trim();

// // //                         if (field.fieldType === "hidden") {
// // //                           return (
// // //                             <div key={index} className={fieldClasses}>
// // //                               <div className="field hidden">
// // //                                 <input
// // //                                   type="hidden"
// // //                                   name={field.fieldName}
// // //                                   id={field.fieldId}
// // //                                   value={field.defaultValue || ""}
// // //                                 />
// // //                               </div>
// // //                             </div>
// // //                           );
// // //                         }

// // //                         if (field.fieldType === "textarea") {
// // //                           return (
// // //                             <div key={index} className={fieldClasses}>
// // //                               <div className="field textarea">
// // //                                 {field.label && (
// // //                                   <label htmlFor={field.fieldId}>
// // //                                     {field.label}
// // //                                   </label>
// // //                                 )}
// // //                                 <textarea
// // //                                   rows={6}
// // //                                   cols={48}
// // //                                   name={field.fieldName}
// // //                                   id={field.fieldId}
// // //                                   placeholder={field.placeholder}
// // //                                   required={field.required}
// // //                                   aria-required={
// // //                                     field.required ? "true" : "false"
// // //                                   }
// // //                                   defaultValue=""
// // //                                 ></textarea>
// // //                               </div>
// // //                             </div>
// // //                           );
// // //                         }

// // //                         if (field.fieldType === "select") {
// // //                           return (
// // //                             <div key={index} className={fieldClasses}>
// // //                               <div className="field select">
// // //                                 {field.label && (
// // //                                   <label htmlFor={field.fieldId}>
// // //                                     {field.label}
// // //                                   </label>
// // //                                 )}
// // //                                 {field.required && (
// // //                                   <small>
// // //                                     {field.validationMessage ||
// // //                                       "This field is required."}
// // //                                   </small>
// // //                                 )}
// // //                                 <select
// // //                                   name={field.fieldName}
// // //                                   id={field.fieldId}
// // //                                   required={field.required}
// // //                                   aria-required={
// // //                                     field.required ? "true" : "false"
// // //                                   }
// // //                                 >
// // //                                   <option value="" disabled>
// // //                                     {field.placeholder}
// // //                                   </option>
// // //                                   {field.selectOptions?.map(
// // //                                     (option, optIndex) => (
// // //                                       <option
// // //                                         key={optIndex}
// // //                                         value={option.value}
// // //                                       >
// // //                                         {option.label}
// // //                                       </option>
// // //                                     )
// // //                                   )}
// // //                                 </select>
// // //                               </div>
// // //                             </div>
// // //                           );
// // //                         }

// // //                         if (field.fieldType === "checkbox") {
// // //                           return (
// // //                             <div key={index} className={fieldClasses}>
// // //                               <div
// // //                                 className={`field checkbox ${
// // //                                   field.additionalClasses || ""
// // //                                 }`}
// // //                               >
// // //                                 {field.required && (
// // //                                   <small>
// // //                                     {field.validationMessage ||
// // //                                       "This field is required."}
// // //                                   </small>
// // //                                 )}
// // //                                 <div className="field-item checkbox-item">
// // //                                   <input
// // //                                     type="checkbox"
// // //                                     id={field.fieldId}
// // //                                     name={field.fieldName}
// // //                                     value={field.defaultValue || "Yes"}
// // //                                     required={field.required}
// // //                                     aria-required={
// // //                                       field.required ? "true" : "false"
// // //                                     }
// // //                                   />
// // //                                   {field.label && (
// // //                                     <label htmlFor={field.fieldId}>
// // //                                       {field.label}
// // //                                     </label>
// // //                                   )}
// // //                                 </div>
// // //                               </div>
// // //                             </div>
// // //                           );
// // //                         }

// // //                         return (
// // //                           <div key={index} className={fieldClasses}>
// // //                             <div className={`field ${field.fieldType}`}>
// // //                               {field.label && (
// // //                                 <label htmlFor={field.fieldId}>
// // //                                   {field.label}
// // //                                 </label>
// // //                               )}
// // //                               {field.required && (
// // //                                 <small>
// // //                                   {field.validationMessage ||
// // //                                     "This field is required."}
// // //                                 </small>
// // //                               )}
// // //                               <input
// // //                                 type={field.fieldType}
// // //                                 size={50}
// // //                                 name={field.fieldName}
// // //                                 id={field.fieldId}
// // //                                 defaultValue=""
// // //                                 required={field.required}
// // //                                 aria-required={
// // //                                   field.required ? "true" : "false"
// // //                                 }
// // //                                 placeholder={field.placeholder}
// // //                               />
// // //                             </div>
// // //                           </div>
// // //                         );
// // //                       })}
// // //                     </div>
// // //                     {contactFormSection.enableRecaptcha && (
// // //                       <div>
// // //                         <input
// // //                           id={`${contactFormSection.formSettings.formId}_recaptchaV3`}
// // //                           name="g-recaptcha-response-v3"
// // //                           type="hidden"
// // //                         />
// // //                         <div
// // //                           id={`${contactFormSection.formSettings.formId}_recaptchaV2`}
// // //                           data-recaptcha
// // //                         ></div>
// // //                         <div
// // //                           id={`${contactFormSection.formSettings.formId}_recaptcha`}
// // //                           data-recaptcha-error
// // //                         >
// // //                           <small>This field is required.</small>
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                     <input
// // //                       type="hidden"
// // //                       name="form_id"
// // //                       id="form_id"
// // //                       value={contactFormSection.formSettings.formId}
// // //                     />
// // //                     <input name="human_check" type="hidden" />
// // //                     <div className="submit-holder">
// // //                       <div
// // //                         className="btn validate disabled"
// // //                         id={`validate_${contactFormSection.formSettings.formId}`}
// // //                         tabIndex={0}
// // //                       >
// // //                         {contactFormSection.buttonText}
// // //                       </div>
// // //                       <button
// // //                         type="submit"
// // //                         id={`submit_${contactFormSection.formSettings.formId}`}
// // //                         value="submitted"
// // //                         name="submit"
// // //                         className="submit btn"
// // //                         tabIndex={0}
// // //                         style={{
// // //                           backgroundColor:
// // //                             contactFormSection.buttonBackgroundColor,
// // //                           color: contactFormSection.buttonTextColor,
// // //                         }}
// // //                       >
// // //                         {contactFormSection.buttonText}
// // //                       </button>
// // //                     </div>
// // //                   </form>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <main
// // //       id="main"
// // //       style={{
// // //         maxWidth: globalStyles.containerMaxWidth,
// // //         padding: globalStyles.containerPadding,
// // //         fontFamily: globalStyles.fontFamily,
// // //         color: globalStyles.textColor,
// // //         margin: "0 auto",
// // //       }}
// // //     >
// // //       {/* Page Layout */}
// // //       {sectionOrder.map((item, index) => (
// // //         <React.Fragment key={index}>
// // //           {renderSection(item.section)}
// // //         </React.Fragment>
// // //       ))}
// // //       {/* /Page Layout */}
// // //     </main>
// // //   );
// // // };

// // // export default SpecialsPage;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import {
// //   fetchSpecicalFillersPageData,
// //   getResponsiveImageUrls,
// //   lexicalToHtml,
// //   getImageUrl,
// // } from "@/lib/api/specials/fetchSpecialsPageComponent";

// // interface SpecialsPageData {
// //   heroSection: {
// //     show: boolean;
// //     className?: string;
// //     backgroundColor?: string;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
// //     title: string;
// //     titleColor?: string;
// //     titleFontSize?: string;
// //     mediaImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //   };
// //   introSection: {
// //     show: boolean;
// //     className?: string;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     paddingBottom?: string;
// //     logo?: any;
// //     logoAlt?: string;
// //     logoWidth?: string;
// //     logoHeight?: string;
// //     heading: string;
// //     headingColor?: string;
// //     content: any;
// //   };
// //   bannerSection1: {
// //     show: boolean;
// //     className?: string;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     textAlign?: string;
// //     backgroundImage: {
// //       mobile?: any;
// //       tablet?: any;
// //       desktop?: any;
// //       large?: any;
// //       alt?: string;
// //     };
// //     heading: string;
// //     headingColor?: string;
// //     content?: any;
// //   };
// //   columnSection1: {
// //     show: boolean;
// //     className?: string;
// //     backgroundColor?: string;
// //     textAlign?: string;
// //     columns: Array<{
// //       columnWidth?: string;
// //       content: any;
// //       image?: {
// //         url?: any;
// //         width?: string;
// //         height?: string;
// //         alt?: string;
// //       };
// //     }>;
// //   };
// //   columnSection2: {
// //     show: boolean;
// //     className?: string;
// //     backgroundColor?: string;
// //     textAlign?: string;
// //     columns: Array<{
// //       columnWidth?: string;
// //       content: any;
// //       image?: {
// //         url?: any;
// //         width?: string;
// //         height?: string;
// //         alt?: string;
// //       };
// //     }>;
// //   };
// //   contactFormSection: {
// //     show: boolean;
// //     backgroundColor?: string;
// //     textColor?: string;
// //     heading: string;
// //     headingColor?: string;
// //     formSettings: {
// //       formId: string;
// //       formAction: string;
// //       redirectUrl: string;
// //       emailSubject: string;
// //     };
// //     formFields: Array<{
// //       fieldType: string;
// //       fieldName: string;
// //       fieldId: string;
// //       label?: string;
// //       placeholder?: string;
// //       required?: boolean;
// //       defaultValue?: string;
// //       columnClass?: string;
// //       additionalClasses?: string;
// //       selectOptions?: Array<{ label: string; value: string }>;
// //       validationMessage?: string;
// //     }>;
// //     buttonText: string;
// //     buttonBackgroundColor?: string;
// //     buttonTextColor?: string;
// //     buttonHoverBackgroundColor?: string;
// //     privacyNotice?: any;
// //     enableRecaptcha: boolean;
// //   };
// //   sectionOrder: Array<{ section: string }>;
// //   globalStyles: {
// //     containerMaxWidth?: string;
// //     containerPadding?: string;
// //     sectionSpacing?: string;
// //     fontFamily?: string;
// //     primaryColor?: string;
// //     secondaryColor?: string;
// //     textColor?: string;
// //     linkColor?: string;
// //     linkHoverColor?: string;
// //   };
// // }

// // const SpecialsPage: React.FC = () => {
// //   const [pageData, setPageData] = useState<SpecialsPageData | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const data = await fetchSpecicalFillersPageData();
// //         setPageData(data);
// //       } catch (error) {
// //         console.error("Error fetching Specials page data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (loading) return <div>Loading...</div>;
// //   if (!pageData) return <div>No data available</div>;

// //   console.log(pageData,' this is pagedata')

// //   const {
// //     heroSection,
// //     introSection,
// //     bannerSection1,
// //     columnSection1,
// //     columnSection2,
// //     contactFormSection,
// //     sectionOrder,
// //     globalStyles,
// //   } = pageData;

// //   const placeholder =
// //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// //   const renderSection = (section: string) => {
// //     switch (section) {
// //       case "hero":
// //         if (!heroSection.show) return null;
// //         const heroBgImages = getResponsiveImageUrls(
// //           heroSection.backgroundImage
// //         );
// //         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
// //         return (
// //           <div
// //             className={`mod_hero banner ${
// //               heroSection.className || "less-padding mobile-stack"
// //             }`}
// //             data-s3-module
// //             style={{ backgroundColor: heroSection.backgroundColor }}
// //           >
// //             <div className="wrapper">
// //               <picture className="background">
// //                 <source
// //                   media="(max-width:420px)"
// //                   srcSet={placeholder}
// //                   data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:800px)"
// //                   srcSet={placeholder}
// //                   data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
// //                 />
// //                 <source
// //                   media="(max-width:1400px)"
// //                   srcSet={placeholder}
// //                   data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
// //                 />
// //                 <source
// //                   srcSet={placeholder}
// //                   data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
// //                 />
// //                 <img
// //                   src={placeholder}
// //                   data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
// //                   loading="lazy"
// //                   data-lazyload="img"
// //                   width="1994"
// //                   height="1206"
// //                   alt={heroBgImages.alt || "Background Texture"}
// //                   draggable="false"
// //                 />
// //               </picture>
// //               <div className="row">
// //                 <div className="inner">
// //                   <ul className="partial_breadcrumb" data-s3-partial>
// //                     {heroSection.breadcrumbs.map((crumb, index) => (
// //                       <li key={index}>
// //                         <a
// //                           href={crumb.url}
// //                           role="link"
// //                           aria-label={
// //                             crumb.ariaLabel ||
// //                             "Breadcrumbs to help navigate the user"
// //                           }
// //                         >
// //                           {crumb.label}
// //                         </a>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <h1
// //                     style={{
// //                       color: heroSection.titleColor,
// //                       fontSize: heroSection.titleFontSize,
// //                     }}
// //                   >
// //                     {heroSection.title}
// //                   </h1>
// //                 </div>
// //               </div>
// //               <div className="media">
// //                 <picture className="background">
// //                   <source
// //                     media="(max-width:420px)"
// //                     srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
// //                     data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
// //                   />
// //                   <source
// //                     media="(max-width:800px)"
// //                     srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
// //                     data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
// //                   />
// //                   <source
// //                     media="(max-width:1400px)"
// //                     srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
// //                     data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
// //                   />
// //                   <source
// //                     srcSet={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// //                     data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// //                   />
// //                   <img
// //                     src={`${heroMediaImages.large}?auto=format,compress&w=1600`}
// //                     width="1600"
// //                     height="730"
// //                     alt={heroMediaImages.alt || "team photo"}
// //                     draggable="false"
// //                   />
// //                 </picture>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "intro":
// //         if (!introSection.show) return null;
// //         const introLogo = getImageUrl(introSection.logo);
// //         return (
// //           <div
// //             className={`mod_intro container viewport ${
// //               introSection.className || "option-1 wide"
// //             } wow fadeInUp`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: introSection.backgroundColor,
// //               color: introSection.textColor,
// //               paddingBottom: introSection.paddingBottom,
// //             }}
// //           >
// //             <div className="row pb-0">
// //               {introLogo && (
// //                 <picture className="logo">
// //                   <img
// //                     src={introLogo}
// //                     width={introSection.logoWidth || 58}
// //                     height={introSection.logoHeight || 64}
// //                     loading="lazy"
// //                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
// //                     draggable="false"
// //                     data-api-key="logo"
// //                   />
// //                 </picture>
// //               )}
// //               <div className="inner" data-api-key="content">
// //                 <h2 style={{ color: introSection.headingColor }}>
// //                   {introSection.heading}
// //                 </h2>
// //                 <div
// //                   dangerouslySetInnerHTML={{
// //                     __html: lexicalToHtml(introSection.content),
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "bannerSection1":
// //         if (!bannerSection1.show) return null;
// //         const bannerImages = getResponsiveImageUrls(
// //           bannerSection1.backgroundImage
// //         );
// //         return (
// //           <div
// //             className={`mod_banner ${
// //               bannerSection1.className ||
// //               "dark hide-divider viewport background-1"
// //             }`}
// //             data-s3-module
// //             style={{
// //               backgroundColor: bannerSection1.backgroundColor,
// //               color: bannerSection1.textColor,
// //             }}
// //           >
// //             <div className="row wow fadeInUp">
// //               <div className="content" data-api-key="top_content">
// //                 <div className={`text-${bannerSection1.textAlign || "center"}`}>
// //                   <h2 style={{ color: bannerSection1.headingColor }}>
// //                     {bannerSection1.heading}
// //                   </h2>
// //                   {bannerSection1.content && (
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: lexicalToHtml(bannerSection1.content),
// //                       }}
// //                     />
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //             <picture className="background">
// //               <source
// //                 media="(max-width:420px)"
// //                 srcSet={placeholder}
// //                 data-lazyload-srcset={`${bannerImages.mobile}?auto=format,compress&w=800, ${bannerImages.mobile}?auto=format,compress&w=1200 2x`}
// //               />
// //               <source
// //                 media="(max-width:800px)"
// //                 srcSet={placeholder}
// //                 data-lazyload-srcset={`${bannerImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${bannerImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
// //               />
// //               <source
// //                 media="(max-width:1400px)"
// //                 srcSet={placeholder}
// //                 data-lazyload-srcset={`${bannerImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
// //               />
// //               <source
// //                 srcSet={placeholder}
// //                 data-lazyload-srcset={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
// //               />
// //               <img
// //                 src={placeholder}
// //                 data-lazyload-src={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
// //                 loading="lazy"
// //                 data-lazyload="img"
// //                 width="2200"
// //                 height="802"
// //                 alt={bannerImages.alt || "Banner media"}
// //                 draggable="false"
// //               />
// //             </picture>
// //           </div>
// //         );

// //       case "columnSection1":
// //         if (!columnSection1.show) return null;
// //         return (
// //           <div
// //             className={`mod_column viewport container ${
// //               columnSection1.className || ""
// //             }`}
// //             data-s3-module
// //             style={{ backgroundColor: columnSection1.backgroundColor }}
// //           >
// //             <div
// //               className={`row text-${columnSection1.textAlign || "center"}`}
// //               data-api-key="content"
// //             >
// //               <div className="item">
// //                 {columnSection1.columns.map((column, index) => (
// //                   <React.Fragment key={index}>
// //                     {column.columnWidth && (
// //                       <div className={column.columnWidth}>
// //                         {column.content && (
// //                           <div
// //                             dangerouslySetInnerHTML={{
// //                               __html: lexicalToHtml(column.content),
// //                             }}
// //                           />
// //                         )}
// //                         {column.image?.url && (
// //                           <img
// //                             src={getImageUrl(column.image.url)}
// //                             width={column.image.width}
// //                             height={column.image.height}
// //                             alt={column.image.alt || ""}
// //                             loading="lazy"
// //                           />
// //                         )}
// //                       </div>
// //                     )}
// //                     {!column.columnWidth && (
// //                       <>
// //                         {column.content && (
// //                           <div
// //                             dangerouslySetInnerHTML={{
// //                               __html: lexicalToHtml(column.content),
// //                             }}
// //                           />
// //                         )}
// //                         {column.image?.url && (
// //                           <img
// //                             src={getImageUrl(column.image.url)}
// //                             width={column.image.width}
// //                             height={column.image.height}
// //                             alt={column.image.alt || ""}
// //                             loading="lazy"
// //                           />
// //                         )}
// //                       </>
// //                     )}
// //                   </React.Fragment>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "columnSection2":
// //         if (!columnSection2.show) return null;
// //         return (
// //           <div
// //             className={`mod_column viewport container ${
// //               columnSection2.className || ""
// //             }`}
// //             data-s3-module
// //             style={{ backgroundColor: columnSection2.backgroundColor }}
// //           >
// //             <div
// //               className={`row text-${columnSection2.textAlign || "center"}`}
// //               data-api-key="content"
// //             >
// //               <div className="item">
// //                 {columnSection2.columns.map((column, index) => (
// //                   <React.Fragment key={index}>
// //                     {column.columnWidth && (
// //                       <div className={column.columnWidth}>
// //                         {column.content && (
// //                           <div
// //                             dangerouslySetInnerHTML={{
// //                               __html: lexicalToHtml(column.content),
// //                             }}
// //                           />
// //                         )}
// //                         {column.image?.url && (
// //                           <img
// //                             src={getImageUrl(column.image.url)}
// //                             width={column.image.width}
// //                             height={column.image.height}
// //                             alt={column.image.alt || ""}
// //                             loading="lazy"
// //                           />
// //                         )}
// //                       </div>
// //                     )}
// //                     {!column.columnWidth && (
// //                       <>
// //                         {column.content && (
// //                           <div
// //                             dangerouslySetInnerHTML={{
// //                               __html: lexicalToHtml(column.content),
// //                             }}
// //                           />
// //                         )}
// //                         {column.image?.url && (
// //                           <img
// //                             src={getImageUrl(column.image.url)}
// //                             width={column.image.width}
// //                             height={column.image.height}
// //                             alt={column.image.alt || ""}
// //                             loading="lazy"
// //                           />
// //                         )}
// //                       </>
// //                     )}
// //                   </React.Fragment>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       case "contactForm":
// //         if (!contactFormSection.show) return null;
// //         return (
// //           <div
// //             className="mod_contact_form"
// //             data-s3-module
// //             style={{
// //               backgroundColor: contactFormSection.backgroundColor,
// //               color: contactFormSection.textColor,
// //             }}
// //           >
// //             <div className="wrapper">
// //               <div className="row">
// //                 <h2 style={{ color: contactFormSection.headingColor }}>
// //                   {contactFormSection.heading}
// //                 </h2>
// //                 <div className="partial_form" data-s3-partial>
// //                   <form
// //                     id={`form_${contactFormSection.formSettings.formId}`}
// //                     className="s3-form"
// //                     method="post"
// //                     action={contactFormSection.formSettings.formAction}
// //                     data-abide=""
// //                     encType="multipart/form-data"
// //                     noValidate
// //                   >
// //                     <div className="fields">
// //                       {contactFormSection.formFields.map((field, index) => {
// //                         const fieldClasses = `field-row ${
// //                           field.columnClass || "col1"
// //                         } ${field.additionalClasses || ""}`.trim();

// //                         if (field.fieldType === "hidden") {
// //                           return (
// //                             <div key={index} className={fieldClasses}>
// //                               <div className="field hidden">
// //                                 <input
// //                                   type="hidden"
// //                                   name={field.fieldName}
// //                                   id={field.fieldId}
// //                                   value={field.defaultValue || ""}
// //                                 />
// //                               </div>
// //                             </div>
// //                           );
// //                         }

// //                         if (field.fieldType === "textarea") {
// //                           return (
// //                             <div key={index} className={fieldClasses}>
// //                               <div className="field textarea">
// //                                 {field.label && (
// //                                   <label htmlFor={field.fieldId}>
// //                                     {field.label}
// //                                   </label>
// //                                 )}
// //                                 <textarea
// //                                   rows={6}
// //                                   cols={48}
// //                                   name={field.fieldName}
// //                                   id={field.fieldId}
// //                                   placeholder={field.placeholder}
// //                                   required={field.required}
// //                                   aria-required={
// //                                     field.required ? "true" : "false"
// //                                   }
// //                                   defaultValue=""
// //                                 ></textarea>
// //                               </div>
// //                             </div>
// //                           );
// //                         }

// //                         if (field.fieldType === "select") {
// //                           return (
// //                             <div key={index} className={fieldClasses}>
// //                               <div className="field select">
// //                                 {field.label && (
// //                                   <label htmlFor={field.fieldId}>
// //                                     {field.label}
// //                                   </label>
// //                                 )}
// //                                 {field.required && (
// //                                   <small>
// //                                     {field.validationMessage ||
// //                                       "This field is required."}
// //                                   </small>
// //                                 )}
// //                                 <select
// //                                   name={field.fieldName}
// //                                   id={field.fieldId}
// //                                   required={field.required}
// //                                   aria-required={
// //                                     field.required ? "true" : "false"
// //                                   }
// //                                 >
// //                                   <option value="" disabled>
// //                                     {field.placeholder}
// //                                   </option>
// //                                   {field.selectOptions?.map(
// //                                     (option, optIndex) => (
// //                                       <option
// //                                         key={optIndex}
// //                                         value={option.value}
// //                                       >
// //                                         {option.label}
// //                                       </option>
// //                                     )
// //                                   )}
// //                                 </select>
// //                               </div>
// //                             </div>
// //                           );
// //                         }

// //                         if (field.fieldType === "checkbox") {
// //                           return (
// //                             <div key={index} className={fieldClasses}>
// //                               <div
// //                                 className={`field checkbox ${
// //                                   field.additionalClasses || ""
// //                                 }`}
// //                               >
// //                                 {field.required && (
// //                                   <small>
// //                                     {field.validationMessage ||
// //                                       "This field is required."}
// //                                   </small>
// //                                 )}
// //                                 <div className="field-item checkbox-item">
// //                                   <input
// //                                     type="checkbox"
// //                                     id={field.fieldId}
// //                                     name={field.fieldName}
// //                                     value={field.defaultValue || "Yes"}
// //                                     required={field.required}
// //                                     aria-required={
// //                                       field.required ? "true" : "false"
// //                                     }
// //                                   />
// //                                   {field.label && (
// //                                     <label htmlFor={field.fieldId}>
// //                                       {field.label}
// //                                     </label>
// //                                   )}
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           );
// //                         }

// //                         return (
// //                           <div key={index} className={fieldClasses}>
// //                             <div className={`field ${field.fieldType}`}>
// //                               {field.label && (
// //                                 <label htmlFor={field.fieldId}>
// //                                   {field.label}
// //                                 </label>
// //                               )}
// //                               {field.required && (
// //                                 <small>
// //                                   {field.validationMessage ||
// //                                     "This field is required."}
// //                                 </small>
// //                               )}
// //                               <input
// //                                 type={field.fieldType}
// //                                 size={50}
// //                                 name={field.fieldName}
// //                                 id={field.fieldId}
// //                                 defaultValue=""
// //                                 required={field.required}
// //                                 aria-required={
// //                                   field.required ? "true" : "false"
// //                                 }
// //                                 placeholder={field.placeholder}
// //                               />
// //                             </div>
// //                           </div>
// //                         );
// //                       })}
// //                     </div>
// //                     {contactFormSection.enableRecaptcha && (
// //                       <div>
// //                         <input
// //                           id={`${contactFormSection.formSettings.formId}_recaptchaV3`}
// //                           name="g-recaptcha-response-v3"
// //                           type="hidden"
// //                         />
// //                         <div
// //                           id={`${contactFormSection.formSettings.formId}_recaptchaV2`}
// //                           data-recaptcha
// //                         ></div>
// //                         <div
// //                           id={`${contactFormSection.formSettings.formId}_recaptcha`}
// //                           data-recaptcha-error
// //                         >
// //                           <small>This field is required.</small>
// //                         </div>
// //                       </div>
// //                     )}
// //                     <input
// //                       type="hidden"
// //                       name="form_id"
// //                       id="form_id"
// //                       value={contactFormSection.formSettings.formId}
// //                     />
// //                     <input name="human_check" type="hidden" />
// //                     <div className="submit-holder">
// //                       <div
// //                         className="btn validate disabled"
// //                         id={`validate_${contactFormSection.formSettings.formId}`}
// //                         tabIndex={0}
// //                       >
// //                         {contactFormSection.buttonText}
// //                       </div>
// //                       <button
// //                         type="submit"
// //                         id={`submit_${contactFormSection.formSettings.formId}`}
// //                         value="submitted"
// //                         name="submit"
// //                         className="submit btn"
// //                         tabIndex={0}
// //                         style={{
// //                           backgroundColor:
// //                             contactFormSection.buttonBackgroundColor,
// //                           color: contactFormSection.buttonTextColor,
// //                         }}
// //                       >
// //                         {contactFormSection.buttonText}
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <main
// //       id="main"
// //       style={{
// //         maxWidth: globalStyles.containerMaxWidth,
// //         padding: globalStyles.containerPadding,
// //         fontFamily: globalStyles.fontFamily,
// //         color: globalStyles.textColor,
// //         margin: "0 auto",
// //       }}
// //     >
// //       {/* Page Layout */}
// //       {sectionOrder.map((item, index) => (
// //         <React.Fragment key={index}>
// //           {renderSection(item.section)}
// //         </React.Fragment>
// //       ))}
// //       {/* /Page Layout */}
// //     </main>
// //   );
// // };

// // export default SpecialsPage;

// "use client";

// import React, { useEffect, useState } from "react";

// import {
//   fetchSpecicalFillersPageData,
//   getResponsiveImageUrls,
//   lexicalToHtml,
//   getImageUrl,
// } from "@/lib/api/specials/fetchSpecialsPageComponent";

// interface SpecialsPageData {
//   heroSection: {
//     show: boolean;
//     className?: string;
//     backgroundColor?: string;
//     backgroundImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//     breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
//     title: string;
//     titleColor?: string;
//     titleFontSize?: string;
//     mediaImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//   };
//   introSection: {
//     show: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     paddingBottom?: string;
//     logo?: any;
//     logoAlt?: string;
//     logoWidth?: string;
//     logoHeight?: string;
//     heading: string;
//     headingColor?: string;
//     content: any;
//   };
//   bannerSection1: {
//     show: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     textAlign?: string;
//     backgroundImage: {
//       mobile?: any;
//       tablet?: any;
//       desktop?: any;
//       large?: any;
//       alt?: string;
//     };
//     heading: string;
//     headingColor?: string;
//     content?: any;
//   };
//   columnSection1: {
//     show: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textAlign?: string;
//     columns: Array<{
//       columnWidth?: string;
//       content: any;
//       image?: {
//         url?: any;
//         width?: string;
//         height?: string;
//         alt?: string;
//       };
//     }>;
//   };
//   columnSection2: {
//     show: boolean;
//     className?: string;
//     backgroundColor?: string;
//     textAlign?: string;
//     columns: Array<{
//       columnWidth?: string;
//       content: any;
//       image?: {
//         url?: any;
//         width?: string;
//         height?: string;
//         alt?: string;
//       };
//     }>;
//   };
//   contactFormSection: {
//     show: boolean;
//     backgroundColor?: string;
//     textColor?: string;
//     heading: string;
//     headingColor?: string;
//     formSettings: {
//       formId: string;
//       formAction: string;
//       redirectUrl: string;
//       emailSubject: string;
//     };
//     formFields: Array<{
//       fieldType: string;
//       fieldName: string;
//       fieldId: string;
//       label?: string;
//       placeholder?: string;
//       required?: boolean;
//       defaultValue?: string;
//       columnClass?: string;
//       additionalClasses?: string;
//       selectOptions?: Array<{ label: string; value: string }>;
//       validationMessage?: string;
//     }>;
//     buttonText: string;
//     buttonBackgroundColor?: string;
//     buttonTextColor?: string;
//     buttonHoverBackgroundColor?: string;
//     privacyNotice?: any;
//     enableRecaptcha: boolean;
//   };
//   sectionOrder: Array<{ section: string }>;
//   globalStyles: {
//     containerMaxWidth?: string;
//     containerPadding?: string;
//     sectionSpacing?: string;
//     fontFamily?: string;
//     primaryColor?: string;
//     secondaryColor?: string;
//     textColor?: string;
//     linkColor?: string;
//     linkHoverColor?: string;
//   };
// }

// const SpecialsPage: React.FC = () => {
//   const [pageData, setPageData] = useState<SpecialsPageData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [formSubmitting, setFormSubmitting] = useState(false);
//   const [formMessage, setFormMessage] = useState<{
//     type: "success" | "error";
//     text: string;
//   } | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchSpecicalFillersPageData();
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching Specials page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setFormSubmitting(true);
//   //   setFormMessage(null);

//   //   const form = e.currentTarget;
//   //   const formData = new FormData(form);
//   //   const formValues: Record<string, any> = {};

//   //   formData.forEach((value, key) => {
//   //     if (key !== "human_check" && key !== "submit") {
//   //       formValues[key] = value;
//   //     }
//   //   });

//   //   try {
//   //     const response = await fetch("/api/special-form", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const result = await response.json();

//   //     if (result.success) {
//   //       setFormMessage({
//   //         type: "success",
//   //         text: result.message,
//   //       });
//   //       form.reset();

//   //       if (pageData?.contactFormSection.formSettings.redirectUrl) {
//   //         // setTimeout(() => {
//   //         //   window.location.href =
//   //         //     pageData.contactFormSection.formSettings.redirectUrl;
//   //         // }, 2000);
//   //       }
//   //     } else {
//   //       setFormMessage({
//   //         type: "error",
//   //         text: result.message,
//   //       });
//   //     }
//   //   } catch (error) {
//   //     setFormMessage({
//   //       type: "error",
//   //       text: "An unexpected error occurred. Please try again.",
//   //     });
//   //   } finally {
//   //     setFormSubmitting(false);
//   //   }
//   // };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormSubmitting(true);
//     setFormMessage(null);

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     // ✅ Convert FormData to plain object
//     const formValues: Record<string, any> = {};

//     formData.forEach((value, key) => {
//       if (
//         key !== "human_check" &&
//         key !== "submit" &&
//         key !== "g-recaptcha-response-v3"
//       ) {
//         formValues[key] = value;
//       }
//     });

//     try {
//       const response = await fetch("/api/special-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formValues), // ✅ Send the plain object, not FormData
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         setFormMessage({
//           type: "success",
//           text: result.message || "Thank you! We'll be in touch soon.",
//         });
//         form.reset();

//         // Optional redirect
//         if (pageData?.contactFormSection.formSettings.redirectUrl) {
//           // setTimeout(() => {
//           //   window.location.href =
//           //     pageData.contactFormSection.formSettings.redirectUrl;
//           // }, 2000);
//         }
//       } else {
//         setFormMessage({
//           type: "error",
//           text: result.message || "Failed to submit form. Please try again.",
//         });
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setFormMessage({
//         type: "error",
//         text: "An unexpected error occurred. Please try again.",
//       });
//     } finally {
//       setFormSubmitting(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!pageData) return <div>No data available</div>;

//   console.log(pageData, " this is pagedata");

//   const {
//     heroSection,
//     introSection,
//     bannerSection1,
//     columnSection1,
//     columnSection2,
//     contactFormSection,
//     sectionOrder,
//     globalStyles,
//   } = pageData;

//   const placeholder =
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

//   const renderSection = (section: string) => {
//     switch (section) {
//       case "hero":
//         if (!heroSection.show) return null;
//         const heroBgImages = getResponsiveImageUrls(
//           heroSection.backgroundImage
//         );
//         const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
//         return (
//           <div
//             className={`mod_hero banner ${
//               heroSection.className || "less-padding mobile-stack"
//             }`}
//             data-s3-module
//             style={{ backgroundColor: heroSection.backgroundColor }}
//           >
//             <div className="wrapper">
//               <picture className="background">
//                 <source
//                   media="(max-width:420px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
//                 />
//                 <source
//                   media="(max-width:800px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
//                 />
//                 <source
//                   media="(max-width:1400px)"
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
//                 />
//                 <source
//                   srcSet={placeholder}
//                   data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
//                 />
//                 <img
//                   src={placeholder}
//                   data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
//                   loading="lazy"
//                   data-lazyload="img"
//                   width="1994"
//                   height="1206"
//                   alt={heroBgImages.alt || "Background Texture"}
//                   draggable="false"
//                 />
//               </picture>
//               <div className="row">
//                 <div className="inner">
//                   <ul className="partial_breadcrumb" data-s3-partial>
//                     {heroSection.breadcrumbs.map((crumb, index) => (
//                       <li key={index}>
//                         <a
//                           href={crumb.url}
//                           role="link"
//                           aria-label={
//                             crumb.ariaLabel ||
//                             "Breadcrumbs to help navigate the user"
//                           }
//                         >
//                           {crumb.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                   <h1
//                     style={{
//                       color: heroSection.titleColor,
//                       fontSize: heroSection.titleFontSize,
//                     }}
//                   >
//                     {heroSection.title}
//                   </h1>
//                 </div>
//               </div>
//               <div className="media">
//                 <picture className="background">
//                   <source
//                     media="(max-width:420px)"
//                     srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
//                     data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
//                   />
//                   <source
//                     media="(max-width:800px)"
//                     srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
//                     data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
//                   />
//                   <source
//                     media="(max-width:1400px)"
//                     srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
//                     data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
//                   />
//                   <source
//                     srcSet={`${heroMediaImages.large}?auto=format,compress&w=1600`}
//                     data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1600`}
//                   />
//                   <img
//                     src={`${heroMediaImages.large}?auto=format,compress&w=1600`}
//                     width="1600"
//                     height="730"
//                     alt={heroMediaImages.alt || "team photo"}
//                     draggable="false"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//         );

//       case "intro":
//         if (!introSection.show) return null;
//         const introLogo = getImageUrl(introSection.logo);
//         return (
//           <div
//             className={`mod_intro container viewport ${
//               introSection.className || "option-1 wide"
//             } wow fadeInUp`}
//             data-s3-module
//             style={{
//               backgroundColor: introSection.backgroundColor,
//               color: introSection.textColor,
//               paddingBottom: introSection.paddingBottom,
//             }}
//           >
//             <div className="row pb-0">
//               {introLogo && (
//                 <picture className="logo">
//                   <img
//                     src={introLogo}
//                     width={introSection.logoWidth || 58}
//                     height={introSection.logoHeight || 64}
//                     loading="lazy"
//                     alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
//                     draggable="false"
//                     data-api-key="logo"
//                   />
//                 </picture>
//               )}
//               <div className="inner" data-api-key="content">
//                 <h2 style={{ color: introSection.headingColor }}>
//                   {introSection.heading}
//                 </h2>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: lexicalToHtml(introSection.content),
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         );

//       case "bannerSection1":
//         if (!bannerSection1.show) return null;
//         const bannerImages = getResponsiveImageUrls(
//           bannerSection1.backgroundImage
//         );
//         return (
//           <div
//             className={`mod_banner ${
//               bannerSection1.className ||
//               "dark hide-divider viewport background-1"
//             }`}
//             data-s3-module
//             style={{
//               backgroundColor: bannerSection1.backgroundColor,
//               color: bannerSection1.textColor,
//             }}
//           >
//             <div className="row wow fadeInUp">
//               <div className="content" data-api-key="top_content">
//                 <div className={`text-${bannerSection1.textAlign || "center"}`}>
//                   <h2 style={{ color: bannerSection1.headingColor }}>
//                     {bannerSection1.heading}
//                   </h2>
//                   {bannerSection1.content && (
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: lexicalToHtml(bannerSection1.content),
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//             <picture className="background">
//               <source
//                 media="(max-width:420px)"
//                 srcSet={placeholder}
//                 data-lazyload-srcset={`${bannerImages.mobile}?auto=format,compress&w=800, ${bannerImages.mobile}?auto=format,compress&w=1200 2x`}
//               />
//               <source
//                 media="(max-width:800px)"
//                 srcSet={placeholder}
//                 data-lazyload-srcset={`${bannerImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${bannerImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
//               />
//               <source
//                 media="(max-width:1400px)"
//                 srcSet={placeholder}
//                 data-lazyload-srcset={`${bannerImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
//               />
//               <source
//                 srcSet={placeholder}
//                 data-lazyload-srcset={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
//               />
//               <img
//                 src={placeholder}
//                 data-lazyload-src={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
//                 loading="lazy"
//                 data-lazyload="img"
//                 width="2200"
//                 height="802"
//                 alt={bannerImages.alt || "Banner media"}
//                 draggable="false"
//               />
//             </picture>
//           </div>
//         );

//       case "columnSection1":
//         if (!columnSection1.show) return null;
//         return (
//           <div
//             className={`mod_column viewport container ${
//               columnSection1.className || ""
//             }`}
//             data-s3-module
//             style={{ backgroundColor: columnSection1.backgroundColor }}
//           >
//             <div
//               className={`row text-${columnSection1.textAlign || "center"}`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 {columnSection1.columns.map((column, index) => (
//                   <React.Fragment key={index}>
//                     {column.columnWidth && (
//                       <div className={column.columnWidth}>
//                         {column.content && (
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: lexicalToHtml(column.content),
//                             }}
//                           />
//                         )}
//                         {column.image?.url && (
//                           <img
//                             src={getImageUrl(column.image.url)}
//                             width={column.image.width}
//                             height={column.image.height}
//                             alt={column.image.alt || ""}
//                             loading="lazy"
//                           />
//                         )}
//                       </div>
//                     )}
//                     {!column.columnWidth && (
//                       <>
//                         {column.content && (
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: lexicalToHtml(column.content),
//                             }}
//                           />
//                         )}
//                         {column.image?.url && (
//                           <img
//                             src={getImageUrl(column.image.url)}
//                             width={column.image.width}
//                             height={column.image.height}
//                             alt={column.image.alt || ""}
//                             loading="lazy"
//                           />
//                         )}
//                       </>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case "columnSection2":
//         if (!columnSection2.show) return null;
//         return (
//           <div
//             className={`mod_column viewport container ${
//               columnSection2.className || ""
//             }`}
//             data-s3-module
//             style={{ backgroundColor: columnSection2.backgroundColor }}
//           >
//             <div
//               className={`row text-${columnSection2.textAlign || "center"}`}
//               data-api-key="content"
//             >
//               <div className="item">
//                 {columnSection2.columns.map((column, index) => (
//                   <React.Fragment key={index}>
//                     {column.columnWidth && (
//                       <div className={column.columnWidth}>
//                         {column.content && (
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: lexicalToHtml(column.content),
//                             }}
//                           />
//                         )}
//                         {column.image?.url && (
//                           <img
//                             src={getImageUrl(column.image.url)}
//                             width={column.image.width}
//                             height={column.image.height}
//                             alt={column.image.alt || ""}
//                             loading="lazy"
//                           />
//                         )}
//                       </div>
//                     )}
//                     {!column.columnWidth && (
//                       <>
//                         {column.content && (
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: lexicalToHtml(column.content),
//                             }}
//                           />
//                         )}
//                         {column.image?.url && (
//                           <img
//                             src={getImageUrl(column.image.url)}
//                             width={column.image.width}
//                             height={column.image.height}
//                             alt={column.image.alt || ""}
//                             loading="lazy"
//                           />
//                         )}
//                       </>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case "contactForm":
//         if (!contactFormSection.show) return null;
//         return (
//           <div
//             className="mod_contact_form"
//             data-s3-module
//             style={{
//               backgroundColor: contactFormSection.backgroundColor,
//               color: contactFormSection.textColor,
//             }}
//           >
//             <div className="wrapper">
//               <div className="row">
//                 <h2 style={{ color: contactFormSection.headingColor }}>
//                   {contactFormSection.heading}
//                 </h2>
//                 <div className="partial_form" data-s3-partial>
//                   {formMessage && (
//                     <div
//                       className={`form-message ${formMessage.type}`}
//                       style={{
//                         padding: "10px",
//                         marginBottom: "20px",
//                         borderRadius: "4px",
//                         backgroundColor:
//                           formMessage.type === "success"
//                             ? "#d4edda"
//                             : "#f8d7da",
//                         color:
//                           formMessage.type === "success"
//                             ? "#155724"
//                             : "#721c24",
//                         border: `1px solid ${
//                           formMessage.type === "success" ? "#c3e6cb" : "#f5c6cb"
//                         }`,
//                       }}
//                     >
//                       {formMessage.text}
//                     </div>
//                   )}
//                   <form
//                     id={`form_${contactFormSection.formSettings.formId}`}
//                     className="s3-form"
//                     method="post"
//                     onSubmit={handleFormSubmit}
//                     data-abide=""
//                     encType="multipart/form-data"
//                     noValidate
//                   >
//                     <div className="fields">
//                       {contactFormSection.formFields.map((field, index) => {
//                         const fieldClasses = `field-row ${
//                           field.columnClass || "col1"
//                         } ${field.additionalClasses || ""}`.trim();

//                         if (field.fieldType === "hidden") {
//                           return (
//                             <div key={index} className={fieldClasses}>
//                               <div className="field hidden">
//                                 <input
//                                   type="hidden"
//                                   name={field.fieldName}
//                                   id={field.fieldId}
//                                   value={field.defaultValue || ""}
//                                 />
//                               </div>
//                             </div>
//                           );
//                         }

//                         if (field.fieldType === "textarea") {
//                           return (
//                             <div key={index} className={fieldClasses}>
//                               <div className="field textarea">
//                                 {field.label && (
//                                   <label htmlFor={field.fieldId}>
//                                     {field.label}
//                                   </label>
//                                 )}
//                                 <textarea
//                                   rows={6}
//                                   cols={48}
//                                   name={field.fieldName}
//                                   id={field.fieldId}
//                                   placeholder={field.placeholder}
//                                   required={field.required}
//                                   aria-required={
//                                     field.required ? "true" : "false"
//                                   }
//                                   defaultValue=""
//                                 ></textarea>
//                               </div>
//                             </div>
//                           );
//                         }

//                         if (field.fieldType === "select") {
//                           return (
//                             <div key={index} className={fieldClasses}>
//                               <div className="field select">
//                                 {field.label && (
//                                   <label htmlFor={field.fieldId}>
//                                     {field.label}
//                                   </label>
//                                 )}
//                                 {field.required && (
//                                   <small>
//                                     {field.validationMessage ||
//                                       "This field is required."}
//                                   </small>
//                                 )}
//                                 <select
//                                   name={field.fieldName}
//                                   id={field.fieldId}
//                                   required={field.required}
//                                   aria-required={
//                                     field.required ? "true" : "false"
//                                   }
//                                 >
//                                   <option value="" disabled>
//                                     {field.placeholder}
//                                   </option>
//                                   {field.selectOptions?.map(
//                                     (option, optIndex) => (
//                                       <option
//                                         key={optIndex}
//                                         value={option.value}
//                                       >
//                                         {option.label}
//                                       </option>
//                                     )
//                                   )}
//                                 </select>
//                               </div>
//                             </div>
//                           );
//                         }

//                         if (field.fieldType === "checkbox") {
//                           return (
//                             <div key={index} className={fieldClasses}>
//                               <div
//                                 className={`field checkbox ${
//                                   field.additionalClasses || ""
//                                 }`}
//                               >
//                                 {field.required && (
//                                   <small>
//                                     {field.validationMessage ||
//                                       "This field is required."}
//                                   </small>
//                                 )}
//                                 <div className="field-item checkbox-item">
//                                   <input
//                                     type="checkbox"
//                                     id={field.fieldId}
//                                     name={field.fieldName}
//                                     value={field.defaultValue || "Yes"}
//                                     required={field.required}
//                                     aria-required={
//                                       field.required ? "true" : "false"
//                                     }
//                                   />
//                                   {field.label && (
//                                     <label htmlFor={field.fieldId}>
//                                       {field.label}
//                                     </label>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         }

//                         return (
//                           <div key={index} className={fieldClasses}>
//                             <div className={`field ${field.fieldType}`}>
//                               {field.label && (
//                                 <label htmlFor={field.fieldId}>
//                                   {field.label}
//                                 </label>
//                               )}
//                               {field.required && (
//                                 <small>
//                                   {field.validationMessage ||
//                                     "This field is required."}
//                                 </small>
//                               )}
//                               <input
//                                 type={field.fieldType}
//                                 size={50}
//                                 name={field.fieldName}
//                                 id={field.fieldId}
//                                 defaultValue=""
//                                 required={field.required}
//                                 aria-required={
//                                   field.required ? "true" : "false"
//                                 }
//                                 placeholder={field.placeholder}
//                               />
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     {contactFormSection.enableRecaptcha && (
//                       <div>
//                         <input
//                           id={`${contactFormSection.formSettings.formId}_recaptchaV3`}
//                           name="g-recaptcha-response-v3"
//                           type="hidden"
//                         />
//                         <div
//                           id={`${contactFormSection.formSettings.formId}_recaptchaV2`}
//                           data-recaptcha
//                         ></div>
//                         <div
//                           id={`${contactFormSection.formSettings.formId}_recaptcha`}
//                           data-recaptcha-error
//                         >
//                           <small>This field is required.</small>
//                         </div>
//                       </div>
//                     )}
//                     <input
//                       type="hidden"
//                       name="form_id"
//                       id="form_id"
//                       value={contactFormSection.formSettings.formId}
//                     />
//                     <input name="human_check" type="hidden" />
//                     <div className="submit-holder">
//                       {/* <div
//                         className="btn validate disabled"
//                         id={`validate_${contactFormSection.formSettings.formId}`}
//                         tabIndex={0}
//                       >
//                         {contactFormSection.buttonText}
//                       </div> */}
//                       {/* <button
//                         type="submit"
//                         id={`submit_${contactFormSection.formSettings.formId}`}
//                         value="submitted"
//                         name="submit"
//                         className="submit btn"
//                         tabIndex={0}
//                         disabled={formSubmitting}
//                         style={{
//                           backgroundColor:
//                             contactFormSection.buttonBackgroundColor,
//                           color: contactFormSection.buttonTextColor,
//                           opacity: formSubmitting ? 0.6 : 1,
//                           cursor: formSubmitting ? "not-allowed" : "pointer",
//                         }}
//                       >
//                         {formSubmitting
//                           ? "Submitting..."
//                           : contactFormSection.buttonText}
//                       </button> */}
//                     </div>
//                     <button
//                       type="submit"
//                       id={`submit_${contactFormSection.formSettings.formId}`}
//                       value="submitted"
//                       name="submit"
//                       className="submit btn"
//                       tabIndex={0}
//                       disabled={formSubmitting}
//                       style={{
//                         backgroundColor:
//                           contactFormSection.buttonBackgroundColor,
//                         color: contactFormSection.buttonTextColor,
//                         opacity: formSubmitting ? 0.6 : 1,
//                         cursor: formSubmitting ? "not-allowed" : "pointer",
//                       }}
//                     >
//                       {formSubmitting
//                         ? "Submitting..."
//                         : contactFormSection.buttonText}
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <main
//       id="main"
//       style={{
//         maxWidth: globalStyles.containerMaxWidth,
//         padding: globalStyles.containerPadding,
//         fontFamily: globalStyles.fontFamily,
//         color: globalStyles.textColor,
//         margin: "0 auto",
//       }}
//     >
//       {/* Page Layout */}
//       {sectionOrder.map((item, index) => (
//         <React.Fragment key={index}>
//           {renderSection(item.section)}
//         </React.Fragment>
//       ))}
//       {/* /Page Layout */}
//     </main>
//   );
// };

// export default SpecialsPage;

"use client";

import React, { useState } from "react";

import {
  getResponsiveImageUrls,
  lexicalToHtml,
  getImageUrl,
} from "@/lib/api/specials/fetchSpecialsPageComponent";

interface SpecialsPageData {
  heroSection: {
    show: boolean;
    className?: string;
    backgroundColor?: string;
    backgroundImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
    breadcrumbs: Array<{ label: string; url: string; ariaLabel?: string }>;
    title: string;
    titleColor?: string;
    titleFontSize?: string;
    mediaImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
  };
  introSection: {
    show: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    paddingBottom?: string;
    logo?: any;
    logoAlt?: string;
    logoWidth?: string;
    logoHeight?: string;
    heading: string;
    headingColor?: string;
    content: any;
  };
  bannerSection1: {
    show: boolean;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    textAlign?: string;
    backgroundImage: {
      mobile?: any;
      tablet?: any;
      desktop?: any;
      large?: any;
      alt?: string;
    };
    heading: string;
    headingColor?: string;
    content?: any;
  };
  columnSection1: {
    show: boolean;
    className?: string;
    backgroundColor?: string;
    textAlign?: string;
    columns: Array<{
      columnWidth?: string;
      content: any;
      image?: {
        url?: any;
        width?: string;
        height?: string;
        alt?: string;
      };
    }>;
  };
  columnSection2: {
    show: boolean;
    className?: string;
    backgroundColor?: string;
    textAlign?: string;
    columns: Array<{
      columnWidth?: string;
      content: any;
      image?: {
        url?: any;
        width?: string;
        height?: string;
        alt?: string;
      };
    }>;
  };
  contactFormSection: {
    show: boolean;
    backgroundColor?: string;
    textColor?: string;
    heading: string;
    headingColor?: string;
    formSettings: {
      formId: string;
      formAction: string;
      redirectUrl: string;
      emailSubject: string;
    };
    formFields: Array<{
      fieldType: string;
      fieldName: string;
      fieldId: string;
      label?: string;
      placeholder?: string;
      required?: boolean;
      defaultValue?: string;
      columnClass?: string;
      additionalClasses?: string;
      selectOptions?: Array<{ label: string; value: string }>;
      validationMessage?: string;
    }>;
    buttonText: string;
    buttonBackgroundColor?: string;
    buttonTextColor?: string;
    buttonHoverBackgroundColor?: string;
    privacyNotice?: any;
    enableRecaptcha: boolean;
  };
  sectionOrder: Array<{ section: string }>;
  globalStyles: {
    containerMaxWidth?: string;
    containerPadding?: string;
    sectionSpacing?: string;
    fontFamily?: string;
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
    linkColor?: string;
    linkHoverColor?: string;
  };
}

interface SpecialsPageProps {
  data: SpecialsPageData;
}

const SpecialsPage: React.FC<SpecialsPageProps> = ({ data }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    heroSection,
    introSection,
    bannerSection1,
    columnSection1,
    columnSection2,
    contactFormSection,
    sectionOrder,
    globalStyles,
  } = data;

  // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setFormSubmitting(true);
  //   setFormMessage(null);

  //   const form = e.currentTarget;
  //   const formData = new FormData(form);
  //   const formValues: Record<string, any> = {};

  //   formData.forEach((value, key) => {
  //     if (key !== "human_check" && key !== "submit") {
  //       formValues[key] = value;
  //     }
  //   });

  //   try {
  //     const response = await fetch("/api/special-form", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const result = await response.json();

  //     if (result.success) {
  //       setFormMessage({
  //         type: "success",
  //         text: result.message,
  //       });
  //       form.reset();

  //       if (data?.contactFormSection.formSettings.redirectUrl) {
  //         // setTimeout(() => {
  //         //   window.location.href =
  //         //     data.contactFormSection.formSettings.redirectUrl;
  //         // }, 2000);
  //       }
  //     } else {
  //       setFormMessage({
  //         type: "error",
  //         text: result.message,
  //       });
  //     }
  //   } catch (error) {
  //     setFormMessage({
  //       type: "error",
  //       text: "An unexpected error occurred. Please try again.",
  //     });
  //   } finally {
  //     setFormSubmitting(false);
  //   }
  // };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // ✅ Convert FormData to plain object
    const formValues: Record<string, any> = {};

    formData.forEach((value, key) => {
      if (
        key !== "human_check" &&
        key !== "submit" &&
        key !== "g-recaptcha-response-v3"
      ) {
        formValues[key] = value;
      }
    });

    try {
      const response = await fetch("/api/special-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues), // ✅ Send the plain object, not FormData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormMessage({
          type: "success",
          text: result.message || "Thank you! We'll be in touch soon.",
        });
        form.reset();

        // Optional redirect
        if (data?.contactFormSection.formSettings.redirectUrl) {
          // setTimeout(() => {
          //   window.location.href =
          //     data.contactFormSection.formSettings.redirectUrl;
          // }, 2000);
        }
      } else {
        setFormMessage({
          type: "error",
          text: result.message || "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  const renderSection = (section: string) => {
    switch (section) {
      case "hero":
        if (!heroSection.show) return null;
        const heroBgImages = getResponsiveImageUrls(
          heroSection.backgroundImage
        );
        const heroMediaImages = getResponsiveImageUrls(heroSection.mediaImage);
        return (
          <div
            className={`mod_hero banner ${
              heroSection.className || "less-padding mobile-stack"
            }`}
            data-s3-module
            style={{ backgroundColor: heroSection.backgroundColor }}
          >
            <div className="wrapper">
              <picture className="background">
                <source
                  media="(max-width:420px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.mobile}?auto=format,compress&w=420, ${heroBgImages.mobile}?auto=format,compress&w=630 2x`}
                />
                <source
                  media="(max-width:800px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.tablet}?auto=format,compress&w=800, ${heroBgImages.tablet}?auto=format,compress&w=1200 2x`}
                />
                <source
                  media="(max-width:1400px)"
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.desktop}?auto=format,compress&w=1400, ${heroBgImages.desktop}?auto=format,compress&w=2100 2x`}
                />
                <source
                  srcSet={placeholder}
                  data-lazyload-srcset={`${heroBgImages.large}?auto=format,compress&w=1994`}
                />
                <img
                  src={placeholder}
                  data-lazyload-src={`${heroBgImages.large}?auto=format,compress&w=1994`}
                  loading="lazy"
                  data-lazyload="img"
                  width="1994"
                  height="1206"
                  alt={heroBgImages.alt || "Background Texture"}
                  draggable="false"
                />
              </picture>
              <div className="row">
                <div className="inner">
                  <ul className="partial_breadcrumb" data-s3-partial>
                    {heroSection.breadcrumbs.map((crumb, index) => (
                      <li key={index}>
                        <a
                          href={crumb.url}
                          role="link"
                          aria-label={
                            crumb.ariaLabel ||
                            "Breadcrumbs to help navigate the user"
                          }
                        >
                          {crumb.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h1
                    style={{
                      color: heroSection.titleColor,
                      fontSize: heroSection.titleFontSize,
                    }}
                  >
                    {heroSection.title}
                  </h1>
                </div>
              </div>
              <div className="media">
                <picture className="background">
                  <source
                    media="(max-width:420px)"
                    srcSet={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
                    data-lazyload-srcset={`${heroMediaImages.mobile}?auto=format,compress&w=420, ${heroMediaImages.mobile}?auto=format,compress&w=630 2x`}
                  />
                  <source
                    media="(max-width:800px)"
                    srcSet={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                    data-lazyload-srcset={`${heroMediaImages.tablet}?auto=format,compress&w=800, ${heroMediaImages.tablet}?auto=format,compress&w=1200 2x`}
                  />
                  <source
                    media="(max-width:1400px)"
                    srcSet={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
                    data-lazyload-srcset={`${heroMediaImages.desktop}?auto=format,compress&w=1400, ${heroMediaImages.desktop}?auto=format,compress&w=2100 2x`}
                  />
                  <source
                    srcSet={`${heroMediaImages.large}?auto=format,compress&w=1600`}
                    data-lazyload-srcset={`${heroMediaImages.large}?auto=format,compress&w=1600`}
                  />
                  <img
                    src={`${heroMediaImages.large}?auto=format,compress&w=1600`}
                    width="1600"
                    height="730"
                    alt={heroMediaImages.alt || "team photo"}
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
          </div>
        );

      case "intro":
        if (!introSection.show) return null;
        const introLogo = getImageUrl(introSection.logo);
        return (
          <div
            className={`mod_intro container viewport ${
              introSection.className || "option-1 wide"
            } wow fadeInUp`}
            data-s3-module
            style={{
              backgroundColor: introSection.backgroundColor,
              color: introSection.textColor,
              paddingBottom: introSection.paddingBottom,
            }}
          >
            <div className="row pb-0">
              {introLogo && (
                <picture className="logo">
                  <img
                    src={introLogo}
                    width={introSection.logoWidth || 58}
                    height={introSection.logoHeight || 64}
                    loading="lazy"
                    alt={introSection.logoAlt || "Goldfingers aesthetic logo"}
                    draggable="false"
                    data-api-key="logo"
                  />
                </picture>
              )}
              <div className="inner" data-api-key="content">
                <h2 style={{ color: introSection.headingColor }}>
                  {introSection.heading}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: lexicalToHtml(introSection.content),
                  }}
                />
              </div>
            </div>
          </div>
        );

      case "bannerSection1":
        if (!bannerSection1.show) return null;
        const bannerImages = getResponsiveImageUrls(
          bannerSection1.backgroundImage
        );
        return (
          <div
            className={`mod_banner ${
              bannerSection1.className ||
              "dark hide-divider viewport background-1"
            }`}
            data-s3-module
            style={{
              backgroundColor: bannerSection1.backgroundColor,
              color: bannerSection1.textColor,
            }}
          >
            <div className="row wow fadeInUp">
              <div className="content" data-api-key="top_content">
                <div className={`text-${bannerSection1.textAlign || "center"}`}>
                  <h2 style={{ color: bannerSection1.headingColor }}>
                    {bannerSection1.heading}
                  </h2>
                  {bannerSection1.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lexicalToHtml(bannerSection1.content),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet={placeholder}
                data-lazyload-srcset={`${bannerImages.mobile}?auto=format,compress&w=800, ${bannerImages.mobile}?auto=format,compress&w=1200 2x`}
              />
              <source
                media="(max-width:800px)"
                srcSet={placeholder}
                data-lazyload-srcset={`${bannerImages.tablet}?auto=format,compress&w=800&q=85&sharp=5, ${bannerImages.tablet}?auto=format,compress&w=1200&q=85&sharp=5 2x`}
              />
              <source
                media="(max-width:1400px)"
                srcSet={placeholder}
                data-lazyload-srcset={`${bannerImages.desktop}?auto=format,compress&w=1400&q=85&sharp=5, ${bannerImages.desktop}?auto=format,compress&w=2100&q=85&sharp=5 2x`}
              />
              <source
                srcSet={placeholder}
                data-lazyload-srcset={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
              />
              <img
                src={placeholder}
                data-lazyload-src={`${bannerImages.large}?auto=format,compress&w=2200&q=85&sharp=5`}
                loading="lazy"
                data-lazyload="img"
                width="2200"
                height="802"
                alt={bannerImages.alt || "Banner media"}
                draggable="false"
              />
            </picture>
          </div>
        );

      case "columnSection1":
        if (!columnSection1.show) return null;
        return (
          <div
            className={`mod_column viewport container ${
              columnSection1.className || ""
            }`}
            data-s3-module
            style={{ backgroundColor: columnSection1.backgroundColor }}
          >
            <div
              className={`row text-${columnSection1.textAlign || "center"}`}
              data-api-key="content"
            >
              <div className="item">
                {columnSection1.columns.map((column, index) => (
                  <React.Fragment key={index}>
                    {column.columnWidth && (
                      <div className={column.columnWidth}>
                        {column.content && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: lexicalToHtml(column.content),
                            }}
                          />
                        )}
                        {column.image?.url && (
                          <img
                            src={getImageUrl(column.image.url)}
                            width={column.image.width}
                            height={column.image.height}
                            alt={column.image.alt || ""}
                            loading="lazy"
                          />
                        )}
                      </div>
                    )}
                    {!column.columnWidth && (
                      <>
                        {column.content && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: lexicalToHtml(column.content),
                            }}
                          />
                        )}
                        {column.image?.url && (
                          <img
                            src={getImageUrl(column.image.url)}
                            width={column.image.width}
                            height={column.image.height}
                            alt={column.image.alt || ""}
                            loading="lazy"
                          />
                        )}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        );

      case "columnSection2":
        if (!columnSection2.show) return null;
        return (
          <div
            className={`mod_column viewport container ${
              columnSection2.className || ""
            }`}
            data-s3-module
            style={{ backgroundColor: columnSection2.backgroundColor }}
          >
            <div
              className={`row text-${columnSection2.textAlign || "center"}`}
              data-api-key="content"
            >
              <div className="item">
                {columnSection2.columns.map((column, index) => (
                  <React.Fragment key={index}>
                    {column.columnWidth && (
                      <div className={column.columnWidth}>
                        {column.content && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: lexicalToHtml(column.content),
                            }}
                          />
                        )}
                        {column.image?.url && (
                          <img
                            src={getImageUrl(column.image.url)}
                            width={column.image.width}
                            height={column.image.height}
                            alt={column.image.alt || ""}
                            loading="lazy"
                          />
                        )}
                      </div>
                    )}
                    {!column.columnWidth && (
                      <>
                        {column.content && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: lexicalToHtml(column.content),
                            }}
                          />
                        )}
                        {column.image?.url && (
                          <img
                            src={getImageUrl(column.image.url)}
                            width={column.image.width}
                            height={column.image.height}
                            alt={column.image.alt || ""}
                            loading="lazy"
                          />
                        )}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        );

      case "contactForm":
        if (!contactFormSection.show) return null;
        return (
          <div
            className="mod_contact_form"
            data-s3-module
            style={{
              backgroundColor: contactFormSection.backgroundColor,
              color: contactFormSection.textColor,
            }}
          >
            <div className="wrapper">
              <div className="row">
                <h2 style={{ color: contactFormSection.headingColor }}>
                  {contactFormSection.heading}
                </h2>
                <div className="partial_form" data-s3-partial>
                  {formMessage && (
                    <div
                      className={`form-message ${formMessage.type}`}
                      style={{
                        padding: "10px",
                        marginBottom: "20px",
                        borderRadius: "4px",
                        backgroundColor:
                          formMessage.type === "success"
                            ? "#d4edda"
                            : "#f8d7da",
                        color:
                          formMessage.type === "success"
                            ? "#155724"
                            : "#721c24",
                        border: `1px solid ${
                          formMessage.type === "success" ? "#c3e6cb" : "#f5c6cb"
                        }`,
                      }}
                    >
                      {formMessage.text}
                    </div>
                  )}
                  <form
                    id={`form_${contactFormSection.formSettings.formId}`}
                    className="s3-form"
                    method="post"
                    onSubmit={handleFormSubmit}
                    data-abide=""
                    encType="multipart/form-data"
                    noValidate
                  >
                    <div className="fields">
                      {contactFormSection.formFields.map((field, index) => {
                        const fieldClasses = `field-row ${
                          field.columnClass || "col1"
                        } ${field.additionalClasses || ""}`.trim();

                        if (field.fieldType === "hidden") {
                          return (
                            <div key={index} className={fieldClasses}>
                              <div className="field hidden">
                                <input
                                  type="hidden"
                                  name={field.fieldName}
                                  id={field.fieldId}
                                  value={field.defaultValue || ""}
                                />
                              </div>
                            </div>
                          );
                        }

                        if (field.fieldType === "textarea") {
                          return (
                            <div key={index} className={fieldClasses}>
                              <div className="field textarea">
                                {field.label && (
                                  <label htmlFor={field.fieldId}>
                                    {field.label}
                                  </label>
                                )}
                                <textarea
                                  rows={6}
                                  cols={48}
                                  name={field.fieldName}
                                  id={field.fieldId}
                                  placeholder={field.placeholder}
                                  required={field.required}
                                  aria-required={
                                    field.required ? "true" : "false"
                                  }
                                  defaultValue=""
                                ></textarea>
                              </div>
                            </div>
                          );
                        }

                        if (field.fieldType === "select") {
                          return (
                            <div key={index} className={fieldClasses}>
                              <div className="field select">
                                {field.label && (
                                  <label htmlFor={field.fieldId}>
                                    {field.label}
                                  </label>
                                )}
                                {field.required && (
                                  <small>
                                    {field.validationMessage ||
                                      "This field is required."}
                                  </small>
                                )}
                                <select
                                  name={field.fieldName}
                                  id={field.fieldId}
                                  required={field.required}
                                  aria-required={
                                    field.required ? "true" : "false"
                                  }
                                >
                                  <option value="" disabled>
                                    {field.placeholder}
                                  </option>
                                  {field.selectOptions?.map(
                                    (option, optIndex) => (
                                      <option
                                        key={optIndex}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          );
                        }

                        if (field.fieldType === "checkbox") {
                          return (
                            <div key={index} className={fieldClasses}>
                              <div
                                className={`field checkbox ${
                                  field.additionalClasses || ""
                                }`}
                              >
                                {field.required && (
                                  <small>
                                    {field.validationMessage ||
                                      "This field is required."}
                                  </small>
                                )}
                                <div className="field-item checkbox-item">
                                  <input
                                    type="checkbox"
                                    id={field.fieldId}
                                    name={field.fieldName}
                                    value={field.defaultValue || "Yes"}
                                    required={field.required}
                                    aria-required={
                                      field.required ? "true" : "false"
                                    }
                                  />
                                  {field.label && (
                                    <label htmlFor={field.fieldId}>
                                      {field.label}
                                    </label>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div key={index} className={fieldClasses}>
                            <div className={`field ${field.fieldType}`}>
                              {field.label && (
                                <label htmlFor={field.fieldId}>
                                  {field.label}
                                </label>
                              )}
                              {field.required && (
                                <small>
                                  {field.validationMessage ||
                                    "This field is required."}
                                </small>
                              )}
                              <input
                                type={field.fieldType}
                                size={50}
                                name={field.fieldName}
                                id={field.fieldId}
                                defaultValue=""
                                required={field.required}
                                aria-required={
                                  field.required ? "true" : "false"
                                }
                                placeholder={field.placeholder}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {contactFormSection.enableRecaptcha && (
                      <div>
                        <input
                          id={`${contactFormSection.formSettings.formId}_recaptchaV3`}
                          name="g-recaptcha-response-v3"
                          type="hidden"
                        />
                        <div
                          id={`${contactFormSection.formSettings.formId}_recaptchaV2`}
                          data-recaptcha
                        ></div>
                        <div
                          id={`${contactFormSection.formSettings.formId}_recaptcha`}
                          data-recaptcha-error
                        >
                          <small>This field is required.</small>
                        </div>
                      </div>
                    )}
                    <input
                      type="hidden"
                      name="form_id"
                      id="form_id"
                      value={contactFormSection.formSettings.formId}
                    />
                    <input name="human_check" type="hidden" />
                    <div className="submit-holder">
                      {/* <div
                        className="btn validate disabled"
                        id={`validate_${contactFormSection.formSettings.formId}`}
                        tabIndex={0}
                      >
                        {contactFormSection.buttonText}
                      </div> */}
                      {/* <button
                        type="submit"
                        id={`submit_${contactFormSection.formSettings.formId}`}
                        value="submitted"
                        name="submit"
                        className="submit btn"
                        tabIndex={0}
                        disabled={formSubmitting}
                        style={{
                          backgroundColor:
                            contactFormSection.buttonBackgroundColor,
                          color: contactFormSection.buttonTextColor,
                          opacity: formSubmitting ? 0.6 : 1,
                          cursor: formSubmitting ? "not-allowed" : "pointer",
                        }}
                      >
                        {formSubmitting
                          ? "Submitting..."
                          : contactFormSection.buttonText}
                      </button> */}
                    </div>
                    <button
                      type="submit"
                      id={`submit_${contactFormSection.formSettings.formId}`}
                      value="submitted"
                      name="submit"
                      className="submit btn"
                      tabIndex={0}
                      disabled={formSubmitting}
                      style={{
                        backgroundColor:
                          contactFormSection.buttonBackgroundColor,
                        color: contactFormSection.buttonTextColor,
                        opacity: formSubmitting ? 0.6 : 1,
                        cursor: formSubmitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {formSubmitting
                        ? "Submitting..."
                        : contactFormSection.buttonText}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main
      id="main"
      style={{
        maxWidth: globalStyles.containerMaxWidth,
        padding: globalStyles.containerPadding,
        fontFamily: globalStyles.fontFamily,
        color: globalStyles.textColor,
        margin: "0 auto",
      }}
    >
      {/* Page Layout */}
      {sectionOrder.map((item, index) => (
        <React.Fragment key={index}>
          {renderSection(item.section)}
        </React.Fragment>
      ))}
      {/* /Page Layout */}
    </main>
  );
};

export default SpecialsPage;