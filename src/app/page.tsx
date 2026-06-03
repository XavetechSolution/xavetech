import Aboutus from "@/app/components/Home/AboutUs";
import Articles from "@/app/components/Home/Articles";
import Beliefs from "@/app/components/Home/Beliefs";
import Dedicated from "@/app/components/Home/Dedicated";
import Digital from "@/app/components/Home/Digital";
import FAQ from "@/app/components/Home/FAQ";
import Featured from "@/app/components/Home/Featured";
import Hero from "@/app/components/Home/Hero";
import Join from "@/app/components/Home/Joinus";
import Manage from "@/app/components/Home/Manage";
import Team from "@/app/components/Home/Team";
import Testimonial from "@/app/components/Home/Testimonials";
import Work from "@/app/components/Home/Work";
import { Metadata } from "next";
import TechStack from "./components/Home/TechStack";

export const metadata: Metadata = {
  metadataBase: new URL("https://xavetech.ng"),

  title: {
    default: "XaveTech Solutions | Web Development, Branding & Digital Growth",
    template: "%s | XaveTech Solutions",
  },

  description:
    "XaveTech helps businesses grow online through website development, mobile app development, social media management, content creation, SEO, branding, and e-commerce solutions.",

  keywords: [
    "web development",
    "website design",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "SEO services",
    "social media management",
    "content creation",
    "branding",
    "digital marketing",
    "e-commerce website",
    "Shopify development",
    "business website",
    "Nigeria web development",
    "XaveTech",
  ],

  authors: [{ name: "XaveTech" }],
  creator: "XaveTech",
  publisher: "XaveTech",

  openGraph: {
    title: "XaveTech",
    description:
      "Helping businesses get seen online through web development, branding, social media management, SEO, and content creation.",
    url: "https://xavetech.ng",
    siteName: "XaveTech",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XaveTech",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "XaveTech",
    description:
      "Helping businesses get seen online through websites, apps, branding, SEO, and digital marketing.",
    images: ["/images/og-image.jpg"],
    creator: "@xavetech1",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://xavetech.ng",
  },

  category: "Technology",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Dedicated />
      <Aboutus />
      <Digital />
      <Beliefs />
      <TechStack />
      <Work />
      <Team />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonial />
      <Articles />
      <Join />
    </main>
  );
}
