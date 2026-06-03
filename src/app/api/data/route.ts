import { NextResponse } from "next/server";

import { aboutdata } from "@/app/types/aboutdata";
import { articles } from "@/app/types/articles";
import { featureddata } from "@/app/types/featureddata";
import { footerlinks } from "@/app/types/footerlinks";
import { HeaderItem } from "@/app/types/menu";
import { testimonials } from "@/app/types/testimonials";
import { workdata } from "@/app/types/workdata";

// header nav-links data
const headerData: HeaderItem[] = [
  { label: "About Us", href: "#About" },
  { label: "Team", href: "#Team" },
  { label: "FAQ", href: "#FAQ" },
  { label: "Blog", href: "#Blog" },
  { label: "Docs", href: "/documentation" },
];

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: "Vision.",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "To become a leading digital solutions brand recognized for transforming businesses through creativity, innovation, and technology-driven excellence.",
    link: "Learn more",
  },
  {
    heading: "Mission.",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "At XaveTech, our mission is to empower businesses and individuals with modern digital solutions that increase visibility, strengthen brand identity, and create lasting impact. We aim to deliver high-quality creative services, build meaningful client relationships, and help brands grow confidently in the digital space.",
    link: "Learn more",
  },
  {
    heading: "Key Services",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "We provide the essential digital solutions your business needs to grow and thrive, including website development, SEO optimization, eCommerce solutions, brand management, social media management, video production, and graphic design.",
    link: "Learn more",
  },
];

// work-data
const WorkData: workdata[] = [
  {
    profession: "Founder",
    name: "Bryan Ayomide",
    imgSrc: "/images/wework/bryan.png",
  },
  {
    profession: "Data Analyst",
    name: "Daniel Ajiboye",
    imgSrc: "/images/wework/daniel.png",
  },
  {
    profession: "Creative Director",
    name: "Temi Davies",
    imgSrc: "/images/wework/temidavies.png",
  },
  {
    profession: "Software Engineer",
    name: "Martin F. Olutade",
    imgSrc: "/images/wework/martin.png",
  },
  {
    profession: "Frontend Developer",
    name: "Finnix",
    imgSrc: "/images/wework/Finnix.png",
  },
  {
    profession: "Social Media Manager",
    name: "Odeyemi Tumise",
    imgSrc: "/images/wework/tumise.png",
  },
  {
    profession: "UI/UX Designer",
    name: "Adebgenro Oyindamola",
    imgSrc: "/images/wework/oyindamola.png",
  },
  {
    profession: "Content Creator & Writer",
    name: "Olaoluwa Williams",
    imgSrc: "/images/wework/olaoluwa.png",
  },
  {
    profession: "Technical Writer",
    name: "Orekoya Ibukunoluwa",
    imgSrc: "/images/wework/orekoya.png",
  },
];

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: "Website design for a solar company.",
    imgSrc: "/images/featured/azmil-project.png",
    type: "website",
    link: "https://azmilsolar.com",
  },
  {
    heading: "Graphics design for a computer seller brand.",
    imgSrc: "/images/featured/ceetwo.jpg",
    type: "image",
  },
  {
    heading: "Graphics design for a perfume seller brand.",
    imgSrc: "/images/featured/damella.jpg",
    type: "image",
  },
  {
    heading: "Graphics design for a phone seller brand.",
    imgSrc: "/images/featured/fredmer.jpg",
    type: "image",
  },
];

// plans data
const PlansData = [
  {
    heading: "Basic",
    price: {
      naira: 290000,
      dollar: 166,
    },
    user: "per project",
    features: {
      type: "Business Website, E-Commerce",
      pages: "3 – 5 Functional Pages",
      seo: "Basic SEO",
      logo: "2 – 3 Logo Designs",
      corporate_identity: "—",
      social_media_management: "—",
    },
  },
  {
    heading: "Standard",
    price: {
      naira: 520000,
      dollar: 299,
    },
    user: "per project",
    features: {
      type: "Business Website, E-Commerce, Portfolio",
      pages: "5 – 10 Functional Pages",
      seo: "Advanced SEO",
      logo: "3 – 5 Logo Designs",
      corporate_identity: "Full Corporate Identity",
      social_media_management: "—",
    },
  },
  {
    heading: "Custom",
    price: {
      naira: 0,
      dollar: 0,
    },
    user: "tailored to your needs",
    features: {
      type: "All Website Types",
      pages: "Unlimited Pages",
      seo: "Full SEO Strategy",
      logo: "Unlimited Logo Concepts",
      corporate_identity: "Full Corporate Identity",
      social_media_management: "Social Media Management",
    },
  },
];

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: "Azmil Solar",
    profession: "Engineer",
    comment:
      "Working with the team was a fantastic experience. They delivered a modern website that improved our online presence.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "David O.",
    profession: "Real Estate Consultant",
    comment:
      "From website design to SEO optimization, everything was handled professionally. We've seen a noticeable increase in inquiries since launching the new site.",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 5,
  },
  {
    name: "Chinwe A.",
    profession: "Fashion Brand Owner",
    comment:
      "The social media management and content creation services helped our brand reach a wider audience. Engagement and sales have both improved significantly.",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 5,
  },
  {
    name: "Michael E.",
    profession: "Startup Founder",
    comment:
      "Our mobile app was delivered on schedule and exceeded expectations. The team communicated clearly throughout the entire development process.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "Grace N.",
    profession: "Beauty Business Owner",
    comment:
      "Their branding expertise gave our business a fresh and professional identity. Customers constantly compliment our new look and online presence.",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 5,
  },
];

// artical data
const ArticlesData: articles[] = [
  {
    time: "5 min",
    heading: "How We Help Businesses",
    heading2: "STANDOUT",
    name: "Published on Tuesday",
    date: "June 2, 2026",
    imgSrc: "/images/articles/xave-article.jpg",
  },
  {
    time: "5 min",
    heading: "Why We Are Best At",
    heading2: "The Game",
    name: "Published by xave",
    date: "May 26, 2026",
    imgSrc: "/images/articles/xave-article1.jpg",
  },
  {
    time: "5 min",
    heading: "Let Us Create Am",
    heading2: "App For You",
    name: "Published by xave",
    date: "february 19, 2025",
    imgSrc: "/images/articles/xave-article2.jpg",
  },
  {
    time: "5 min",
    heading: "Why you need",
    heading2: "XaveTech",
    name: "Published by xave",
    date: "february 19, 2025",
    imgSrc: "/images/articles/xave-article3.jpg",
  },
];

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: "Menu",
    links: [
      { label: "About Us", href: "#About" },
      { label: "Team", href: "#Team" },
      { label: "FAQ", href: "#FAQ" },
      { label: "Blog", href: "#Blog" },
    ],
  },
  {
    section: "Category",
    links: [
      { label: "Design", href: "/" },
      { label: "Mockup", href: "/" },
      { label: "View all", href: "/" },
    ],
  },
  {
    section: "Pages",
    links: [
      { label: "404", href: "/" },
      { label: "License", href: "/" },
    ],
  },
  {
    section: "Others",
    links: [
      { label: "Styleguide", href: "/" },
      { label: "Changelog", href: "/" },
    ],
  },
];

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  });
};
