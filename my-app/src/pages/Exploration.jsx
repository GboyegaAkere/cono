import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMinus, FiMapPin, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

/* =========================
   BREADCRUMB
========================= */

function Breadcrumb({ dark }) {
  return (
    <div
      className={`px-6 lg:px-16 py-4 text-sm ${
        dark ? "text-white/80" : "text-neutral-500"
      }`}
    >
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      /{" "}
      <Link to="/what-we-do" className="hover:underline">
        What we do
      </Link>{" "}
      /
    </div>
  );
}

/* =========================
   PAGE HERO
========================= */

function PageHero() {
  return (
    <div className="relative h-[420px] lg:h-[520px] overflow-hidden">
      <img
        src="/bg.jpg"
        alt="Pumpjacks against a sunlit sky"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />

      <div className="relative z-10 h-full flex flex-col">
        <Breadcrumb dark />
        <div className="flex-1 flex items-end px-6 lg:px-16 pb-14">
          <h1 className="text-4xl lg:text-6xl font-normal text-white">
            Exploration and production
          </h1>
        </div>
      </div>
    </div>
  );
}

/* =========================
   INTRO
========================= */

function IntroSection() {
  return (
    <section className="relative px-6 lg:px-16 py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl text-red-700 font-normal leading-tight"
        >
          We find new resources, maximize production and responsibly develop areas previously
          thought unrecoverable.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-neutral-700 text-lg leading-relaxed"
        >
          Whether it's an unconventional play in the Lower 48, an offshore field in the North
          Sea, or an oil sands operation in Canada, our approach around the world stays the same:
          use our proven track record and expertise to safely and responsibly find and produce
          oil and gas.
        </motion.p>
      </div>

      {/* decorative diagonal lines, top-right */}
      <svg
        viewBox="0 0 300 300"
        className="hidden lg:block absolute top-10 right-0 w-64 h-64 pointer-events-none"
      >
        <path d="M280 300 L150 20" stroke="#D0021B" strokeWidth="1.5" fill="none" />
        <path d="M300 260 L190 40" stroke="#D0021B" strokeWidth="1" fill="none" opacity="0.6" />
      </svg>
    </section>
  );
}

/* =========================
   ACCORDION
========================= */

const accordionItems = [
  {
    id: "global-operations",
    title: "Global operations",
    content:
      "Our global operations span diverse geographies and geologies, from the Arctic to the equator, giving us a deep bench of technical expertise applicable across a wide range of resource types and operating environments.",
  },
  {
    id: "unconventional-reservoirs",
    title: "Unconventional reservoirs",
    content:
      "We are a leading unconventional producer, applying advanced drilling and completion techniques across premier acreage positions in the Permian, Eagle Ford, Bakken and other North American plays.",
  },
  {
    id: "conventional-fields",
    title: "Conventional fields",
    content:
      "Our legacy conventional assets continue to deliver reliable production through disciplined reservoir management, infrastructure investment and operational excellence.",
  },
  {
    id: "lng",
    title: "LNG (Liquefied Natural Gas)",
    content:
      "We participate in LNG projects that connect natural gas resources with global demand, supporting energy security while offering a lower-carbon-intensity fuel option.",
  },
  {
    id: "oil-sands",
    title: "Oil sands",
    content:
      "Our Canadian oil sands operations utilize steam-assisted gravity drainage (SAGD) technology to responsibly develop long-life, low-decline resources in the Athabasca region.",
  },
  {
    id: "getting-energy-to-market",
    title: "Getting energy to market",
    content:
      "From pipelines to marine terminals, we manage the critical infrastructure and logistics required to move crude oil, natural gas and NGLs safely and efficiently from the wellhead to the global market.",
  },
];

function AccordionRow({ id, title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between py-7 text-left"
      >
        <span className="text-2xl lg:text-3xl text-neutral-900 font-normal">{title}</span>
        <span className="w-9 h-9 flex items-center justify-center bg-red-700 text-white shrink-0 ml-4">
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-neutral-700 leading-relaxed max-w-3xl">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccordionSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="px-6 lg:px-16 pb-16 lg:pb-24 bg-white">
      <div>
        {accordionItems.map((item) => (
          <AccordionRow
            key={item.id}
            {...item}
            isOpen={openId === item.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================
   FOOTER
========================= */

const socialIcons = [
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: FaXTwitter, label: "X", href: "https://x.com" },
  { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { Icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

const contactItems = [
  { Icon: FiMapPin, text: "925 N. Eldridge Parkway, Houston, TX 77079-2703", to: "#", underline: true },
  { Icon: FiMail, text: "P.O. Box 2197, Houston, TX 77252-2197", to: null, underline: false },
  { Icon: FiMessageCircle, text: "Contact Us", to: "/contact-us", underline: true },
  { Icon: FiPhone, text: "281-293-1000", to: "tel:2812931000", underline: true },
];

const quickLinks = [
  { label: "Careers", to: "/careers" },
  { label: "News & media", to: "/news-media" },
  { label: "spiritnow stories", to: "/spiritnow-stories" },
  { label: "About", to: "/about-us" },
  { label: "Where we operate", to: "/where-we-operate" },
  { label: "Investors", to: "/investors" },
  { label: "U.S. Owner Relations", to: "/us-owner-relations" },
];

const legalLinks = [
  { label: "Accessibility Statement", to: "/accessibility" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Do Not Sell/Share My Information", to: "/do-not-sell" },
];



/* =========================
   EXPLORATION AND PRODUCTION PAGE
========================= */

export default function Exploration() {
  return (
    <div className="pt-[104px] lg:pt-[136px] bg-white">
      <PageHero />
      <IntroSection />
      <AccordionSection />
    </div>
  );
}