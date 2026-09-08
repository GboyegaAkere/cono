
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiPause,
  FiPlay,
  FiArrowLeft,
  FiArrowRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

/* =========================
   BREADCRUMB
========================= */

function Breadcrumb() {
  return (
    <div className="px-6 lg:px-16 py-4 text-sm text-neutral-500">
      <Link to="/" className="hover:text-neutral-800">
        Home
      </Link>{" "}
      /
    </div>
  );
}

/* =========================
   PAGE HERO
========================= */

const relatedPages = [
  { label: "Who we are", to: "/about-us/who-we-are" },
  { label: "Our people", to: "/about-us/our-people" },
  { label: "Leadership team", to: "/about-us/leadership" },
  { label: "Global giving", to: "/about-us/global-giving" },
  {
    label: "Safety, health & security",
    to: "/about-us/safety-health-security",
  },
  { label: "Our history", to: "/about-us/history" },
  {
    label: "ConocoPhillips Center",
    to: "/about-us/conocophillips-center",
  },
];

function PageHero() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative">
      <div className="relative h-105 lg:h-120 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1600&auto=format&fit=crop"
          alt="Aerial view of drilling site"
          animate={
            playing
              ? {
                  scale: [1, 1.04, 1],
                }
              : {
                  scale: 1,
                }
          }
          transition={
            playing
              ? {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {
                  duration: 0.3,
                }
          }
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/40" />

        <div className="relative z-10 h-full px-6 lg:px-16 pt-10 flex flex-col justify-start">
          <h1 className="text-4xl lg:text-5xl font-normal text-white">
            About us
          </h1>

          <p className="mt-4 text-white/90 text-lg max-w-xl">
            ConocoPhillips is one of the world's largest independent E&P
            companies based on production and proved reserves.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause motion" : "Play motion"}
          className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/70 text-white text-sm font-medium pl-4 pr-2 py-2 hover:bg-black/80 transition-colors"
        >
          {playing ? "Pause Motion" : "Play Motion"}

          <span className="w-8 h-8 flex items-center justify-center bg-white/10">
            {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
          </span>
        </button>
      </div>

      {/* Related pages panel */}
      <div className="relative z-20 px-6 lg:px-16 -mt-16 lg:-mt-14 pb-4">
        <div className="bg-red-800 text-white max-w-3xl px-6 lg:px-8 py-6">
          <p className="text-xs font-bold tracking-wide text-white/80 mb-4">
            RELATED PAGES
          </p>

          <div className="grid sm:grid-cols-3 gap-x-8 gap-y-3">
            {relatedPages.map((p) => (
              <Link
                key={p.label}
                to={p.to}
                className="flex items-center gap-1 text-sm font-semibold hover:underline"
              >
                {p.label} <span>›</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   INTRO SECTION
========================= */

function IntroSection() {
  return (
    <section className="px-6 lg:px-16 py-16 bg-white max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-4xl text-red-700 font-normal"
      >
        produce oil and natural gas.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 text-neutral-700 text-lg leading-relaxed"
      >
        Our technical capabilities, asset quality and scale, and financial
        strength are unmatched among independent exploration and production
        companies and uniquely position us to compete around the world.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-4 text-neutral-700 text-lg leading-relaxed"
      >
        ConocoPhillips is committed to the efficient and effective exploration
        and production of oil and natural gas. Producing oil and natural gas
        and getting them to market takes ingenuity, technology and investment.
        Our innovative, collaborative efforts yield products that improve
        quality of life globally while producing economic benefits with
        far-reaching influence.
      </motion.p>
    </section>
  );
}

/* =========================
   WHO WE ARE SECTION
========================= */

const whoWeAreCards = [
  {
    title: "Our SPIRIT Values",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/spirit-values",
  },
  {
    title: "Our history",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/history",
  },
];

function WhoWeAreSection() {
  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop"
        alt="ConocoPhillips workers on site"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative z-10 px-6 lg:px-16 pt-16 pb-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-normal text-white"
        >
          Who we are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-white/90 max-w-md"
        >
          We have an important job – to safely find and deliver energy to the
          world.
        </motion.p>

        <Link
          to="/about-us/who-we-are"
          className="mt-6 w-fit flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold px-6 py-4 transition-colors"
        >
          Learn more <span>›</span>
        </Link>

        <div className="flex gap-4 mt-10 max-w-lg">
          {whoWeAreCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="flex flex-col bg-white w-1/2"
            >
              <div className="w-full aspect-4/3 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-neutral-900 font-medium">{c.title}</p>

                <span className="flex items-center gap-1 text-red-700 text-sm font-semibold mt-2">
                  Learn more <span>›</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-16" />
    </section>
  );
}

/* =========================
   REUSABLE GRADIENT CAROUSEL
========================= */

function GradientCarouselSection({
  bgClass,
  waveColors,
  title,
  subtitle,
  learnMoreTo,
  cards,
}) {
  const scrollRef = useRef(null);

  const scrollByAmount = (dir) => {
    if (!scrollRef.current) return;

    const cardWidth =
      scrollRef.current.firstChild?.offsetWidth ?? 260;

    scrollRef.current.scrollBy({
      left: dir * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section className={`relative overflow-hidden ${bgClass}`}>
      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <path
          d="M700,700 C 900,650 1000,450 1150,450 S 1350,250 1440,150 L1440,700 Z"
          fill={waveColors[0]}
          opacity="0.6"
        />

        <path
          d="M850,700 C 1000,700 1050,550 1200,550 S 1350,400 1440,350 L1440,700 Z"
          fill={waveColors[1]}
          opacity="0.5"
        />
      </svg>

      <div className="relative z-10 px-6 lg:px-16 pt-16 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-normal text-white"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-white/90 max-w-2xl"
        >
          {subtitle}
        </motion.p>

        <Link
          to={learnMoreTo}
          className="mt-6 w-fit flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold px-6 py-4 transition-colors"
        >
          Learn more <span>›</span>
        </Link>

        <div
          ref={scrollRef}
          className="flex gap-4 mt-10 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
        >
          {cards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="shrink-0 w-64 snap-start flex flex-col bg-white"
            >
              <div className="w-full aspect-4/3 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-neutral-900 font-medium">{c.title}</p>

                <span className="flex items-center gap-1 text-red-700 text-sm font-semibold mt-2">
                  Learn more <span>›</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex gap-1 mt-6 mb-16">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Previous"
            className="w-11 h-11 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <FiArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Next"
            className="w-11 h-11 flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 transition-colors"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================
   OUR PEOPLE
========================= */

const ourPeopleCards = [
  {
    title: "A compelling culture",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/our-people/culture",
  },
  {
    title: "Attracting a world-class workforce",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/our-people/workforce",
  },
  {
    title: "Employee engagement and development",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/our-people/engagement",
  },
  {
    title: "Compensation, benefits and well-being",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/our-people/benefits",
  },
];

/* =========================
   SAFETY
========================= */

const safetyCards = [
  {
    title: "Safety",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/safety-health-security/safety",
  },
  {
    title: "Health",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42cc0d5b1c?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/safety-health-security/health",
  },
  {
    title: "Security",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    to: "/about-us/safety-health-security/security",
  },
];

/* =========================
   PHOTO GALLERY
========================= */

const galleryPhotos = [
  {
    caption: "North Sea, Norway",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1400&auto=format&fit=crop",
  },
  {
    caption: "Permian Basin, Texas",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1400&auto=format&fit=crop",
  },
  {
    caption: "Kenai, Alaska",
    image:
      "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=1400&auto=format&fit=crop",
  },
];

function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const total = galleryPhotos.length;

  const go = (dir) => {
    setIndex((i) => (i + dir + total) % total);
  };

  const current = galleryPhotos[index];
  const next = galleryPhotos[(index + 1) % total];

  return (
    <>
      <section className="px-6 lg:px-16 py-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-normal text-neutral-900 mb-8"
        >
          ConocoPhillips photo gallery
        </motion.h2>

        <div className="flex gap-4 overflow-hidden">
          <div className="relative w-full lg:w-[70%] aspect-video shrink-0 overflow-hidden">
            <img
              src={current.image}
              alt={current.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <button
              type="button"
              onClick={() => setFullscreen(true)}
              aria-label="Open fullscreen"
              className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 hover:bg-black/80 text-white text-xs font-bold px-3 py-2 transition-colors"
            >
              FULLSCREEN
              <FiMaximize2 size={14} />
            </button>

            <p className="absolute bottom-4 left-4 text-white text-sm font-medium drop-shadow">
              {current.caption}
            </p>
          </div>

          <div className="hidden lg:block w-[15%] aspect-video shrink-0 overflow-hidden opacity-70">
            <img
              src={next.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-neutral-500">
            {index + 1} / {total}
          </span>

          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="w-11 h-11 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-colors"
            >
              <FiArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="w-11 h-11 flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white transition-colors"
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 bg-black/95 flex items-center justify-center p-6"
          >
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              aria-label="Close fullscreen"
              className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <FiX size={22} />
            </button>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-4 lg:left-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <FiArrowLeft size={22} />
            </button>

            <motion.img
              key={current.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={current.image}
              alt={current.caption}
              className="max-w-full max-h-[85vh] object-contain"
            />

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-4 lg:right-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <FiArrowRight size={22} />
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-white font-medium">
                {current.caption}
              </p>

              <p className="text-white/60 text-sm mt-1">
                {index + 1} / {total}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================
   RELATED STORIES
========================= */

const relatedStories = [
  {
    tag: "SPIRITNOW",
    category: "FEATURE STORIES",
    boldPrefix: "Starting strong /",
    title: "Developing the next generation of technical talent",
    date: "AUGUST 27, 2026",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "SPIRITNOW",
    category: "FEATURE STORIES",
    boldPrefix: "Community roots /",
    title: "Buraligim Weiber connects culture with STEM",
    date: "AUGUST 20, 2026",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "SPIRITNOW",
    category: "FEATURE STORIES",
    boldPrefix: "Technical training /",
    title: "Investing in Alaska's future energy workforce",
    date: "JULY 30, 2026",
    image:
      "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=800&auto=format&fit=crop",
  },
];

function StoryCard({
  tag,
  category,
  boldPrefix,
  title,
  date,
  image,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <div className="w-full aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-2 mt-4 text-xs font-bold tracking-wide">
        <span className="w-2 h-2 bg-blue-700 inline-block" />
        <span className="text-blue-700">{tag}</span>
        <span className="text-neutral-400">|</span>
        <span className="text-neutral-500 underline">
          {category}
        </span>
      </div>

      <p className="mt-3 text-lg leading-snug text-neutral-900">
        <span className="font-bold text-blue-700">
          {boldPrefix}
        </span>{" "}
        {title}
      </p>

      <p className="mt-4 text-xs font-bold text-neutral-500 tracking-wide">
        {date}
      </p>
    </motion.div>
  );
}

function RelatedStoriesSection() {
  return (
    <section className="px-6 lg:px-16 py-16 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <h2 className="text-3xl lg:text-4xl font-normal text-neutral-900">
          Related stories
        </h2>

        <Link
          to="/spiritnow-stories"
          className="flex items-center gap-1 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-4 transition-colors"
        >
          Explore spiritnow Stories <span>›</span>
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        {relatedStories.map((s) => (
          <StoryCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}

/* =========================
   ABOUT US PAGE
========================= */

export default function Who() {
  return (
    <div className="pt-26 lg:pt-34">
      <Breadcrumb />

      <PageHero />

      <IntroSection />

      <WhoWeAreSection />

      <GradientCarouselSection
        bgClass="bg-emerald-800"
        waveColors={["#0D9488", "#065F46"]}
        title="Our people"
        subtitle="Our strategy, performance, culture and reputation are fueled by our world-class workforce — the heart of our company and business success. We recognize that attracting and developing talent is a competitive imperative within our changing industry."
        learnMoreTo="/about-us/our-people"
        cards={ourPeopleCards}
      />

      <GradientCarouselSection
        bgClass="bg-blue-950"
        waveColors={["#1D4ED8", "#3B82F6"]}
        title="Safety, health & security"
        subtitle={`The guiding principle that "work is never so urgent or important that we cannot take the time to do it safely and in an environmentally responsible manner" is core to our day-to-day operations.`}
        learnMoreTo="/about-us/safety-health-security"
        cards={safetyCards}
      />

      <PhotoGallery />

      <RelatedStoriesSection />
    </div>
  );
}

