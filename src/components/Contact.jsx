// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// export default function Contact() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [status, setStatus] = useState(null) // 'success' | 'error' | null
//   const [errorMsg, setErrorMsg] = useState('')
//   const [honeypot, setHoneypot] = useState('') // hidden field for bots

//   useEffect(() => {
//     if (status === 'success') {
//       const t = setTimeout(() => setStatus(null), 4000) // auto dismiss success
//       return () => clearTimeout(t)
//     }
//   }, [status])

//   const emailValid = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

//   async function handleSubmit(e) {
//     e.preventDefault()
//     setStatus(null)
//     setErrorMsg('')

//     // honeypot trap: if filled, do nothing (likely a bot)
//     if (honeypot) return

//     if (!name.trim() || !email.trim() || !message.trim()) {
//       setStatus('error')
//       setErrorMsg('Please fill all fields.')
//       return
//     }

//     if (!emailValid(email)) {
//       setStatus('error')
//       setErrorMsg('Please provide a valid email address.')
//       return
//     }

//     setLoading(true)
//     try {
//       // TODO: replace with your Formspree endpoint or your server endpoint.
//       // Example Formspree JSON endpoint: https://formspree.io/f/yourFormId
//       const endpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID' // <--- update this

//       const res = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, message }),
//       })

//       if (res.ok) {
//         setStatus('success')
//         setName('')
//         setEmail('')
//         setMessage('')
//       } else {
//         const text = await res.text().catch(() => '')
//         setStatus('error')
//         setErrorMsg(text || 'Failed to send message. Try again later.')
//       }
//     } catch (err) {
//       setStatus('error')
//       setErrorMsg('Network error. Check your connection.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Framer Motion variants
//   const container = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.08 } },
//   }
//   const leftVariant = {
//     hidden: { opacity: 0, x: -40 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   }
//   const rightVariant = {
//     hidden: { opacity: 0, x: 40 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   }
//   const itemVariant = {
//     hidden: { opacity: 0, y: 8 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
//   }

//   return (
//     <section id="contact" className="bg-gray-900 py-16 px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           variants={container}
//         >
//           {/* LEFT: Big text + info */}
//           <motion.div variants={leftVariant} className="text-white flex flex-col justify-center">
//             <motion.h2
//               className="text-4xl sm:text-5xl font-bold leading-tight"
//               initial={{ opacity: 0, y: 6 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.05, duration: 0.6 }}
//             >
//               Let's build something great.
//             </motion.h2>

//             <motion.p variants={itemVariant} className="mt-4 text-gray-300 text-lg">
//               Have an idea, a bug, or a collaboration? Drop a message — I typically reply within a day.
//             </motion.p>

//             <motion.div variants={itemVariant} className="mt-8 space-y-4 text-gray-300">
//               <p>
//                 <span className="font-semibold text-white">Email:</span>{' '}
//                 <a href="mailto:gururajkondaguli@gmail.com" className="text-indigo-400 hover:underline">
//                   gururajkondaguli@gmail.com
//                 </a>
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Location:</span> Bangalore, Karnataka, India
//               </p>
//             </motion.div>

//             <motion.div variants={itemVariant} className="flex gap-6 mt-8">
//               {[
//                 { href: 'mailto:gururajkondaguli@gmail.com', label: 'Email', svg: 'M2 3h20v18H2z' },
//                 { href: 'https://www.linkedin.com/in/gururaj-kondaguli-3008a1191/', label: 'LinkedIn', svg: 'M4 4h16v16H4z' },
//                 { href: 'https://www.instagram.com/gururaj_talwar/', label: 'Instagram', svg: 'M3 3h18v18H3z' },
//               ].map((s) => (
//                 <motion.a
//                   key={s.href}
//                   href={s.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={s.label}
//                   whileHover={{ scale: 1.12 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="text-3xl text-gray-300 hover:text-indigo-400 transition-transform"
//                 >
//                   {/* simple accessible SVG placeholder (keeps no external icon font needed) */}
//                   <svg
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     aria-hidden="true"
//                   >
//                     <rect x="2" y="3" width="20" height="18" rx="2" />
//                     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
//                     <path d="M17.5 6.5h.01" />
//                   </svg>
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* RIGHT: Form */}
//           <motion.div
//             variants={rightVariant}
//             className="bg-gray-800 rounded-2xl p-8 shadow-xl ring-1 ring-white/10"
//           >
//             <motion.h3 variants={itemVariant} className="text-xl font-semibold text-white mb-6">
//               Send a message
//             </motion.h3>

//             <motion.form
//               variants={container}
//               onSubmit={handleSubmit}
//               className="space-y-4"
//               aria-live="polite"
//             >
//               {/* honeypot - keep it visually hidden and aria-hidden */}
//               <label style={{ display: 'none' }} aria-hidden="true">
//                 Do not fill
//                 <input
//                   type="text"
//                   name="website" // common honeypot name
//                   value={honeypot}
//                   onChange={(e) => setHoneypot(e.target.value)}
//                   autoComplete="off"
//                   tabIndex={-1}
//                 />
//               </label>

//               <motion.div variants={itemVariant}>
//                 <label htmlFor="contact-name" className="block text-sm font-medium text-gray-200">
//                   Name
//                 </label>
//                 <input
//                   id="contact-name"
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="mt-1 w-full bg-gray-900 rounded-md px-3 py-2 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                   placeholder="Your name"
//                   required
//                 />
//               </motion.div>

//               <motion.div variants={itemVariant}>
//                 <label htmlFor="contact-email" className="block text-sm font-medium text-gray-200">
//                   Email
//                 </label>
//                 <input
//                   id="contact-email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="mt-1 w-full bg-gray-900 rounded-md px-3 py-2 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                   placeholder="you@example.com"
//                   required
//                 />
//               </motion.div>

//               <motion.div variants={itemVariant}>
//                 <label htmlFor="contact-message" className="block text-sm font-medium text-gray-200">
//                   Message
//                 </label>
//                 <textarea
//                   id="contact-message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   rows={5}
//                   className="mt-1 w-full bg-gray-900 rounded-md px-3 py-2 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                   placeholder="Tell me about your project..."
//                   required
//                 />
//               </motion.div>

//               <motion.div variants={itemVariant} className="mt-2">
//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={{ y: -3 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 rounded-md disabled:opacity-60"
//                 >
//                   {loading ? 'Sending...' : 'Send Message'}
//                 </motion.button>
//               </motion.div>

//               <motion.div variants={itemVariant} className="min-h-6">
//                 {status === 'success' && (
//                   <p className="text-green-400 text-sm">Message sent successfully!</p>
//                 )}
//                 {status === 'error' && (
//                   <p className="text-red-400 text-sm">{errorMsg}</p>
//                 )}
//               </motion.div>
//             </motion.form>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/Contact.jsx
'use client'

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal' // path A (src/components/ScrollReveal.jsx)

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [errorMsg, setErrorMsg] = useState('')
  const [honeypot, setHoneypot] = useState('') // hidden field for bots

  useEffect(() => {
    if (status === 'success') {
      const t = setTimeout(() => setStatus(null), 4000) // auto dismiss success
      return () => clearTimeout(t)
    }
  }, [status])

  const emailValid = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    setErrorMsg('')

    // honeypot trap: if filled, do nothing (likely a bot)
    if (honeypot) return

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setErrorMsg('Please fill all fields.')
      return
    }

    if (!emailValid(email)) {
      setStatus('error')
      setErrorMsg('Please provide a valid email address.')
      return
    }

    setLoading(true)
    try {
      // TODO: replace with your Formspree endpoint or your server endpoint.
      // Example Formspree JSON endpoint: https://formspree.io/f/yourFormId
      const endpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID' // <--- update this

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const text = await res.text().catch(() => '')
        setStatus('error')
        setErrorMsg(text || 'Failed to send message. Try again later.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-gray-900 py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

         
          {/* LEFT: Big text + info */}
          <ScrollReveal from="up" className="text-white flex flex-col justify-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Contact
          </h2>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Let's build something great.
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Have an idea, a bug, or a collaboration? Drop a message — I typically reply within a day.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:gururajkondaguli@gmail.com" className="text-indigo-400 hover:underline">
                  gururajkondaguli@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span> Bangalore, Karnataka, India
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              <ScrollReveal from="down" className="flex gap-6">
                <a
                  href="mailto:gururajkondaguli@gmail.com"
                  aria-label="Email"
                  className="text-3xl text-gray-300 hover:text-indigo-400 transition-transform"
                >
                  <CiMail />
                </a>

                <a
                  href="https://www.linkedin.com/in/gururaj-kondaguli-3008a1191/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-3xl text-gray-300 hover:text-indigo-400 transition-transform"
                >
                  <CiLinkedin />
                </a>

                <a
                  href="https://github.com/Gururajkondaguli"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-3xl text-gray-300 hover:text-indigo-400 transition-transform"
                >
                 <FaGithub />
                </a>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* RIGHT: Form */}
          <ScrollReveal from="up" className="bg-gray-800 rounded-2xl p-8 shadow-xl ring-1 ring-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
              {/* honeypot - keep it visually hidden and aria-hidden */}
              <label style={{ display: 'none' }} aria-hidden="true">
                Do not fill
                <input
                  type="text"
                  name="website" // common honeypot name
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </label>

              <ScrollReveal from="down" className="">
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full bg-gray-900 rounded-md px-3 py-2 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </ScrollReveal>

              <ScrollReveal from="down" delay={0.04}>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full bg-gray-900 rounded-md px-3 py-2 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </ScrollReveal>

              <ScrollReveal from="down" delay={0.08}>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-1 w-full bg-gray-900 rounded-md px-3 py-2 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </ScrollReveal>

              <ScrollReveal from="up" delay={0.12}>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 rounded-md disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </ScrollReveal>

              <ScrollReveal from="up" delay={0.16}>
                <div className="min-h-6">
                  {status === 'success' && <p className="text-green-400 text-sm">Message sent successfully!</p>}
                  {status === 'error' && <p className="text-red-400 text-sm">{errorMsg}</p>}
                </div>
              </ScrollReveal>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
