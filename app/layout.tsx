import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const head = Libre_Franklin({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-head",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ujwal Bagalkoti | Full-Stack Developer & AI Engineer",
  description:
    "Explore Ujwal Bagalkoti’s software engineering portfolio: full-stack applications, Python and Node.js backends, AI/ML projects, and developer tools. Based in Bengaluru, India.",
  openGraph: {
    title: "Ujwal Bagalkoti | Full-Stack Developer & AI Engineer",
    description:
      "Software engineering projects spanning React, Next.js, Python, Node.js, backend APIs, and practical AI products.",
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${head.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-paper dark:bg-night min-h-screen transition-colors">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
