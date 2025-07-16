import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-quantico",
});

export const metadata: Metadata = {
  title: "Beyond the Syllabus",
  description: "Your go-to resource for computer science concepts, programming tutorials, and technology insights. Learn algorithms, data structures, and modern development practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quantico.variable} antialiased bg-[#fef0f0] font-quantico`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
