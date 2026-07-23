import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://goldfingersaesthetics.com"),

  title: "Book an Appointment | Goldfingers Aesthetics Med Spa",

  description:
    "Schedule your free consultation at Goldfingers Aesthetics, Florida's premier med spa. Book online today for Botox, fillers, and aesthetic treatments.",

  alternates: {
    canonical: "https://goldfingersaesthetics.com/book-appointment",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}