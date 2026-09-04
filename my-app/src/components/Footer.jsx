import {
  FiMapPin,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiPrinter,
  FiSettings,
  FiArrowUp,
} from "react-icons/fi";

import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const socialIcons = [
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaXTwitter, label: "X" },
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaYoutube, label: "YouTube" },
];

const contactItems = [
  {
    Icon: FiMapPin,
    text: "925 N. Eldridge Parkway, Houston, TX 77079-2703",
    href: "#",
    underline: true,
  },
  {
    Icon: FiMail,
    text: "P.O. Box 2197, Houston, TX 77252-2197",
    href: null,
    underline: false,
  },
  {
    Icon: FiMessageCircle,
    text: "Contact Us",
    href: "#",
    underline: true,
  },
   {
    Icon: FiMail,
    text: "conocophillips.com",
    href: null,
    underline: false,
  },
  // {
  //   Icon: FiPhone,
  //   text: "281-293-1000",
  //   href: "tel:2812931000",
  //   underline: true,
  // },
];

const quickLinks = [
  "Careers",
  "News & media",
  "spiritnow stories",
  "About",
  "Where we operate",
  "Investors",
  "U.S. Owner Relations",
];

const legalLinks = [
  "Accessibility Statement",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookie Policy",
  "Do Not Sell/Share My Information",
];

function Logo({ className = "" }) {
  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <svg viewBox="0 0 60 40" className="w-10 h-6">
        <path
          d="M2 8 C 20 2, 35 2, 58 10 C 40 22, 22 22, 2 8 Z"
          fill="#D0021B"
        />
      </svg>

      <span className="text-2xl lg:text-3xl font-bold text-neutral-900 tracking-tight">
        ConocoPhillips
      </span>
    </div>
  );
}

function SocialRow() {
  return (
    <div className="flex items-center gap-5">
      {socialIcons.map(({ Icon, label }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="text-neutral-900 hover:text-red-700"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}

function ContactList() {
  return (
    <div className="flex flex-col gap-5">
      {contactItems.map(({ Icon, text, href, underline }) => (
        <div
          key={text}
          className="flex items-start gap-3 text-sm text-neutral-900"
        >
          <Icon
            size={18}
            className="text-red-700 mt-0.5 shrink-0"
          />

          {href ? (
            <a
              href={href}
              className={underline ? "underline" : ""}
            >
              {text}
            </a>
          ) : (
            <span>{text}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="flex flex-col gap-4">
      {quickLinks.map((link) => (
        <a
          key={link}
          href="#"
          className="flex items-center gap-1 text-red-700 font-bold hover:underline"
        >
          {link} <span>›</span>
        </a>
      ))}
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-between gap-6 bg-neutral-500 px-6 lg:px-10 py-4 flex-wrap">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-neutral-200 hover:text-white"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="#"
            aria-label="X"
            className="text-neutral-200 hover:text-white"
          >
            <FaXTwitter size={16} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="text-neutral-200 hover:text-white"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>

        <span className="hidden sm:block w-px h-4 bg-neutral-300" />

        <a
          href="#"
          className="hidden sm:flex items-center gap-2 text-white text-xs font-bold tracking-wide"
        >
          PRINT <FiPrinter size={16} />
        </a>

        <span className="hidden lg:block w-px h-4 bg-neutral-300" />

        <a
          href="#"
          className="hidden lg:flex items-center gap-2 text-white text-xs font-bold tracking-wide"
        >
          SUSTAINABILITY REPORT BUILDER <FiSettings size={16} />
        </a>
      </div>

      <a
        href="#top"
        className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white text-xs font-bold tracking-wide px-5 py-3 transition-colors"
      >
        BACK TO TOP <FiArrowUp size={14} />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <TopBar />

      <div className="px-6 lg:px-16 py-12 lg:py-16">
        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-8">
          <Logo />

          <SocialRow />

          <ContactList />

          <QuickLinks />

          <div className="flex flex-col gap-3 text-sm text-neutral-600 pt-2">
            {legalLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}

            <a href="#">Privacy Center</a>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-[1.3fr_1.3fr_1fr] gap-8">
          <div className="flex flex-col gap-8">
            <Logo />
            <SocialRow />
          </div>

          <ContactList />

          <QuickLinks />
        </div>

        <div className="hidden lg:flex items-end justify-between mt-20 pt-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600">
            {legalLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>

          <p className="text-sm text-neutral-500 text-right">
            © 2026 ConocoPhillips Company. All Rights Reserved.
          </p>
        </div>

        <div className="hidden lg:block mt-2 text-sm text-neutral-600">
          <a href="#">Privacy Center</a>
        </div>
      </div>
    </footer>
  );
}