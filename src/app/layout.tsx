import type { Metadata } from "next";
import { Orbitron, Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "Infrared Sensor-Based Virtual Keyboard | Holographic Laser Projection LPVK",
  description:
    "Futuristic LPVK experience featuring laser projection, infrared sensing, holographic UI, research content, and immersive 3D viewer.",
  metadataBase: new URL("https://lpvk.local"),
  keywords: [
    "LPVK",
    "Virtual Keyboard",
    "Laser Projection",
    "Infrared Sensing",
    "Holographic UI",
  ],
  openGraph: {
    title: "Infrared Sensor-Based Virtual Keyboard (LPVK)",
    description:
      "Touchless typing powered by holographic laser projection and infrared sensing with immersive 3D viewer.",
    url: "https://lpvk.local",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${exo.variable} laser-gradient antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-70 blur-[160px]" />
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#00eaff]/30 blur-3xl" />
          <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-[#ff0033]/20 blur-3xl" />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
