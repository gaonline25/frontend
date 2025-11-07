import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export const useLoadGoogleMaps = (apiKey: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setLoaded(true);
      return;
    }

    const existing = document.getElementById("google-maps-script");
    if (existing) {
      existing.addEventListener("load", () => setLoaded(true));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => console.error("❌ Google Maps failed to load");
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [apiKey]);

  return loaded;
};
