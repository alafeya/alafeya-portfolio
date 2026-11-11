import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alafeya Qaiser — Developer & Creative Technologist",
  description: "Portfolio of Alafeya Qaiser: web development, full-stack projects and creative digital work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
