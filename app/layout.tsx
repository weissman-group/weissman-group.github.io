import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "./site-components";
import "./globals.css";

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://weissman-group.github.io";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "Weissman Research Group · Stanford University",
    template: "%s · Weissman Research Group",
  },
  description:
    "The Weissman Research Group at Stanford studies information theory, compression, learning, inference, and applications across science and technology.",
  authors: [{ name: "Weissman Research Group" }],
  keywords: [
    "information theory",
    "data compression",
    "statistical inference",
    "machine learning",
    "Stanford University",
    "Tsachy Weissman",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Weissman Research Group",
    title: "Weissman Research Group · Stanford University",
    description:
      "The science of information—from first principles to useful systems.",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 907,
        alt: "Weissman Research Group — The science of information.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weissman Research Group · Stanford University",
    description:
      "The science of information—from first principles to useful systems.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f0e7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
