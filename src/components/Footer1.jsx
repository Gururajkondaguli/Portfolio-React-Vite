'use client'


import { motion } from "framer-motion"
import { MdOutlineArrowUpward } from "react-icons/md";
import React, { useEffect, useState } from 'react'

export default function Footer1() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true)
      else setIsVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 text-gray-300 py-10 px-6 lg:px-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl text-center">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:kondaguligururaj@gmail.com"
            className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
          >
            <i className="bx bxl-gmail"></i>
          </a>

          <a
            href="https://github.com/Gururajkondaguli"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/gururaj-kondaguli-3008a1191/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://www.instagram.com/gururaj_talwar/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-indigo-400 transition-transform hover:scale-110"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Gururaj Kondaguli — All Rights Reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed bottom-6 right-5 z-50
          bg-indigo-500 text-white
          p-3 rounded-full shadow-xl
        "
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.6, 
            ease: "easeInOut" 
          }}
        >
          <MdOutlineArrowUpward className="text-3xl" />
        </motion.div>
      </button>
      )}
    </footer>
  )
}


 