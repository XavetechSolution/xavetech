"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const message = encodeURIComponent("Hello, I'm interested in your services.");

  return (
    <section className="relative overflow-hidden z-1">
      <div className="container mx-auto pt-24 max-w-7xl px-4">
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-span-12 xl:col-span-5 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="py-2 px-5 bg-primary/15 rounded-full w-fit">
              <p className="text-primary text-lg font-bold">
                DIGITAL SOLUTIONS
              </p>
            </div>

            <h1>Helping businesses get seen online.</h1>

            <Link
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
            >
              <button className="bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode mt-10">
                Chat on WhatsApp
              </button>
            </Link>
          </div>

          <div className="xl:col-span-7 lg:col-span-6 lg:block hidden">
            <Image
              src="/images/hero/banner-image.png"
              alt="banner image"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
