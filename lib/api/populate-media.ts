// lib/api/populate-media.ts
const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";

/**
 * Fetch a single media item by ID
 */
async function fetchMediaById(id: string): Promise<any> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/api/media/${id}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch media ${id}: ${res.status}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching media ${id}:`, error);
    return null;
  }
}

/**
 * Recursively populate all media fields in an object
 */
export async function populateMediaFields(obj: any): Promise<any> {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  // If it's an array, process each item
  if (Array.isArray(obj)) {
    return Promise.all(obj.map((item) => populateMediaFields(item)));
  }

  // Create a new object to store populated data
  const populated: any = {};

  // Process each key in the object
  for (const key of Object.keys(obj)) {
    const value = obj[key];

    // Check if this looks like a media ID (24-character hex string)
    if (
      typeof value === "string" &&
      value.length === 24 &&
      /^[a-f0-9]+$/i.test(value) &&
      (key === "logo" ||
        key === "image" ||
        key === "media" ||
        key === "mapImage" ||
        key === "backgroundImage" ||
        key === "ogImage")
    ) {
      // Fetch the media object
      const mediaData = await fetchMediaById(value);
      populated[key] = mediaData || value; // Keep ID if fetch fails
    } else if (typeof value === "object" && value !== null) {
      // Recursively populate nested objects
      populated[key] = await populateMediaFields(value);
    } else {
      populated[key] = value;
    }
  }

  return populated;
}
