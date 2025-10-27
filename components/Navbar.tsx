// // "use client";

// // import { fetchUpperNav } from "@/lib/api/navbar";
// // import Link from "next/link";
// // import { useEffect, useState } from "react";

// // export default function Navbar() {
// //   const [upperNavData, setUpperNavData] = useState(null);

// //   useEffect(() => {
// //     const getData = async () => {
// //       const data = await fetchUpperNav();
// //       console.log(data, "this is upperNav data");
// //       setUpperNavData(data);
// //     };

// //     getData();
// //   }, []);

// //   console.log(upperNavData, "this is uppernavbadara");
// //   return (
// //     <header className="partial_nav_header light" data-s3-partial="">
// //       <div className="upper-nav">
// //         <nav>
// //           <ul className="partial_nav">
// //             <li className="partial_nav_item contact desktop-only">
// //               <Link href="/contact/" className="tresio-nav__link level-1">
// //                 Book Appointment
// //               </Link>
// //             </li>
// //             <li className="partial_nav_item location">
// //               <Link
// //                 href="/locations/"
// //                 className="tresio-nav__link level-1 location"
// //               >
// //                 Find Your Location
// //               </Link>
// //             </li>
// //             <li className="partial_nav_item phone desktop-only">
// //               <Link
// //                 className="tel ppc-href"
// //                 href="tel:+14073334300"
// //                 role="link"
// //                 aria-label="Give Goldfingers Aesthetics a phone call"
// //               >
// //                 (407) 333-4300
// //               </Link>
// //             </li>
// //             <ul className="partial_socials" data-s3-partial="" role="menu">
// //               <li role="menuitem">
// //                 <Link
// //                   rel="noopener"
// //                   title="Goldfingers Aesthetics on Instagram"
// //                   href="https://www.instagram.com/goldfingers.aesthetics/"
// //                   target="_blank"
// //                   aria-label="Goldfingers Aesthetics on Instagram opens in a new tab"
// //                 >
// //                   <span className="instagram-icon" />
// //                 </Link>
// //               </li>
// //               <li role="menuitem">
// //                 <Link
// //                   rel="noopener"
// //                   title="Goldfingers Aesthetics on Facebook"
// //                   href="https://www.facebook.com/goldfingersaesthetics/"
// //                   target="_blank"
// //                   aria-label="Goldfingers Aesthetics on Facebook opens in a new tab"
// //                 >
// //                   <span className="facebook-icon" />
// //                 </Link>
// //               </li>
// //               <li role="menuitem">
// //                 <Link
// //                   rel="noopener"
// //                   title="Goldfingers Aesthetics on Youtube"
// //                   href="https://www.youtube.com/channel/UCGb3ma3A8U69pmhGnccOtfQ"
// //                   target="_blank"
// //                   aria-label="Goldfingers Aesthetics on Youtube opens in a new tab"
// //                 >
// //                   <span className="youtube-icon" />
// //                 </Link>
// //               </li>
// //             </ul>
// //             <li className="search">
// //               <span
// //                 className="js-search-open"
// //                 aria-label="Opens search bar"
// //                 title="Open search bar"
// //                 role="button"
// //               >
// //                 <span>Search</span>
// //               </span>
// //             </li>
// //           </ul>
// //         </nav>
// //       </div>
// //       <div className="row">
// //         <div className="inner">
// //           <div className="logo-holder">
// //             <Link href="/" className="logo">
// //               <picture className="">
// //                 <img
// //                   src="https://www.datocms-assets.com/105497/1692813206-logo-nav.svg"
// //                   width={232}
// //                   height={65}
// //                   alt="Goldfingers Aesthetics Website Logo"
// //                   draggable="false"
// //                 />
// //               </picture>
// //             </Link>
// //           </div>
// //           <div className="nav-links">
// //             <nav
// //               className="tresio-nav"
// //               data-type-desktop="horizontal"
// //               data-type-tablet="hamburger"
// //               data-type-mobile="hamburger"
// //               data-variant-desktop="focus"
// //               data-variant-tablet="default"
// //               data-variant-mobile="default"
// //               data-breakpoint-mobile={640}
// //               data-breakpoint-tablet={1024}
// //               data-dropdown-label=""
// //               data-hamburger-color="#fff"
// //               data-hamburger-color-expanded="#fff"
// //               data-menu-offset={0}
// //               data-menu-offset-mobile={0}
// //             >
// //               <ul className="list partial_nav" data-s3-partial="">
// //                 <li className="partial_nav_item is-active" data-s3-partial="">
// //                   <Link href="/">Home</Link>
// //                 </li>
// //                 <li className="partial_nav_item" data-s3-partial="">
// //                   <Link href="/about/">About</Link>
// //                   <ul className="">
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/about/founder/">Our Founders</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/locations/?tab=providers" rel="noopener">
// //                         Providers
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/about/testimonials/">Testimonials</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/blog/">Blog</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/about/resource-center/">Videos</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/about/confidentiality-statement/">
// //                         Privacy Policy
// //                       </Link>
// //                     </li>
// //                   </ul>
// //                 </li>
// //                 <li className="partial_nav_item" data-s3-partial="">
// //                   <Link href="/gallery/">Gallery</Link>
// //                   <ul className="">
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/gallery/non-surgical/">Non-Surgical</Link>
// //                       <ul className="">
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/lip-fillers/">
// //                             Lip Fillers
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/botox/">BOTOX</Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/juvederm/">
// //                             JUVÉDERM
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/kybella/">
// //                             KYBELLA
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/micro-channeling/">
// //                             Micro-Channeling
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/restylane-r/">
// //                             Restylane
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/skinmedica/">
// //                             SkinMedica
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/dermal-filler/">
// //                             Dermal Filler
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/cheek-contour/">
// //                             Cheek Contour
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/liquid-chin-and-jaw-contouring/">
// //                             Liquid Chin &amp; Jaw Contouring
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/liquid-rhinoplasty/">
// //                             Liquid Rhinoplasty
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/marionette-lines/">
// //                             Marionette Lines
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/liquid-facelift/">
// //                             Liquid (Non-Surgical) Facelift
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/weight-loss/">
// //                             Weight Loss
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/non-surgical/lash-extensions/">
// //                             Lash Extensions
// //                           </Link>
// //                         </li>
// //                       </ul>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/gallery/surgical/">Surgical</Link>
// //                       <ul className="">
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/surgical/tummy-tuck/">
// //                             Tummy Tuck
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/surgical/mommy-makeover/">
// //                             Mommy Makeover
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/surgical/liposuction/">
// //                             Liposuction
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/surgical/breast-augmentation/">
// //                             Breast Augmentation
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/gallery/surgical/breast-lift/">
// //                             Breast Lift
// //                           </Link>
// //                         </li>
// //                       </ul>
// //                     </li>
// //                   </ul>
// //                 </li>
// //                 <li className="partial_nav_item mega-menu" data-s3-partial="">
// //                   <Link href="/medical-spa/">Medical Spa</Link>
// //                   <ul className="">
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/injectables/">Injectables</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/botox/">BOTOX</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/dysport/">Dysport</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/dermal-fillers/">
// //                         Dermal Fillers
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/juvederm/">JUVÉDERM</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/juvederm-volux/">
// //                         Juvederm Volux
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/restylane/">Restylane</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/restylane-contour/">
// //                         Restylane Contour
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/cheek-fillers/">
// //                         Cheek Fillers
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/lines-and-wrinkles/">
// //                         Lines &amp; Wrinkles
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/lips/">Lip Fillers</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/chin/">Chin Fillers</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/hands/">Hand Rejuvenation</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/liquid-facelift/">
// //                         Liquid (Non-Surgical) Facelift
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/liquid-non-surgical-rhinoplasty/">
// //                         Liquid (Non-Surgical) Rhinoplasty
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/skinvive/">SkinVive</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/spa-services/">
// //                         Spa Services
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/lash-extensions/">
// //                         Lash Extensions
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/mens-services/">
// //                         Men's Services
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/micro-channeling/">
// //                         Micro-Channeling
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/permanent-makeup/">
// //                         Permanent Makeup
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/diamondglow/">DiamondGlow</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/skin-medica/">SkinMedica</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/skincare-services/">
// //                         Skincare Services
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/weightloss/">Weight Loss</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/medical-spa/semaglutide-injections/">
// //                         Semaglutide Injections
// //                       </Link>
// //                     </li>
// //                   </ul>
// //                 </li>
// //                 <li className="partial_nav_item" data-s3-partial="">
// //                   <Link href="/plastic-surgery/">Plastic Surgery</Link>
// //                   <ul className="">
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/breast/">Breast</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/breast-augmentation/">
// //                         Breast Augmentation
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/breast-lift/">
// //                         Breast Lift
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/breast-reduction/">
// //                         Breast Reduction
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/breast-revision/">
// //                         Breast Revision
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/body/">Body</Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/liposuction/">
// //                         Liposuction
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/mommy-makeover/">
// //                         Mommy Makeover
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/plastic-surgery/tummy-tuck/">
// //                         Tummy Tuck
// //                       </Link>
// //                     </li>
// //                   </ul>
// //                 </li>
// //                 <li className="partial_nav_item" data-s3-partial="">
// //                   <Link href="/specials-and-rewards/">
// //                     Specials &amp; Rewards
// //                   </Link>
// //                   <ul className="">
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/specials-and-rewards/specials/">
// //                         Specials
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/specials-and-rewards/alle/">
// //                         Alle Rewards
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/specials-and-rewards/aspire-rewards/">
// //                         Aspire Rewards
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/specials-and-rewards/gift-cards/">
// //                         Gift Cards
// //                       </Link>
// //                     </li>
// //                   </ul>
// //                 </li>
// //                 <li className="partial_nav_item" data-s3-partial="">
// //                   <Link href="/financing/">Financing</Link>
// //                 </li>
// //                 <li className="partial_nav_item" data-s3-partial="">
// //                   <Link href="/contact/">Contact</Link>
// //                 </li>
// //                 <li className="partial_nav_item" data-s3-partial="">
// //                   <Link href="/training/">Training</Link>
// //                   <ul className="">
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/training/training-program-details/">
// //                         Training Program Details
// //                       </Link>
// //                       <ul className="">
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/training/training-program-details/comprehensive-injectables/">
// //                             Comprehensive Injectables
// //                           </Link>
// //                         </li>
// //                         <li className="partial_nav_item" data-s3-partial="">
// //                           <Link href="/training/training-program-details/foundational-injectables/">
// //                             Foundational Injectables
// //                           </Link>
// //                         </li>
// //                       </ul>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/training/enrollment-faqs/">
// //                         Enrollment &amp; FAQs
// //                       </Link>
// //                     </li>
// //                     <li className="partial_nav_item" data-s3-partial="">
// //                       <Link href="/training/apply-for-your-training-spot-today/">
// //                         Apply for Your Training Spot Today
// //                       </Link>
// //                     </li>
// //                   </ul>
// //                 </li>
// //                 <li className="ignore" role="menuitem">
// //                   <div className="info">
// //                     <ul
// //                       className="partial_socials"
// //                       data-s3-partial=""
// //                       role="menu"
// //                     >
// //                       <li role="menuitem">
// //                         <Link
// //                           rel="noopener"
// //                           title="Goldfingers Aesthetics on Instagram"
// //                           href="https://www.instagram.com/goldfingers.aesthetics/"
// //                           target="_blank"
// //                           aria-label="Goldfingers Aesthetics on Instagram opens in a new tab"
// //                         >
// //                           <span className="instagram-icon" />
// //                         </Link>
// //                       </li>
// //                       <li role="menuitem">
// //                         <Link
// //                           rel="noopener"
// //                           title="Goldfingers Aesthetics on Facebook"
// //                           href="https://www.facebook.com/goldfingersaesthetics/"
// //                           target="_blank"
// //                           aria-label="Goldfingers Aesthetics on Facebook opens in a new tab"
// //                         >
// //                           <span className="facebook-icon" />
// //                         </Link>
// //                       </li>
// //                       <li role="menuitem">
// //                         <Link
// //                           rel="noopener"
// //                           title="Goldfingers Aesthetics on Youtube"
// //                           href="https://www.youtube.com/channel/UCGb3ma3A8U69pmhGnccOtfQ"
// //                           target="_blank"
// //                           aria-label="Goldfingers Aesthetics on Youtube opens in a new tab"
// //                         >
// //                           <span className="youtube-icon" />
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                     <p>
// //                       <Link
// //                         className="tel ppc-href"
// //                         href="tel:+14073334300"
// //                         data-s3-event="Phone - Mobile Nav"
// //                         role="link"
// //                         aria-label="Give Goldfingers Aesthetics a phone call"
// //                       >
// //                         <span className="ppc-number">(407) 333-4300</span>
// //                       </Link>
// //                     </p>
// //                   </div>
// //                 </li>
// //               </ul>
// //             </nav>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// "use client";

// import { fetchUpperNav } from "@/lib/api/navbar";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// // Helper component for recursive menu rendering
// function MenuItemComponent({ item }: { item: any }) {
//   const hasSubMenu = item.subMenu && item.subMenu.length > 0;

//   return (
//     <li
//       className={`partial_nav_item ${item.isActive ? "is-active" : "mega-menu"} ${
//         item.customClasses || ""
//       }`}
//       data-s3-partial=""
//     >
//       <Link href={item.href} {...(item.rel && { rel: item.rel })}>
//         {item.label}
//       </Link>
//       {hasSubMenu && (
//         <ul className="">
//           {item.subMenu.map((subItem: any, subIndex: number) => (
//             <SubMenuItemComponent key={subItem.id || subIndex} item={subItem} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }

// function SubMenuItemComponent({ item }: { item: any }) {
//   const hasNestedSubMenu = item.subMenu && item.subMenu.length > 0;

//   return (
//     <li
//       className={`partial_nav_item ${item.customClasses || ""}`}
//       data-s3-partial=""
//     >
//       <Link href={item.href} {...(item.rel && { rel: item.rel })}>
//         {item.label}
//       </Link>
//       {hasNestedSubMenu && (
//         <ul className="">
//           {item.subMenu.map((nestedItem: any, nestedIndex: number) => (
//             <li
//               key={nestedItem.id || nestedIndex}
//               className={`partial_nav_item ${nestedItem.customClasses || ""}`}
//               data-s3-partial=""
//             >
//               <Link
//                 href={nestedItem.href}
//                 {...(nestedItem.rel && { rel: nestedItem.rel })}
//               >
//                 {nestedItem.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }

// export default function Navbar() {
//   const [navbarData, setNavbarData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchUpperNav();
//         console.log(data, "this is navbar data");
//         setNavbarData(data);
//       } catch (error) {
//         console.error("Error loading navbar:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   // Show loading state
//   if (loading) {
//     return (
//       <header className="partial_nav_header light" data-s3-partial="">
//         <div className="upper-nav">
//           <nav>
//             <ul className="partial_nav">
//               <li>Loading...</li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     );
//   }

//   // If no data or disabled, return null
//   if (!navbarData || !navbarData.enabled) {
//     return null;
//   }

//   const { upperNav, mainNav } = navbarData;

//   // Get logo URL - handle both Cloudinary URL and Payload media URL
//   const getLogoUrl = () => {
//     const imageData = mainNav.logo.imageUrl;

//     // If imageUrl is an object with cloudinary_url
//     if (typeof imageData === "object" && imageData?.cloudinary_url) {
//       return imageData.cloudinary_url;
//     }

//     // If imageUrl is an object with url property
//     if (typeof imageData === "object" && imageData?.url) {
//       return `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${imageData.url}`;
//     }

//     // If imageUrl is a string URL
//     if (typeof imageData === "string" && imageData.startsWith("http")) {
//       return imageData;
//     }

//     // Fallback: construct URL from ID
//     return `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/media/file/${imageData}`;
//   };

//   const logoUrl = getLogoUrl();

//   return (
//     <header className={mainNav.styling.headerClass} data-s3-partial="">
//       {/* Upper Navigation */}
//       {upperNav.enabled && (
//         <div className="upper-nav">
//           <nav>
//             <ul className="partial_nav">
//               {upperNav.items.map((item: any, index: number) => {
//                 // Render link items
//                 if (item.type === "link") {
//                   return (
//                     <li
//                       key={item.id || index}
//                       className={`partial_nav_item ${item.customClasses || ""}`}
//                     >
//                       <Link
//                         href={item.href || "#"}
//                         className="tresio-nav__link level-1"
//                         {...(item.ariaLabel && {
//                           "aria-label": item.ariaLabel,
//                         })}
//                       >
//                         {item.label}
//                       </Link>
//                     </li>
//                   );
//                 }

//                 // Render phone items
//                 if (item.type === "phone") {
//                   return (
//                     <li
//                       key={item.id || index}
//                       className={`partial_nav_item phone ${
//                         item.customClasses || ""
//                       }`}
//                     >
//                       <Link
//                         className="tel ppc-href"
//                         href={item.phoneLink || item.href || "#"}
//                         role="link"
//                         aria-label={item.ariaLabel || "Give us a phone call"}
//                       >
//                         {item.phoneNumber || item.label}
//                       </Link>
//                     </li>
//                   );
//                 }

//                 // Render social links
//                 if (item.type === "social" && item.socialLinks) {
//                   return (
//                     <ul
//                       key={item.id || index}
//                       className="partial_socials"
//                       data-s3-partial=""
//                       role="menu"
//                     >
//                       {item.socialLinks.map(
//                         (social: any, socialIndex: number) => (
//                           <li key={social.id || socialIndex} role="menuitem">
//                             <Link
//                               rel="noopener"
//                               title={
//                                 social.title || `Visit us on ${social.platform}`
//                               }
//                               href={social.url}
//                               target="_blank"
//                               aria-label={
//                                 social.ariaLabel ||
//                                 `${social.platform} link opens in a new tab`
//                               }
//                             >
//                               <span
//                                 className={`${social.platform.toLowerCase()}-icon`}
//                               />
//                             </Link>
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   );
//                 }

//                 // Render search
//                 // if (item.type === "search") {
//                 //   return (
//                 //     <li key={item.id || index} className="search">
//                 //       <span
//                 //         className="js-search-open"
//                 //         aria-label={
//                 //           item.searchConfig?.buttonAriaLabel ||
//                 //           "Opens search bar"
//                 //         }
//                 //         title={
//                 //           item.searchConfig?.buttonTitle || "Open search bar"
//                 //         }
//                 //         role="button"
//                 //       >
//                 //         <span>
//                 //           {item.searchConfig?.buttonText ||
//                 //             item.label ||
//                 //             "Search"}
//                 //         </span>
//                 //       </span>
//                 //     </li>
//                 //   );
//                 // }

//                 return null;
//               })}

//               <li className="search">
//                 <span
//                   className="js-search-open"
//                   aria-label="Opens search bar"
//                   title="Open search bar"
//                   role="button"
//                 >
//                   <span>Search</span>
//                 </span>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       )}

//       {/* Main Navigation */}
//       {mainNav.enabled && (
//         <div className="row">
//           <div className="inner">
//             {/* Logo */}
//             <div className="logo-holder">
//               <Link href={mainNav.logo.linkUrl} className="logo">
//                 <picture className="">
//                   <img
//                     src={logoUrl}
//                     width={mainNav.logo.width}
//                     height={mainNav.logo.height}
//                     alt={mainNav.logo.altText}
//                     draggable="false"
//                   />
//                 </picture>
//               </Link>
//             </div>

//             {/* Navigation Links */}
//             <div className="nav-links">
//               <nav
//                 className="tresio-nav"
//                 data-type-desktop={mainNav.navigationSettings.desktopType}
//                 data-type-tablet={mainNav.navigationSettings.tabletType}
//                 data-type-mobile={mainNav.navigationSettings.mobileType}
//                 data-variant-desktop="focus"
//                 data-variant-tablet="default"
//                 data-variant-mobile="default"
//                 data-breakpoint-mobile={
//                   mainNav.navigationSettings.breakpointMobile
//                 }
//                 data-breakpoint-tablet={
//                   mainNav.navigationSettings.breakpointTablet
//                 }
//                 data-dropdown-label=""
//                 data-hamburger-color={mainNav.navigationSettings.hamburgerColor}
//                 data-hamburger-color-expanded={
//                   mainNav.navigationSettings.hamburgerColorExpanded
//                 }
//                 data-menu-offset={0}
//                 data-menu-offset-mobile={0}
//               >
//                 <ul className="list partial_nav" data-s3-partial="">
//                   {mainNav.menuItems.map((item: any, index: number) => (
//                     <MenuItemComponent key={item.id || index} item={item} />
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="partial_nav_header light" data-s3-partial="">
      <div className="upper-nav">
        <nav>
          <ul className="partial_nav">
            <li className="partial_nav_item contact desktop-only">
              <Link href="/contact/" className="tresio-nav__link level-1">
                Book Appointment
              </Link>
            </li>
            <li className="partial_nav_item location">
              <Link
                href="/location/"
                className="tresio-nav__link level-1 location"
              >
                Find Your Location
              </Link>
            </li>
            <li className="partial_nav_item phone desktop-only">
              <Link
                className="tel ppc-href"
                href="tel:+14073334300"
                role="link"
                aria-label="Give Goldfingers Aesthetics a phone call"
              >
                (407) 333-4300
              </Link>
            </li>
            <ul className="partial_socials" data-s3-partial="" role="menu">
              <li role="menuitem">
                <Link
                  rel="noopener"
                  title="Goldfingers Aesthetics on Instagram"
                  href="https://www.instagram.com/goldfingers.aesthetics/"
                  target="_blank"
                  aria-label="Goldfingers Aesthetics on Instagram opens in a new tab"
                >
                  <span className="instagram-icon" />
                </Link>
              </li>
              <li role="menuitem">
                <Link
                  rel="noopener"
                  title="Goldfingers Aesthetics on Facebook"
                  href="https://www.facebook.com/goldfingersaesthetics/"
                  target="_blank"
                  aria-label="Goldfingers Aesthetics on Facebook opens in a new tab"
                >
                  <span className="facebook-icon" />
                </Link>
              </li>
              <li role="menuitem">
                <Link
                  rel="noopener"
                  title="Goldfingers Aesthetics on Youtube"
                  href="https://www.youtube.com/channel/UCGb3ma3A8U69pmhGnccOtfQ"
                  target="_blank"
                  aria-label="Goldfingers Aesthetics on Youtube opens in a new tab"
                >
                  <span className="youtube-icon" />
                </Link>
              </li>
            </ul>
            <li className="search">
              <span
                className="js-search-open"
                aria-label="Opens search bar"
                title="Open search bar"
                role="button"
              >
                <span>Search</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <div className="inner">
          <div className="logo-holder">
            <Link href="/" className="logo">
              <picture className="">
                <img
                  src="https://www.datocms-assets.com/105497/1692813206-logo-nav.svg"
                  width={232}
                  height={65}
                  alt="Goldfingers Aesthetics Website Logo"
                  draggable="false"
                />
              </picture>
            </Link>
          </div>
          <div className="nav-links">
            <nav
              className="tresio-nav"
              data-type-desktop="horizontal"
              data-type-tablet="hamburger"
              data-type-mobile="hamburger"
              data-variant-desktop="focus"
              data-variant-tablet="default"
              data-variant-mobile="default"
              data-breakpoint-mobile={640}
              data-breakpoint-tablet={1024}
              data-dropdown-label=""
              data-hamburger-color="#fff"
              data-hamburger-color-expanded="#fff"
              data-menu-offset={0}
              data-menu-offset-mobile={0}
            >
              <ul className="list partial_nav" data-s3-partial="">
                <li className="partial_nav_item is-active" data-s3-partial="">
                  <Link href="/">Home</Link>
                </li>
                <li className="partial_nav_item" data-s3-partial="">
                  <Link href="/about/">About</Link>
                  <ul className="">
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/about/founder/">Our Founders</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/location/" rel="noopener">
                        Providers
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/about/testimonials/">Testimonials</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/blog/">Blog</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/about/resource-center/">Videos</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/about/confidentiality-statement/">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="partial_nav_item" data-s3-partial="">
                  <Link href="/gallery/">Gallery</Link>
                  <ul className="">
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/gallery/non-surgical/">Non-Surgical</Link>
                      <ul className="">
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/lip-fillers/">
                            Lip Fillers
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/botox/">BOTOX</Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/juvederm/">
                            JUVÉDERM
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/kybella/">
                            KYBELLA
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/micro-channeling/">
                            Micro-Channeling
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/restylane-r/">
                            Restylane
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/skinmedica/">
                            SkinMedica
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/dermal-filler/">
                            Dermal Filler
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/cheek-contour/">
                            Cheek Contour
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/liquid-chin-and-jaw-contouring/">
                            Liquid Chin &amp; Jaw Contouring
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/liquid-rhinoplasty/">
                            Liquid Rhinoplasty
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/marionette-lines/">
                            Marionette Lines
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/liquid-facelift/">
                            Liquid (Non-Surgical) Facelift
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/weight-loss/">
                            Weight Loss
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/non-surgical/lash-extensions/">
                            Lash Extensions
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/gallery/surgical/">Surgical</Link>
                      <ul className="">
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/surgical/tummy-tuck/">
                            Tummy Tuck
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/surgical/mommy-makeover/">
                            Mommy Makeover
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/surgical/liposuction/">
                            Liposuction
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/surgical/breast-augmentation/">
                            Breast Augmentation
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/gallery/surgical/breast-lift/">
                            Breast Lift
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="partial_nav_item mega-menu" data-s3-partial="">
                  <Link href="/medical-spa/">Medical Spa</Link>
                  <ul className="">
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/injectables/">Injectables</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/botox/">BOTOX</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/dysport/">Dysport</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/dermal-fillers/">
                        Dermal Fillers
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/juvederm/">JUVÉDERM</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/juvederm-volux/">
                        Juvederm Volux
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/restylane/">Restylane</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/restylane-contour/">
                        Restylane Contour
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/cheek-fillers/">
                        Cheek Fillers
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/lines-and-wrinkles/">
                        Lines &amp; Wrinkles
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/lips/">Lip Fillers</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/chin/">Chin Fillers</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/hands/">Hand Rejuvenation</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/liquid-facelift/">
                        Liquid (Non-Surgical) Facelift
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/liquid-non-surgical-rhinoplasty/">
                        Liquid (Non-Surgical) Rhinoplasty
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/skinvive/">SkinVive</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/spa-services/">
                        Spa Services
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/lash-extensions/">
                        Lash Extensions
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/mens-services/">
                        Men's Services
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/micro-channeling/">
                        Micro-Channeling
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/permanent-makeup/">
                        Permanent Makeup
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/diamondglow/">DiamondGlow</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/skin-medica/">SkinMedica</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/skincare-services/">
                        Skincare Services
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/weightloss/">Weight Loss</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/medical-spa/semaglutide-injections/">
                        Semaglutide Injections
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="partial_nav_item" data-s3-partial="">
                  <Link href="/plastic-surgery/">Plastic Surgery</Link>
                  <ul className="">
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/breast/">Breast</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/breast-augmentation/">
                        Breast Augmentation
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/breast-lift/">
                        Breast Lift
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/breast-reduction/">
                        Breast Reduction
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/breast-revision/">
                        Breast Revision
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/body/">Body</Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/liposuction/">
                        Liposuction
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/mommy-makeover/">
                        Mommy Makeover
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/plastic-surgery/tummy-tuck/">
                        Tummy Tuck
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="partial_nav_item" data-s3-partial="">
                  <Link href="/specials-and-rewards/">
                    Specials &amp; Rewards
                  </Link>
                  <ul className="">
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/specials-and-rewards/specials/">
                        Specials
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/specials-and-rewards/alle/">
                        Alle Rewards
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/specials-and-rewards/aspire-rewards/">
                        Aspire Rewards
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/specials-and-rewards/gift-cards/">
                        Gift Cards
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="partial_nav_item" data-s3-partial="">
                  <Link href="/financing/">Financing</Link>
                </li>
                <li className="partial_nav_item" data-s3-partial="">
                  <Link href="/contact/">Contact</Link>
                </li>
                <li className="partial_nav_item" data-s3-partial="">
                  <Link href="/training/">Training</Link>
                  <ul className="">
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/training/training-program-details/">
                        Training Program Details
                      </Link>
                      <ul className="">
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/training/training-program-details/comprehensive-injectables/">
                            Comprehensive Injectables
                          </Link>
                        </li>
                        <li className="partial_nav_item" data-s3-partial="">
                          <Link href="/training/training-program-details/foundational-injectables/">
                            Foundational Injectables
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/training/enrollment-faqs/">
                        Enrollment &amp; FAQs
                      </Link>
                    </li>
                    <li className="partial_nav_item" data-s3-partial="">
                      <Link href="/training/apply-for-your-training-spot-today/">
                        Apply for Your Training Spot Today
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="ignore" role="menuitem">
                  <div className="info">
                    <ul
                      className="partial_socials"
                      data-s3-partial=""
                      role="menu"
                    >
                      <li role="menuitem">
                        <Link
                          rel="noopener"
                          title="Goldfingers Aesthetics on Instagram"
                          href="https://www.instagram.com/goldfingers.aesthetics/"
                          target="_blank"
                          aria-label="Goldfingers Aesthetics on Instagram opens in a new tab"
                        >
                          <span className="instagram-icon" />
                        </Link>
                      </li>
                      <li role="menuitem">
                        <Link
                          rel="noopener"
                          title="Goldfingers Aesthetics on Facebook"
                          href="https://www.facebook.com/goldfingersaesthetics/"
                          target="_blank"
                          aria-label="Goldfingers Aesthetics on Facebook opens in a new tab"
                        >
                          <span className="facebook-icon" />
                        </Link>
                      </li>
                      <li role="menuitem">
                        <Link
                          rel="noopener"
                          title="Goldfingers Aesthetics on Youtube"
                          href="https://www.youtube.com/channel/UCGb3ma3A8U69pmhGnccOtfQ"
                          target="_blank"
                          aria-label="Goldfingers Aesthetics on Youtube opens in a new tab"
                        >
                          <span className="youtube-icon" />
                        </Link>
                      </li>
                    </ul>
                    <p>
                      <Link
                        className="tel ppc-href"
                        href="tel:+14073334300"
                        data-s3-event="Phone - Mobile Nav"
                        role="link"
                        aria-label="Give Goldfingers Aesthetics a phone call"
                      >
                        <span className="ppc-number">(407) 333-4300</span>
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}