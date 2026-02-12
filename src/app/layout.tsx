import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CursorProvider } from "@/components/CastangiaCursor";
import { Preloader } from "@/components/Preloader";
import { AudioAmbience } from "@/components/AudioAmbience";
import { FilmGrain } from "@/components/FilmGrain";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Castangia 1850 | Heritage of Excellence",
  description: "Italian Bespoke Tailoring since 1850.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-charcoal cursor-none`}
      >
        <SmoothScrolling>
          <FilmGrain />
          <CursorProvider>
            <Preloader />
            <Navigation />
            {children}
            <Footer />
            <AudioAmbience />
          </CursorProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
