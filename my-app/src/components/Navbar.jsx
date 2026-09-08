import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
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
  { label: "Where we operate", },
  { label: "Reports & resources",},
  { label: "News & media",  },
  { label: "spiritnow stories", },
  { label: "U.S. Owner Relations", },
  { label: "Supplier Relations", },
];

const mainLinks = [
  {
    label: "About us",
    to: "/about-us",
    hasDropdown: true,
    dropdown: [
      { label: "Who we are", to: "/about-us" },
       { label: "Our People", to: "/about-us/our-people" },
      // { label: "Our leadership", to: "/about-us/leadership" },
      // { label: "Our history", to: "/about-us/history" },
      // { label: "Our values", to: "/about-us/values" },
    ],
  },
  {
    label: "What we do",
    to: "/what-we-do",
    hasDropdown: true,
    dropdown: [
     
      { label: "Exploration", to: "/what-we-do/exploration" },
      // { label: "Production", to: "/what-we-do/production" },
      // { label: "Technology", to: "/what-we-do/technology" },
    ],
  },
  {
    label: "Sustainability",
    to: "/sustainability",
    hasDropdown: true,
    dropdown: [
       { label: "Our operations", to: "/what-we-do/operations" },
      { label: "Climate change", to: "/sustainability/managing" },
      // { label: "Environment", to: "/sustainability/environment" },
      // {
      //   label: "Social responsibility",
      //   to: "/sustainability/social-responsibility",
      // },
    ],
  },
  {
    label: "Careers",
    to: "/sustainability/managing",
    hasDropdown: false,
  },
  {
    label: "Investors",
    to: "/about-us/who-we-are",
    hasDropdown: true,
    dropdown: [
      {
        label: "Investor relations",
        to: "/about-us/who-we-are",
      },
      {
      //   label: "Financial information",
      //   to: "/investors/financial-information",
      // },
      // {
      //   label: "Stock information",
      //   to: "/investors/stock-information",
      // },
      // {
      //   label: "SEC filings",
      //   to: "/investors/sec-filings",
      // },
      // {
      //   label: "Events & presentations",
      //   to: "/investors/events-presentations",
      },
    ],
  },
];

const socialIcons = [
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    Icon: FaXTwitter,
    label: "X",
    href: "https://x.com",
  },
  {
    Icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    Icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com",
  },
];

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-1.5">
      <svg viewBox="0 0 60 40" className="w-9 h-6 lg:w-11 lg:h-7">
        <path
          d="M2 8 C 20 2, 35 2, 58 10 C 40 22, 22 22, 2 8 Z"
          fill="#D0021B"
        />
      </svg>

      <span className="text-lg lg:text-2xl font-bold text-neutral-900 tracking-tight">
        ConocoPhillips
      </span>
    </Link>
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
      className="hidden lg:flex overflow-hidden items-center justify-end gap-7 px-10 bg-linear-to-b from-neutral-200 to-neutral-300 border-b border-neutral-300"
    >
      {topLinks.map((link) => (
        <motion.div
          key={link.label}
          whileHover={{ opacity: 0.7 }}
        >
          <Link
            to={link.to}
            className="text-[13px] text-blue-700 hover:underline whitespace-nowrap"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* =========================
   DESKTOP NAV ITEM
   DROPDOWN OPENS ON HOVER
========================= */

function NavItem({
  label,
  to,
  hasDropdown,
  dropdown = [],
}) {
  return (
    <div className="relative group">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-1 text-[15px] font-semibold transition-colors ${
            isActive
              ? "text-red-600"
              : "text-neutral-900 hover:text-red-600"
          }`
        }
      >
        {label}

        {hasDropdown && (
          <FiChevronDown
            size={14}
            className="mt-0.5 transition-transform duration-200 group-hover:rotate-180 group-hover:text-red-600"
          />
        )}
      </NavLink>

      {hasDropdown && (
        <div
          className="
            absolute left-0 top-full mt-5 w-64
            bg-red-700 shadow-xl z-50
            opacity-0 invisible translate-y-2
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all duration-200
          "
        >
          <div className="py-2">
            {dropdown.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block px-5 py-3 text-[15px] text-white hover:bg-red-800 transition-colors"
              >
                {item.label}
              </Link>
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
      <Link
        to={item.to}
        onClick={onClose}
        className="w-full flex items-center justify-between px-6 py-5 border-b border-neutral-200"
      >
        <span className="font-serif text-[28px] leading-none text-red-700">
          {item.label}
        </span>
      </Link>
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
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-red-700"
          >
            {item.dropdown.map((subItem) => (
              <Link
                key={subItem.label}
                to={subItem.to}
                onClick={onClose}
                className="block px-8 py-4 text-[15px] text-white border-t border-red-600 hover:bg-red-800 transition-colors"
              >
                {subItem.label}
              </Link>
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
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
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
              <Link
                key={link.label}
                to={link.to}
                className="text-[15px] text-neutral-800 hover:text-red-600 transition-colors"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Choose location */}
          <div className="px-6 pb-6">
            <Link
              to="/choose-location"
              onClick={onClose}
              className="flex items-center gap-2 bg-neutral-100 px-4 py-4 text-[15px] text-neutral-900 hover:bg-neutral-200 transition-colors"
            >
              <FiGlobe size={18} />
              Choose location
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-8 pb-8">
            {socialIcons.map(
              ({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-neutral-900 hover:text-red-600 transition-colors"
                >
                  <Icon size={20} />
                </a>
              )
            )}
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
    <header className="fixed top-0 left-0 right-0 z-100 w-full font-sans">
      <TopBar scrolled={scrolled} />

      <motion.div
        initial={false}
        animate={{ y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`flex items-center justify-between px-4 lg:px-10 py-3 lg:py-4 bg-white border-b border-neutral-200 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {mainLinks.map((item) => (
            <NavItem
              key={item.label}
              {...item}
            />
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link
            to="/choose-location"
            className="hidden sm:flex items-center gap-1.5 text-sm text-neutral-900 hover:text-red-600 transition-colors"
          >
            <FiGlobe size={17} />
            Choose location
          </Link>

          <button
            type="button"
            aria-label="Search"
            className="hidden lg:block text-neutral-900 hover:text-red-600 transition-colors"
          >
            <FiSearch size={19} />
          </button>

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

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}