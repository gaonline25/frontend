// import { useEffect, useRef } from "react";

// interface GoogleMapProps {
//   latitude: number;
//   longitude: number;
//   zoom?: number;
//   markerTitle?: string;
//   className?: string;
// }

// declare global {
//   interface Window {
//     google: any;
//     initMap: () => void;
//   }
// }

// export default function GoogleMap({
//   latitude,
//   longitude,
//   zoom = 15,
//   markerTitle = "Location",
//   className = "",
// }: GoogleMapProps) {
//   const mapRef = useRef<HTMLDivElement>(null);
//   const mapInstanceRef = useRef<any>(null);

//   useEffect(() => {
//     const initializeMap = () => {
//       if (!mapRef.current || !window.google) return;

//       const position = { lat: latitude, lng: longitude };

//       const map = new window.google.maps.Map(mapRef.current, {
//         center: position,
//         zoom: zoom,
//         mapTypeControl: true,
//         streetViewControl: false,
//         fullscreenControl: true,
//       });

//       new window.google.maps.Marker({
//         position: position,
//         map: map,
//         title: markerTitle,
//       });

//       mapInstanceRef.current = map;
//     };

//     if (window.google && window.google.maps) {
//       initializeMap();
//     } else {
//       const checkGoogleMaps = setInterval(() => {
//         if (window.google && window.google.maps) {
//           clearInterval(checkGoogleMaps);
//           initializeMap();
//         }
//       }, 100);

//       return () => clearInterval(checkGoogleMaps);
//     }
//   }, [latitude, longitude, zoom, markerTitle]);

//   return (
//     <div
//       ref={mapRef}
//       className={className}
//       style={{
//         width: "100%",
//         height: "100%",
//         minHeight: "300px",
//       }}
//     />
//   );
// }



import { useEffect, useRef } from "react";

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  markerTitle?: string;
  className?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function GoogleMap({
  latitude,
  longitude,
  zoom = 15,
  markerTitle = "Location",
  className = "",
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const position = { lat: latitude, lng: longitude };

      const map = new window.google.maps.Map(mapRef.current, {
        center: position,
        zoom: zoom,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      });

      new window.google.maps.Marker({
        position: position,
        map: map,
        title: markerTitle,
      });

      mapInstanceRef.current = map;
    };

    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkGoogleMaps);
          initializeMap();
        }
      }, 100);

      return () => clearInterval(checkGoogleMaps);
    }
  }, [latitude, longitude, zoom, markerTitle]);

  return (
    <div
      ref={mapRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
      }}
    />
  );
}
