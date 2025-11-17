"use client";

import logo from "../assets/logo1.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // threshold
      setScrolled(isScrolled);

      // if user scrolls while mobile menu is open, close it
      if (isScrolled && open) {
        setOpen(false);
      }
    };

    // set initial state and attach listener
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // social array for reuse
  const socials = [
    { icon: <BsTwitterX />, link: "https://x.com/Gururajkondagul" },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/gururaj-h-k-3008a1191/overlay/background-image/",
    },
    {
      icon: <FaSquareFacebook />,
      link: "https://www.facebook.com/gururaj.kondaguli.2041",
    },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/rraaj_talwar?igsh=N3pzdWcyaDdoaXpr",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        // background toggles: black at top, transparent when scrolled
        className={`w-full fixed top-0 left-0 z-50 shadow-xl transition-colors duration-300 ${
          scrolled ? "bg-transparent" : "bg-black"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-6 sm:py-8">
          {/* GK Logo - hides when scrolled */}
          <motion.div
            className={`flex items-center cursor-pointer transition-all duration-300 ${
              scrolled ? "pointer-events-none" : ""
            }`}
            whileHover={{ scale: scrolled ? 1 : 1.1 }}
            animate={
              scrolled
                ? { opacity: 0, y: -6, scale: 0.9 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            aria-hidden={scrolled}
          >
            <img src={logo} alt="GK Logo" className="h-15 w-15 object-contain" />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-xl">
            {["about", "skills", "projects", "contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="hover:text-gray-300 capitalize text-white"
                whileHover={{ scale: 1.08, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Right Side Icons - hide when scrolled */}
          <div
            className={`hidden sm:flex items-center gap-6 text-3xl transition-opacity duration-300 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-hidden={scrolled}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300 text-white"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button (always visible) */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              // When scrolled: transparent + no border so only links show.
              // Otherwise: usual black dropdown with top border.
              className={`md:hidden transition-colors duration-200 ${
                scrolled ? "bg-transparent border-t-0" : "bg-black border-t border-gray-800"
              }`}
            >
              <div className="flex flex-col px-6 py-4 text-lg gap-4">
                {["home", "about", "skills", "projects", "contact"].map((item) => (
                  <a
                    key={item}
                    onClick={() => setOpen(false)}
                    href={`#${item}`}
                    // ensure links are visible even over varying backgrounds
                    className="py-2 capitalize text-white hover:text-gray-300"
                  >
                    {item}
                  </a>
                ))}

                {/* Mobile Social Icons - hidden when scrolled */}
                <div
                  className={`flex gap-6 pt-4 text-3xl transition-opacity duration-300 ${
                    scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                  aria-hidden={scrolled}
                >
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gray-300 text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;










// "use client";


// import logo from "../assets/logo1.png";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { FaInstagramSquare } from "react-icons/fa";
// import { HiOutlineMenu, HiX } from "react-icons/hi";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* NAVBAR */}
//       <motion.header
//         className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-xl"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//         }}
//       >
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-6 sm:py-8">

//           {/* GK Logo */}
//           {/* GK Logo */}
//             <motion.div
//               className="flex items-center cursor-pointer"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <img
//                 src={logo}
//                 alt="GK Logo"
//                 className="h-20 w-20 object-contain"
//               />
//             </motion.div>


//           {/* Desktop Menu */}
//           <nav className="hidden md:flex gap-8 text-xl">
//             {["home", "about", "skills", "projects", "contact"].map((item) => (
//               <motion.a
//                 key={item}
//                 href={`#${item}`}
//                 className="hover:text-gray-300 capitalize"
//                 whileHover={{ scale: 1.08, opacity: 0.8 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </nav>

//           {/* Right Side Icons */}
//           <div className="hidden sm:flex items-center gap-6 text-3xl">
//             {[
//               { icon: <BsTwitterX />, link: "https://x.com/Gururajkondagul" },
//               { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gururaj-h-k-3008a1191/overlay/background-image/" },
//               { icon: <FaSquareFacebook />, link: "https://www.facebook.com/gururaj.kondaguli.2041" },
//               { icon: <FaInstagramSquare />, link: "https://www.instagram.com/rraaj_talwar?igsh=N3pzdWcyaDdoaXpr" },
//             ].map((social, index) => (
//               <motion.a
//                 key={index}
//                 href={social.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-gray-300"
//                 whileHover={{ scale: 1.15 }}
//                 transition={{ type: "spring", stiffness: 150 }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-3xl"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <HiX /> : <HiOutlineMenu />}
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="md:hidden bg-black border-t border-gray-800"
//             >
//               <div className="flex flex-col px-6 py-4 text-lg gap-4">
//                 {["home", "about", "skills", "projects", "contact"].map(
//                   (item) => (
//                     <a
//                       key={item}
//                       onClick={() => setOpen(false)}
//                       href={`#${item}`}
//                       className="py-2 capitalize text-gray-200 hover:text-white"
//                     >
//                       {item}
//                     </a>
//                   )
//                 )}

//                 {/* Mobile Social Icons */}
//                 <div className="flex gap-6 pt-4 text-3xl">
//                   {[
//                     { icon: <BsTwitterX />, link: "https://x.com/Gururajkondagul" },
//                     { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gururaj-h-k-3008a1191/overlay/background-image/" },
//                     { icon: <FaSquareFacebook />, link: "https://www.facebook.com/gururaj.kondaguli.2041" },
//                     { icon: <FaInstagramSquare />, link: "https://www.instagram.com/rraaj_talwar?igsh=N3pzdWcyaDdoaXpr" },
//                   ].map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.link}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="hover:text-gray-300"
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>
//     </>
//   );
// }

// export default Navbar;

