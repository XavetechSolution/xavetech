"use client";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PlansSkeleton from "../../Skeleton/Plans";

const featureLabels: Record<string, string> = {
  type: "Website Type",
  pages: "Pages",
  seo: "SEO",
  logo: "Logo Design",
  corporate_identity: "Corporate Identity",
  social_media_management: "Social Media Management",
};

const Manage = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isNaira, setIsNaira] = useState(true);

  const phone = process.env.NEXT_PUBLIC_PHONE;
  const message = encodeURIComponent("Hello, I'm Interested In Your Service'");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPlans(data.PlansData);
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: isNaira ? plan.price.naira : plan.price.dollar,
  }));

  const formatPrice = (price: number, custom: boolean) => {
    if (custom) return "Custom";
    if (isNaira) return `₦${price.toLocaleString("en-NG")}`;
    return `$${price.toLocaleString("en-US")}`;
  };

  return (
    <section id="services-section">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="text-center">
          Manage All Your Online Presence In One Place
        </h2>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row gap-5 md:justify-evenly mt-10 items-start mx-auto">
          {["Website Creation", "Brand Design", "Social Media Management"].map(
            (label) => (
              <div
                key={label}
                className="flex gap-3 items-center justify-center md:justify-start"
              >
                <Image
                  src="/images/manage/right.svg"
                  alt="check"
                  width={21}
                  height={14}
                />
                <p className="text-lg font-semibold">{label}</p>
              </div>
            ),
          )}
        </div>

        {/* Currency toggle */}
        <div className="mt-10 relative flex flex-col items-center gap-3">
          <div className="dance-text xl:-ml-80 lg:-ml-80 md:-ml-80 -ml-52 text-center -rotate-[10deg]">
            starting price
          </div>
          <Image
            src="/images/manage/toggle.svg"
            alt="toggle-image"
            width={24}
            height={24}
            className="absolute left-[37%] top-8"
          />
          <div className="flex items-center gap-5">
            <p
              className={`text-sm font-semibold transition-colors duration-200 ${
                isNaira ? "text-primary" : "text-gray-400"
              }`}
            >
              Naira (₦)
            </p>
            <Switch
              checked={!isNaira}
              onChange={() => setIsNaira((prev) => !prev)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                !isNaira ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span className="sr-only">Toggle currency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-300 ${
                  !isNaira ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </Switch>
            <p
              className={`text-sm font-semibold transition-colors duration-200 ${
                !isNaira ? "text-primary" : "text-gray-400"
              }`}
            >
              Dollar ($)
            </p>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((item, i) => {
                const isCustom = item.heading === "Custom";
                const isPopular = item.heading === "Standard";

                return (
                  <div
                    key={i}
                    className={`relative flex flex-col shadow-manage-shadow border rounded-3xl text-center p-8 transition-transform duration-300 hover:-translate-y-1 ${
                      isPopular
                        ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                        : "border-border bg-white"
                    }`}
                  >
                    {/* Popular badge */}
                    {isPopular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                        Most Popular
                      </span>
                    )}

                    {/* Plan name */}
                    <h5
                      className={`mb-3 font-bold ${isPopular ? "text-primary" : ""}`}
                    >
                      {item.heading}
                    </h5>

                    {/* Price */}
                    <p className="text-4xl sm:text-5xl font-extrabold mb-1 tracking-tight">
                      {formatPrice(item.price, isCustom)}
                    </p>
                    <p className="text-sm font-medium text-gray-400 mb-7">
                      {item.user}
                    </p>

                    {/* CTA */}
                    <Link
                      href={`https://wa.me/${phone}?text=${message}`}
                      target="_blank"
                      className="mb-8"
                    >
                      <button
                        className={`w-full text-sm font-bold rounded-full py-3 px-8 border-2 transition-colors duration-200 hover:cursor-pointer ${
                          isPopular
                            ? "bg-primary text-white border-primary hover:bg-darkmode hover:border-darkmode"
                            : "text-primary bg-transparent border-primary hover:bg-primary hover:text-white"
                        }`}
                      >
                        {isCustom ? "Contact Us" : "Get Started"}
                      </button>
                    </Link>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-6" />

                    {/* Features */}
                    <ul className="space-y-3 text-left">
                      {Object.entries(item.features).map(
                        ([key, value]: any, index) => {
                          const isDash = value === "—";
                          return (
                            <li
                              key={index}
                              className={`flex items-start gap-3 text-sm ${
                                isDash ? "opacity-40" : ""
                              }`}
                            >
                              {isDash ? (
                                <span className="mt-0.5 flex-shrink-0 w-4 h-4 text-gray-300">
                                  —
                                </span>
                              ) : (
                                <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                  <svg
                                    className="w-2.5 h-2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={3}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </span>
                              )}
                              <span className="text-gray-600">
                                <span className="font-medium text-gray-800">
                                  {featureLabels[key] ?? key}:
                                </span>{" "}
                                {isDash ? "Not included" : value}
                              </span>
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Manage;
