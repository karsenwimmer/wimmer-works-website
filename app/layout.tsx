import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wimmer Works Paint & Stain",
  description:
    "Professional painting and staining in Oakville, Burlington, and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
