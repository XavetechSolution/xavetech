"use client";

import { useState } from "react";

const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const phone = process.env.NEXT_PUBLIC_PHONE;
  const handleWhatsApp = () => {
    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email address.");
      return;
    }

    const message = `Hello, my name is ${name}. My email address is ${email}. I would like to discuss a project.`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message,
    )}`;

    console.log(whatsappUrl);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="overflow-hidden bg-joinus py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-primary text-lg font-medium tracking-widest uppercase">
            Let's Work Together
          </p>

          <h2 className="my-6">Ready to build something amazing?</h2>

          <p className="text-black/60 text-base max-w-3xl mx-auto">
            Whether you need a stunning website, brand design and management, or
            a complete digital solution, we're herefor you. Share your details
            below and let's start the conversation.
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-10">
          <div className="bg-grey rounded-3xl sm:rounded-full shadow-lg p-5 sm:p-2">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-stretch sm:items-center">
              {/* Name */}
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                  placeholder="Full Name"
                  className="w-full py-4 px-5 text-black bg-white sm:bg-transparent rounded-xl sm:rounded-full focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  className="w-full py-4 px-5 text-black bg-white sm:bg-transparent sm:border-l border-linegrey rounded-xl sm:rounded-none focus:outline-none"
                />
              </div>

              {/* Button */}
              <div className="sm:pr-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto bg-primary text-white font-semibold text-lg py-4 px-10 rounded-xl sm:rounded-full hover:bg-darkmode transition-colors duration-300 cursor-pointer"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
