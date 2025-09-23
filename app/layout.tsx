import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chopan Foundation - Serving Needy Children, Widows & Families with Love",
  description: "Bringing Hope, Faith & Care to the Needy in Faisalabad, Pakistan. Supporting families with monthly rations, school supplies, and community care since 2021.",
  keywords: "charity, foundation, Pakistan, Faisalabad, children, widows, families, donations, non-profit",
  authors: [{ name: "Chopan Foundation" }],
  openGraph: {
    title: "Chopan Foundation - Serving with Love",
    description: "Supporting needy children, widows & families in Faisalabad, Pakistan",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
