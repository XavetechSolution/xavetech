'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative bg-white bg-cover bg-center overflow-hidden py-20'>

      {/* Spiral background — top-left decoration */}
      <Image
        src='/images/dedicated/spiral.svg'
        height={272}
        width={686}
        alt='spiral-design'
        className='absolute left-0 top-0 hidden lg:block -z-10 opacity-60'
      />

      <div className='container mx-auto max-w-screen-xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center'>

          {/* Left Column — Illustration */}
          <div
            className={`col-span-12 lg:col-span-5 justify-self-center transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <Image
              src='/images/dedicated/man.svg'
              alt='XaveTech team illustration'
              width={416}
              height={530}
              className='mx-auto'
            />
          </div>

          {/* Right Column — Content */}
          <div className='col-span-12 lg:col-span-7 relative'>

            {/* Comma decorative SVG */}
            <Image
              src='/images/dedicated/comma.svg'
              alt=''
              aria-hidden='true'
              width={200}
              height={106}
              className='absolute -top-16 -left-32 hidden lg:block opacity-30'
            />

            {/* Label */}
            <p
              className={`text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 text-center lg:text-left transition-all duration-500 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              About Us
            </p>

            {/* Heading */}
            <h2
              className={`text-darkmode font-bold text-4xl sm:text-5xl lg:text-65 leading-tight lg:leading-snug mb-5 text-center lg:text-left transition-all duration-500 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              XaveTech &amp; XaveStudio
            </h2>

            {/* Underline accent */}
            <div
              className={`h-1 rounded-full bg-primary mb-8 transition-all duration-700 delay-300 mx-auto lg:mx-0 ${
                visible ? 'w-16 opacity-100' : 'w-0 opacity-0'
              }`}
            />

            {/* Body */}
            <div
              className={`space-y-5 text-gray-500 text-base sm:text-lg leading-relaxed text-center lg:text-left transition-all duration-600 delay-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
              <p>
                XaveTech is a creative digital agency focused on helping brands grow through innovative
                design, strategic marketing, and impactful digital experiences. We combine creativity
                with technology to build strong brand identities, engaging content, and result-driven
                campaigns that help businesses stand out in today’s competitive world.{' '}
              </p>
              <p>
                From branding and social media management to web solutions and digital advertising,
                XaveTech is committed to delivering digital excellence that connects brands with
                the right audience and drives measurable growth.

              </p>
            </div>

            {/* CTA */}
            <div
              className={`mt-10 flex justify-center lg:justify-start transition-all duration-500 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              <Link
                href='/about'
                className='inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium
                  hover:bg-darkmode transition-colors duration-200 group'>
                Learn More About Us
                <svg
                  className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About