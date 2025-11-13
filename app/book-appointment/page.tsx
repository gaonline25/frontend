// // "use client";

// // import React, { useState } from "react";

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     location_id: "",
// //     location_name: "",
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", formData);
// //     // Add your form submission logic here
// //   };

// //   const locations = [
// //     {
// //       id: "68fe385e4e4439389dffb21e",
// //       name: "Clearwater",
// //       phone: "(727) 378-9338",
// //       address: "2745 Fl-580 Suite 101, Clearwater, FL 33761",
// //       style: { left: "53%", top: "45%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb21f",
// //       name: "Clermont",
// //       phone: "(407) 461-8193",
// //       address: "861 Oakley Seaver Dr., Suite B, Clermont, FL 34711",
// //       style: { left: "83%", top: "32%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb220",
// //       name: "Daytona Beach",
// //       phone: "(407) 756-9062",
// //       address: "244 Seabreeze Blvd, Daytona Beach, FL 32118",
// //       style: { left: "99%", top: "17%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb221",
// //       name: "Lady Lake / The Villages",
// //       phone: "(352) 707-0707",
// //       address: "8550 N. East 138th Lane, Bldg 600, Lady Lake, FL 32159",
// //       style: { left: "75%", top: "24%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb222",
// //       name: "Lake Mary",
// //       phone: "(407) 405-3388",
// //       address: "115 International Pkwy Lake Mary, FL 32746",
// //       style: { left: "93%", top: "28%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb223",
// //       name: "Lake Nona",
// //       phone: "(407) 590-6274",
// //       address: "",
// //       style: { left: "90%", top: "31%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb224",
// //       name: "Longwood",
// //       phone: "(407) 492-3169",
// //       address: "165 Wekiva Springs Road, Suite C-135, Longwood, FL 32779",
// //       style: { left: "90%", top: "31%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb225",
// //       name: "Mount Dora",
// //       phone: "(352) 707-0707",
// //       address: "18770 US-441, Mount Dora, FL 32757",
// //       style: { left: "84%", top: "27%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb226",
// //       name: "New Smyrna Beach",
// //       phone: "(407) 547-5891",
// //       address: "State Rd. 44 Unit 1976, New Smyrna Beach, FL 32168",
// //       style: { left: "105%", top: "29%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb227",
// //       name: "Ocala",
// //       phone: "(352) 707-0707",
// //       address: "303 SE 17 Street, Unit 309, Ocala FL 34471",
// //       style: { left: "72%", top: "19%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb228",
// //       name: "Orlando / Dr. Phillips",
// //       phone: "(407) 821-4983",
// //       address: "7653 Turkey Lake Rd., Orlando, FL 32819",
// //       style: { left: "89%", top: "34%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb229",
// //       name: "Port Orange",
// //       phone: "(386) 801-0024",
// //       address: "851 Dunlawton Ave Suite 103, Port Orange, FL 32127",
// //       style: { left: "103%", top: "22%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb22a",
// //       name: "Sarasota",
// //       phone: "941-599-2392",
// //       address: "1407 First St Sarasota, FL 34236",
// //       style: { left: "62.3363%", top: "72.5422%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb22b",
// //       name: "Downtown Tampa",
// //       phone: "(813) 435-3474",
// //       address: "105 E Jackson St, Tampa, FL 33602",
// //       style: { left: "61%", top: "43%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb22c",
// //       name: "St Petersburg",
// //       phone: "(727) 310-5120",
// //       address: "1701 Central Ave N Ste 1739, St. Petersburg, FL 33713",
// //       style: { left: "52.6608%", top: "48.7713%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb22d",
// //       name: "Tampa (Northdale)",
// //       phone: "(813) 435-1585",
// //       address: "3861 Northdale Blvd., Tampa, FL 33624",
// //       style: { left: "61%", top: "43%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb22e",
// //       name: "Downtown Orlando",
// //       phone: "(407) 505-4901",
// //       address: "",
// //       style: { left: "87%", top: "29%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb22f",
// //       name: "Wesley Chapel",
// //       phone: "(813) 230-3778",
// //       address: "",
// //       style: { left: "87%", top: "29%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb230",
// //       name: "Winter Garden",
// //       phone: "407-403-1232",
// //       address: "",
// //       style: { left: "87%", top: "29%" },
// //     },
// //     {
// //       id: "68fe385e4e4439389dffb231",
// //       name: "Winter Park",
// //       phone: "(407) 462-4405",
// //       address: "400 W Fairbanks Ave, Winter Park, FL 32789",
// //       style: { left: "87%", top: "29%" },
// //     },
// //   ];

// //   return (
// //     <main id="main">
// //       <div
// //         className="mod_contact banner stack phone-background"
// //         style={{ backgroundColor: "#ffffff" }}
// //       >
// //         <div className="row">
// //           <section className="info">
// //             <h1 style={{ color: "#000000" }}>Book Appointment</h1>
// //             <div className="phone">
// //               <a
// //                 className="tel ppc-href"
// //                 href="tel:4073334300"
// //                 style={{ color: "#000000" }}
// //               >
// //                 {/* <span className="ppc-number">(407) 333-4300</span> */}
// //               </a>
// //             </div>
// //             {/* <a
// //               className="btn"
// //               href="/specials-and-rewards/specials/"
// //               style={{ backgroundColor: "#000000", color: "#ffffff" }}
// //             >
// //               Specials
// //             </a> */}
// //           </section>

// //           <section className="content">
// //             <div className="partial_form">
// //               <form
// //                 id="form_contact"
// //                 className="s3-form"
// //                 onSubmit={handleSubmit}
// //               >
// //                 <div className="fields">
// //                   <div className="field-row col1">
// //                     <div className="field select">
// //                       <label htmlFor="contact_location_id">Location*</label>
// //                       <small>This field is required.</small>
// //                       <select
// //                         name="location_id"
// //                         id="contact_location_id"
// //                         required
// //                         value={formData.location_id}
// //                         onChange={handleInputChange}
// //                       >
// //                         <option value="" disabled>
// //                           Location*
// //                         </option>
// //                         {locations.map((location) => (
// //                           <option key={location.id} value={location.id}>
// //                             {location.name}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <input
// //                     type="hidden"
// //                     name="location_name"
// //                     value={formData.location_name}
// //                   />

// //                   {/* <div className="field-row col1">
// //                     <div className="section-label follow-up">
// //                       <p>
// //                         <a href="https://goldfingersaesthetics.com">
// //                           Goldfingers Aesthetics
// //                         </a>
// //                       </p>
// //                     </div>
// //                   </div> */}
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="submit btn"
// //                   style={{ backgroundColor: "#000000", color: "#ffffff" }}
// //                 >
// //                   Submit
// //                 </button>
// //               </form>
// //             </div>
// //           </section>
// //         </div>

// //         <picture className="background desktop">
// //           <img
// //             src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491126/payload-media/1694100140-mobile-contact-page-bgd.avif"
// //             alt="1694100140-mobile-contact-page-bgd.avif"
// //             draggable="false"
// //           />
// //         </picture>

// //         <picture className="background phone">
// //           <img
// //             src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491126/payload-media/1694100140-mobile-contact-page-bgd.avif"
// //             alt="1694100140-mobile-contact-page-bgd.avif"
// //             draggable="false"
// //           />
// //         </picture>
// //       </div>

// //       {/* <div
// //         className="mod_locations_banner container viewport"
// //         style={{ backgroundColor: "#ffffff" }}
// //       >
// //         <div
// //           className="row wow fadeIn has-phone-list"
// //           data-wow-duration="2s"
// //           style={{ visibility: "visible" }}
// //         >
// //           <div className="inner">
// //             <div className="content">
// //               <h2 style={{ color: "#000000" }}>
// //                 <span className="small">Our Locations</span>
// //                 Find the Goldfingers Aesthetics Location Closest to You
// //               </h2>

// //               <div className="phone-list">
// //                 {locations.map((location) => (
// //                   <div key={location.id} className="inner-list">
// //                     <p>{location.name}</p>
// //                     <a
// //                       className="tel ppc-href"
// //                       href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
// //                       aria-label={`Call ${location.name}`}
// //                     >
// //                       <span className="ppc-number">{location.phone}</span>
// //                     </a>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="locations">
// //               {locations.map((location) => (
// //                 <span
// //                   key={location.id}
// //                   className="location"
// //                   style={location.style}
// //                 >
// //                   <a
// //                     className="pin-link"
// //                     aria-label={`${location.name} pin on map`}
// //                     href={`/${location.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "")}/`}
// //                   >
// //                     <span className="pin"></span>
// //                   </a>
// //                   <span className="tip">
// //                     <span className="info">
// //                       <h3>{location.name}</h3>
// //                       <hr />
// //                       {location.address && (
// //                         <span className="address">
// //                           <p>{location.address}</p>
// //                         </span>
// //                       )}
// //                       <a
// //                         className="tel ppc-href"
// //                         href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
// //                       >
// //                         <span className="ppc-number">{location.phone}</span>
// //                       </a>
// //                     </span>
// //                   </span>
// //                 </span>
// //               ))}
// //             </div>
// //           </div>

// //           <picture className="background">
// //             <img
// //               src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491149/payload-media/1693509356-12.avif"
// //               alt="1693509356-12.avif"
// //               draggable="false"
// //             />
// //           </picture>
// //         </div>
// //       </div> */}
// //     </main>
// //   );
// // }

// import React, { useState } from 'react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     location_id: '',
//     location_name: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Find the selected location
//     const selectedLocation = locations.find(loc => loc.id === formData.location_id);

//     if (selectedLocation && selectedLocation.url) {
//       // Redirect to the location's URL
//       window.location.href = selectedLocation.url;
//     } else {
//       console.log('Please select a location');
//     }
//   };

//   const locations = [
//     { id: '68fe385e4e4439389dffb21e', name: 'Clearwater', phone: '(727) 378-9338', address: '2745 Fl-580 Suite 101, Clearwater, FL 33761', style: {left: '53%', top: '45%'}, url: 'https://www.vagaro.com/goldfingersaestheticsclearwater' },
//     { id: '68fe385e4e4439389dffb21f', name: 'Clermont', phone: '(407) 461-8193', address: '861 Oakley Seaver Dr., Suite B, Clermont, FL 34711', style: {left: '83%', top: '32%'}, url: 'https://www.vagaro.com/goldfingersaestheticsclermont' },
//     { id: '68fe385e4e4439389dffb220', name: 'Daytona Beach', phone: '(407) 756-9062', address: '244 Seabreeze Blvd, Daytona Beach, FL 32118', style: {left: '99%', top: '17%'}, url: 'https://www.vagaro.com/goldfingersaestheticsdaytona' },
//     { id: '68fe385e4e4439389dffb221', name: 'Lady Lake / The Villages', phone: '(352) 707-0707', address: '8550 N. East 138th Lane, Bldg 600, Lady Lake, FL 32159', style: {left: '75%', top: '24%'}, url: 'https://www.vagaro.com/goldfingersaestheticsvillages' },
//     { id: '68fe385e4e4439389dffb222', name: 'Lake Mary', phone: '(407) 405-3388', address: '115 International Pkwy Lake Mary, FL 32746', style: {left: '93%', top: '28%'}, url: 'https://www.vagaro.com/goldfingersaestheticslakemary' },
//     { id: '68fe385e4e4439389dffb223', name: 'Lake Nona', phone: '(407) 590-6274', address: '', style: {left: '90%', top: '31%'}, url: 'https://www.vagaro.com/goldfingersaestheticslakenona' },
//     { id: '68fe385e4e4439389dffb224', name: 'Longwood', phone: '(407) 492-3169', address: '165 Wekiva Springs Road, Suite C-135, Longwood, FL 32779', style: {left: '90%', top: '31%'}, url: 'https://www.vagaro.com/goldfingersaestheticslongwood' },
//     { id: '68fe385e4e4439389dffb225', name: 'Mount Dora', phone: '(352) 707-0707', address: '18770 US-441, Mount Dora, FL 32757', style: {left: '84%', top: '27%'}, url: 'https://www.vagaro.com/goldfingersaestheticsmtdora' },
//     { id: '68fe385e4e4439389dffb226', name: 'New Smyrna Beach', phone: '(407) 547-5891', address: 'State Rd. 44 Unit 1976, New Smyrna Beach, FL 32168', style: {left: '105%', top: '29%'}, url: 'https://www.vagaro.com/goldfingersaestheticsnewsmyrnabeach' },
//     { id: '68fe385e4e4439389dffb227', name: 'Ocala', phone: '(352) 707-0707', address: '303 SE 17 Street, Unit 309, Ocala FL 34471', style: {left: '72%', top: '19%'}, url: 'https://www.vagaro.com/goldfingersaestheticsocala' },
//     { id: '68fe385e4e4439389dffb228', name: 'Orlando / Dr. Phillips', phone: '(407) 821-4983', address: '7653 Turkey Lake Rd., Orlando, FL 32819', style: {left: '89%', top: '34%'}, url: 'https://www.goldfingersaesthetics.com/orlando/' },
//     { id: '68fe385e4e4439389dffb229', name: 'Port Orange', phone: '(386) 801-0024', address: '851 Dunlawton Ave Suite 103, Port Orange, FL 32127', style: {left: '103%', top: '22%'}, url: 'https://www.vagaro.com/goldfingersaestheticsportorange' },
//     { id: '68fe385e4e4439389dffb22a', name: 'Sarasota', phone: '941-599-2392', address: '1407 First St Sarasota, FL 34236', style: {left: '62.3363%', top: '72.5422%'}, url: 'https://www.vagaro.com/goldfingersaestheticssarasota' },
//     { id: '68fe385e4e4439389dffb22b', name: 'Downtown Tampa', phone: '(813) 435-3474', address: '105 E Jackson St, Tampa, FL 33602', style: {left: '61%', top: '43%'}, url: 'https://www.vagaro.com/goldfingersaestheticsdowntowntampa' },
//     { id: '68fe385e4e4439389dffb22c', name: 'St Petersburg', phone: '(727) 310-5120', address: '1701 Central Ave N Ste 1739, St. Petersburg, FL 33713', style: {left: '52.6608%', top: '48.7713%'}, url: 'https://www.vagaro.com/goldfingersaestheticsstpetersburg' },
//     { id: '68fe385e4e4439389dffb22d', name: 'Tampa (Northdale)', phone: '(813) 435-1585', address: '3861 Northdale Blvd., Tampa, FL 33624', style: {left: '61%', top: '43%'}, url: 'https://www.vagaro.com/goldfigersaestheticstampa' },
//     { id: '68fe385e4e4439389dffb22e', name: 'Downtown Orlando', phone: '(407) 505-4901', address: '', style: {left: '87%', top: '29%'}, url: 'https://www.goldfingersaesthetics.com/downtown-orlando/' },
//     { id: '68fe385e4e4439389dffb22f', name: 'Wesley Chapel', phone: '(813) 230-3778', address: '', style: {left: '87%', top: '29%'}, url: 'https://www.vagaro.com/goldfingersaestheticswesleychapel' },
//     { id: '68fe385e4e4439389dffb230', name: 'Winter Garden', phone: '407-403-1232', address: '', style: {left: '87%', top: '29%'}, url: 'https://www.vagaro.com/goldfingersaestheticswintergarden' },
//     { id: '68fe385e4e4439389dffb231', name: 'Winter Park', phone: '(407) 462-4405', address: '400 W Fairbanks Ave, Winter Park, FL 32789', style: {left: '87%', top: '29%'}, url: 'https://www.vagaro.com/goldfingersaestheticswinterpark' }
//   ];

//   return (
//     <main id="main">
//       <div className="mod_contact banner stack phone-background" style={{backgroundColor: '#ffffff'}}>
//         <div className="row">
//           <section className="info">
//             <h1 style={{color: '#000000'}}>Contact Us</h1>
//             <div className="phone">
//               <a className="tel ppc-href" href="tel:4073334300" style={{color: '#000000'}}>
//                 <span className="ppc-number">(407) 333-4300</span>
//               </a>
//             </div>
//             <a className="btn" href="/specials-and-rewards/specials/" style={{backgroundColor: '#000000', color: '#ffffff'}}>
//               Specials
//             </a>
//           </section>

//           <section className="content" style={{backgroundColor: '#f9f9f9'}}>
//             <div className="partial_form">
//               <form id="form_contact" className="s3-form" onSubmit={handleSubmit}>
//                 <div className="fields">
//                   <div className="field-row col1">
//                     <div className="field select">
//                       <label htmlFor="contact_location_id">Location*</label>
//                       <small>This field is required.</small>
//                       <select
//                         name="location_id"
//                         id="contact_location_id"
//                         required
//                         value={formData.location_id}
//                         onChange={handleInputChange}
//                       >
//                         <option value="" disabled>Location*</option>
//                         {locations.map(location => (
//                           <option key={location.id} value={location.id}>
//                             {location.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <input type="hidden" name="location_name" value={formData.location_name} />

//                   <div className="field-row col1">
//                     <div className="section-label follow-up">
//                       <p><a href="https://goldfingersaesthetics.com">Goldfingers Aesthetics</a></p>
//                     </div>
//                   </div>
//                 </div>

//                 <button type="submit" className="submit btn" style={{backgroundColor: '#000000', color: '#ffffff'}}>
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </section>
//         </div>

//         <picture className="background desktop">
//           <img
//             src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491126/payload-media/1694100140-mobile-contact-page-bgd.avif"
//             alt="1694100140-mobile-contact-page-bgd.avif"
//             draggable="false"
//           />
//         </picture>

//         <picture className="background phone">
//           <img
//             src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491126/payload-media/1694100140-mobile-contact-page-bgd.avif"
//             alt="1694100140-mobile-contact-page-bgd.avif"
//             draggable="false"
//           />
//         </picture>
//       </div>

//       <div className="mod_locations_banner container viewport" style={{backgroundColor: '#ffffff'}}>
//         <div className="row wow fadeIn has-phone-list" data-wow-duration="2s" style={{visibility: 'visible'}}>
//           <div className="inner">
//             <div className="content">
//               <h2 style={{color: '#000000'}}>
//                 <span className="small">Our Locations</span>
//                 Find the Goldfingers Aesthetics Location Closest to You
//               </h2>

//               <div className="phone-list">
//                 {locations.map(location => (
//                   <div key={location.id} className="inner-list">
//                     <p>{location.name}</p>
//                     <a
//                       className="tel ppc-href"
//                       href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
//                       aria-label={`Call ${location.name}`}
//                     >
//                       <span className="ppc-number">{location.phone}</span>
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="locations">
//               {locations.map(location => (
//                 <span key={location.id} className="location" style={location.style}>
//                   <a
//                     className="pin-link"
//                     aria-label={`${location.name} pin on map`}
//                     href={`/${location.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '')}/`}
//                   >
//                     <span className="pin"></span>
//                   </a>
//                   <span className="tip">
//                     <span className="info">
//                       <h3>{location.name}</h3>
//                       <hr />
//                       {location.address && (
//                         <span className="address">
//                           <p>{location.address}</p>
//                         </span>
//                       )}
//                       <a
//                         className="tel ppc-href"
//                         href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
//                       >
//                         <span className="ppc-number">{location.phone}</span>
//                       </a>
//                     </span>
//                   </span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           <picture className="background">
//             <img
//               src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491149/payload-media/1693509356-12.avif"
//               alt="1693509356-12.avif"
//               draggable="false"
//             />
//           </picture>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    location_id: "",
    location_name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Redirect immediately when location is selected
    if (name === "location_id" && value) {
      const selectedLocation = locations.find((loc) => loc.id === value);
      if (selectedLocation && selectedLocation.url) {
        window.location.href = selectedLocation.url;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the selected location
    const selectedLocation = locations.find(
      (loc) => loc.id === formData.location_id
    );

    if (selectedLocation && selectedLocation.url) {
      // Redirect to the location's URL
      window.location.href = selectedLocation.url;
    } else {
      console.log("Please select a location");
    }
  };

  const locations = [
    {
      id: "68fe385e4e4439389dffb21e",
      name: "Clearwater",
      phone: "(727) 378-9338",
      address: "2745 Fl-580 Suite 101, Clearwater, FL 33761",
      style: { left: "53%", top: "45%" },
      url: "https://www.vagaro.com/goldfingersaestheticsclearwater",
    },
    {
      id: "68fe385e4e4439389dffb21f",
      name: "Clermont",
      phone: "(407) 461-8193",
      address: "861 Oakley Seaver Dr., Suite B, Clermont, FL 34711",
      style: { left: "83%", top: "32%" },
      url: "https://www.vagaro.com/goldfingersaestheticsclermont",
    },
    {
      id: "68fe385e4e4439389dffb220",
      name: "Daytona Beach",
      phone: "(407) 756-9062",
      address: "244 Seabreeze Blvd, Daytona Beach, FL 32118",
      style: { left: "99%", top: "17%" },
      url: "https://www.vagaro.com/goldfingersaestheticsdaytona",
    },
    {
      id: "68fe385e4e4439389dffb221",
      name: "Lady Lake / The Villages",
      phone: "(352) 707-0707",
      address: "8550 N. East 138th Lane, Bldg 600, Lady Lake, FL 32159",
      style: { left: "75%", top: "24%" },
      url: "https://www.vagaro.com/goldfingersaestheticsvillages",
    },
    {
      id: "68fe385e4e4439389dffb222",
      name: "Lake Mary",
      phone: "(407) 405-3388",
      address: "115 International Pkwy Lake Mary, FL 32746",
      style: { left: "93%", top: "28%" },
      url: "https://www.vagaro.com/goldfingersaestheticslakemary",
    },
    {
      id: "68fe385e4e4439389dffb223",
      name: "Lake Nona",
      phone: "(407) 590-6274",
      address: "",
      style: { left: "90%", top: "31%" },
      url: "https://www.vagaro.com/goldfingersaestheticslakenona",
    },
    {
      id: "68fe385e4e4439389dffb224",
      name: "Longwood",
      phone: "(407) 492-3169",
      address: "165 Wekiva Springs Road, Suite C-135, Longwood, FL 32779",
      style: { left: "90%", top: "31%" },
      url: "https://www.vagaro.com/goldfingersaestheticslongwood",
    },
    {
      id: "68fe385e4e4439389dffb225",
      name: "Mount Dora",
      phone: "(352) 707-0707",
      address: "18770 US-441, Mount Dora, FL 32757",
      style: { left: "84%", top: "27%" },
      url: "https://www.vagaro.com/goldfingersaestheticsmtdora",
    },
    {
      id: "68fe385e4e4439389dffb226",
      name: "New Smyrna Beach",
      phone: "(407) 547-5891",
      address: "State Rd. 44 Unit 1976, New Smyrna Beach, FL 32168",
      style: { left: "105%", top: "29%" },
      url: "https://www.vagaro.com/goldfingersaestheticsnewsmyrnabeach",
    },
    {
      id: "68fe385e4e4439389dffb227",
      name: "Ocala",
      phone: "(352) 707-0707",
      address: "303 SE 17 Street, Unit 309, Ocala FL 34471",
      style: { left: "72%", top: "19%" },
      url: "https://www.vagaro.com/goldfingersaestheticsocala",
    },
    {
      id: "68fe385e4e4439389dffb228",
      name: "Orlando / Dr. Phillips",
      phone: "(407) 821-4983",
      address: "7653 Turkey Lake Rd., Orlando, FL 32819",
      style: { left: "89%", top: "34%" },
      url: "https://www.goldfingersaesthetics.com/orlando/",
    },
    {
      id: "68fe385e4e4439389dffb229",
      name: "Port Orange",
      phone: "(386) 801-0024",
      address: "851 Dunlawton Ave Suite 103, Port Orange, FL 32127",
      style: { left: "103%", top: "22%" },
      url: "https://www.vagaro.com/goldfingersaestheticsportorange",
    },
    {
      id: "68fe385e4e4439389dffb22a",
      name: "Sarasota",
      phone: "941-599-2392",
      address: "1407 First St Sarasota, FL 34236",
      style: { left: "62.3363%", top: "72.5422%" },
      url: "https://www.vagaro.com/goldfingersaestheticssarasota",
    },
    {
      id: "68fe385e4e4439389dffb22b",
      name: "Downtown Tampa",
      phone: "(813) 435-3474",
      address: "105 E Jackson St, Tampa, FL 33602",
      style: { left: "61%", top: "43%" },
      url: "https://www.vagaro.com/goldfingersaestheticsdowntowntampa",
    },
    {
      id: "68fe385e4e4439389dffb22c",
      name: "St Petersburg",
      phone: "(727) 310-5120",
      address: "1701 Central Ave N Ste 1739, St. Petersburg, FL 33713",
      style: { left: "52.6608%", top: "48.7713%" },
      url: "https://www.vagaro.com/goldfingersaestheticsstpetersburg",
    },
    {
      id: "68fe385e4e4439389dffb22d",
      name: "Tampa (Northdale)",
      phone: "(813) 435-1585",
      address: "3861 Northdale Blvd., Tampa, FL 33624",
      style: { left: "61%", top: "43%" },
      url: "https://www.vagaro.com/goldfigersaestheticstampa",
    },
    {
      id: "68fe385e4e4439389dffb22e",
      name: "Downtown Orlando",
      phone: "(407) 505-4901",
      address: "",
      style: { left: "87%", top: "29%" },
      url: "https://www.goldfingersaesthetics.com/downtown-orlando/",
    },
    {
      id: "68fe385e4e4439389dffb22f",
      name: "Wesley Chapel",
      phone: "(813) 230-3778",
      address: "",
      style: { left: "87%", top: "29%" },
      url: "https://www.vagaro.com/goldfingersaestheticswesleychapel",
    },
    {
      id: "68fe385e4e4439389dffb230",
      name: "Winter Garden",
      phone: "407-403-1232",
      address: "",
      style: { left: "87%", top: "29%" },
      url: "https://www.vagaro.com/goldfingersaestheticswintergarden",
    },
    {
      id: "68fe385e4e4439389dffb231",
      name: "Winter Park",
      phone: "(407) 462-4405",
      address: "400 W Fairbanks Ave, Winter Park, FL 32789",
      style: { left: "87%", top: "29%" },
      url: "https://www.vagaro.com/goldfingersaestheticswinterpark",
    },
  ];

  return (
    <main id="main">
      <div
        className="mod_contact banner stack phone-background"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="row">
          <section className="info">
            <h1 style={{ color: "#000000" }}>Book Appointment</h1>
            <div className="phone">
              <a
                className="tel ppc-href"
                href="tel:4073334300"
                style={{ color: "#000000" }}
              >
                {/* <span className="ppc-number">(407) 333-4300</span> */}
              </a>
            </div>
            {/* <a
              className="btn"
              href="/specials-and-rewards/specials/"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              Specials
            </a> */}
          </section>

          <section className="content">
            <div className="partial_form">
              <form
                id="form_contact"
                className="s3-form"
                onSubmit={handleSubmit}
              >
                <div className="fields">
                  <div className="field-row col1">
                    <div className="field select">
                      <label htmlFor="contact_location_id">Location*</label>
                      <small>This field is required.</small>
                      <select
                        name="location_id"
                        id="contact_location_id"
                        required
                        value={formData.location_id}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Location*
                        </option>
                        {locations.map((location) => (
                          <option key={location.id} value={location.id}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <input
                    type="hidden"
                    name="location_name"
                    value={formData.location_name}
                  />

                  <div className="field-row col1">
                    <div className="section-label follow-up">
                      <p>
                        <a>
                          Please select a location
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* <button
                  type="submit"
                  className="submit btn"
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                  disabled={!formData.location_id}
                >
                  Submit
                </button> */}
              </form>
            </div>
          </section>
        </div>

        <picture className="background desktop">
          <img
            src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491126/payload-media/1694100140-mobile-contact-page-bgd.avif"
            alt="1694100140-mobile-contact-page-bgd.avif"
            draggable="false"
          />
        </picture>

        <picture className="background phone">
          <img
            src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491126/payload-media/1694100140-mobile-contact-page-bgd.avif"
            alt="1694100140-mobile-contact-page-bgd.avif"
            draggable="false"
          />
        </picture>
      </div>

      {/* <div
        className="mod_locations_banner container viewport"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="row wow fadeIn has-phone-list"
          data-wow-duration="2s"
          style={{ visibility: "visible" }}
        >
          <div className="inner">
            <div className="content">
              <h2 style={{ color: "#000000" }}>
                <span className="small">Our Locations</span>
                Find the Goldfingers Aesthetics Location Closest to You
              </h2>

              <div className="phone-list">
                {locations.map((location) => (
                  <div key={location.id} className="inner-list">
                    <p>{location.name}</p>
                    <a
                      className="tel ppc-href"
                      href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                      aria-label={`Call ${location.name}`}
                    >
                      <span className="ppc-number">{location.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="locations">
              {locations.map((location) => (
                <span
                  key={location.id}
                  className="location"
                  style={location.style}
                >
                  <a
                    className="pin-link"
                    aria-label={`${location.name} pin on map`}
                    href={`/${location.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "")}/`}
                  >
                    <span className="pin"></span>
                  </a>
                  <span className="tip">
                    <span className="info">
                      <h3>{location.name}</h3>
                      <hr />
                      {location.address && (
                        <span className="address">
                          <p>{location.address}</p>
                        </span>
                      )}
                      <a
                        className="tel ppc-href"
                        href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                      >
                        <span className="ppc-number">{location.phone}</span>
                      </a>
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </div>

          <picture className="background">
            <img
              src="https://res.cloudinary.com/dq0bv42no/image/upload/v1761491149/payload-media/1693509356-12.avif"
              alt="1693509356-12.avif"
              draggable="false"
            />
          </picture>
        </div>
      </div> */}
    </main>
  );
}