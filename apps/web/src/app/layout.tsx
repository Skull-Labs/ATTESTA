import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attesta",
  description: "Academic certificates on Stellar — frontend template",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
