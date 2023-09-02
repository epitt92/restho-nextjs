import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restho Restaurant",
  description: "Come and have a great experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/public/next.svg" />
      <meta property="og:title" content="Restho" />
      <meta property="og:description" content="A restuarant." />
      <meta
        property="og:image"
        content="https://waitlist.medxoca.com/assets/img/hero-img.jpg"
      />
      <meta property="og:url" content="https://medxoca.com"></meta>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
