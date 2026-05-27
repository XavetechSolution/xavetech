'use client'

import { useRef, useEffect, useState } from 'react'

const technologies = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Shopify',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg',
  },
  {
    name: 'WordPress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
]

const TechStack: React.FC = () => {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className='py-20 bg-white overflow-hidden'>
      <div className='container mx-auto max-w-screen-xl px-4'>

        {/* Header */}
        <div className='text-center mb-14'>
          <p
            className={`text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 transition-all duration-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            Technologies We Use
          </p>

          <h2
            className={`relative inline-block text-darkmode font-bold text-4xl sm:text-5xl lg:text-65 mb-5 transition-all duration-500 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            Our Tech Stack
          </h2>

          {/* Underline accent */}
          <div
            className={`mx-auto h-1 rounded-full bg-primary transition-all duration-700 delay-200 ${
              visible ? 'w-16 opacity-100' : 'w-0 opacity-0'
            }`}
          />

          <p
            className={`mt-6 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-500 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            We are highly proficient in HTML, CSS, Javascript, Python, Django,
            Bootstrap, MySQL, React JS, WooCommerce, WordPress, Shopify and many
            other tools.
          </p>
        </div>

        {/* Tech Grid */}
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 sm:gap-6'>
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white
                shadow-sm cursor-default
                hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30
                transition-all duration-300 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                transitionDelay: visible ? `${index * 60 + 350}ms` : '0ms',
              }}>

              {/* Icon wrapper with subtle orange glow on hover */}
              <div className='relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
                rounded-xl bg-gray-50 group-hover:bg-primary/5 transition-colors duration-300'>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={36}
                  height={36}
                  className='w-8 h-8 sm:w-9 sm:h-9 object-contain
                    group-hover:scale-110 transition-transform duration-300'
                  onError={(e) => {
                    // fallback: hide broken image
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>

              {/* Name */}
              <span className='text-xs sm:text-sm font-medium text-gray-500 group-hover:text-primary transition-colors duration-300 text-center leading-tight'>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
