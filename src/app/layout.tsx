import type { Metadata, Viewport } from "next";
import { LenisProvider } from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import { untitledSans, tronicaMono, atHaussMono, pixelFont } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Manas AI — Agency & Studio",
  description: "We design aligned intelligence systems for high-performers and hungry teams with precision, leverage and taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${untitledSans.variable} ${tronicaMono.variable} ${atHaussMono.variable} ${pixelFont.variable}`}>
      <body className="bg-black text-white antialiased">
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
