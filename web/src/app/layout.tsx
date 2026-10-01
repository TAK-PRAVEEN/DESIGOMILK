import type { Metadata, Viewport } from "next";
// Self-hosted variable fonts (no runtime dependency on Google Fonts)
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "DESIGO® Milk — From the Source",
  description: "Traceable milk from indigenous Indian cows, delivered in returnable glass. Design demo.",
  robots: { index: false, follow: false }, // design demo — not for indexing
};

export const viewport: Viewport = { themeColor: "#F7F4EC" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
