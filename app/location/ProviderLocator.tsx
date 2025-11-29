// "use client";

// import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
// import { useLoadGoogleMaps } from "@/hooks/useLoadGoogleMaps";
// import dynamic from "next/dynamic";

// // Types
// interface Coordinates {
//   lat: number;
//   lng: number;
// }

// interface Reviews {
//   rating: number;
//   count: number;
// }

// interface Location {
//   id: string;
//   name: string;
//   image: string;
//   phone: string;
//   alt: string;
//   address: string;
//   coordinates: Coordinates;
//   reviews: Reviews;
//   slug: string;
//   googleMaps: string;
//   distance?: string;
// }

// interface Provider {
//   id: string;
//   name: string;
//   title: string;
//   image: string;
//   backgroundImage: string;
//   distance: string;
//   locationName: string;
//   address: string;
//   phone: string;
//   coordinates: Coordinates;
//   reviews: Reviews;
//   slug: string;
//   bio: string;
//   specialties: string[];
//   education: string[];
//   certifications: string[];
//   languages: string[];
//   googleMaps: string;
//   primaryLocationId: string;
//   additionalLocationIds: string[];
// }

// // Separate map component for better code splitting
// const MapSection = dynamic(() => Promise.resolve(({ mapRef }: { mapRef: React.RefObject<HTMLDivElement> }) => (
//   <section className="map-section" style={{ overflow: "hidden" }}>
//     <div
//       ref={mapRef}
//       style={{
//         height: "100%",
//         width: "100%",
//         position: "absolute",
//         top: "0px",
//         left: "0px",
//       }}
//     ></div>
//   </section>
// )), { ssr: false });

// const ProviderLocator = () => {
//   const googleLoaded = useLoadGoogleMaps(
//     "AIzaSyCcWunoBpxSOoSPvplvrAzIaTh9pI6QfdU"
//   );

//   const mapRef = useRef<HTMLDivElement>(null);
//   const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
//   const [activeTab, setActiveTab] = useState(() => {
//     if (typeof window !== "undefined") {
//       const searchParams = new URLSearchParams(window.location.search);
//       const tab = searchParams.get("tab");
//       return tab === "providers" ? "providers" : "locations";
//     }
//     return "locations";
//   });
//   const [view, setView] = useState("list");
//   const [selectedItem, setSelectedItem] = useState<Location | Provider | null>(null);
//   const [locations, setLocations] = useState<Location[]>([]);
//   const [providers, setProviders] = useState<Provider[]>([]);
//   const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
//   const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
//   const [isLocating, setIsLocating] = useState(false);
//   const contentBodyRef = useRef<HTMLDivElement>(null);
//   const scrollbarHandleRef = useRef<HTMLDivElement>(null);
//   const mapInitializedRef = useRef(false);

//   // Memoized API URLs
//   const API_BASE_URL = useMemo(() =>
//     process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend-orpin-six-56.vercel.app/api"
//   , []);

//   // Handle URL changes
//   useEffect(() => {
//     const handleUrlChange = () => {
//       const searchParams = new URLSearchParams(window.location.search);
//       const tab = searchParams.get("tab");
//       setActiveTab(tab === "providers" ? "providers" : "locations");
//     };

//     handleUrlChange();
//     window.addEventListener("popstate", handleUrlChange);

//     return () => {
//       window.removeEventListener("popstate", handleUrlChange);
//     };
//   }, []);

//   // Fetch data with error handling and caching
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const controller = new AbortController();
//         const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

//         const [locationsRes, providersRes] = await Promise.all([
//           fetch(`${API_BASE_URL}/locations?depth=2&limit=1000`, {
//             signal: controller.signal,
//             next: { revalidate: 3600 } // Cache for 1 hour
//           }),
//           fetch(`${API_BASE_URL}/providers?depth=2&limit=1000`, {
//             signal: controller.signal,
//             next: { revalidate: 3600 }
//           }),
//         ]);

//         clearTimeout(timeoutId);

//         if (!locationsRes.ok || !providersRes.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const [locationsData, providersData] = await Promise.all([
//           locationsRes.json(),
//           providersRes.json(),
//         ]);

//         const transformedLocations = locationsData.docs.map((loc: any) => {
//           let imageUrl = "";
//           if (typeof loc.image === "object" && loc.image !== null) {
//             imageUrl = loc.image.cloudinary_url || loc.image.url || "";
//           } else if (typeof loc.image === "string") {
//             imageUrl = loc.image;
//           }

//           return {
//             id: loc.id,
//             name: loc.name,
//             image: imageUrl,
//             phone: loc.phone,
//             alt: loc.alt,
//             address: loc.address,
//             coordinates: loc.coordinates,
//             reviews: loc.reviews,
//             slug: loc.slug,
//             googleMaps: loc.googleMaps || "",
//           };
//         });

//         const transformedProviders = providersData.docs.map((provider: any) => {
//           const primaryLoc =
//             typeof provider.primaryLocation === "object"
//               ? provider.primaryLocation
//               : null;

//           let imageUrl = "";
//           if (provider.image) {
//             if (typeof provider.image === "object") {
//               imageUrl =
//                 provider.image.cloudinary_url || provider.image.url || "";
//             } else {
//               imageUrl = provider.image;
//             }
//           }

//           let bgImageUrl = "";
//           if (provider.backgroundImage) {
//             if (typeof provider.backgroundImage === "object") {
//               bgImageUrl =
//                 provider.backgroundImage.cloudinary_url ||
//                 provider.backgroundImage.url ||
//                 "";
//             } else {
//               bgImageUrl = provider.backgroundImage;
//             }
//           }

//           let additionalLocationIds: string[] = [];
//           if (
//             provider.additionalLocations &&
//             Array.isArray(provider.additionalLocations)
//           ) {
//             additionalLocationIds = provider.additionalLocations.map(
//               (loc: any) => (typeof loc === "object" ? loc.id : loc)
//             );
//           }

//           return {
//             id: provider.id,
//             name: provider.name,
//             title: provider.title,
//             image: imageUrl,
//             backgroundImage: bgImageUrl,
//             distance: "",
//             locationName: primaryLoc?.name || "",
//             address: primaryLoc?.address || "",
//             phone: primaryLoc?.phone || "",
//             coordinates: primaryLoc?.coordinates,
//             reviews: provider.reviews,
//             slug: provider.slug,
//             bio: provider.bio,
//             specialties: provider.specialties,
//             education: provider.education,
//             certifications: provider.certifications,
//             languages: provider.languages,
//             googleMaps: provider.googleMaps || "",
//             primaryLocationId:
//               typeof provider.primaryLocation === "object"
//                 ? provider.primaryLocation.id
//                 : provider.primaryLocation,
//             additionalLocationIds: additionalLocationIds,
//           };
//         });

//         setLocations(transformedLocations);
//         setProviders(transformedProviders);
//         setFilteredLocations(transformedLocations);
//         setFilteredProviders(transformedProviders);
//       } catch (error: any) {
//         console.error("Error fetching data:", error);
//         setError(error.name === 'AbortError' ? "Request timeout. Please try again." : "Failed to load data. Please refresh the page.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [API_BASE_URL]);

//   // Filter locations and providers based on search query
//   useEffect(() => {
//     if (activeTab === "locations") {
//       if (searchQuery.trim() === "") {
//         setFilteredLocations(locations);
//       } else {
//         const filtered = locations.filter(
//           (location) =>
//             location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             location.address.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredLocations(filtered);
//       }
//     } else if (activeTab === "providers") {
//       if (searchQuery.trim() === "") {
//         setFilteredProviders(providers);
//       } else {
//         const filtered = providers.filter(
//           (provider) =>
//             provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             provider.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             provider.locationName
//               .toLowerCase()
//               .includes(searchQuery.toLowerCase())
//         );
//         setFilteredProviders(filtered);
//       }
//     }
//   }, [searchQuery, locations, providers, activeTab]);

//   // Initialize Google Map with retry logic
//   // useEffect(() => {
//   //   if (!googleLoaded || map || !mapRef.current || mapInitializedRef.current) return;

//   //   const initMap = () => {
//   //     try {
//   //       if (!window.google || !window.google.maps) {
//   //         console.error("Google Maps not loaded");
//   //         return;
//   //       }

//   //       const mapInstance = new window.google.maps.Map(mapRef.current!, {
//   //         center: { lat: 28.2898, lng: -85.5713 },
//   //         zoom: 7,
//   //         mapTypeId: "roadmap",
//   //         streetViewControl: false,
//   //         fullscreenControl: false,
//   //         gestureHandling: "greedy",
//   //       });

//   //       setMap(mapInstance);
//   //       mapInitializedRef.current = true;
//   //     } catch (error) {
//   //       console.error("Map init failed:", error);
//   //       // Retry after 1 second
//   //       setTimeout(initMap, 1000);
//   //     }
//   //   };

//   //   initMap();
//   // }, [googleLoaded, map]);

//   // useEffect(() => {
//   //   if (
//   //     loading ||
//   //     !googleLoaded ||
//   //     map ||
//   //     !mapRef.current ||
//   //     mapInitializedRef.current
//   //   ) {
//   //     return;
//   //   }

//   //   const initializeMap = () => {
//   //     if (!window.google || !window.google.maps || !mapRef.current) {
//   //       // Retry if not ready yet
//   //       setTimeout(initializeMap, 300);
//   //       return;
//   //     }

//   //     // Ensure the container has dimensions
//   //     const rect = mapRef.current.getBoundingClientRect();
//   //     if (rect.width === 0 || rect.height === 0) {
//   //       requestAnimationFrame(initializeMap);
//   //       return;
//   //     }

//   //     try {
//   //       const mapInstance = new window.google.maps.Map(mapRef.current, {
//   //         center: { lat: 28.5383, lng: -81.3792 },
//   //         zoom: 7,
//   //         mapTypeId: "roadmap",
//   //         streetViewControl: false,
//   //         fullscreenControl: false,
//   //         gestureHandling: "greedy",
//   //         backgroundColor: "#f8f8f8", // prevent white flash
//   //       });

//   //       setMap(mapInstance);
//   //       mapInitializedRef.current = true;
//   //       console.log("✅ Google Map initialized successfully");
//   //     } catch (err) {
//   //       console.error("❌ Map init failed, retrying:", err);
//   //       setTimeout(initializeMap, 500);
//   //     }
//   //   };

//   //   // Delay slightly to allow paint
//   //   requestAnimationFrame(() => {
//   //     initializeMap();
//   //   });
//   // }, [googleLoaded, map, loading]);

//   useEffect(() => {
//     if (loading || !googleLoaded || mapInitializedRef.current) return;

//     const attemptInit = () => {
//       if (!window.google?.maps) {
//         console.warn("🕐 Google Maps still not ready, retrying...");
//         setTimeout(attemptInit, 200);
//         return;
//       }

//       if (!mapRef.current) {
//         console.warn("🕐 Map div not yet attached, retrying...");
//         setTimeout(attemptInit, 200);
//         return;
//       }

//       const rect = mapRef.current.getBoundingClientRect();
//       if (rect.width === 0 || rect.height === 0) {
//         console.warn("🕐 Map div has no size yet, waiting for layout...");
//         requestAnimationFrame(attemptInit);
//         return;
//       }

//       try {
//         const mapInstance = new window.google.maps.Map(mapRef.current, {
//           center: { lat: 28.5383, lng: -81.3792 },
//           zoom: 7,
//           mapId: "8498c1d922ec81ce59cf54f5",
//           streetViewControl: false,
//           fullscreenControl: false,
//           gestureHandling: "greedy",
//           backgroundColor: "#f8f8f8",
//         });

//         setMap(mapInstance);
//         mapInitializedRef.current = true;
//         console.log("✅ Google Map initialized successfully");
//       } catch (err) {
//         console.error("❌ Map initialization error:", err);
//         setTimeout(attemptInit, 300);
//       }
//     };

//     attemptInit();
//   }, [googleLoaded, loading]);

//   // Add markers to map (optimized)
//   useEffect(() => {
//     if (!map || !window.google || (!locations.length && !providers.length))
//       return;

//     // Clear existing markers
//     markers.forEach((marker) => marker.setMap(null));
//     const newMarkers: google.maps.Marker[] = [];

//     const addMarker = (item: Location | Provider, isProvider = false) => {
//       if (!item.coordinates?.lat || !item.coordinates?.lng) return;

//       const marker = new window.google.maps.Marker({
//         position: { lat: item.coordinates.lat, lng: item.coordinates.lng },
//         map,
//         title: item.name,
//         icon: isProvider
//           ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
//           : undefined,
//         optimized: true, // Performance optimization
//       });

//       marker.addListener("click", () => {
//         handleQuickView(item, isProvider ? "provider" : "location");
//         map.panTo(marker.getPosition()!);
//       });

//       newMarkers.push(marker);
//     };

//     // Batch marker additions
//     locations.forEach((loc) => addMarker(loc));
//     providers.forEach((prov) => addMarker(prov, true));

//     setMarkers(newMarkers);

//     // Fit bounds if markers exist
//     if (newMarkers.length > 0) {
//       const bounds = new window.google.maps.LatLngBounds();
//       newMarkers.forEach((m) => bounds.extend(m.getPosition()!));
//       map.fitBounds(bounds);

//       const listener = google.maps.event.addListenerOnce(map, "bounds_changed", () => {
//         if (map.getZoom()! > 11) map.setZoom(11);
//       });

//       return () => {
//         google.maps.event.removeListener(listener);
//       };
//     }
//   }, [map, locations, providers]);

//   const handleTabClick = useCallback((tab: string) => {
//     setActiveTab(tab);
//     setView("list");
//     setSelectedItem(null);
//     setSearchQuery("");

//     if (typeof window !== "undefined") {
//       const url = new URL(window.location.href);
//       url.searchParams.set("tab", tab);
//       window.history.pushState({}, "", url.toString());
//     }
//   }, []);

//   const handleQuickView = useCallback((item: Location | Provider, type: string) => {
//     setSelectedItem(item);
//     setView(type === "provider" ? "provider-single" : "location-single");
//   }, []);

//   const handleBack = useCallback(() => {
//     setView("list");
//     setSelectedItem(null);
//   }, []);

//   const handleViewProvider = useCallback((slug: string) => {
//     window.location.href = `/providers/${slug}`;
//   }, []);

//   const handleViewLocation = useCallback((slug: string) => {
//     window.location.href = `${slug}`;
//   }, []);

//   const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   }, []);

//   const renderStars = useCallback((rating: number) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <i
//           key={i}
//           className={`f-icon icon-star ${
//             i <= Math.round(rating) ? "active" : ""
//           }`}
//           role="presentation"
//           aria-label="Review Star"
//         ></i>
//       );
//     }
//     return stars;
//   }, []);

//   const calculateDistance = useCallback((
//     lat1: number,
//     lon1: number,
//     lat2: number,
//     lon2: number
//   ) => {
//     const R = 3958.8;
//     const dLat = ((lat2 - lat1) * Math.PI) / 180;
//     const dLon = ((lon2 - lon1) * Math.PI) / 180;
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c;
//   }, []);

//   const handleUseMyLocation = useCallback(() => {
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by your browser");
//       return;
//     }

//     setIsLocating(true);
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userLat = position.coords.latitude;
//         const userLng = position.coords.longitude;
//         setUserLocation({ lat: userLat, lng: userLng });
//         setIsLocating(false);

//         if (map) {
//           map.setCenter({ lat: userLat, lng: userLng });
//           map.setZoom(11);
//         }

//         const locationsWithDistance = locations
//           .map((loc) => ({
//             ...loc,
//             distance:
//               loc.coordinates?.lat && loc.coordinates?.lng
//                 ? `${calculateDistance(
//                     userLat,
//                     userLng,
//                     loc.coordinates.lat,
//                     loc.coordinates.lng
//                   ).toFixed(1)} mi`
//                 : "N/A",
//           }))
//           .sort((a, b) => {
//             const distA = parseFloat(a.distance);
//             const distB = parseFloat(b.distance);
//             return distA - distB;
//           });

//         const providersWithDistance = providers
//           .map((prov) => ({
//             ...prov,
//             distance:
//               prov.coordinates?.lat && prov.coordinates?.lng
//                 ? `${calculateDistance(
//                     userLat,
//                     userLng,
//                     prov.coordinates.lat,
//                     prov.coordinates.lng
//                   ).toFixed(1)} mi`
//                 : "N/A",
//           }))
//           .sort((a, b) => {
//             const distA = parseFloat(a.distance);
//             const distB = parseFloat(b.distance);
//             return distA - distB;
//           });

//         setLocations(locationsWithDistance);
//         setProviders(providersWithDistance);
//         setFilteredLocations(locationsWithDistance);
//         setFilteredProviders(providersWithDistance);
//       },
//       (error) => {
//         setIsLocating(false);
//         alert(
//           "Unable to retrieve your location. Please enable location services."
//         );
//         console.error("Geolocation error:", error);
//       }
//     );
//   }, [map, locations, providers, calculateDistance]);

//   // Custom scrollbar effect
//   useEffect(() => {
//     const contentBody = contentBodyRef.current;
//     const scrollbarHandle = scrollbarHandleRef.current;

//     if (!contentBody || !scrollbarHandle) return;

//     const updateScrollbar = () => {
//       const scrollPercentage =
//         contentBody.scrollTop /
//         (contentBody.scrollHeight - contentBody.clientHeight);
//       const maxScroll = contentBody.clientHeight - scrollbarHandle.clientHeight;
//       scrollbarHandle.style.top = `${scrollPercentage * maxScroll}px`;
//     };

//     const handleScroll = () => {
//       requestAnimationFrame(updateScrollbar);
//     };

//     contentBody.addEventListener("scroll", handleScroll, { passive: true });
//     updateScrollbar();

//     return () => {
//       contentBody.removeEventListener("scroll", handleScroll);
//     };
//   }, [view, activeTab, filteredLocations, filteredProviders, selectedItem]);

//   const getProviderLocations = useCallback((provider: Provider) => {
//     const locationIds = [
//       provider.primaryLocationId,
//       ...provider.additionalLocationIds,
//     ];
//     return locations.filter((loc) => locationIds.includes(loc.id));
//   }, [locations]);

//   console.log({
//     googleLoaded,
//     hasDiv: !!mapRef.current,
//     divSize: mapRef.current?.getBoundingClientRect(),
//   });

//   if (loading) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <div>Loading locations and providers...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
//         <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
//         <button onClick={() => window.location.reload()}>Retry</button>
//       </div>
//     );
//   }

//   if (view === "provider-single" && selectedItem) {
//     const providerLocations = getProviderLocations(selectedItem as Provider);

//     return (
//       <main id="main">
//         <div className="mod_locator" data-s3-module="">
//           <div className="locator">
//             <section className="content-section">
//               <div className="content-header">
//                 <div className="menu">
//                   <div className="menu-icon">
//                     <img
//                       draggable="false"
//                       src="https://i.postimg.cc/fW9XZbTX/search.png"
//                       alt="Search"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div
//                     className="menu-item"
//                     data-id="locations"
//                     onClick={() => handleTabClick("locations")}
//                   >
//                     <h1>Locations</h1>
//                   </div>
//                   <div className="menu-item active" data-id="providers">
//                     <h2>Providers</h2>
//                   </div>
//                 </div>
//                 <div className="breadcrumb"></div>
//                 <div
//                   className="use-my-location"
//                   onClick={handleUseMyLocation}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <div className="use-my-location-icon" title="Use my location">
//                     <img
//                       src="https://i.postimg.cc/tCzsCn0q/crosshair.png"
//                       alt="Use my location"
//                       loading="lazy"
//                     />
//                     <div
//                       className={`use-my-location-icon-loader${
//                         isLocating ? " active" : ""
//                       }`}
//                     >
//                       &nbsp;
//                     </div>
//                   </div>
//                   <div className="use-my-location-label">
//                     <div>Use My Location</div>
//                   </div>
//                 </div>
//                 <div className="search">
//                   <div className="search-wrapper">
//                     <input
//                       id="google-search-input"
//                       name="google-search-input"
//                       className="google-search-input pac-target-input"
//                       placeholder="Search by address or zip code"
//                       defaultValue=""
//                       autoComplete="off"
//                     />
//                     <input
//                       id="provider-search-input"
//                       name="provider-search-input"
//                       className="provider-search-input"
//                       placeholder="Search by provider name"
//                       defaultValue=""
//                     />
//                     <div className="filter-pill">
//                       <div className="name">Clear Lake</div>
//                       <div className="close">✖</div>
//                     </div>
//                     <div
//                       className="search-results-snippet active back"
//                       onClick={handleBack}
//                     >
//                       &lt; Back
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="content-body" ref={contentBodyRef}>
//                 <div className="result-detail active providers">
//                   <div className="result location">
//                     <div className="result-content">
//                       <div className="background">
//                         <img
//                           className="detail-background"
//                           draggable="false"
//                           src={
//                             (selectedItem as Provider).backgroundImage ||
//                             "https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&w=1000"
//                           }
//                           alt="background"
//                           loading="lazy"
//                         />
//                         <img
//                           className="detail-picture"
//                           draggable="false"
//                           src={(selectedItem as Provider).image}
//                           alt={selectedItem.name}
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="foreground">
//                         <div
//                           className="quick-view-button"
//                           onClick={() => handleViewProvider((selectedItem as Provider).slug)}
//                         >
//                           View Provider
//                         </div>
//                         <div className="top-right">
//                           <div className="reviews-stars">
//                             {renderStars(selectedItem.reviews?.rating || 0)}
//                           </div>
//                           <div className="reviews-text">
//                             {selectedItem.reviews?.count || 0} Reviews
//                           </div>
//                         </div>
//                         <div className="bottom-left">
//                           <div className="heading">{selectedItem.name}</div>
//                           <div className="subheading-row">
//                             <div>
//                               <div className="location-icon">
//                                 <img
//                                   src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                   alt="Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <div className="location-distance">
//                                 {(selectedItem as Provider).distance}
//                               </div>
//                             </div>
//                             <div className="view-relations">
//                               <div className="relations-amount">1</div>
//                               <div className="relations-text">
//                                 View Location
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="bottom-right">
//                           <div className="location-name">
//                             {(selectedItem as Provider).locationName}
//                           </div>
//                           <div className="location-distance-wrapper">
//                             <div className="location-icon">
//                               <img
//                                 src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                 alt="Location"
//                                 loading="lazy"
//                               />
//                             </div>
//                             <div className="location-distance">
//                               {(selectedItem as Provider).distance}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="result-footer">
//                       <div className="left">
//                         <div className="address">{(selectedItem as Provider).address}</div>
//                         <a
//                           className="get-directions"
//                           href={
//                             (selectedItem as Provider).googleMaps ||
//                             `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((selectedItem as Provider).address)}`
//                           }
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{ cursor: "pointer", color: "#fff" }}
//                         >
//                           Get Directions&gt;
//                         </a>
//                         <div className="hours hidden">Business Hours&gt;</div>
//                       </div>
//                       <div className="right">
//                         <div
//                           className="cta-button schedule"
//                           data-type="provider"
//                           data-id={selectedItem.id}
//                           style={{ display: "none" }}
//                         >
//                           Schedule
//                         </div>
//                         <a
//                           className="tel ppc-href"
//                           href={`tel:${(selectedItem as Provider).phone.replace(
//                             /[^0-9]/g,
//                             ""
//                           )}`}
//                         >
//                           {(selectedItem as Provider).phone}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="results">
//                   <div className="results-container locations">
//                     {providerLocations.slice(0, 1).map((location) => (
//                       <div
//                         key={location.id}
//                         className="result location"
//                         data-type="location"
//                         data-id={location.id}
//                       >
//                         <div className="result-content">
//                           <div className="background">
//                             <img
//                               draggable="false"
//                               src={location.image}
//                               alt={location.alt}
//                               loading="lazy"
//                             />
//                           </div>
//                           <div className="foreground">
//                             <div
//                               className="quick-view-button"
//                               onClick={() =>
//                                 handleQuickView(location, "location")
//                               }
//                             >
//                               Quick View
//                             </div>
//                             <div className="bottom-left">{location.name}</div>
//                             <div className="bottom-right">
//                               <div className="distance-icon">
//                                 <img
//                                   src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                   alt="Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <div className="distance">853</div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="result-footer">
//                           <div className="left">
//                             <div
//                               className="cta-button schedule"
//                               data-type="location"
//                               data-id={location.id}
//                             >
//                               Schedule
//                             </div>
//                             <div
//                               className="cta-link location"
//                               data-type="location"
//                               data-id={location.id}
//                             >
//                               View Location
//                             </div>
//                           </div>
//                           <div className="right has-number">
//                             <div className="icon-text">
//                               <div className="result-footer-icon">
//                                 <img
//                                   src="/assets/images/web.png"
//                                   alt="View Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <div
//                                 className="text view-website"
//                                 data-id={location.id}
//                                 data-type="location"
//                               >
//                                 View Location
//                               </div>
//                             </div>
//                             <div className="detail-phone-number">
//                               <a
//                                 className="tel ppc-href"
//                                 href={`tel:+1${location.phone.replace(
//                                   /[^0-9]/g,
//                                   ""
//                                 )}`}
//                                 data-number={location.phone}
//                                 data-id={location.id}
//                               >
//                                 <span className="ppc-number">
//                                   {location.phone}
//                                 </span>
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="results-container providers">
//                     {providers.slice(0, 1).map((provider) => (
//                       <div
//                         key={provider.id}
//                         className="result provider active"
//                         data-type="provider"
//                         data-id={provider.id}
//                       >
//                         <div className="result-content">
//                           <div className="background">
//                             <img
//                               className="provider-background"
//                               draggable="false"
//                               src="/assets/images/provider-background.jpg?auto=format,compress&w=400"
//                               alt={provider.name}
//                               loading="lazy"
//                             />
//                             <img
//                               className="provider-picture"
//                               draggable="false"
//                               src={provider.image}
//                               alt={provider.name}
//                               loading="lazy"
//                             />
//                           </div>
//                           <div className="foreground">
//                             <div
//                               className="quick-view-button"
//                               onClick={() =>
//                                 handleQuickView(provider, "provider")
//                               }
//                             >
//                               Quick View
//                             </div>
//                             <div className="bottom-left">
//                               {provider.name}{" "}
//                               <span className="small">{provider.title}</span>
//                             </div>
//                             <div className="bottom-right">
//                               <div className="distance">
//                                 {provider.distance}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="result-footer">
//                           <div className="left">
//                             <div className="icon-text">
//                               <div className="result-footer-icon">
//                                 <img
//                                   src="https://i.postimg.cc/9Qrc5DC1/web.png"
//                                   alt="View Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <div
//                                 className="text view-website"
//                                 data-id={provider.id}
//                                 data-type="provider"
//                               >
//                                 View Provider
//                               </div>
//                             </div>
//                           </div>
//                           <div className="right show-number">
//                             <div
//                               className="cta-button schedule"
//                               data-type="provider"
//                               data-id={provider.id}
//                             >
//                               Schedule
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="carousel active">
//                   <div
//                     className="left-arrow"
//                     aria-controls="tns2"
//                     tabIndex={-1}
//                     data-controls="prev"
//                   >
//                     ▸
//                   </div>
//                   <p className="carousel-heading">More Locations Near You</p>
//                   <div className="carousel-content">
//                     <div className="carousel-content-inner">
//                       {providerLocations.map((location, index) => (
//                         <div
//                           key={location.id}
//                           className={`carousel-item tns-item${
//                             index === 0 ? " tns-slide-active active" : ""
//                           }`}
//                           data-id={location.id}
//                           data-type="location"
//                           id={`tns2-item${index}`}
//                         >
//                           <div
//                             className="carousel-item-image-wrapper"
//                             data-id={location.id}
//                             data-type="location"
//                             onClick={() =>
//                               handleQuickView(location, "location")
//                             }
//                             style={{ cursor: "pointer" }}
//                           >
//                             <img
//                               className="carousel-item-image"
//                               src={location.image}
//                               alt={location.alt}
//                               loading="lazy"
//                             />
//                           </div>
//                           <div
//                             className="cta-button schedule"
//                             data-type="location"
//                             data-id={location.id}
//                           >
//                             Schedule
//                           </div>
//                           <div className="carousel-item-name">
//                             {location.name}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div
//                     className="right-arrow"
//                     aria-controls="tns2"
//                     tabIndex={-1}
//                     data-controls="next"
//                   >
//                     ▸
//                   </div>
//                 </div>

//                 <div className="content-body-scrollbar active">
//                   <div className="content-body-scrollbar-line"></div>
//                   <div
//                     ref={scrollbarHandleRef}
//                     className="content-body-scrollbar-handle"
//                     style={{ height: "78%", top: "0%" }}
//                   ></div>
//                 </div>
//               </div>
//             </section>

//             <MapSection mapRef={mapRef} />

//             <section className="mobile-footer-tabs">
//               <div className="mobile-footer-tab active" data-action="details">
//                 Details
//               </div>
//               <div className="mobile-footer-tab" data-action="map">
//                 Map
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   if (view === "location-single" && selectedItem) {
//     const otherLocations = locations.filter((l) => l.id !== selectedItem.id);

//     return (
//       <main id="main">
//         <div className="mod_locator" data-s3-module="">
//           <div className="locator">
//             <section className="content-section">
//               <div className="content-header">
//                 <div className="menu">
//                   <div className="menu-icon">
//                     <img
//                       draggable="false"
//                       src="https://i.postimg.cc/fW9XZbTX/search.png"
//                       alt="Search"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="menu-item active" data-id="locations">
//                     <h1>Locations</h1>
//                   </div>
//                   <div
//                     className="menu-item"
//                     data-id="providers"
//                     onClick={() => handleTabClick("providers")}
//                   >
//                     <h2>Providers</h2>
//                   </div>
//                 </div>
//                 <div className="breadcrumb"></div>
//                 <div
//                   className="use-my-location"
//                   onClick={handleUseMyLocation}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <div className="use-my-location-icon" title="Use my location">
//                     <img
//                       src="https://i.postimg.cc/tCzsCn0q/crosshair.png"
//                       alt="Use my location"
//                       loading="lazy"
//                     />
//                     <div
//                       className={`use-my-location-icon-loader${
//                         isLocating ? " active" : ""
//                       }`}
//                     >
//                       &nbsp;
//                     </div>
//                   </div>
//                   <div className="use-my-location-label">
//                     <div>Use My Location</div>
//                   </div>
//                 </div>
//                 <div className="search">
//                   <div className="search-wrapper">
//                     <input
//                       id="google-search-input"
//                       name="google-search-input"
//                       className="google-search-input pac-target-input active"
//                       placeholder="Search by address or zip code"
//                       defaultValue=""
//                       autoComplete="off"
//                     />
//                     <input
//                       id="provider-search-input"
//                       name="provider-search-input"
//                       className="provider-search-input"
//                       placeholder="Search by provider name"
//                       defaultValue=""
//                     />
//                     <div className="filter-pill">
//                       <div className="name">Clear Lake</div>
//                       <div className="close">✖</div>
//                     </div>
//                     <div
//                       className="search-results-snippet active back"
//                       onClick={handleBack}
//                     >
//                       &lt; Back
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="content-body" ref={contentBodyRef}>
//                 <div className="result-detail active locations">
//                   <div className="result location">
//                     <div className="result-content">
//                       <div className="background">
//                         <img
//                           className="detail-background"
//                           draggable="false"
//                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                           alt=""
//                           role="presentation"
//                         />
//                         <img
//                           className="detail-picture"
//                           draggable="false"
//                           src={(selectedItem as Location).image}
//                           alt={(selectedItem as Location).alt}
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="foreground">
//                         <div
//                           className="quick-view-button"
//                           onClick={() => handleViewLocation((selectedItem as Location).slug)}
//                         >
//                           View Location
//                         </div>
//                         <div className="top-right active">
//                           <div className="reviews-stars">
//                             {renderStars(selectedItem.reviews?.rating || 0)}
//                           </div>
//                           <div className="reviews-text">
//                             {selectedItem.reviews?.count || 0} Reviews
//                           </div>
//                         </div>
//                         <div className="bottom-left">
//                           <div className="heading">{selectedItem.name}</div>
//                           <div className="subheading-row">
//                             <div>
//                               <div className="location-icon active">
//                                 <img
//                                   src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                   alt="Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                             </div>
//                             <div className="view-relations">
//                               <div className="relations-amount">
//                                 {
//                                   providers.filter(
//                                     (p) => p.locationName === selectedItem.name
//                                   ).length
//                                 }
//                               </div>
//                               <div className="relations-text">
//                                 View Provider
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="bottom-right">
//                           <div className="location-name">&nbsp;</div>
//                           <div className="location-distance-wrapper">
//                             <div className="location-icon active">
//                               <img
//                                 src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                 alt="Location"
//                                 loading="lazy"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="result-footer">
//                       <div className="left">
//                         <div className="address">{(selectedItem as Location).address}</div>
//                         <a
//                           className="get-directions"
//                           href={
//                             (selectedItem as Location).googleMaps ||
//                             `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((selectedItem as Location).address)}`
//                           }
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{ cursor: "pointer", color: "#fff" }}
//                         >
//                           Get Directions&gt;
//                         </a>
//                         <div className="hours hidden">Business Hours&gt;</div>
//                       </div>
//                       <div className="right">
//                         <div
//                           className="cta-button schedule"
//                           data-type="location"
//                           data-id={selectedItem.id}
//                           style={{ display: "block" }}
//                         >
//                           Schedule
//                         </div>
//                         <a
//                           className="tel ppc-href"
//                           href={`tel:${(selectedItem as Location).phone.replace(
//                             /[^0-9]/g,
//                             ""
//                           )}`}
//                         >
//                           {(selectedItem as Location).phone}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="results">
//                   <div className="results-container locations">
//                     {locations.slice(0, 3).map((location) => (
//                       <div
//                         key={location.id}
//                         className={`result location ${
//                           location.id === selectedItem.id ? "active" : ""
//                         }`}
//                         data-type="location"
//                         data-id={location.id}
//                       >
//                         <div className="result-content">
//                           <div className="background">
//                             <img
//                               draggable="false"
//                               src={location.image}
//                               alt={location.alt}
//                               loading="lazy"
//                             />
//                           </div>
//                           <div className="foreground">
//                             <div
//                               className="quick-view-button"
//                               onClick={() =>
//                                 handleQuickView(location, "location")
//                               }
//                             >
//                               Quick View
//                             </div>
//                             <div className="bottom-left">{location.name}</div>
//                             <div className="bottom-right">
//                               <div className="distance-icon">
//                                 <img
//                                   src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                   alt="Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <div className="distance"></div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="result-footer">
//                           <div className="left">
//                             <div
//                               className="cta-button schedule"
//                               data-type="location"
//                               data-id={location.id}
//                             >
//                               Schedule
//                             </div>
//                             <div
//                               className="cta-link location"
//                               data-type="location"
//                               data-id={location.id}
//                             >
//                               View Location
//                             </div>
//                           </div>
//                           <div className="right has-number show-number">
//                             <div className="icon-text">
//                               <div className="result-footer-icon">
//                                 <img
//                                   src="https://i.postimg.cc/9Qrc5DC1/web.png"
//                                   alt="View Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <div
//                                 className="text view-website"
//                                 data-id={location.id}
//                                 data-type="location"
//                               >
//                                 View Location
//                               </div>
//                             </div>
//                             <div className="detail-phone-number">
//                               <a
//                                 className="tel ppc-href"
//                                 href={`tel:+1${location.phone.replace(
//                                   /[^0-9]/g,
//                                   ""
//                                 )}`}
//                                 data-number={location.phone}
//                                 data-id={location.id}
//                               >
//                                 <span className="ppc-number">
//                                   {location.phone}
//                                 </span>
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="results-container providers">
//                     {providers.slice(0, 2).map((provider) => (
//                       <div
//                         key={provider.id}
//                         className="result provider active"
//                         data-type="provider"
//                         data-id={provider.id}
//                       >
//                         <div className="result-content">
//                           <div className="background">
//                             <img
//                               className="provider-background"
//                               draggable="false"
//                               src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
//                               alt={provider.name}
//                               loading="lazy"
//                             />
//                             <img
//                               className="provider-picture"
//                               draggable="false"
//                               src={provider.image}
//                               alt={provider.name}
//                               loading="lazy"
//                             />
//                           </div>
//                           <div className="foreground">
//                             <div
//                               className="quick-view-button"
//                               onClick={() =>
//                                 handleQuickView(provider, "provider")
//                               }
//                             >
//                               Quick View
//                             </div>
//                             <div className="bottom-left">
//                               {provider.name}{" "}
//                               <span className="small">{provider.title}</span>
//                             </div>
//                             <div className="bottom-right">
//                               <div className="distance">
//                                 {provider.distance}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="result-footer">
//                           <div className="left">
//                             <div className="icon-text">
//                               <div className="result-footer-icon">
//                                 <img
//                                   src="https://i.postimg.cc/9Qrc5DC1/web.png"
//                                   alt="View Location"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <div
//                                 className="text view-website"
//                                 data-id={provider.id}
//                                 data-type="provider"
//                               >
//                                 View Provider
//                               </div>
//                             </div>
//                           </div>
//                           <div className="right show-number">
//                             <div
//                               className="cta-button schedule"
//                               data-type="provider"
//                               data-id={provider.id}
//                             >
//                               Schedule
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="content-body-scrollbar active">
//                   <div className="content-body-scrollbar-line"></div>
//                   <div
//                     ref={scrollbarHandleRef}
//                     className="content-body-scrollbar-handle"
//                     style={{ height: "13%", top: "0%" }}
//                   ></div>
//                 </div>
//               </div>
//             </section>
//             <MapSection mapRef={mapRef} />
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main id="main">
//       <div className="mod_locator" data-s3-module="">
//         <div className="locator">
//           <section className="content-section">
//             <div className="content-header">
//               <div className="menu">
//                 <div className="menu-icon">
//                   <img
//                     draggable="false"
//                     src="https://i.postimg.cc/fW9XZbTX/search.png"
//                     alt="Search"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div
//                   className={`menu-item ${
//                     activeTab === "locations" ? "active" : ""
//                   }`}
//                   data-id="locations"
//                   onClick={() => handleTabClick("locations")}
//                 >
//                   <h1>Locations</h1>
//                 </div>
//                 <div
//                   className={`menu-item ${
//                     activeTab === "providers" ? "active" : ""
//                   }`}
//                   data-id="providers"
//                   onClick={() => handleTabClick("providers")}
//                 >
//                   <h2>Providers</h2>
//                 </div>
//               </div>
//               <div className="breadcrumb"></div>
//               <div className="use-my-location" onClick={handleUseMyLocation} style={{ cursor: "pointer" }}>
//                 <div className="use-my-location-icon" title="Use my location">
//                   <img
//                     src="https://i.postimg.cc/tCzsCn0q/crosshair.png"
//                     alt="Use my location"
//                     loading="lazy"
//                   />
//                   <div className={`use-my-location-icon-loader${isLocating ? " active" : ""}`}>&nbsp;</div>
//                 </div>
//                 <div className="use-my-location-label">
//                   <div>Use My Location</div>
//                 </div>
//               </div>
//               <div className="search">
//                 <div className="search-wrapper">
//                   <input
//                     id="google-search-input"
//                     name="google-search-input"
//                     className={`google-search-input pac-target-input ${
//                       activeTab === "locations" ? "active" : ""
//                     }`}
//                     placeholder="Search by address or zip code"
//                     value={activeTab === "locations" ? searchQuery : ""}
//                     onChange={handleSearchChange}
//                     autoComplete="off"
//                   />
//                   <input
//                     id="provider-search-input"
//                     name="provider-search-input"
//                     className={`provider-search-input ${
//                       activeTab === "providers" ? "active" : ""
//                     }`}
//                     placeholder="Search by provider name"
//                     value={activeTab === "providers" ? searchQuery : ""}
//                     onChange={handleSearchChange}
//                   />

//                   <div className="filter-pill">
//                     <div className="name">Clear Lake</div>
//                     <div className="close">✖</div>
//                   </div>
//                   <div className="search-results-snippet active">
//                     {activeTab === "providers"
//                       ? `${filteredProviders.length} Providers`
//                       : `${filteredLocations.length} Locations`}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="content-body">
//               <div
//                 className={`result-detail ${
//                   activeTab === "providers" ? "providers" : "locations"
//                 }`}
//               >
//                 <div className="result location">
//                   <div className="result-content">
//                     <div className="background">
//                       <img
//                         className="detail-background"
//                         draggable="false"
//                         src=""
//                         alt=""
//                       />
//                       <img
//                         className="detail-picture"
//                         draggable="false"
//                         src=""
//                         alt=""
//                       />
//                     </div>
//                     <div className="foreground">
//                       <div className="quick-view-button">View Website</div>
//                       <div className="top-right">
//                         <div className="reviews-stars">
//                           <i
//                             className="f-icon icon-star active"
//                             role="presentation"
//                             aria-label="Review Star"
//                           ></i>
//                           <i
//                             className="f-icon icon-star"
//                             role="presentation"
//                             aria-label="Review Star"
//                           ></i>
//                           <i
//                             className="f-icon icon-star"
//                             role="presentation"
//                             aria-label="Review Star"
//                           ></i>
//                           <i
//                             className="f-icon icon-star"
//                             role="presentation"
//                             aria-label="Review Star"
//                           ></i>
//                           <i
//                             className="f-icon icon-star"
//                             role="presentation"
//                             aria-label="Review Star"
//                           ></i>
//                         </div>
//                         <div className="reviews-text">0 Reviews</div>
//                       </div>
//                       <div className="bottom-left">
//                         <div className="heading">Clearwater</div>
//                         <div className="subheading-row">
//                           <div>
//                             <div className="location-icon">
//                               <img
//                                 src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                 alt="Location"
//                                 loading="lazy"
//                               />
//                             </div>
//                             <div className="location-distance">&nbsp;</div>
//                           </div>
//                           <div className="view-relations">
//                             <div className="relations-amount"></div>
//                             <div className="relations-text"></div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bottom-right">
//                         <div className="location-name">&nbsp;</div>
//                         <div className="location-distance-wrapper">
//                           <div className="location-icon">
//                             <img
//                               src="https://i.postimg.cc/zXNf9YPw/location.png"
//                               alt="Location"
//                               loading="lazy"
//                             />
//                           </div>
//                           <div className="location-distance">&nbsp;</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="result-footer">
//                     <div className="left">
//                       <div className="address">
//                         2745 Fl-580 Suite 101, Clearwater, FL 33761
//                       </div>
//                       <div className="get-directions">Get Directions&gt;</div>
//                       <div className="hours">Business Hours&gt;</div>
//                     </div>
//                     <div className="right">
//                       <div className="cta-button schedule">
//                         Schedule Appointment
//                       </div>
//                       <a className="tel ppc-href" href="tel:+17273789338">
//                         <span className="ppc-number">(727) 378-9338</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="results">
//                 <div
//                   className={`results-container locations ${
//                     activeTab === "locations" ? "active" : ""
//                   }`}
//                 >
//                   {filteredLocations.map((location) => (
//                     <div
//                       key={location.id}
//                       className="result location active"
//                       data-type="location"
//                       data-id={location.id}
//                     >
//                       <div className="result-content">
//                         <div className="background">
//                           <img
//                             draggable="false"
//                             src={location.image}
//                             alt={location.alt}
//                             loading="lazy"
//                           />
//                         </div>
//                         <div className="foreground">
//                           <div
//                             className="quick-view-button"
//                             onClick={() =>
//                               handleQuickView(location, "location")
//                             }
//                             style={{ cursor: "pointer" }}
//                           >
//                             Quick View
//                           </div>
//                           <div className="bottom-left">{location.name}</div>
//                           <div className="bottom-right">
//                             <div className="distance-icon">
//                               <img
//                                 src="https://i.postimg.cc/zXNf9YPw/location.png"
//                                 alt="Location"
//                                 loading="lazy"
//                               />
//                             </div>
//                             <div className="distance"></div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="result-footer">
//                         <div className="left">
//                           <div
//                             className="cta-button schedule"
//                             data-type="location"
//                             data-id={location.id}
//                           >
//                             Schedule
//                           </div>
//                           <div
//                             className="cta-link location"
//                             data-type="location"
//                             data-id={location.id}
//                             onClick={() => handleViewLocation(location.slug)}
//                             style={{ cursor: "pointer" }}
//                           >
//                             View Location
//                           </div>
//                         </div>
//                         <div className="right has-number">
//                           <div className="icon-text">
//                             <div className="result-footer-icon">
//                               <img
//                                 src="https://i.postimg.cc/9Qrc5DC1/web.png"
//                                 alt="View Location"
//                                 loading="lazy"
//                               />
//                             </div>
//                             <div
//                               className="text view-website"
//                               data-id={location.id}
//                               data-type="location"
//                               onClick={() => handleViewLocation(location.slug)}
//                               style={{ cursor: "pointer" }}
//                             >
//                               View Location
//                             </div>
//                           </div>
//                           <div className="detail-phone-number">
//                             <a
//                               className="tel ppc-href"
//                               href={`tel:+1${location.phone.replace(
//                                 /[^0-9]/g,
//                                 ""
//                               )}`}
//                               data-number={location.phone}
//                               data-id={location.id}
//                             >
//                               <span className="ppc-number">
//                                 {location.phone}
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div
//                   className={`results-container providers ${
//                     activeTab === "providers" ? "active" : ""
//                   }`}
//                 >
//                   {filteredProviders.map((provider) => (
//                     <div
//                       key={provider.id}
//                       className="result provider active"
//                       data-type="provider"
//                       data-id={provider.id}
//                     >
//                       <div className="result-content">
//                         <div className="background">
//                           <img
//                             className="provider-background"
//                             draggable="false"
//                             src="/assets/images/provider-background.jpg?auto=format,compress&w=400"
//                             alt={provider.name}
//                             loading="lazy"
//                           />
//                           <img
//                             className="provider-picture"
//                             draggable="false"
//                             src={provider.image}
//                             alt={provider.name}
//                             loading="lazy"
//                           />
//                         </div>
//                         <div className="foreground">
//                           <div
//                             className="quick-view-button"
//                             onClick={() =>
//                               handleQuickView(provider, "provider")
//                             }
//                           >
//                             Quick View
//                           </div>
//                           <div className="bottom-left">
//                             {provider.name}{" "}
//                             <span className="small">{provider.title}</span>
//                           </div>
//                           <div className="bottom-right">
//                             <div className="distance">{provider.distance}</div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="result-footer">
//                         <div className="left">
//                           <div className="icon-text">
//                             <div className="result-footer-icon">
//                               <img
//                                 src="https://i.postimg.cc/9Qrc5DC1/web.png"
//                                 alt="View Location"
//                                 loading="lazy"
//                               />
//                             </div>
//                             <div
//                               className="text view-website"
//                               data-id={provider.id}
//                               data-type="provider"
//                               onClick={() => handleViewProvider(provider.slug)}
//                             >
//                               View Provider
//                             </div>
//                           </div>
//                         </div>
//                         <div className="right show-number">
//                           <div
//                             className="cta-button schedule"
//                             data-type="provider"
//                             data-id={provider.id}
//                           >
//                             Schedule
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="content-body-scrollbar active">
//                 <div className="content-body-scrollbar-line"></div>
//                 <div
//                   ref={scrollbarHandleRef}
//                   className="content-body-scrollbar-handle"
//                   style={{ height: "17%", top: "0%" }}
//                 ></div>
//               </div>
//             </div>
//           </section>

//           <MapSection mapRef={mapRef} />

//           <section className="mobile-footer-tabs">
//             <div className="mobile-footer-tab active" data-action="details">
//               Details
//             </div>
//             <div className="mobile-footer-tab" data-action="map">
//               Map
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ProviderLocator;

"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useLoadGoogleMaps } from "@/hooks/useLoadGoogleMaps";
import dynamic from "next/dynamic";

// Types
interface Coordinates {
  lat: number;
  lng: number;
}

interface Reviews {
  rating: number;
  count: number;
}

interface Location {
  id: string;
  name: string;
  image: string;
  phone: string;
  alt: string;
  address: string;
  coordinates: Coordinates;
  reviews: Reviews;
  slug: string;
  googleMaps: string;
  distance?: string;
}

interface Provider {
  id: string;
  name: string;
  title: string;
  image: string;
  backgroundImage: string;
  distance: string;
  locationName: string;
  address: string;
  phone: string;
  coordinates: Coordinates;
  reviews: Reviews;
  slug: string;
  bio: string;
  specialties: string[];
  education: string[];
  certifications: string[];
  languages: string[];
  googleMaps: string;
  primaryLocationId: string;
  additionalLocationIds: string[];
}

// Separate map component for better code splitting
const MapSection = dynamic(
  () =>
    Promise.resolve(
      ({ mapRef }: { mapRef: React.RefObject<HTMLDivElement> }) => (
        <section className="map-section" style={{ overflow: "hidden" }}>
          <div
            ref={mapRef}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}
          ></div>
        </section>
      )
    ),
  { ssr: false }
);

const ProviderLocator = () => {
  const googleLoaded = useLoadGoogleMaps(
    "AIzaSyCcWunoBpxSOoSPvplvrAzIaTh9pI6QfdU"
  );

  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get("tab");
      return tab === "providers" ? "providers" : "locations";
    }
    return "locations";
  });
  const [view, setView] = useState("list");
  const [selectedItem, setSelectedItem] = useState<Location | Provider | null>(
    null
  );
  const [locations, setLocations] = useState<Location[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const contentBodyRef = useRef<HTMLDivElement>(null);
  const scrollbarHandleRef = useRef<HTMLDivElement>(null);
  const mapInitializedRef = useRef(false);

  // Memoized API URLs
  const API_BASE_URL = useMemo(
    () =>
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://backend-orpin-six-56.vercel.app/api",
    []
  );

  // Handle URL changes
  useEffect(() => {
    const handleUrlChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get("tab");
      setActiveTab(tab === "providers" ? "providers" : "locations");
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  // Fetch data with error handling and caching
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const [locationsRes, providersRes] = await Promise.all([
          fetch(`${API_BASE_URL}/locations?depth=2&limit=1000`, {
            signal: controller.signal,
            next: { revalidate: 3600 }, // Cache for 1 hour
          }),
          fetch(`${API_BASE_URL}/providers?depth=2&limit=1000`, {
            signal: controller.signal,
            next: { revalidate: 3600 },
          }),
        ]);

        clearTimeout(timeoutId);

        if (!locationsRes.ok || !providersRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [locationsData, providersData] = await Promise.all([
          locationsRes.json(),
          providersRes.json(),
        ]);

        const transformedLocations = locationsData.docs.map((loc: any) => {
          let imageUrl = "";
          if (typeof loc.image === "object" && loc.image !== null) {
            imageUrl = loc.image.cloudinary_url || loc.image.url || "";
          } else if (typeof loc.image === "string") {
            imageUrl = loc.image;
          }

          return {
            id: loc.id,
            name: loc.name,
            image: imageUrl,
            phone: loc.phone,
            alt: loc.alt,
            address: loc.address,
            coordinates: loc.coordinates,
            reviews: loc.reviews,
            slug: loc.slug,
            googleMaps: loc.googleMaps || "",
          };
        });

        const transformedProviders = providersData.docs.map((provider: any) => {
          const primaryLoc =
            typeof provider.primaryLocation === "object"
              ? provider.primaryLocation
              : null;

          let imageUrl = "";
          if (provider.image) {
            if (typeof provider.image === "object") {
              imageUrl =
                provider.image.cloudinary_url || provider.image.url || "";
            } else {
              imageUrl = provider.image;
            }
          }

          let bgImageUrl = "";
          if (provider.backgroundImage) {
            if (typeof provider.backgroundImage === "object") {
              bgImageUrl =
                provider.backgroundImage.cloudinary_url ||
                provider.backgroundImage.url ||
                "";
            } else {
              bgImageUrl = provider.backgroundImage;
            }
          }

          let additionalLocationIds: string[] = [];
          if (
            provider.additionalLocations &&
            Array.isArray(provider.additionalLocations)
          ) {
            additionalLocationIds = provider.additionalLocations.map(
              (loc: any) => (typeof loc === "object" ? loc.id : loc)
            );
          }

          return {
            id: provider.id,
            name: provider.name,
            title: provider.title,
            image: imageUrl,
            backgroundImage: bgImageUrl,
            distance: "",
            locationName: primaryLoc?.name || "",
            address: primaryLoc?.address || "",
            phone: primaryLoc?.phone || "",
            coordinates: primaryLoc?.coordinates,
            reviews: provider.reviews,
            slug: provider.slug,
            bio: provider.bio,
            specialties: provider.specialties,
            education: provider.education,
            certifications: provider.certifications,
            languages: provider.languages,
            googleMaps: provider.googleMaps || "",
            primaryLocationId:
              typeof provider.primaryLocation === "object"
                ? provider.primaryLocation.id
                : provider.primaryLocation,
            additionalLocationIds: additionalLocationIds,
          };
        });

        setLocations(transformedLocations);
        setProviders(transformedProviders);
        setFilteredLocations(transformedLocations);
        setFilteredProviders(transformedProviders);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(
          error.name === "AbortError"
            ? "Request timeout. Please try again."
            : "Failed to load data. Please refresh the page."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  // Filter locations and providers based on search query
  useEffect(() => {
    if (activeTab === "locations") {
      if (searchQuery.trim() === "") {
        setFilteredLocations(locations);
      } else {
        const filtered = locations.filter(
          (location) =>
            location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredLocations(filtered);
      }
    } else if (activeTab === "providers") {
      if (searchQuery.trim() === "") {
        setFilteredProviders(providers);
      } else {
        const filtered = providers.filter(
          (provider) =>
            provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            provider.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            provider.locationName
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        );
        setFilteredProviders(filtered);
      }
    }
  }, [searchQuery, locations, providers, activeTab]);

  // Initialize Google Map with retry logic
  // useEffect(() => {
  //   if (!googleLoaded || map || !mapRef.current || mapInitializedRef.current) return;

  //   const initMap = () => {
  //     try {
  //       if (!window.google || !window.google.maps) {
  //         console.error("Google Maps not loaded");
  //         return;
  //       }

  //       const mapInstance = new window.google.maps.Map(mapRef.current!, {
  //         center: { lat: 28.2898, lng: -85.5713 },
  //         zoom: 7,
  //         mapTypeId: "roadmap",
  //         streetViewControl: false,
  //         fullscreenControl: false,
  //         gestureHandling: "greedy",
  //       });

  //       setMap(mapInstance);
  //       mapInitializedRef.current = true;
  //     } catch (error) {
  //       console.error("Map init failed:", error);
  //       // Retry after 1 second
  //       setTimeout(initMap, 1000);
  //     }
  //   };

  //   initMap();
  // }, [googleLoaded, map]);

  // useEffect(() => {
  //   if (
  //     loading ||
  //     !googleLoaded ||
  //     map ||
  //     !mapRef.current ||
  //     mapInitializedRef.current
  //   ) {
  //     return;
  //   }

  //   const initializeMap = () => {
  //     if (!window.google || !window.google.maps || !mapRef.current) {
  //       // Retry if not ready yet
  //       setTimeout(initializeMap, 300);
  //       return;
  //     }

  //     // Ensure the container has dimensions
  //     const rect = mapRef.current.getBoundingClientRect();
  //     if (rect.width === 0 || rect.height === 0) {
  //       requestAnimationFrame(initializeMap);
  //       return;
  //     }

  //     try {
  //       const mapInstance = new window.google.maps.Map(mapRef.current, {
  //         center: { lat: 28.5383, lng: -81.3792 },
  //         zoom: 7,
  //         mapTypeId: "roadmap",
  //         streetViewControl: false,
  //         fullscreenControl: false,
  //         gestureHandling: "greedy",
  //         backgroundColor: "#f8f8f8", // prevent white flash
  //       });

  //       setMap(mapInstance);
  //       mapInitializedRef.current = true;
  //       console.log("✅ Google Map initialized successfully");
  //     } catch (err) {
  //       console.error("❌ Map init failed, retrying:", err);
  //       setTimeout(initializeMap, 500);
  //     }
  //   };

  //   // Delay slightly to allow paint
  //   requestAnimationFrame(() => {
  //     initializeMap();
  //   });
  // }, [googleLoaded, map, loading]);

  useEffect(() => {
    if (loading || !googleLoaded || mapInitializedRef.current) return;

    const attemptInit = () => {
      if (!window.google?.maps) {
        console.warn("🕐 Google Maps still not ready, retrying...");
        setTimeout(attemptInit, 200);
        return;
      }

      if (!mapRef.current) {
        console.warn("🕐 Map div not yet attached, retrying...");
        setTimeout(attemptInit, 200);
        return;
      }

      const rect = mapRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        console.warn("🕐 Map div has no size yet, waiting for layout...");
        requestAnimationFrame(attemptInit);
        return;
      }

      try {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: 28.5383, lng: -81.3792 },
          zoom: 7,
          mapId: "8498c1d922ec81ce59cf54f5",
          streetViewControl: false,
          fullscreenControl: false,
          gestureHandling: "greedy",
          backgroundColor: "#f8f8f8",
        });

        setMap(mapInstance);
        mapInitializedRef.current = true;
        console.log("✅ Google Map initialized successfully");
      } catch (err) {
        console.error("❌ Map initialization error:", err);
        setTimeout(attemptInit, 300);
      }
    };

    attemptInit();
  }, [googleLoaded, loading]);

  // Add markers to map (optimized)
  useEffect(() => {
    if (!map || !window.google || !locations.length) return;

    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null));
    const newMarkers: google.maps.Marker[] = [];

    const addMarker = (item: Location) => {
      if (!item.coordinates?.lat || !item.coordinates?.lng) return;

      const marker = new window.google.maps.Marker({
        position: { lat: item.coordinates.lat, lng: item.coordinates.lng },
        map,
        title: item.name,
        icon: {
          url: "https://i.postimg.cc/mgW95DJk/mapicon.png",
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 32),
        },
        optimized: true, // Performance optimization
      });

      marker.addListener("click", () => {
        handleQuickView(item, "location");
        map.panTo(marker.getPosition()!);
      });

      newMarkers.push(marker);
    };

    // Batch marker additions - only locations
    locations.forEach((loc) => addMarker(loc));

    setMarkers(newMarkers);

    // Fit bounds if markers exist
    if (newMarkers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      newMarkers.forEach((m) => bounds.extend(m.getPosition()!));
      map.fitBounds(bounds);

      const listener = google.maps.event.addListenerOnce(
        map,
        "bounds_changed",
        () => {
          if (map.getZoom()! > 11) map.setZoom(11);
        }
      );

      return () => {
        google.maps.event.removeListener(listener);
      };
    }
  }, [map, locations]);

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
    setView("list");
    setSelectedItem(null);
    setSearchQuery("");

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      window.history.pushState({}, "", url.toString());
    }
  }, []);

  const handleQuickView = useCallback(
    (item: Location | Provider, type: string) => {
      setSelectedItem(item);
      setView(type === "provider" ? "provider-single" : "location-single");
    },
    []
  );

  const handleBack = useCallback(() => {
    setView("list");
    setSelectedItem(null);
  }, []);

  const handleViewProvider = useCallback((slug: string) => {
    window.location.href = `/providers/${slug}`;
  }, []);

  const handleViewLocation = useCallback((slug: string) => {
    window.location.href = `${slug}`;
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  const renderStars = useCallback((rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`f-icon icon-star ${
            i <= Math.round(rating) ? "active" : ""
          }`}
          role="presentation"
          aria-label="Review Star"
        ></i>
      );
    }
    return stars;
  }, []);

  const calculateDistance = useCallback(
    (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 3958.8;
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLon = ((lon2 - lon1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    },
    []
  );

  const handleUseMyLocation = useCallback(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setUserLocation({ lat: userLat, lng: userLng });
        setIsLocating(false);

        if (map) {
          map.setCenter({ lat: userLat, lng: userLng });
          map.setZoom(11);
        }

        const locationsWithDistance = locations
          .map((loc) => ({
            ...loc,
            distance:
              loc.coordinates?.lat && loc.coordinates?.lng
                ? `${calculateDistance(
                    userLat,
                    userLng,
                    loc.coordinates.lat,
                    loc.coordinates.lng
                  ).toFixed(1)} mi`
                : "N/A",
          }))
          .sort((a, b) => {
            const distA = parseFloat(a.distance);
            const distB = parseFloat(b.distance);
            return distA - distB;
          });

        const providersWithDistance = providers
          .map((prov) => ({
            ...prov,
            distance:
              prov.coordinates?.lat && prov.coordinates?.lng
                ? `${calculateDistance(
                    userLat,
                    userLng,
                    prov.coordinates.lat,
                    prov.coordinates.lng
                  ).toFixed(1)} mi`
                : "N/A",
          }))
          .sort((a, b) => {
            const distA = parseFloat(a.distance);
            const distB = parseFloat(b.distance);
            return distA - distB;
          });

        setLocations(locationsWithDistance);
        setProviders(providersWithDistance);
        setFilteredLocations(locationsWithDistance);
        setFilteredProviders(providersWithDistance);
      },
      (error) => {
        setIsLocating(false);
        alert(
          "Unable to retrieve your location. Please enable location services."
        );
        console.error("Geolocation error:", error);
      }
    );
  }, [map, locations, providers, calculateDistance]);

  // Custom scrollbar effect
  useEffect(() => {
    const contentBody = contentBodyRef.current;
    const scrollbarHandle = scrollbarHandleRef.current;

    if (!contentBody || !scrollbarHandle) return;

    const updateScrollbar = () => {
      const scrollPercentage =
        contentBody.scrollTop /
        (contentBody.scrollHeight - contentBody.clientHeight);
      const maxScroll = contentBody.clientHeight - scrollbarHandle.clientHeight;
      scrollbarHandle.style.top = `${scrollPercentage * maxScroll}px`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollbar);
    };

    contentBody.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollbar();

    return () => {
      contentBody.removeEventListener("scroll", handleScroll);
    };
  }, [view, activeTab, filteredLocations, filteredProviders, selectedItem]);

  const getProviderLocations = useCallback(
    (provider: Provider) => {
      const locationIds = [
        provider.primaryLocationId,
        ...provider.additionalLocationIds,
      ];
      return locations.filter((loc) => locationIds.includes(loc.id));
    },
    [locations]
  );

  console.log({
    googleLoaded,
    hasDiv: !!mapRef.current,
    divSize: mapRef.current?.getBoundingClientRect(),
  });

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>Loading locations and providers...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (view === "provider-single" && selectedItem) {
    const providerLocations = getProviderLocations(selectedItem as Provider);

    return (
      <main id="main">
        <div className="mod_locator" data-s3-module="">
          <div className="locator">
            <section className="content-section">
              <div className="content-header">
                <div className="menu">
                  <div className="menu-icon">
                    <img
                      draggable="false"
                      src="https://i.postimg.cc/fW9XZbTX/search.png"
                      alt="Search"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="menu-item"
                    data-id="locations"
                    onClick={() => handleTabClick("locations")}
                  >
                    <h1>Locations</h1>
                  </div>
                  <div className="menu-item active" data-id="providers">
                    <h2>Providers</h2>
                  </div>
                </div>
                <div className="breadcrumb"></div>
                <div
                  className="use-my-location"
                  onClick={handleUseMyLocation}
                  style={{ cursor: "pointer" }}
                >
                  <div className="use-my-location-icon" title="Use my location">
                    <img
                      src="https://i.postimg.cc/tCzsCn0q/crosshair.png"
                      alt="Use my location"
                      loading="lazy"
                    />
                    <div
                      className={`use-my-location-icon-loader${
                        isLocating ? " active" : ""
                      }`}
                    >
                      &nbsp;
                    </div>
                  </div>
                  <div className="use-my-location-label">
                    <div>Use My Location</div>
                  </div>
                </div>
                <div className="search">
                  <div className="search-wrapper">
                    <input
                      id="google-search-input"
                      name="google-search-input"
                      className="google-search-input pac-target-input"
                      placeholder="Search by address or zip code"
                      defaultValue=""
                      autoComplete="off"
                    />
                    <input
                      id="provider-search-input"
                      name="provider-search-input"
                      className="provider-search-input"
                      placeholder="Search by provider name"
                      defaultValue=""
                    />
                    <div className="filter-pill">
                      <div className="name">Clear Lake</div>
                      <div className="close">✖</div>
                    </div>
                    <div
                      className="search-results-snippet active back"
                      onClick={handleBack}
                    >
                      &lt; Back
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-body" ref={contentBodyRef}>
                <div className="result-detail active providers">
                  <div className="result location">
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="detail-background"
                          draggable="false"
                          src={
                            (selectedItem as Provider).backgroundImage ||
                            "https://www.datocms-assets.com/105497/1694093825-clermont.jpg?auto=format,compress&w=1000"
                          }
                          alt="background"
                          loading="lazy"
                        />
                        <img
                          className="detail-picture"
                          draggable="false"
                          src={(selectedItem as Provider).image}
                          alt={selectedItem.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="foreground">
                        <div
                          className="quick-view-button"
                          onClick={() =>
                            handleViewProvider((selectedItem as Provider).slug)
                          }
                        >
                          View Provider
                        </div>
                        <div className="top-right">
                          <div className="reviews-stars">
                            {renderStars(selectedItem.reviews?.rating || 0)}
                          </div>
                          <div className="reviews-text">
                            {selectedItem.reviews?.count || 0} Reviews
                          </div>
                        </div>
                        <div className="bottom-left">
                          <div className="heading">{selectedItem.name}</div>
                          <div className="subheading-row">
                            <div>
                              <div className="location-icon">
                                <img
                                  src="https://i.postimg.cc/zXNf9YPw/location.png"
                                  alt="Location"
                                  loading="lazy"
                                />
                              </div>
                              <div className="location-distance">
                                {(selectedItem as Provider).distance}
                              </div>
                            </div>
                            <div className="view-relations">
                              <div className="relations-amount">1</div>
                              <div className="relations-text">
                                View Location
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-right">
                          <div className="location-name">
                            {(selectedItem as Provider).locationName}
                          </div>
                          <div className="location-distance-wrapper">
                            <div className="location-icon">
                              <img
                                src="https://i.postimg.cc/zXNf9YPw/location.png"
                                alt="Location"
                                loading="lazy"
                              />
                            </div>
                            <div className="location-distance">
                              {(selectedItem as Provider).distance}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div className="address">
                          {(selectedItem as Provider).address}
                        </div>
                        <a
                          className="get-directions"
                          href={
                            (selectedItem as Provider).googleMaps ||
                            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((selectedItem as Provider).address)}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ cursor: "pointer", color: "#fff" }}
                        >
                          Get Directions&gt;
                        </a>
                        <div className="hours hidden">Business Hours&gt;</div>
                      </div>
                      <div className="right">
                        <div
                          className="cta-button schedule"
                          data-type="provider"
                          data-id={selectedItem.id}
                          style={{ display: "none" }}
                        >
                          Schedule
                        </div>
                        <a
                          className="tel ppc-href"
                          href={`tel:${(selectedItem as Provider).phone.replace(
                            /[^0-9]/g,
                            ""
                          )}`}
                        >
                          {(selectedItem as Provider).phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="results">
                  <div className="results-container locations">
                    {providerLocations.slice(0, 1).map((location) => (
                      <div
                        key={location.id}
                        className="result location"
                        data-type="location"
                        data-id={location.id}
                      >
                        <div className="result-content">
                          <div className="background">
                            <img
                              draggable="false"
                              src={location.image}
                              alt={location.alt}
                              loading="lazy"
                            />
                          </div>
                          <div className="foreground">
                            <div
                              className="quick-view-button"
                              onClick={() =>
                                handleQuickView(location, "location")
                              }
                            >
                              Quick View
                            </div>
                            <div className="bottom-left">{location.name}</div>
                            <div className="bottom-right">
                              <div className="distance-icon">
                                <img
                                  src="https://i.postimg.cc/zXNf9YPw/location.png"
                                  alt="Location"
                                  loading="lazy"
                                />
                              </div>
                              <div className="distance">853</div>
                            </div>
                          </div>
                        </div>
                        <div className="result-footer">
                          <div className="left">
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id={location.id}
                            >
                              Schedule
                            </div>
                            <div
                              className="cta-link location"
                              data-type="location"
                              data-id={location.id}
                            >
                              View Location
                            </div>
                          </div>
                          <div className="right has-number">
                            <div className="icon-text">
                              <div className="result-footer-icon">
                                <img
                                  src="/assets/images/web.png"
                                  alt="View Location"
                                  loading="lazy"
                                />
                              </div>
                              <div
                                className="text view-website"
                                data-id={location.id}
                                data-type="location"
                              >
                                View Location
                              </div>
                            </div>
                            <div className="detail-phone-number">
                              <a
                                className="tel ppc-href"
                                href={`tel:+1${location.phone.replace(
                                  /[^0-9]/g,
                                  ""
                                )}`}
                                data-number={location.phone}
                                data-id={location.id}
                              >
                                <span className="ppc-number">
                                  {location.phone}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="results-container providers">
                    {providers.slice(0, 1).map((provider) => (
                      <div
                        key={provider.id}
                        className="result provider active"
                        data-type="provider"
                        data-id={provider.id}
                      >
                        <div className="result-content">
                          <div className="background">
                            <img
                              className="provider-background"
                              draggable="false"
                              src="/assets/images/provider-background.jpg?auto=format,compress&w=400"
                              alt={provider.name}
                              loading="lazy"
                            />
                            <img
                              className="provider-picture"
                              draggable="false"
                              src={provider.image}
                              alt={provider.name}
                              loading="lazy"
                            />
                          </div>
                          <div className="foreground">
                            <div
                              className="quick-view-button"
                              onClick={() =>
                                handleQuickView(provider, "provider")
                              }
                            >
                              Quick View
                            </div>
                            <div className="bottom-left">
                              {provider.name}{" "}
                              <span className="small">{provider.title}</span>
                            </div>
                            <div className="bottom-right">
                              <div className="distance">
                                {provider.distance}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="result-footer">
                          <div className="left">
                            <div className="icon-text">
                              <div className="result-footer-icon">
                                <img
                                  src="https://i.postimg.cc/9Qrc5DC1/web.png"
                                  alt="View Location"
                                  loading="lazy"
                                />
                              </div>
                              <div
                                className="text view-website"
                                data-id={provider.id}
                                data-type="provider"
                              >
                                View Provider
                              </div>
                            </div>
                          </div>
                          <div className="right show-number">
                            <div
                              className="cta-button schedule"
                              data-type="provider"
                              data-id={provider.id}
                            >
                              Schedule
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="carousel active">
                  <div
                    className="left-arrow"
                    aria-controls="tns2"
                    tabIndex={-1}
                    data-controls="prev"
                  >
                    ▸
                  </div>
                  <p className="carousel-heading">More Locations Near You</p>
                  <div className="carousel-content">
                    <div className="carousel-content-inner">
                      {providerLocations.map((location, index) => (
                        <div
                          key={location.id}
                          className={`carousel-item tns-item${
                            index === 0 ? " tns-slide-active active" : ""
                          }`}
                          data-id={location.id}
                          data-type="location"
                          id={`tns2-item${index}`}
                        >
                          <div
                            className="carousel-item-image-wrapper"
                            data-id={location.id}
                            data-type="location"
                            onClick={() =>
                              handleQuickView(location, "location")
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              className="carousel-item-image"
                              src={location.image}
                              alt={location.alt}
                              loading="lazy"
                            />
                          </div>
                          <div
                            className="cta-button schedule"
                            data-type="location"
                            data-id={location.id}
                          >
                            Schedule
                          </div>
                          <div className="carousel-item-name">
                            {location.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="right-arrow"
                    aria-controls="tns2"
                    tabIndex={-1}
                    data-controls="next"
                  >
                    ▸
                  </div>
                </div>

                <div className="content-body-scrollbar active">
                  <div className="content-body-scrollbar-line"></div>
                  <div
                    ref={scrollbarHandleRef}
                    className="content-body-scrollbar-handle"
                    style={{ height: "78%", top: "0%" }}
                  ></div>
                </div>
              </div>
            </section>

            <MapSection mapRef={mapRef} />

            <section className="mobile-footer-tabs">
              <div className="mobile-footer-tab active" data-action="details">
                Details
              </div>
              <div className="mobile-footer-tab" data-action="map">
                Map
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }

  if (view === "location-single" && selectedItem) {
    const otherLocations = locations.filter((l) => l.id !== selectedItem.id);

    return (
      <main id="main">
        <div className="mod_locator" data-s3-module="">
          <div className="locator">
            <section className="content-section">
              <div className="content-header">
                <div className="menu">
                  <div className="menu-icon">
                    <img
                      draggable="false"
                      src="https://i.postimg.cc/fW9XZbTX/search.png"
                      alt="Search"
                      loading="lazy"
                    />
                  </div>
                  <div className="menu-item active" data-id="locations">
                    <h1>Locations</h1>
                  </div>
                  <div
                    className="menu-item"
                    data-id="providers"
                    onClick={() => handleTabClick("providers")}
                  >
                    <h2>Providers</h2>
                  </div>
                </div>
                <div className="breadcrumb"></div>
                <div
                  className="use-my-location"
                  onClick={handleUseMyLocation}
                  style={{ cursor: "pointer" }}
                >
                  <div className="use-my-location-icon" title="Use my location">
                    <img
                      src="https://i.postimg.cc/tCzsCn0q/crosshair.png"
                      alt="Use my location"
                      loading="lazy"
                    />
                    <div
                      className={`use-my-location-icon-loader${
                        isLocating ? " active" : ""
                      }`}
                    >
                      &nbsp;
                    </div>
                  </div>
                  <div className="use-my-location-label">
                    <div>Use My Location</div>
                  </div>
                </div>
                <div className="search">
                  <div className="search-wrapper">
                    <input
                      id="google-search-input"
                      name="google-search-input"
                      className="google-search-input pac-target-input active"
                      placeholder="Search by address or zip code"
                      defaultValue=""
                      autoComplete="off"
                    />
                    <input
                      id="provider-search-input"
                      name="provider-search-input"
                      className="provider-search-input"
                      placeholder="Search by provider name"
                      defaultValue=""
                    />
                    <div className="filter-pill">
                      <div className="name">Clear Lake</div>
                      <div className="close">✖</div>
                    </div>
                    <div
                      className="search-results-snippet active back"
                      onClick={handleBack}
                    >
                      &lt; Back
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-body" ref={contentBodyRef}>
                <div className="result-detail active locations">
                  <div className="result location">
                    <div className="result-content">
                      <div className="background">
                        <img
                          className="detail-background"
                          draggable="false"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          alt=""
                          role="presentation"
                        />
                        <img
                          className="detail-picture"
                          draggable="false"
                          src={(selectedItem as Location).image}
                          alt={(selectedItem as Location).alt}
                          loading="lazy"
                        />
                      </div>
                      <div className="foreground">
                        <div
                          className="quick-view-button"
                          onClick={() =>
                            handleViewLocation((selectedItem as Location).slug)
                          }
                        >
                          View Location
                        </div>
                        <div className="top-right active">
                          <div className="reviews-stars">
                            {renderStars(selectedItem.reviews?.rating || 0)}
                          </div>
                          <div className="reviews-text">
                            {selectedItem.reviews?.count || 0} Reviews
                          </div>
                        </div>
                        <div className="bottom-left">
                          <div className="heading">{selectedItem.name}</div>
                          <div className="subheading-row">
                            <div>
                              <div className="location-icon active">
                                <img
                                  src="https://i.postimg.cc/zXNf9YPw/location.png"
                                  alt="Location"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div className="view-relations">
                              <div className="relations-amount">
                                {
                                  providers.filter(
                                    (p) => p.locationName === selectedItem.name
                                  ).length
                                }
                              </div>
                              <div className="relations-text">
                                View Provider
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-right">
                          <div className="location-name">&nbsp;</div>
                          <div className="location-distance-wrapper">
                            <div className="location-icon active">
                              <img
                                src="https://i.postimg.cc/zXNf9YPw/location.png"
                                alt="Location"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-footer">
                      <div className="left">
                        <div className="address">
                          {(selectedItem as Location).address}
                        </div>
                        <a
                          className="get-directions"
                          href={
                            (selectedItem as Location).googleMaps ||
                            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((selectedItem as Location).address)}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ cursor: "pointer", color: "#fff" }}
                        >
                          Get Directions&gt;
                        </a>
                        <div className="hours hidden">Business Hours&gt;</div>
                      </div>
                      <div className="right">
                        <div
                          className="cta-button schedule"
                          data-type="location"
                          data-id={selectedItem.id}
                          style={{ display: "block" }}
                        >
                          Schedule
                        </div>
                        <a
                          className="tel ppc-href"
                          href={`tel:${(selectedItem as Location).phone.replace(
                            /[^0-9]/g,
                            ""
                          )}`}
                        >
                          {(selectedItem as Location).phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="results-container locations">
                    {locations.slice(0, 3).map((location) => (
                      <div
                        key={location.id}
                        className={`result location ${
                          location.id === selectedItem.id ? "active" : ""
                        }`}
                        data-type="location"
                        data-id={location.id}
                      >
                        <div className="result-content">
                          <div className="background">
                            <img
                              draggable="false"
                              src={location.image}
                              alt={location.alt}
                              loading="lazy"
                            />
                          </div>
                          <div className="foreground">
                            <div
                              className="quick-view-button"
                              onClick={() =>
                                handleQuickView(location, "location")
                              }
                            >
                              Quick View
                            </div>
                            <div className="bottom-left">{location.name}</div>
                            <div className="bottom-right">
                              <div className="distance-icon">
                                <img
                                  src="https://i.postimg.cc/zXNf9YPw/location.png"
                                  alt="Location"
                                  loading="lazy"
                                />
                              </div>
                              <div className="distance"></div>
                            </div>
                          </div>
                        </div>
                        <div className="result-footer">
                          <div className="left">
                            <div
                              className="cta-button schedule"
                              data-type="location"
                              data-id={location.id}
                            >
                              Schedule
                            </div>
                            <div
                              className="cta-link location"
                              data-type="location"
                              data-id={location.id}
                            >
                              View Location
                            </div>
                          </div>
                          <div className="right has-number show-number">
                            <div className="icon-text">
                              <div className="result-footer-icon">
                                <img
                                  src="https://i.postimg.cc/9Qrc5DC1/web.png"
                                  alt="View Location"
                                  loading="lazy"
                                />
                              </div>
                              <div
                                className="text view-website"
                                data-id={location.id}
                                data-type="location"
                              >
                                View Location
                              </div>
                            </div>
                            <div className="detail-phone-number">
                              <a
                                className="tel ppc-href"
                                href={`tel:+1${location.phone.replace(
                                  /[^0-9]/g,
                                  ""
                                )}`}
                                data-number={location.phone}
                                data-id={location.id}
                              >
                                <span className="ppc-number">
                                  {location.phone}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="results-container providers">
                    {providers.slice(0, 2).map((provider) => (
                      <div
                        key={provider.id}
                        className="result provider active"
                        data-type="provider"
                        data-id={provider.id}
                      >
                        <div className="result-content">
                          <div className="background">
                            <img
                              className="provider-background"
                              draggable="false"
                              src="/assets/images/provider-background.jpg?auto=format,compress&amp;w=400"
                              alt={provider.name}
                              loading="lazy"
                            />
                            <img
                              className="provider-picture"
                              draggable="false"
                              src={provider.image}
                              alt={provider.name}
                              loading="lazy"
                            />
                          </div>
                          <div className="foreground">
                            <div
                              className="quick-view-button"
                              onClick={() =>
                                handleQuickView(provider, "provider")
                              }
                            >
                              Quick View
                            </div>
                            <div className="bottom-left">
                              {provider.name}{" "}
                              <span className="small">{provider.title}</span>
                            </div>
                            <div className="bottom-right">
                              <div className="distance">
                                {provider.distance}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="result-footer">
                          <div className="left">
                            <div className="icon-text">
                              <div className="result-footer-icon">
                                <img
                                  src="https://i.postimg.cc/9Qrc5DC1/web.png"
                                  alt="View Location"
                                  loading="lazy"
                                />
                              </div>
                              <div
                                className="text view-website"
                                data-id={provider.id}
                                data-type="provider"
                              >
                                View Provider
                              </div>
                            </div>
                          </div>
                          <div className="right show-number">
                            <div
                              className="cta-button schedule"
                              data-type="provider"
                              data-id={provider.id}
                            >
                              Schedule
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="content-body-scrollbar active">
                  <div className="content-body-scrollbar-line"></div>
                  <div
                    ref={scrollbarHandleRef}
                    className="content-body-scrollbar-handle"
                    style={{ height: "13%", top: "0%" }}
                  ></div>
                </div>
              </div>
            </section>
            <MapSection mapRef={mapRef} />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      <div className="mod_locator" data-s3-module="">
        <div className="locator">
          <section className="content-section">
            <div className="content-header">
              <div className="menu">
                <div className="menu-icon">
                  <img
                    draggable="false"
                    src="https://i.postimg.cc/fW9XZbTX/search.png"
                    alt="Search"
                    loading="lazy"
                  />
                </div>
                <div
                  className={`menu-item ${
                    activeTab === "locations" ? "active" : ""
                  }`}
                  data-id="locations"
                  onClick={() => handleTabClick("locations")}
                >
                  <h1>Locations</h1>
                </div>
                <div
                  className={`menu-item ${
                    activeTab === "providers" ? "active" : ""
                  }`}
                  data-id="providers"
                  onClick={() => handleTabClick("providers")}
                >
                  <h2>Providers</h2>
                </div>
              </div>
              <div className="breadcrumb"></div>
              <div
                className="use-my-location"
                onClick={handleUseMyLocation}
                style={{ cursor: "pointer" }}
              >
                <div className="use-my-location-icon" title="Use my location">
                  <img
                    src="https://i.postimg.cc/tCzsCn0q/crosshair.png"
                    alt="Use my location"
                    loading="lazy"
                  />
                  <div
                    className={`use-my-location-icon-loader${isLocating ? " active" : ""}`}
                  >
                    &nbsp;
                  </div>
                </div>
                <div className="use-my-location-label">
                  <div>Use My Location</div>
                </div>
              </div>
              <div className="search">
                <div className="search-wrapper">
                  <input
                    id="google-search-input"
                    name="google-search-input"
                    className={`google-search-input pac-target-input ${
                      activeTab === "locations" ? "active" : ""
                    }`}
                    placeholder="Search by address or zip code"
                    value={activeTab === "locations" ? searchQuery : ""}
                    onChange={handleSearchChange}
                    autoComplete="off"
                  />
                  <input
                    id="provider-search-input"
                    name="provider-search-input"
                    className={`provider-search-input ${
                      activeTab === "providers" ? "active" : ""
                    }`}
                    placeholder="Search by provider name"
                    value={activeTab === "providers" ? searchQuery : ""}
                    onChange={handleSearchChange}
                  />

                  <div className="filter-pill">
                    <div className="name">Clear Lake</div>
                    <div className="close">✖</div>
                  </div>
                  <div className="search-results-snippet active">
                    {activeTab === "providers"
                      ? `${filteredProviders.length} Providers`
                      : `${filteredLocations.length} Locations`}
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              <div
                className={`result-detail ${
                  activeTab === "providers" ? "providers" : "locations"
                }`}
              >
                <div className="result location">
                  <div className="result-content">
                    <div className="background">
                      <img
                        className="detail-background"
                        draggable="false"
                        src=""
                        alt=""
                      />
                      <img
                        className="detail-picture"
                        draggable="false"
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="foreground">
                      <div className="quick-view-button">View Website</div>
                      <div className="top-right">
                        <div className="reviews-stars">
                          <i
                            className="f-icon icon-star active"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                          <i
                            className="f-icon icon-star"
                            role="presentation"
                            aria-label="Review Star"
                          ></i>
                        </div>
                        <div className="reviews-text">0 Reviews</div>
                      </div>
                      <div className="bottom-left">
                        <div className="heading">Clearwater</div>
                        <div className="subheading-row">
                          <div>
                            <div className="location-icon">
                              <img
                                src="https://i.postimg.cc/zXNf9YPw/location.png"
                                alt="Location"
                                loading="lazy"
                              />
                            </div>
                            <div className="location-distance">&nbsp;</div>
                          </div>
                          <div className="view-relations">
                            <div className="relations-amount"></div>
                            <div className="relations-text"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-right">
                        <div className="location-name">&nbsp;</div>
                        <div className="location-distance-wrapper">
                          <div className="location-icon">
                            <img
                              src="https://i.postimg.cc/zXNf9YPw/location.png"
                              alt="Location"
                              loading="lazy"
                            />
                          </div>
                          <div className="location-distance">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-footer">
                    <div className="left">
                      <div className="address">
                        2745 Fl-580 Suite 101, Clearwater, FL 33761
                      </div>
                      <div className="get-directions">Get Directions&gt;</div>
                      <div className="hours">Business Hours&gt;</div>
                    </div>
                    <div className="right">
                      <div className="cta-button schedule">
                        Schedule Appointment
                      </div>
                      <a className="tel ppc-href" href="tel:+17273789338">
                        <span className="ppc-number">(727) 378-9338</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="results">
                <div
                  className={`results-container locations ${
                    activeTab === "locations" ? "active" : ""
                  }`}
                >
                  {filteredLocations.map((location) => (
                    <div
                      key={location.id}
                      className="result location active"
                      data-type="location"
                      data-id={location.id}
                    >
                      <div className="result-content">
                        <div className="background">
                          <img
                            draggable="false"
                            src={location.image}
                            alt={location.alt}
                            loading="lazy"
                          />
                        </div>
                        <div className="foreground">
                          <div
                            className="quick-view-button"
                            onClick={() =>
                              handleQuickView(location, "location")
                            }
                            style={{ cursor: "pointer" }}
                          >
                            Quick View
                          </div>
                          <div className="bottom-left">{location.name}</div>
                          <div className="bottom-right">
                            <div className="distance-icon">
                              <img
                                src="https://i.postimg.cc/zXNf9YPw/location.png"
                                alt="Location"
                                loading="lazy"
                              />
                            </div>
                            <div className="distance"></div>
                          </div>
                        </div>
                      </div>
                      <div className="result-footer">
                        <div className="left">
                          <div
                            className="cta-button schedule"
                            data-type="location"
                            data-id={location.id}
                          >
                            Schedule
                          </div>
                          <div
                            className="cta-link location"
                            data-type="location"
                            data-id={location.id}
                            onClick={() => handleViewLocation(location.slug)}
                            style={{ cursor: "pointer" }}
                          >
                            View Location
                          </div>
                        </div>
                        <div className="right has-number">
                          <div className="icon-text">
                            <div className="result-footer-icon">
                              <img
                                src="https://i.postimg.cc/9Qrc5DC1/web.png"
                                alt="View Location"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="text view-website"
                              data-id={location.id}
                              data-type="location"
                              onClick={() => handleViewLocation(location.slug)}
                              style={{ cursor: "pointer" }}
                            >
                              View Location
                            </div>
                          </div>
                          <div className="detail-phone-number">
                            <a
                              className="tel ppc-href"
                              href={`tel:+1${location.phone.replace(
                                /[^0-9]/g,
                                ""
                              )}`}
                              data-number={location.phone}
                              data-id={location.id}
                            >
                              <span className="ppc-number">
                                {location.phone}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`results-container providers ${
                    activeTab === "providers" ? "active" : ""
                  }`}
                >
                  {filteredProviders.map((provider) => (
                    <div
                      key={provider.id}
                      className="result provider active"
                      data-type="provider"
                      data-id={provider.id}
                    >
                      <div className="result-content">
                        <div className="background">
                          <img
                            className="provider-background"
                            draggable="false"
                            src="/assets/images/provider-background.jpg?auto=format,compress&w=400"
                            alt={provider.name}
                            loading="lazy"
                          />
                          <img
                            className="provider-picture"
                            draggable="false"
                            src={provider.image}
                            alt={provider.name}
                            loading="lazy"
                          />
                        </div>
                        <div className="foreground">
                          <div
                            className="quick-view-button"
                            onClick={() =>
                              handleQuickView(provider, "provider")
                            }
                          >
                            Quick View
                          </div>
                          <div className="bottom-left">
                            {provider.name}{" "}
                            <span className="small">{provider.title}</span>
                          </div>
                          <div className="bottom-right">
                            <div className="distance">{provider.distance}</div>
                          </div>
                        </div>
                      </div>
                      <div className="result-footer">
                        <div className="left">
                          <div className="icon-text">
                            <div className="result-footer-icon">
                              <img
                                src="https://i.postimg.cc/9Qrc5DC1/web.png"
                                alt="View Location"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="text view-website"
                              data-id={provider.id}
                              data-type="provider"
                              onClick={() => handleViewProvider(provider.slug)}
                            >
                              View Provider
                            </div>
                          </div>
                        </div>
                        <div className="right show-number">
                          <div
                            className="cta-button schedule"
                            data-type="provider"
                            data-id={provider.id}
                          >
                            Schedule
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-body-scrollbar active">
                <div className="content-body-scrollbar-line"></div>
                <div
                  ref={scrollbarHandleRef}
                  className="content-body-scrollbar-handle"
                  style={{ height: "17%", top: "0%" }}
                ></div>
              </div>
            </div>
          </section>

          <MapSection mapRef={mapRef} />

          <section className="mobile-footer-tabs">
            <div className="mobile-footer-tab active" data-action="details">
              Details
            </div>
            <div className="mobile-footer-tab" data-action="map">
              Map
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProviderLocator;