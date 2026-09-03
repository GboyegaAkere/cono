
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiChevronDown,
  FiGlobe,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const topLinks = [
  "Where we operate",
  "Reports & resources",
  "News & media",
  "spiritnow stories",
  "U.S. Owner Relations",
  "Supplier Relations",
];

const mainLinks = [
  {
    label: "About us",
    hasDropdown: true,
    dropdown: [
      "Who we are",
      "Our leadership",
      "Our history",
      "Our values",
    ],
  },
  {
    label: "What we do",
    hasDropdown: true,
    dropdown: [
      "Our operations",
      "Exploration",
      "Production",
      "Technology",
    ],
  },
  {
    label: "Sustainability",
    hasDropdown: true,
    dropdown: [
      "Our approach",
      "Climate change",
      "Environment",
      "Social responsibility",
    ],
  },
  {
    label: "Careers",
    hasDropdown: false,
  },
  {
    label: "Investors",
    hasDropdown: true,
    dropdown: [
      "Investor relations",
      "Financial information",
      "Stock information",
      "SEC filings",
      "Events & presentations",
    ],
  },
];

const socialIcons = [
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaXTwitter, label: "X" },
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaYoutube, label: "YouTube" },
];

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        viewBox="0 0 60 40"
        className="w-9 h-6 lg:w-11 lg:h-7"
      >
        <path
          d="M2 8 C 20 2, 35 2, 58 10 C 40 22, 22 22, 2 8 Z"
          fill="#D0021B"
        />
      </svg>

      <span className="text-lg lg:text-2xl font-bold text-neutral-900 tracking-tight">
        ConocoPhillips
      </span>
    </div>
  );
}

/* =========================
   TOP BAR
========================= */

function TopBar({ scrolled }) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: scrolled ? 0 : "40px",
        opacity: scrolled ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="
        hidden
        lg:flex
        overflow-hidden
        items-center
        justify-end
        gap-7
        px-10
        bg-gradient-to-b
        from-neutral-200
        to-neutral-300
        border-b
        border-neutral-300
      "
    >
      {topLinks.map((link) => (
        <motion.a
          key={link}
          href="#"
          whileHover={{ opacity: 0.7 }}
          className="text-[13px] text-blue-700 hover:underline whitespace-nowrap"
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
}

/* =========================
   DESKTOP NAV ITEM
   DROPDOWN OPENS ON HOVER
========================= */

function NavItem({ label, hasDropdown, dropdown = [] }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center gap-1 text-[15px] font-semibold text-neutral-900 hover:text-red-600 transition-colors"
      >
        {label}

        {hasDropdown && (
          <FiChevronDown
            size={14}
            className="mt-0.5 transition-transform duration-200 group-hover:rotate-180 group-hover:text-red-600"
          />
        )}
      </button>

      {hasDropdown && (
        <div
          className="
            absolute
            left-0
            top-full
            mt-5
            w-64
            bg-red-700
            shadow-xl
            z-50
            opacity-0
            invisible
            translate-y-2
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all
            duration-200
          "
        >
          <div className="py-2">
            {dropdown.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  block
                  px-5
                  py-3
                  text-[15px]
                  text-white
                  hover:bg-red-800
                  transition-colors
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================
   MOBILE NAV ITEM
========================= */

function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);

  if (!item.hasDropdown) {
    return (
      <a
        href="#"
        onClick={onClose}
        className="w-full flex items-center justify-between px-6 py-5 border-b border-neutral-200"
      >
        <span className="font-serif text-[28px] leading-none text-red-700">
          {item.label}
        </span>
      </a>
    );
  }

  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-5"
      >
        <span className="font-serif text-[28px] leading-none text-red-700">
          {item.label}
        </span>

        <FiChevronDown
          size={20}
          className={`text-neutral-900 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-red-700"
          >
            {item.dropdown.map((subItem) => (
              <a
                key={subItem}
                href="#"
                onClick={onClose}
                className="
                  block
                  px-8
                  py-4
                  text-[15px]
                  text-white
                  border-t
                  border-red-600
                  hover:bg-red-800
                  transition-colors
                "
              >
                {subItem}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================
   MOBILE MENU
========================= */

function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="overflow-hidden bg-white lg:hidden"
        >
          {/* Search */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
            <input
              type="text"
              placeholder="Try 'Alaska' or 'annual report'"
              className="w-full text-[15px] text-neutral-500 placeholder-neutral-400 outline-none"
            />

            <FiSearch
              size={20}
              className="text-neutral-900 shrink-0 ml-3"
            />
          </div>

          {/* Main links */}
          <div>
            {mainLinks.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={onClose}
              />
            ))}
          </div>

          {/* Secondary links */}
          <div className="px-6 py-5 flex flex-col gap-4">
            {topLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[15px] text-neutral-800 hover:text-red-600 transition-colors"
                onClick={onClose}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Choose location */}
          <div className="px-6 pb-6">
            <a
              href="#"
              onClick={onClose}
              className="flex items-center gap-2 bg-neutral-100 px-4 py-4 text-[15px] text-neutral-900 hover:bg-neutral-200 transition-colors"
            >
              <FiGlobe size={18} />
              Choose location
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-8 pb-8">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-neutral-900 hover:text-red-600 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================
   NAVBAR
========================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full font-sans">
      {/* =========================
          TOP HEADER
          DISAPPEARS ON SCROLL
      ========================= */}

      <TopBar scrolled={scrolled} />

      {/* =========================
          MAIN NAVIGATION
          MOVES TO TOP
      ========================= */}

      <motion.div
        initial={false}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`
          flex
          items-center
          justify-between
          px-4
          lg:px-10
          py-3
          lg:py-4
          bg-white
          border-b
          border-neutral-200
          transition-shadow
          duration-300
          ${scrolled ? "shadow-md" : ""}
        `}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {mainLinks.map((item) => (
            <NavItem
              key={item.label}
              {...item}
            />
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Choose location */}
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm text-neutral-900 hover:text-red-600 transition-colors"
          >
            <FiGlobe size={17} />
            Choose location
          </a>

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="hidden lg:block text-neutral-900 hover:text-red-600 transition-colors"
          >
            <FiSearch size={19} />
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            className="lg:hidden text-neutral-900"
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
          >
            {mobileOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}

