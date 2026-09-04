
import { motion } from "framer-motion";

const newsItems = {
  feature: {
    image:
      "/worker.jpg",
    tagColor: "bg-blue-700",
    tag: "SPIRITNOW",
    category: "FEATURE STORIES",
    title:
      "Starting strong / Developing the next generation of technical talent",
    boldPrefix: "Starting strong /",
    date: "AUGUST 27, 2026",
  },

  highlight: {
    tag: "NEWS RELEASE",
    title:
      "ConocoPhillips announces planned leadership succession: Andy O’Brien named president and CEO, Ryan Lance to assume transitional executive chair role, Konnie Haynes-Welsh appointed CFO",
    date: null,
  },

  secondary: {
    tag: "NEWS RELEASE",
    title:
      "ConocoPhillips announces second-quarter 2026 results and quarterly dividend",
    date: "AUGUST 6, 2026",
    image:
      "/teacher.jpg",
  },
};

/* =========================
   FEATURE CARD
========================= */

function FeatureCard() {
  const item = newsItems.feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Image */}
      <div className="w-full aspect-4/3 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Category */}
      <div className="flex items-center gap-2 mt-4 text-xs font-bold tracking-wide">
        <span className="w-2 h-2 bg-blue-700 inline-block" />

        <span className="text-blue-700">
          {item.tag}
        </span>

        <span className="text-neutral-400">
          |
        </span>

        <span className="text-neutral-500">
          {item.category}
        </span>
      </div>

      {/* Title */}
      <p className="mt-3 text-xl leading-snug text-neutral-900">
        <span className="font-bold text-blue-700">
          {item.boldPrefix}
        </span>{" "}
        {item.title.replace(
          item.boldPrefix + " ",
          ""
        )}
      </p>

      {/* Date */}
      <p className="mt-4 text-xs font-bold text-neutral-500 tracking-wide">
        {item.date}
      </p>
    </motion.div>
  );
}

/* =========================
   HIGHLIGHT CARD
========================= */

function HighlightCard() {
  const item = newsItems.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="border border-neutral-200 h-full flex flex-col"
    >
      {/* Highlight label */}
      <span className="w-fit bg-neutral-200 text-neutral-800 text-xs font-bold tracking-wide px-4 py-2">
        HIGHLIGHT
      </span>

      <div className="p-6 flex flex-col">
        {/* Category */}
        <div className="flex items-center gap-2 text-xs font-bold tracking-wide">
          <span className="w-2 h-2 bg-red-700 inline-block" />

          <span className="text-red-700">
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <p className="mt-3 text-2xl leading-snug text-neutral-900">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================
   SECONDARY CARD
========================= */

function SecondaryCard() {
  const item = newsItems.secondary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="flex flex-col gap-6"
    >
      {/* News text */}
      <div className="border border-neutral-200 p-6">
        {/* Category */}
        <div className="flex items-center gap-2 text-xs font-bold tracking-wide">
          <span className="w-2 h-2 bg-red-700 inline-block" />

          <span className="text-red-700">
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <p className="mt-3 text-2xl leading-snug text-neutral-900">
          {item.title}
        </p>

        {/* Date */}
        <p className="mt-6 text-xs font-bold text-neutral-500 tracking-wide">
          {item.date}
        </p>
      </div>

      {/* Image */}
      <div className="w-full aspect-16/10 overflow-hidden">
        <img
          src={item.image}
          alt="Aerial view of landscape"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.div>
  );
}

/* =========================
   NEWS SECTION
========================= */

export default function NewsSection() {
  return (
    <section className="px-6 lg:px-16 py-16 bg-white">
      {/* Section header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-700">
          Latest news & updates
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* News releases */}
          <a
            href="#"
            className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold px-6 py-4 transition-colors"
          >
            News releases
            <span>›</span>
          </a>

          {/* All spiritnow stories */}
          <a
            href="#"
            className="flex items-center gap-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-4 transition-colors"
          >
            All spiritnow stories
            <span>›</span>
          </a>
        </div>
      </div>

      {/* News cards */}
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <FeatureCard />

        <HighlightCard />

        <SecondaryCard />
      </div>
    </section>
  );
}

