import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School IDE",
  description:
    "Moderní studijní platforma s AI nástroji, poznámkami, testy a organizací učení.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        {children}
      </body>
    </html>
  );
}
