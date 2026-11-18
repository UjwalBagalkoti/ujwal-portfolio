import type { Metadata, Viewport } from "next";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/700.css";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} – ${site.role}`,
  description: site.intro,
  openGraph: { title: site.name, description: site.role + " based in " + site.location, url: site.url, type: "website", images: ["/photo.jpg"] },
};
export const viewport: Viewport = { themeColor: "#0C1B2E" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-sun focus:px-3 focus:py-2">Skip to projects</a>
        {children}
      </body>
    </html>
  );
}
