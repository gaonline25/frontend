const PAYLOAD_API_URL = "https://goldfingerbackend.vercel.app/api";

export async function fetchVideoGalleryData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/video-gallery-component?depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch video gallery data");
    }

    const data = await res.json();

    // Filter active components and return the first one
    const activeComponent =
      data.docs?.find((component: any) => component.isActive) || null;

    return activeComponent;
  } catch (error) {
    console.error("Error fetching video gallery data:", error);
    return null;
  }
}

export function getImageUrl(imageField: any): string {
  if (!imageField) return "";

  if (typeof imageField === "object" && imageField.cloudinary_url) {
    return imageField.cloudinary_url;
  }

  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }

  if (typeof imageField === "string") {
    return imageField;
  }

  return "";
}

export function getResponsiveImageUrls(imageGroup: any) {
  if (!imageGroup) {
    return {
      mobile: "",
      tablet: "",
      desktop: "",
      large: "",
      alt: "",
    };
  }

  return {
    mobile: getImageUrl(imageGroup.mobile),
    tablet: getImageUrl(imageGroup.tablet),
    desktop: getImageUrl(imageGroup.desktop),
    large: getImageUrl(imageGroup.large),
    alt: imageGroup.alt || "",
  };
}

export function extractYouTubeVideoId(url: string): string {
  if (!url) return "";

  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[7].length === 11 ? match[7] : "";
}

export function getYouTubeThumbnail(url: string): string {
  const videoId = extractYouTubeVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg?1=1`
    : "";
}
