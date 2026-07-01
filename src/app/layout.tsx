import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. Solo Bangun Pratama | General Contractor & Supplier",
  description: "PT. Solo Bangun Pratama adalah perusahaan jasa konstruksi, general contractor, dan supplier terpercaya di Surakarta dan Jawa Tengah. Berpengalaman menangani proyek komersial, residensial, dan fasilitas publik 0-20 M.",
  keywords: "kontraktor solo, pemborong jawa tengah, jasa konstruksi, renovasi gedung, supplier material alam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}