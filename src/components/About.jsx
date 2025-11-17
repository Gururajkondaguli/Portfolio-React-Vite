// 'use client'

// import React from 'react'

// export default function About() {
//   return (
//     <section className="bg-gray-900 py-16 px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
//           {/* Left: image / illustration */}
//           <div className="flex items-center justify-center">
//             <div className="w-64 sm:w-72 lg:w-80 rounded-2xl overflow-hidden ring-1 ring-white/6">
//               <img
//                 src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
//                 alt="About illustration"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right: content */}
//           <div className="text-center lg:text-left">
//             <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">About me</h2>
//             <p className="mt-4 text-lg text-gray-300 max-w-prose">
//               I'm a frontend developer who loves turning ideas into fast, accessible, and beautiful user
//               experiences. My focus is on React + Tailwind interfaces — from pixel-perfect layouts to
//               easy-to-use components and responsive, performant pages.
//             </p>

//             <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-center">
//               <div className="space-y-2 text-sm text-gray-400">
//                 <p><strong className="text-white">Location:</strong> Bangalore, India</p>
//                 <p><strong className="text-white">Experience:</strong> 2+ years building web UIs</p>
//               </div>

//               <div className="mt-2 sm:ml-6">
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//                 >
//                   Contact me
//                 </a>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-sm font-semibold text-gray-300">Skills</h3>
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {[
//                   'React',
//                   'Tailwind CSS',
//                   'JavaScript (ES6+)',
//                   'TypeScript',
//                   'HTML & CSS',
//                   'Responsive Design',
//                 ].map((skill) => (
//                   <span
//                     key={skill}
//                     className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-gray-200"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8 text-sm text-gray-400">
//               <p>
//                 Looking for help building a frontend, redesigning your portfolio, or turning a Figma into code? I
//                 enjoy collaborating — let's build something great together.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import gk from '../assets/gk.jpeg'
import React from 'react'
import ScrollReveal from './ScrollReveal' // path A

export default function About() {
  return (
    // <-- added id="about" so anchor links like href="#about" work
    <section id="about" className="bg-gray-900 py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left: image / illustration */}
          <ScrollReveal from="up">
            <div className="flex items-center justify-center">
              <div className="w-64 sm:w-72 lg:w-80 rounded-2xl overflow-hidden ring-1 ring-white/6">
                <img
                  src={gk}
                  alt="Portrait illustration showing a developer at work"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: content */}
          <div className="text-center lg:text-left">

            {/* Heading */}
            <ScrollReveal from="down">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                About me
              </h2>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal from="up" delay={0.15}>
              <p className="mt-4 text-lg text-gray-300 max-w-prose">
                I'm a frontend developer who loves turning ideas into fast, accessible, and beautiful user
                experiences. My focus is on React + Tailwind interfaces — from pixel-perfect layouts to
                easy-to-use components and responsive, performant pages.
              </p>
            </ScrollReveal>

            {/* Location + Experience + Contact */}
            <ScrollReveal from="down" delay={0.25}>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-center">
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong className="text-white">Location:</strong> Bangalore, India</p>
                  <p><strong className="text-white">Experience:</strong> 2+ years building web UIs</p>
                </div>

                <div className="mt-2 sm:ml-6">
                  <a
                    href="#contact"
                    aria-label="Go to contact section"
                    className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal from="up" delay={0.35}>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-300">Skills</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'React',
                    'Tailwind CSS',
                    'JavaScript (ES6+)',
                    'TypeScript',
                    'HTML & CSS',
                    'Responsive Design',
                  ].map((skill, i) => (
                    <ScrollReveal from="up" delay={0.4 + i * 0.05} key={skill}>
                      <span
                        className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-gray-200"
                      >
                        {skill}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Final paragraph */}
            <ScrollReveal from="down" delay={0.6}>
              <div className="mt-8 text-sm text-gray-400">
                <p>
                  Looking for help building a frontend, redesigning your portfolio, or turning a Figma into code? I
                  enjoy collaborating — let's build something great together.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  )
}
