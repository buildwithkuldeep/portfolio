import "./globals.css";
import "../app/nprogress.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";
import ClientRouterEvents from "../components/ClientRouterEvents";

export const metadata = {
  title: "Kuldeep Kumar | Full Stack Developer",
  description:
    "Portfolio of Kuldeep Kumar – MERN Stack & Full Stack Developer skilled in React, Next.js, Node.js, Tailwind, and modern UI applications.",
  keywords: [
    "Kuldeep Kumar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
  ],
  metadataBase: new URL("https://your-domain.com"), // update when deployed

  openGraph: {
    title: "Kuldeep Kumar | Full Stack Developer",
    description:
      "Explore modern MERN stack and Next.js projects created by Kuldeep Kumar.",
    url: "https://your-domain.com",
    siteName: "Kuldeep.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kuldeep Kumar Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Kumar | Full Stack Developer",
    description:
      "Explore MERN stack applications and creative web experiences by Kuldeep Kumar.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">

        {/* 🔵 PAGE LOADING PROGRESS BAR */}
        <ClientRouterEvents />

        {/* 🔵 NAVBAR */}
        <Navbar />

        {/* 🔵 PAGE CONTENT WITH TRANSITIONS */}
        <main className="min-h-screen pt-20">
          <AnimatedLayout>{children}</AnimatedLayout>
        </main>

        {/* 🔵 FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
