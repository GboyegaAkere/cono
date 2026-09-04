
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPause,
  FiPlay,
  FiPrinter,
  FiSettings,
  FiArrowUp,
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
      <path
        d="M0,500 L0,360 C260,260 520,470 760,380 C1000,290 1220,180 1440,260 L1440,500 Z"
        fill="#155FE0"
      />

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
      className="relative z-20 bg-white shadow-lg px-6 py-5 w-full max-w-sm border-l-4 border-purple-600"
    >
      <p className="text-xs font-semibold text-neutral-500 tracking-wide">
        COP
      </p>

      <div className="flex items-baseline justify-between mt-1 flex-wrap gap-x-4 gap-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-neutral-900">
            135.88
          </span>

          <span className="text-sm font-semibold text-red-600">
            -1.48 -1.08%
          </span>
        </div>

        <span className="text-xs text-neutral-400 text-right leading-snug">
          NYSE 09/03/2026
          <br />
          4:10 PM EDT
        </span>
      </div>

      <a
        href="#"
        className="flex items-center gap-1 mt-3 text-sm font-semibold text-neutral-900 hover:text-blue-700"
      >
        Learn More <span>›</span>
      </a>
    </motion.div>
  );
}

/* =========================
   MEDIA PANEL
========================= */

function MediaPanel() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative w-full h-full min-h-70 lg:min-h-130 overflow-hidden">
      <img
        src="/home.png"
        alt="Drilling rig at sunset in a field"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-center gap-3 bg-black/70 text-white text-sm font-medium pl-4 pr-2 py-2"
      >
        <span className="hidden lg:inline">
          {playing ? "Pause Motion" : "Play Motion"}
        </span>

        <span className="w-8 h-8 flex items-center justify-center bg-white/10">
          {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
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
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-none lg:row-start-1 lg:col-start-1 relative z-20 px-6 lg:px-16 pt-10 lg:pt-16 pb-6 lg:pb-0 flex flex-col justify-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-neutral-900">
            <span className="text-blue-700">Energy</span> for
            <br />
            tomorrow, and
            <br />
            <span className="text-blue-700">today</span>.
          </h1>
        </motion.div>

        {/* =========================
            MEDIA
        ========================= */}

        <div className="order-2 lg:order-none lg:row-start-1 lg:row-span-2 lg:col-start-2 relative z-10">
          <MediaPanel />
        </div>

        {/* =========================
            BUTTONS
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-3 lg:order-none lg:row-start-2 lg:col-start-1 relative z-20 px-6 lg:px-16 py-6 lg:py-0 flex items-start lg:items-center"
        >
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold px-6 py-4 transition-colors"
            >
              What we do <span>›</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-4 transition-colors"
            >
              About us <span>›</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* =========================
          DESKTOP WAVE
      ========================= */}

      <div className="hidden lg:block absolute bottom-[64px] left-0 right-0 h-64 lg:h-72 z-0">
        <WaveBackground />
      </div>

      {/* =========================
          MOBILE WAVE
      ========================= */}

      <div
        className="lg:hidden absolute left-0 right-0 h-24 z-0"
        style={{ top: "calc(100% - 260px)" }}
      >
        <WaveBackground />
      </div>

      {/* =========================
          TICKER CARD
      ========================= */}

      <div className="relative z-20 px-6 lg:px-16 -mt-4 lg:-mt-16 pb-8">
        <TickerCard />
      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}

      <BottomBar />
    </section>
  );
}

