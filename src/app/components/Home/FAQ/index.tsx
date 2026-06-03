"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Icon } from "@iconify/react";

const FAQ = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We provide website design, web development, UI/UX design, landing pages, e-commerce solutions, branding, and ongoing website maintenance.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Most websites take between 2–6 weeks depending on the scope and complexity of the project. We provide a detailed timeline before work begins.",
    },
    {
      question: "Do you offer revisions and support?",
      answer:
        "Yes. Every project includes revision rounds, and we also offer ongoing maintenance and support packages after launch.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Pricing depends on the project requirements, features, and timeline. Contact us for a custom quote tailored to your needs.",
    },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Absolutely. Every website we build is fully responsive and optimized for desktop, tablet, and mobile users.",
    },
  ];
  return (
    <section
      id="FAQ"
      className="relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary">
          <p className="text-lg font-normal text-white text-center mb-6">FAQ</p>
          <h2 className="text-white text-center max-w-3xl mx-auto">
            Frequently asked questions.
          </h2>
          <div className="w-full px-4 pt-16">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5"
              >
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className="flex w-full justify-between items-center text-left text-2xl font-medium hover:cursor-pointer">
                        <span className="text-black">{faq.question}</span>

                        <div
                          className={`h-5 w-5 transform transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          }`}
                        >
                          <Icon
                            icon="lucide:chevron-up"
                            width="20"
                            height="20"
                          />
                        </div>
                      </DisclosureButton>

                      <DisclosurePanel className="text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border">
                        {faq.answer}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
