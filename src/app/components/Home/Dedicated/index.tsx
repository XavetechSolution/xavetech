"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const About: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-5 sm:py-10"
    >
      {/* Spiral background */}
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 top-0 hidden lg:block -z-10 opacity-60"
      />

      <div className="container mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="relative text-center">
          {/* Decorative comma */}
          <Image
            src="/images/dedicated/comma.svg"
            alt=""
            aria-hidden="true"
            width={180}
            height={100}
            className="absolute -top-10 left-1/2 hidden -translate-x-1/2 opacity-10 lg:block"
          />

          {/* Label */}
          <p
            className={`mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary transition-all duration-500 delay-100 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            What We Are
          </p>

          {/* Heading */}
          <h2
            className={`mx-auto mb-5 max-w-3xl text-3xl font-bold leading-tight text-darkmode sm:text-4xl lg:text-6xl transition-all duration-500 delay-200 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            XaveTech &amp; XaveStudio
          </h2>

          {/* Underline */}
          <div
            className={`mx-auto mb-8 h-1 rounded-full bg-primary transition-all duration-700 delay-300 ${
              visible ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
          />

          {/* Body */}
          <div
            className={`mx-auto max-w-3xl space-y-5 text-base leading-8 text-gray-600 sm:text-lg transition-all duration-700 delay-400 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p>
              We are a creative digital agency focused on helping brands grow
              through innovative design, strategic marketing, and impactful
              digital experiences. We combine creativity with technology to
              build strong brand identities, engaging content, and result-driven
              campaigns that help businesses stand out in today’s competitive
              world.
            </p>

            <p>
              From branding and social media management to web design solutions
              and digital advertising, We are committed to delivering digital
              excellence that connects brands with the right audience and drives
              measurable growth.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`mt-10 transition-all duration-500 delay-500 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-darkmode sm:text-base group"
            >
              Learn More About Us
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
