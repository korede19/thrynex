import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Preloader from "@/components/pre-loader";
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
      <body className={inter.className}>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
