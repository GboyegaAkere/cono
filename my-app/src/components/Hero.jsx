import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPause,
  FiPlay,
  FiPrinter,
  FiSettings,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

/* =========================
   WAVE BACKGROUND
========================= */

function WaveBackground() {
  return (
    <svg
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
      {/* lighter blue wave */}
      <path
        d="M0,500 L0,360 C260,260 520,470 760,380 C1000,290 1220,180 1440,260 L1440,500 Z"
        fill="#155FE0"
      />

      {/* darker indigo wave */}
      <path
        d="M0,500 L0,430 C300,340 560,520 820,430 C1080,340 1260,260 1440,330 L1440,500 Z"
        fill="#241E96"
      />
    </svg>
  );
}

/* =========================
   TICKER CARD
========================= */

function TickerCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-20 bg-white shadow-lg px-6 py-4 w-full max-w-sm border-l-4 border-fuchsia-500"
    >
      <p className="text-xs font-semibold text-neutral-500 tracking-wide">
        COP
      </p>

      <div className="flex items-baseline justify-between mt-1">
        <span className="text-3xl font-bold text-neutral-900">
          137.23
        </span>

        <span className="text-xs text-neutral-400">
          NYSE 09/02/2026
        </span>
      </div>
    </motion.div>
  );
}

/* =========================
   MEDIA PANEL
========================= */

function MediaPanel() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[520px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1600&auto=format&fit=crop"
        alt="Drilling rig at sunset in a field"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/70 text-white text-sm font-medium pl-4 pr-2 py-2"
      >
        {playing ? "Pause Motion" : "Play Motion"}

        <span className="w-8 h-8 flex items-center justify-center bg-white/10">
          {playing ? (
            <FiPause size={14} />
          ) : (
            <FiPlay size={14} />
          )}
        </span>
      </button>
    </div>
  );
}

/* =========================
   BOTTOM BAR
========================= */

function BottomBar() {
  const socials = [
    {
      Icon: FaFacebookF,
      label: "Facebook",
    },
    {
      Icon: FaXTwitter,
      label: "X",
    },
    {
      Icon: FaLinkedinIn,
      label: "LinkedIn",
    },
  ];

}

/* =========================
   HERO
========================= */

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-white overflow-hidden mt-20"
    >
      <div className="grid lg:grid-cols-2">

        {/* Left text column */}
        <div className="relative z-20 px-6 lg:px-16 pt-16 pb-32 flex flex-col justify-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-5xl lg:text-6xl font-bold leading-[1.05] text-neutral-900"
          >
            <span className="text-blue-700">
              Energy
            </span>{" "}
            for
            <br />
            tomorrow, and
            <br />
            <span className="text-blue-700">
              today
            </span>
            .
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {/* What we do */}
            <a
              href="#"
              className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold px-6 py-4 transition-colors"
            >
              What we do
              <span>›</span>
            </a>

            {/* About us */}
            <a
              href="#"
              className="flex items-center gap-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-4 transition-colors"
            >
              About us
              <span>›</span>
            </a>
          </motion.div>
        </div>

        {/* Right media column */}
        <div className="relative z-10">
          <MediaPanel />
        </div>
      </div>

      {/* Wave background */}
      <div className="absolute bottom-[64px] left-0 right-0 h-64 lg:h-72 z-0">
        <WaveBackground />
      </div>

      {/* Ticker card */}
      <div className="relative z-20 px-6 lg:px-16 -mt-8 lg:-mt-16 pb-8">
        <TickerCard />
      </div>

      {/* Bottom bar */}
      <BottomBar />
    </section>
  );
}

