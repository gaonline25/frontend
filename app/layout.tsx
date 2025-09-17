"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CustomHead from "../components/CustomHead";
import BodyScripts from "../components/BodyScripts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CustomHead />
      <body className="home sticky-header">
        <Navbar />
        {children}
        <Footer />
        <BodyScripts />
      </body>
    </html>
  );
}
