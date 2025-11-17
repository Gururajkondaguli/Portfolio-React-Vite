// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { MdOutlineArrowUpward } from 'react-icons/md'

// export default function HeroWithFooter() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) setIsVisible(true)
//       else setIsVisible(false)
//     }

//     window.addEventListener('scroll', toggleVisibility)
//     return () => window.removeEventListener('scroll', toggleVisibility)
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   const bgUrl = '/hero-section.webp' // update if needed

//   // FRAMER-SCROLL: create MotionValues from scroll progress
//   const { scrollYProgress } = useScroll()
//   // Parallax amounts (adjust to taste)
//   const leftParallax = useTransform(scrollYProgress, [0, 1], [0, -140])
//   const rightParallax = useTransform(scrollYProgress, [0, 1], [0, 140])
//   const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -60])

//   // original drifting variants (kept)
//   const leftShapeVariants = {
//     initial: { x: '-60%', scale: 1.1, opacity: 0.8 },
//     animate: {
//       x: ['-60%', '30%', '-60%'],
//       transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
//     },
//   }
//   const rightShapeVariants = {
//     initial: { x: '60%', scale: 1.05, opacity: 0.9 },
//     animate: {
//       x: ['60%', '-30%', '60%'],
//       transition: { duration: 9.5, repeat: Infinity, ease: 'easeInOut' },
//     },
//   }

//   const guruAnim = {
//     initial: { x: '-70%', opacity: 0, scale: 0.98 },
//     animate: {
//       x: ['-70%', 0, 18, 0],
//       opacity: [0, 1, 1, 1],
//       transition: {
//         duration: 16,
//         times: [0, 0.18, 0.7, 1],
//         ease: 'easeInOut',
//         repeat: Infinity,
//         repeatDelay: 2,
//       },
//     },
//   }

//   const rajAnim = {
//     initial: { x: '70%', opacity: 0, scale: 0.98 },
//     animate: {
//       x: ['70%', 0, -18, 0],
//       opacity: [0, 1, 1, 1],
//       transition: {
//         duration: 16,
//         times: [0, 0.18, 0.7, 1],
//         ease: 'easeInOut',
//         repeat: Infinity,
//         repeatDelay: 2,
//       },
//     },
//   }

//   const h2Anim = {
//     initial: { y: '60%', opacity: 0, scale: 0.98 },
//     animate: {
//       y: ['60%', 0, -10, 0],
//       opacity: [0, 1, 1, 1],
//       transition: {
//         duration: 18,
//         times: [0, 0.18, 0.7, 1],
//         ease: 'easeInOut',
//         repeat: Infinity,
//         repeatDelay: 2,
//       },
//     },
//   }

//   // viewport-trigger variants for elements so they animate on enter/leave
//   const inViewVariant = {
//     hiddenFromTop: { y: 40, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
//     hiddenToBottom: { y: -30, opacity: 0 },
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
//       {/* HERO */}
//       <section
//         aria-label="Hero"
//         className="relative h-screen w-full flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${bgUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/45 pointer-events-none" />

//         {/* moving left-shape + scroll parallax */}
//         <motion.div
//           aria-hidden="true"
//           className="absolute top-[-10%] left-[-20%] w-[80vw] h-[120vh] rounded-[30%] blur-[80px] bg-gradient-to-tr from-[#7c2cff] via-[#6b2cff] to-[#ff5edb] opacity-90"
//           variants={leftShapeVariants}
//           initial="initial"
//           animate="animate"
//           style={{ mixBlendMode: 'screen', y: leftParallax }}
//         />

//         {/* moving right-shape + scroll parallax */}
//         <motion.div
//           aria-hidden="true"
//           className="absolute bottom-[-12%] right-[-20%] w-[80vw] h-[120vh] rounded-[30%] blur-[80px] bg-gradient-to-br from-[#00d4ff] via-[#7cf5ff] to-[#7c2cff] opacity-80"
//           variants={rightShapeVariants}
//           initial="initial"
//           animate="animate"
//           style={{ mixBlendMode: 'screen', y: rightParallax }}
//         />

//         {/* center content with small scroll parallax */}
//         <motion.div
//           className="relative z-30 max-w-5xl w-full px-6 text-center"
//           style={{ y: contentParallax }}
//         >
//           {/* H1: Guru + raj */}
//           <motion.h1
//             className="font-extrabold text-black/95 dark:text-white drop-shadow-2xl leading-[0.82] select-none"
//             style={{ fontSize: 'clamp(12.5rem, 12vw, 8.5rem)', lineHeight: 1 }}
//             aria-label="Gururaj"
//             // animate on enter/leave: whileInView toggles between 'hiddenFromTop' and 'visible'
//             variants={inViewVariant}
//             initial="hiddenFromTop"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.18 }}
//           >
//             {/* Guru (right -> left) */}
//             <motion.span
//               className="inline-block"
//               variants={guruAnim}
//               initial="initial"
//               animate="animate"
//             >
//               Guru
//             </motion.span>

//             {/* raj (left -> right) with red fill + white stroke */}
//             <motion.span
//               className="inline-block text-red-500"
//               variants={rajAnim}
//               initial="initial"
//               animate="animate"
//               style={{
//                 WebkitTextStroke: '7px black',
//                 paintOrder: 'stroke fill',
//                 marginLeft: '0.25rem',
//               }}
//             >
//               raj
//             </motion.span>
//           </motion.h1>

//           {/* H2: role - animate when in viewport and keep the slow float */}
//           <motion.h2
//             className="mt-2 text-transparent bg-clip-text dark:bg-clip-text font-extrabold leading-[0.82] select-none"
//             variants={h2Anim}
//             initial="initial"
//             animate="animate"
//             style={{
//               WebkitTextStroke: '3px rgba(0,0,0,0.9)',
//               fontSize: 'clamp(9.5rem, 8vw, 6rem)',
//             }}
//             aria-label="UI Developer"
//             // viewport-trigger so H2 also appears on scroll up/down
//             initial="hiddenFromTop"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.18 }}
//           >
//             UI Developer
//           </motion.h2>

//           {/* CTA */}
//           <motion.div
//             className="mt-8 flex items-center justify-center gap-4"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//           >
//             <a
//               href="#projects"
//               className="rounded-full bg-indigo-600/95 px-6 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 transition"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition"
//             >
//               Contact
//             </a>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* FOOTER */}
//       <footer className="relative bg-gray-900 text-gray-300 py-10 px-6 lg:px-8 border-t border-white/10">
//         <div className="mx-auto max-w-7xl text-center">
//           <div className="flex justify-center gap-6 mb-6">
//             <a
//               href="mailto:kondaguligururaj@gmail.com"
//               className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
//             >
//               <i className="bx bxl-gmail" />
//             </a>

//             <a
//               href="https://github.com/Gururajkondaguli"
//               target="_blank"
//               rel="noreferrer"
//               className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
//             >
//               <i className="bx bxl-github" />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/gururaj-kondaguli-3008a1191/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
//             >
//               <i className="bx bxl-linkedin-square" />
//             </a>

//             <a
//               href="https://www.instagram.com/gururaj_talwar/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
//             >
//               <i className="bx bxl-instagram-alt" />
//             </a>
//           </div>

//           <p className="text-sm text-gray-400">
//             © {new Date().getFullYear()} Gururaj Kondaguli — All Rights Reserved.
//           </p>
//         </div>

//         {isVisible && (
//           <button
//             onClick={scrollToTop}
//             aria-label="Scroll to top"
//             className="fixed bottom-6 right-6 z-50 bg-indigo-500 text-white p-3 rounded-full shadow-xl"
//           >
//             <motion.div
//               whileHover={{ scale: 1.15, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               animate={{ y: [0, -6, 0] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.6,
//                 ease: 'easeInOut',
//               }}
//             >
//               <MdOutlineArrowUpward className="text-2xl" />
//             </motion.div>
//           </button>
//         )}
//       </footer>
//     </div>
//   )
// }


































// 'use client'


 
// import React, { useEffect, useState } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { MdOutlineArrowUpward } from 'react-icons/md'

// export default function HeroWithFooter() {
//   // detect desktop (lg and up) so we only apply framer-motion on desktop/laptop
//   const [isDesktop, setIsDesktop] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const mq = window.matchMedia('(min-width: 1024px)')
//     const apply = (e) => setIsDesktop(e.matches)
//     apply(mq)
//     if (mq.addEventListener) mq.addEventListener('change', apply)
//     else mq.addListener(apply)
//     return () => {
//       if (mq.removeEventListener) mq.removeEventListener('change', apply)
//       else mq.removeListener(apply)
//     }
//   }, [])

//   // simple scroll visibility for optional back-to-top or other UI (works everywhere)
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) setIsVisible(true)
//       else setIsVisible(false)
//     }
//     window.addEventListener('scroll', toggleVisibility)
//     return () => window.removeEventListener('scroll', toggleVisibility)
//   }, [])

//   const bgUrl = '/hero-section.webp' // update if needed

//   // FRAMER-SCROLL hooks: called unconditionally (hooks rules). We'll only *use* their values when isDesktop is true.
//   const { scrollYProgress } = useScroll()
//   const leftParallax = useTransform(scrollYProgress, [0, 1], [0, -120])
//   const rightParallax = useTransform(scrollYProgress, [0, 1], [0, 120])
//   const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -40])

//   // drifting + entrance variants (desktop only visually, but defined always)
//   const leftShapeVariants = {
//     initial: { x: '-60%', scale: 1.05, opacity: 0.8 },
//     animate: { x: ['-60%', '30%', '-60%'], transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' } },
//   }
//   const rightShapeVariants = {
//     initial: { x: '60%', scale: 1.03, opacity: 0.9 },
//     animate: { x: ['60%', '-30%', '60%'], transition: { duration: 10.5, repeat: Infinity, ease: 'easeInOut' } },
//   }

//   // subtle entrance that repeats (keeps drifting by repeating)
//   const guruAnim = {
//     initial: { x: '-70%', opacity: 0, scale: 0.98 },
//     animate: {
//       x: ['-70%', 0, 18, 0],
//       opacity: [0, 1, 1, 1],
//       transition: { duration: 16, times: [0, 0.18, 0.7, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 },
//     },
//   }

//   const rajAnim = {
//     initial: { x: '70%', opacity: 0, scale: 0.98 },
//     animate: {
//       x: ['70%', 0, -18, 0],
//       opacity: [0, 1, 1, 1],
//       transition: { duration: 16, times: [0, 0.18, 0.7, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 },
//     },
//   }

//   const h2Anim = {
//     initial: { y: '60%', opacity: 0, scale: 0.98 },
//     animate: {
//       y: ['60%', 0, -10, 0],
//       opacity: [0, 1, 1, 1],
//       transition: { duration: 16, times: [0, 0.18, 0.7, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 },
//     },
//   }

//   // scroll reveal simple variant (used for initial mount + whileInView)
//   const inViewVariant = {
//     hiddenFromTop: { y: 40, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
//     hiddenToBottom: { y: -30, opacity: 0 },
//   }

//   const h1Stroke = { WebkitTextStroke: '5px black', paintOrder: 'stroke fill' }
//   const h2Stroke = { WebkitTextStroke: '2.5px rgba(0,0,0,0.9)' }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
//       {/* HERO */}
//       <section
//         aria-label="Hero"
//         className="relative h-screen w-full flex items-center justify-center"
//         style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
//       >
//         {/* overlay for contrast */}
//         <div className="absolute inset-0 bg-black/55 pointer-events-none" />

//         {/* LEFT SHAPE */}
//         {isDesktop ? (
//           <motion.div
//             aria-hidden="true"
//             className="absolute top-[-8%] sm:top-[-6%] md:top-[-4%] left-[-18%] sm:left-[-12%] md:left-[-8%] blur-3xl rounded-[30%] opacity-90"
//             variants={leftShapeVariants}
//             initial="initial"
//             animate="animate"
//             style={{ width: '70vw', height: '110vh', background: 'linear-gradient(135deg, rgba(124,44,255,0.95) 0%, rgba(107,44,255,0.85) 50%, rgba(255,94,219,0.9) 100%)', mixBlendMode: 'screen', y: leftParallax }}
//           />
//         ) : (
//           // static lighter shape for mobile/tablet (no motion)
//           <div
//             aria-hidden="true"
//             className="absolute top-[-8%] left-[-14%] blur-2xl rounded-[30%] opacity-80 pointer-events-none"
//             style={{ width: '60vw', height: '90vh', background: 'linear-gradient(135deg, rgba(124,44,255,0.9) 0%, rgba(255,94,219,0.85) 100%)', mixBlendMode: 'screen' }}
//           />
//         )}

//         {/* RIGHT SHAPE */}
//         {isDesktop ? (
//           <motion.div
//             aria-hidden="true"
//             className="absolute bottom-[-10%] sm:bottom-[-8%] md:bottom-[-6%] right-[-18%] sm:right-[-12%] md:right-[-8%] blur-3xl rounded-[30%] opacity-85"
//             variants={rightShapeVariants}
//             initial="initial"
//             animate="animate"
//             style={{ width: '70vw', height: '110vh', background: 'linear-gradient(200deg, rgba(0,212,255,0.9) 0%, rgba(124,245,255,0.75) 50%, rgba(124,44,255,0.8) 100%)', mixBlendMode: 'screen', y: rightParallax }}
//           />
//         ) : (
//           <div
//             aria-hidden="true"
//             className="absolute bottom-[-8%] right-[-14%] blur-2xl rounded-[30%] opacity-80 pointer-events-none"
//             style={{ width: '60vw', height: '90vh', background: 'linear-gradient(200deg, rgba(0,212,255,0.9) 0%, rgba(124,245,255,0.75) 50%, rgba(124,44,255,0.8) 100%)', mixBlendMode: 'screen' }}
//           />
//         )}

//         {/* CENTER CONTENT */}
//         {/* Use motion.div so MotionValue y: contentParallax can be applied */}
//         <motion.div
//           className="relative z-30 max-w-5xl w-full px-4 sm:px-6 lg:px-8 text-center"
//           style={isDesktop ? { y: contentParallax } : {}}
//         >
//           {/* DESKTOP: combine mount animation + scroll reveal (whileInView) */}
//           {isDesktop ? (
//             <>
//               <motion.h1
//                 className="font-extrabold text-white drop-shadow-2xl leading-[0.82] select-none break-words"
//                 style={{ fontSize: 'clamp(13rem, 15vw, 10rem)', lineHeight: 1 }}
//                 aria-label="Gururaj"
//                 variants={inViewVariant}
//                 initial="hiddenFromTop"     // animate on first mount
//                 animate="visible"           // animate on first mount
//                 whileInView="visible"       // animate again when scrolled into view
//                 viewport={{ amount: 0.2, once: false }}
//               >
//                 <motion.span
//                   className="inline-block"
//                   variants={guruAnim}
//                   initial="initial"
//                   animate="animate"
//                   // also allow whileInView to retrigger the child (so entrance repeats on re-entry)
//                   whileInView="animate"
//                   viewport={{ amount: 0.2, once: false }}
//                 >
//                   <main>
//                   <GuruRaj />
//                   {/* rest of page */}
//                 </main>
//                 </motion.span>

//                 <motion.span
//                   className="inline-block text-red-500"
//                   style={{ fontSize: 'clamp(13rem, 15vw, 10rem)', lineHeight: 1, ...h1Stroke }}
//                   variants={rajAnim}
//                   initial="initial"
//                   animate="animate"
//                   whileInView="animate"
//                   viewport={{ amount: 0.2, once: false }}
//                 >
//                   Raj
//                 </motion.span>
//               </motion.h1>

//               <motion.h2
//                 className="mt-2 bg-clip-text font-extrabold leading-[0.82] select-none text-transparent break-words"
//                 variants={h2Anim}
//                 initial="initial"          // mount entrance for h2
//                 animate="animate"          // mount entrance for h2
//                 whileInView="animate"      // repeat on scroll re-entry
//                 viewport={{ amount: 0.2, once: false }}
//                 aria-label="UI Developer"
//                 style={{ fontSize: 'clamp(9rem, 8vw, 8rem)', ...h2Stroke }}
//               >
//                 UI Developer
//               </motion.h2>
//             </>
//           ) : (
//             <>
//               {/* MOBILE/TABLET: static headings (no framer motion heavy transforms) */}
//               <h1 className="font-extrabold text-white drop-shadow-2xl leading-[0.82] select-none break-words" style={{ fontSize: 'clamp(6rem, 12vw, 8rem)', lineHeight: 1 }} aria-label="Gururaj">
//                 <span className="inline-block">Guru</span>
//                 <span className="inline-block text-red-500" style={{ fontSize: 'clamp(6rem, 12vw, 8rem)', lineHeight: 1, ...h1Stroke }}>Raj</span>
//               </h1>

//               <h2 className="mt-2 bg-clip-text font-extrabold leading-[0.82] select-none text-transparent break-words" aria-label="UI Developer" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', ...h2Stroke }}>
//                 UI Developer
//               </h2>
//             </>
//           )}

//           {/* CTA */}
//           <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap" style={{ opacity: 1 }}>
//             <a href="#projects" className="rounded-full bg-indigo-600/95 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-xl hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-label="View Projects">View Projects</a>
//             <a href="#contact" className="rounded-full border border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white/90 hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/25" aria-label="Contact">Contact</a>
//           </div>
//         </motion.div>

//         {/* optional floating back-to-top icon */}
//         {isVisible && (
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="fixed right-6 bottom-6 z-50 rounded-full bg-indigo-600 p-3 shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             aria-label="Back to top"
//             title="Back to top"
//           >
//             <MdOutlineArrowUpward size={20} />
//           </button>
//         )}
//       </section>
//     </div>
//   )
// }







'use client'

import React, { useEffect, useState } from 'react'
import Guru from './Guru'
import Raj from './Raj'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MdOutlineArrowUpward } from 'react-icons/md'

export default function HeroWithFooter() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const apply = (e) => setIsDesktop(e.matches)
    apply(mq)
    if (mq.addEventListener) mq.addEventListener('change', apply)
    else mq.addListener(apply)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', apply)
      else mq.removeListener(apply)
    }
  }, [])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true)
      else setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const bgUrl = '/hero-section.webp'

  const { scrollYProgress } = useScroll()
  const leftParallax = useTransform(scrollYProgress, [0, 1], [0, -120])
  const rightParallax = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -40])

  const leftShapeVariants = {
    initial: { x: '-60%', scale: 1.05, opacity: 0.8 },
    animate: { x: ['-60%', '30%', '-60%'], transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' } },
  }
  const rightShapeVariants = {
    initial: { x: '60%', scale: 1.03, opacity: 0.9 },
    animate: { x: ['60%', '-30%', '60%'], transition: { duration: 10.5, repeat: Infinity, ease: 'easeInOut' } },
  }

  const guruAnim = {
    initial: { x: '-70%', opacity: 0, scale: 0.98 },
    animate: {
      x: ['-70%', 0, 18, 0],
      opacity: [0, 1, 1, 1],
      transition: { duration: 16, times: [0, 0.18, 0.7, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 },
    },
  }

  const rajAnim = {
    initial: { x: '70%', opacity: 0, scale: 0.98 },
    animate: {
      x: ['70%', 0, -18, 0],
      opacity: [0, 1, 1, 1],
      transition: { duration: 16, times: [0, 0.18, 0.7, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 },
    },
  }

  const h2Anim = {
    initial: { y: '60%', opacity: 0, scale: 0.98 },
    animate: {
      y: ['60%', 0, -10, 0],
      opacity: [0, 1, 1, 1],
      transition: { duration: 16, times: [0, 0.18, 0.7, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 },
    },
  }

  const inViewVariant = {
    hiddenFromTop: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
    hiddenToBottom: { y: -30, opacity: 0 },
  }

  const h1Stroke = { WebkitTextStroke: '5px black', paintOrder: 'stroke fill' }
  const h2Stroke = { WebkitTextStroke: '2.5px rgba(0,0,0,0.9)' }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <section
        aria-label="Hero"
        className="relative h-screen w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        {isDesktop ? (
          <motion.div
            aria-hidden="true"
            className="absolute top-[-8%] sm:top-[-6%] md:top-[-4%] left-[-18%] sm:left-[-12%] md:left-[-8%] blur-3xl rounded-[30%] opacity-90"
            variants={leftShapeVariants}
            initial="initial"
            animate="animate"
            style={{ width: '70vw', height: '110vh', background: 'linear-gradient(135deg, rgba(124,44,255,0.95) 0%, rgba(107,44,255,0.85) 50%, rgba(255,94,219,0.9) 100%)', mixBlendMode: 'screen', y: leftParallax }}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute top-[-8%] left-[-14%] blur-2xl rounded-[30%] opacity-80 pointer-events-none"
            style={{ width: '60vw', height: '90vh', background: 'linear-gradient(135deg, rgba(124,44,255,0.9) 0%, rgba(255,94,219,0.85) 100%)', mixBlendMode: 'screen' }}
          />
        )}

        {isDesktop ? (
          <motion.div
            aria-hidden="true"
            className="absolute bottom-[-10%] sm:bottom-[-8%] md:bottom-[-6%] right-[-18%] sm:right-[-12%] md:right-[-8%] blur-3xl rounded-[30%] opacity-85"
            variants={rightShapeVariants}
            initial="initial"
            animate="animate"
            style={{ width: '70vw', height: '110vh', background: 'linear-gradient(200deg, rgba(0,212,255,0.9) 0%, rgba(124,245,255,0.75) 50%, rgba(124,44,255,0.8) 100%)', mixBlendMode: 'screen', y: rightParallax }}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute bottom-[-8%] right-[-14%] blur-2xl rounded-[30%] opacity-80 pointer-events-none"
            style={{ width: '60vw', height: '90vh', background: 'linear-gradient(200deg, rgba(0,212,255,0.9) 0%, rgba(124,245,255,0.75) 50%, rgba(124,44,255,0.8) 100%)', mixBlendMode: 'screen' }}
          />
        )}

        <motion.div
          className="relative z-30 max-w-5xl w-full px-4 sm:px-6 lg:px-8 text-center"
          style={isDesktop ? { y: contentParallax } : {}}
        >
          {isDesktop ? (
            <>
              <motion.h1
                className="font-extrabold text-white drop-shadow-2xl leading-[0.82] select-none break-words"
                style={{ fontSize: 'clamp(13rem, 15vw, 10rem)', lineHeight: 1 }}
                aria-label="Gururaj"
                variants={inViewVariant}
                initial="hiddenFromTop"
                animate="visible"
                whileInView="visible"
                viewport={{ amount: 0.2, once: false }}
              >
                <motion.span
                  className="inline-block"
                  variants={guruAnim}
                  initial="initial"
                  animate="animate"
                  whileInView="animate"
                  viewport={{ amount: 0.2, once: false }}
                >
                  <Guru />
                </motion.span>

                <motion.span
                  className="inline-block text-red-500"
                  style={{ fontSize: 'clamp(13rem, 15vw, 10rem)', lineHeight: 1, ...h1Stroke }}
                  variants={rajAnim}
                  initial="initial"
                  animate="animate"
                  whileInView="animate"
                  viewport={{ amount: 0.2, once: false }}
                >
                  <Raj />
                </motion.span>
              </motion.h1>

              <motion.h2
                className="mt-2 bg-clip-text font-extrabold leading-[0.82] select-none text-transparent break-words"
                variants={h2Anim}
                initial="initial"
                animate="animate"
                whileInView="animate"
                viewport={{ amount: 0.2, once: false }}
                aria-label="UI Developer"
                style={{ fontSize: 'clamp(9rem, 8vw, 8rem)', ...h2Stroke }}
              >
                UI Developer
              </motion.h2>
            </>
          ) : (
            <>
              <h1 className="font-extrabold text-white drop-shadow-2xl leading-[0.82] select-none break-words" style={{ fontSize: 'clamp(6rem, 12vw, 8rem)', lineHeight: 1 }} aria-label="Gururaj">
                <span className="inline-block">Guru</span>
                <span className="inline-block text-red-500" style={{ fontSize: 'clamp(6rem, 12vw, 8rem)', lineHeight: 1, ...h1Stroke }}>Raj</span>
              </h1>

              <h2 className="mt-2 bg-clip-text font-extrabold leading-[0.82] select-none text-transparent break-words" aria-label="UI Developer" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', ...h2Stroke }}>
                UI Developer
              </h2>
            </>
          )}

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap" style={{ opacity: 1 }}>
            <a href="#projects" className="rounded-full bg-indigo-600/95 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-xl hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-label="View Projects">View Projects</a>
            <a href="#contact" className="rounded-full border border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white/90 hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/25" aria-label="Contact">Contact</a>
          </div>
        </motion.div>

        {isVisible && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed right-6 bottom-6 z-50 rounded-full bg-indigo-600 p-3 shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Back to top"
            title="Back to top"
          >
            <MdOutlineArrowUpward size={20} />
          </button>
        )}
      </section>
    </div>
  )
}
