import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";

/* =========================
   BREADCRUMB
========================= */

function Breadcrumb({ dark }) {
  return (
    <div className={`px-6 lg:px-16 py-4 text-sm ${dark ? "text-white/80" : "text-neutral-500"}`}>
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      /{" "}
      <Link to="/sustainability" className="hover:underline">
        Sustainability
      </Link>{" "}
      /
    </div>
  );
}

/* =========================
   PAGE HERO
========================= */

const relatedPages = [
  { label: "Strategy", to: "/sustainability/climate/strategy" },
  { label: "Risk management", to: "/sustainability/climate/risk-management" },
  { label: "Climate-related metrics and targets", to: "/sustainability/climate/metrics-targets" },
  { label: "Collaboration and engagement", to: "/sustainability/climate/collaboration" },
  { label: "Public policy engagement", to: "/sustainability/climate/public-policy" },
  { label: "Sustainability Report archives", to: "/sustainability/report-archives" },
];

function PageHero() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative">
      <div className="relative h-[420px] lg:h-[480px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
          alt="Aerial view of forest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />

        <div className="relative z-10 h-full flex flex-col">
          <Breadcrumb dark />
          <div className="flex-1 flex items-end px-6 lg:px-16 pb-16">
            <h1 className="text-4xl lg:text-6xl font-normal text-white leading-tight max-w-2xl">
              Managing climate-related risks
            </h1>
          </div>
        </div>

        <button
          onClick={() => setPlaying((p) => !p)}
          className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/70 text-white text-sm font-medium pl-4 pr-2 py-2"
        >
          {playing ? "Pause Motion" : "Play Motion"}
          <span className="w-8 h-8 flex items-center justify-center bg-white/10">
            {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
          </span>
        </button>
      </div>

      {/* related pages panel */}
      <div className="relative z-20 px-6 lg:px-16 -mt-16 pb-4">
        <div className="bg-blue-950 text-white max-w-3xl px-6 lg:px-8 py-6">
          <p className="text-xs font-bold tracking-wide text-white/70 mb-4">RELATED PAGES</p>
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

      {/* decorative curved lines, top-right of the white area below */}
      <svg
        viewBox="0 0 300 300"
        className="hidden lg:block absolute -bottom-16 right-0 w-80 h-80 pointer-events-none z-10"
      >
        <path
          d="M300 300 C 220 260, 200 180, 120 140 S 20 40, 0 0"
          stroke="#3B82F6"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M300 260 C 240 230, 220 160, 150 130"
          stroke="#3B82F6"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

/* =========================
   BUSINESS OPPORTUNITIES TABLE
========================= */

const opportunityRows = [
  {
    label: "LNG",
    points: [
      "Developing the resource: Continued upstream exploration and production (E&P) projects to support LNG plants in Australia, Qatar and Equatorial Guinea.",
      "Continued to expand a global commercial liquefied natural gas (LNG) portfolio, with long-term offtake agreements totaling ~10 MTPA, and 5 MTPA placed across regasification and direct sales agreements.",
    ],
  },
  {
    label: "Technology",
    points: [
      "Continued to evaluate technology opportunities for future competitive investment:",
      "Monitored and evaluated maturing technologies which enable hard-to-abate emissions reduction optionality.",
      "Progressed evaluation of potential power projects, including enhanced geothermal systems, through regional screening studies in multiple U.S. states, market analysis and techno-economic evaluation.",
      "Continued participation in Canada's Oil Sands Alliance working to reduce emissions through post-combustion carbon capture and sequestration (CCS).",
    ],
  },
];

const footnotes = [
  "Using a 2016 baseline for both gross operated and net equity emissions.",
  "Includes gross operated and net equity emissions reductions.",
  "Per the World Bank's Zero Routine Flaring by 2030 initiative, \u201cOil companies that endorse the Initiative will develop new oil fields they operate according to plans that incorporate sustainable utilization or conservation of the field's associated gas without routine flaring. Oil companies with routine flaring at existing oil fields they operate will seek to implement economically viable solutions to eliminate this legacy flaring as soon as possible, and no later than 2030.\u201d",
];

function BusinessOpportunitiesTable() {
  return (
    <section className="px-6 lg:px-16 py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl border border-neutral-200 flex"
      >
        {/* vertical label */}
        <div className="bg-blue-700 text-white flex items-center justify-center px-3 py-6 shrink-0">
          <span
            className="text-xs font-bold tracking-wide whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Business Opportunities
          </span>
        </div>

        {/* row labels + content */}
        <div className="flex-1 divide-y divide-neutral-200">
          {opportunityRows.map((row) => (
            <div key={row.label} className="flex">
              <div className="bg-blue-100 flex items-center justify-center px-3 py-6 shrink-0">
                <span
                  className="text-xs font-bold tracking-wide text-blue-900 whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {row.label}
                </span>
              </div>
              <ul className="flex-1 p-5 flex flex-col gap-2">
                {row.points.map((point, i) => (
                  <li key={i} className="text-sm text-neutral-700 leading-relaxed">
                    {i > 0 && <span className="mr-2">–</span>}
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-4xl mt-4 flex flex-col gap-1">
        {footnotes.map((note, i) => (
          <p key={i} className="text-xs text-neutral-500 leading-relaxed">
            <sup>{i + 1}</sup> {note}
          </p>
        ))}
      </div>
    </section>
  );
}

/* =========================
   IN THIS SECTION
========================= */

const inThisSection = [
  {
    title: "Governance framework",
    description: "A comprehensive governance process.",
    to: "/sustainability/climate/governance-framework",
  },
  {
    title: "Strategy",
    description: "Climate-related risks integrated into strategic planning.",
    to: "/sustainability/climate/strategy",
  },
  {
    title: "Risk management",
    description: "Assessing and managing climate-related risks.",
    to: "/sustainability/climate/risk-management",
  },
  {
    title: "Climate-related metrics",
    description: "Key metrics and targets to measure and track progress.",
    to: "/sustainability/climate/metrics-targets",
  },
  {
    title: "Collaboration and engagement",
    description: "Working with stakeholders to advance shared climate goals.",
    to: "/sustainability/climate/collaboration",
  },
  {
    title: "Public policy engagement",
    description: "Advocating for sound, effective climate policy.",
    to: "/sustainability/climate/public-policy",
  },
];

function InThisSectionCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="block bg-neutral-100 hover:bg-neutral-200 transition-colors p-6 border-t-2 border-blue-700"
    >
      <p className="text-2xl text-blue-700 mb-3">{title}</p>
      <p className="text-sm text-neutral-600 mb-5">{description}</p>
      <span className="flex items-center gap-1 text-sm font-semibold text-neutral-900">
        Learn more <span>›</span>
      </span>
    </Link>
  );
}

function InThisSection() {
  return (
    <section className="px-6 lg:px-16 pb-16 bg-white">
      <p className="text-xs font-bold tracking-wide text-blue-700 border-b-2 border-blue-700 pb-3 mb-8 w-fit">
        IN THIS SECTION
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {inThisSection.map((item) => (
          <InThisSectionCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

/* =========================
   MANAGING CLIMATE-RELATED RISKS PAGE
========================= */

export default function Managing() {
  return (
    <div className="pt-[104px] lg:pt-[136px] bg-white">
      <PageHero />
      <BusinessOpportunitiesTable />
      <InThisSection />
    </div>
  );
}