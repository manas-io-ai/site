import type { Metadata } from "next";
import { LenisProvider } from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import { untitledSans, tronicaMono, atHaussMono, pixelFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grilled Pixels — Design & Engineering",
  description: "I bring the unexpected to brand & digital experiences. Design, engineering, and creative development.",
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
