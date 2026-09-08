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
  { label: "Sustainability governance", to: "/sustainability/governance" },
  { label: "Supply chain sustainability", to: "/sustainability/supply-chain" },
  { label: "Sustainability risk management", to: "/sustainability/risk-management" },
  { label: "About our disclosures", to: "/sustainability/disclosures" },
  { label: "Our people", to: "/about-us/our-people" },
  { label: "Sustainability Report Archives", to: "/sustainability/report-archives" },
];

function PageHero() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative">
      <div className="relative h-[400px] lg:h-[460px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop"
          alt="Aerial view of landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/30" />

        <div className="relative z-10 h-full flex flex-col">
          <Breadcrumb dark />
          <div className="flex-1 flex items-end px-6 lg:px-16 pb-16">
            <h1 className="text-4xl lg:text-6xl font-normal text-white">
              Integrating sustainability
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
      <div className="relative z-20 px-6 lg:px-16 -mt-16 lg:-mt-16 pb-4">
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
    </div>
  );
}

/* =========================
   INTRO SECTION
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
          className="text-3xl lg:text-4xl text-blue-700 font-normal leading-tight"
        >
          At ConocoPhillips, we are focused on sustained, positive environmental and social
          impact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-neutral-700 text-lg leading-relaxed"
        >
          We have been on a journey to integrate sustainability into planning and decision making
          for decades. Before our first sustainable development (SD) report was published in
          2005, we had implemented a process to identify and manage environmental and social
          issues and to assess performance. That process has evolved over the years as the risk
          and opportunity trends in science, demographics, technology and policy have changed. We
          published our first SD and climate change positions in 2003. Since then, we have
          updated those positions and developed positions on water, biodiversity, just transition,
          and human rights. We also continue to refine our governance structure to manage
          sustainability risks and opportunities throughout the organization. By design, our
          systems-based approach includes continuous improvement and internal assurance.
        </motion.p>
      </div>

      {/* decorative curved lines, top-right */}
      <svg
        viewBox="0 0 300 300"
        className="hidden lg:block absolute top-0 right-0 w-80 h-80 pointer-events-none"
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
    </section>
  );
}

/* =========================
   IN THIS SECTION
========================= */

const inThisSection = [
  {
    title: "Governance",
    description: "Our comprehensive governance framework.",
    to: "/sustainability/governance",
  },
  {
    title: "Risk management",
    description: "An integrated management system.",
    to: "/sustainability/risk-management",
  },
  {
    title: "Our people",
    description: "Empowering a diverse workforce.",
    to: "/about-us/our-people",
  },
  {
    title: "Supply chain sustainability",
    description: "Responsible procurement processes.",
    to: "/sustainability/supply-chain",
  },
  {
    title: "About our disclosures",
    description: "Reporting focused on priority issues.",
    to: "/sustainability/disclosures",
  },
  {
    title: "Sustainability milestones",
    description: "Long-standing commitment to sustainability.",
    to: "/sustainability/milestones",
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
   BOTTOM CTA CARDS
========================= */

function SDPositionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden min-h-[340px] lg:min-h-[420px] flex flex-col justify-end"
    >
      <img
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop"
        alt="Aerial view of landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 p-6 lg:p-10">
        <h3 className="text-3xl lg:text-4xl font-normal text-white">
          Sustainable Development Position
        </h3>
        <p className="mt-3 text-white/90 max-w-sm">
          We have a long-standing position on sustainable development.
        </p>
        <Link
          to="/sustainability/sustainable-development-position"
          className="mt-6 w-fit flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-4 transition-colors"
        >
          Learn more <span>›</span>
        </Link>
      </div>
    </motion.div>
  );
}

function ReportBuilderCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative overflow-hidden min-h-[340px] lg:min-h-[420px] flex flex-col justify-end bg-blue-950"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 100%, rgba(147,51,234,0.5), transparent 60%), radial-gradient(circle at 100% 100%, rgba(37,99,235,0.7), transparent 60%)",
        }}
      />

      <div className="relative z-10 p-6 lg:p-10">
        <h3 className="text-3xl lg:text-4xl font-normal text-white leading-tight">
          Custom Sustainability
          <br />
          Report Builder
        </h3>
        <p className="mt-3 text-white/90 max-w-sm">
          Download the entire report or specific sections.
        </p>
        <Link
          to="/sustainability/report-builder"
          className="mt-6 w-fit flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-4 transition-colors"
        >
          Try it here <span>›</span>
        </Link>
      </div>
    </motion.div>
  );
}

function BottomCTASection() {
  return (
    <section className="px-6 lg:px-16 pb-16 bg-white">
      <div className="grid lg:grid-cols-2 gap-1">
        <SDPositionCard />
        <ReportBuilderCard />
      </div>
    </section>
  );
}

/* =========================
   INTEGRATING SUSTAINABILITY PAGE
========================= */

export default function Operations() {
  return (
    <div className="pt-[104px] lg:pt-[136px] bg-white">
      <PageHero />
      <IntroSection />
      <InThisSection />
      <BottomCTASection />
    </div>
  );
}