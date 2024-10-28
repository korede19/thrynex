import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Preloader from "@/components/pre-loader";
import Head from "next/head"; // Import Head for dynamic head content
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thrynex",
  description:
    "ThryNex excels in delivering Integrated Business Digital Solutions, merging economic analysis and digital technologies for your enterprise's growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/assets/home-Banner1.png" as="image" />
        <link rel="preload" href="/assets/Home-banner-2.png" as="image" />
        <link rel="preload" href="/assets/Home-banner3.png" as="image" />
      </Head>
      <body className={inter.className}>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
