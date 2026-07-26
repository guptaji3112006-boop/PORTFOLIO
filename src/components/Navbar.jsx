import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const allLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Skills", href: "#tech-stack" },
  { label: "Let's Connect", href: "#contact" },
];

 
const mobileLinks = allLinks.filter((link) => link.label !== "Let's Connect");

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="70" fill="#0A0A0A" />
      <text
        x="70"
        y="90"
        textAnchor="middle"
        fontFamily="Anton, sans-serif"
        fontWeight="900"
        fontSize="52"
        fill="#F4C346"
        letterSpacing="-2"
      >
        RG
      </text>
    </svg>
  );
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = allLinks.map((link) => document.querySelector(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, i) => {
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveLink(allLinks[i].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-transparent px-4 sm:px-6 md:px-16 py-4 sm:py-5">
      <div className="flex items-center justify-between">
        <a href="#hero" className="shrink-0">
          <Logo />
        </a>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0"
        >
          {isOpen ? (
            <FiX size={16} className="text-[#F4C346]" />
          ) : (
            <FiMenu size={16} className="text-[#F4C346]" />
          )}
        </button>

        <div className="hidden md:flex items-center gap-2 flex-wrap justify-end">
          {allLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                activeLink === link.href
                  ? "text-black bg-[#F7D47E] border-black"
                  : "text-black/70 bg-[#F7D47E] border-black/20 hover:border-black/50"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {mobileLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                    activeLink === link.href
                      ? "text-black bg-[#F7D47E] border-black"
                      : "text-black/70 bg-[#F7D47E] border-black/20"
                  }`}
                  whileTap={{ scale: 0.96 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}