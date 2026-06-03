"use client";
import { featureddata } from "@/app/types/featureddata";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FeaturedSkeleton from "../../Skeleton/Featured";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const Featured = () => {
  const [featured, setFeatured] = useState<featureddata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatured(data.FeaturedData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="relative py-5 sm:py-10 bg-deepSlate dark:bg-darkmode after:absolute after:w-1/4 after:h-1/4 after:bg-[url('/images/wework/vector.svg')] after:top-72 after:right-0 after:bg-no-repeat">
      <div className="container mx-auto max-w-screen-xl px-4 relative">
        <div className="text-center overflow-hidden pb-5">
          <h3 className="my-5 mt-5">Featured works.</h3>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <FeaturedSkeleton key={index} />
              ))
            : featured.map((item, i) => {
                const isWebsite = item.type === "website";

                const CardContent = (
                  <div className="group relative bg-transparent mx-2 rounded-2xl overflow-hidden cursor-default">
                    {/* Image wrapper */}
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        fill
                        className={`object-cover transition-transform duration-500 ${
                          isWebsite ? "group-hover:scale-105" : ""
                        }`}
                      />

                      {/* Clickable overlay — only for websites */}
                      {isWebsite && (
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-center justify-center rounded-2xl">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-8 h-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            <span className="text-sm font-semibold tracking-wide">
                              Visit Site
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card footer */}
                    <div className="flex items-start justify-between mt-4 px-1">
                      <h4 className="text-base sm:text-lg font-semibold text-black max-w-[80%] leading-snug">
                        {item.heading}
                      </h4>

                      {/* Badge indicator */}
                      {isWebsite ? (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium text-primary border border-primary rounded-full px-2 py-0.5 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Live Site
                        </span>
                      ) : (
                        <span className="flex-shrink-0 inline-flex items-center text-xs font-medium text-gray-400 border border-gray-200 rounded-full px-2 py-0.5 mt-0.5">
                          Design
                        </span>
                      )}
                    </div>
                  </div>
                );

                return (
                  <div key={i} className="pb-8">
                    {isWebsite && item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                      >
                        {CardContent}
                      </Link>
                    ) : (
                      CardContent
                    )}
                  </div>
                );
              })}
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
