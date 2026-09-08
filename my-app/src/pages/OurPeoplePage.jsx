import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

/* =========================
   BREADCRUMB
========================= */

function Breadcrumb() {
  return (
    <div className="px-6 lg:px-16 py-4 text-sm text-neutral-500">
      <Link to="/" className="hover:text-neutral-800">
        Home
      </Link>{" "}
      /{" "}
      <Link to="/about-us" className="hover:text-neutral-800">
        About us
      </Link>{" "}
      /
    </div>
  );
}

/* =========================
   PAGE HERO
========================= */

const relatedPages = [
  { label: "A compelling culture", to: "/about-us/our-people/culture" },
  { label: "Attracting a world-class workforce", to: "/about-us/our-people/workforce" },
  { label: "Valuing our people", to: "/about-us/our-people/valuing" },
  { label: "Compensation, benefits and well-being", to: "/about-us/our-people/benefits" },
];

function PageHero() {
  return (
    <div className="relative">
      <div className="relative h-[300px] lg:h-[360px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop"
          alt="ConocoPhillips employees on site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        <div className="relative z-10 h-full px-6 lg:px-16 pt-8 flex flex-col justify-start">
          <h1 className="text-4xl lg:text-5xl font-normal text-white">Our people</h1>
        </div>
      </div>

      {/* related pages panel */}
      <div className="relative z-20 px-6 lg:px-16 -mt-16 lg:-mt-14 pb-4">
        <div className="bg-red-800 text-white max-w-3xl px-6 lg:px-8 py-6">
          <p className="text-xs font-bold tracking-wide text-white/80 mb-4">RELATED PAGES</p>
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
    <section className="px-6 lg:px-16 py-12 bg-white max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-neutral-700 text-lg leading-relaxed"
      >
        Our strategy, performance, culture and reputation are fueled by our workforce. We
        recognize that attracting, retaining and developing talent is a competitive imperative
        within our changing industry. Our human capital management (HCM) approach is led by our
        human resources function with support from business leaders across the company and are
        regularly reviewed by the Board of Directors.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-neutral-700 text-lg leading-relaxed"
      >
        We depend on our workforce to successfully execute our company's strategy, and we
        recognize the importance of creating a workplace where our people feel valued. Our HCM
        approach is built around three pillars that we believe are necessary for success: a
        compelling culture, attracting a world-class workforce, and valuing our people.
      </motion.p>
    </section>
  );
}

/* =========================
   THREE COLUMN PILLARS
========================= */

const pillars = [
  {
    title: "A compelling culture",
    items: [
      "SPIRIT Values guide our actions and behaviors.",
      "Performance and accountability are core to our culture, supported by consistent, fair and merit-based practices.",
      "Participation in our Employee Resource Groups is voluntary and open to all employees",
      "Employee engagement surveys are used to establish meaningful action plans based on employee feedback.",
      "Data analytics track our workforce and engagement metrics.",
      "Modern work spaces and onsite amenities enhance employees' workplace experience.",
    ],
  },
  {
    title: "Attracting a world-class workforce",
    items: [
      "We utilize consistent and fair recruitment and selection practices to find and onboard the talent to meet our business needs.",
      "We build broad talent pipelines through active membership with trade associations, nonprofit organizations and significant long-standing partnerships with universities.",
      "Our U.S. Summer Internship Program offers university students a compelling, hands-on experience.",
      "Our strategic process allocates university contributions in service to strengthening and expanding our future talent pools.",
    ],
  },
  {
    title: "Valuing our people",
    items: [
      "Employees are rewarded for contributing to our success through:",
      "Competitive, performance-based compensation packages and global equitable pay practices.",
      "Compensation programs that link individual and company performance.",
      "Global benefits informed by external market practices and employee needs and feedback.",
      "Real-time recognition programs.",
      "Global wellness programs that address physical and mental well-being.",
      "A robust succession planning process promotes business continuity and develops people for key roles.",
      "Hands-on global Talent Management Teams (TMTs) guide employee development around the world.",
      "A dedicated internal website, My Career, provides employees with access to career planning tools and curated development resources.",
    ],
  },
];

function PillarColumn({ title, items }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-wide text-neutral-900 mb-4">
        {title.toUpperCase()}
      </p>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-neutral-700 leading-relaxed">
            <span className="text-red-700 mt-1.5 shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PillarsSection() {
  return (
    <section className="px-6 lg:px-16 pb-12">
      <div className="bg-neutral-100 p-6 lg:p-10 grid lg:grid-cols-3 gap-10">
        {pillars.map((p) => (
          <PillarColumn key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

/* =========================
   BY THE NUMBERS
========================= */

function StatBlock({ value, label, color = "text-blue-700" }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={`text-4xl font-bold ${color}`}>{value}</span>
      <span className="text-sm text-neutral-700 max-w-[110px] leading-snug">{label}</span>
    </div>
  );
}

function ByTheNumbersSection() {
  return (
    <section className="px-6 lg:px-16 py-12 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-neutral-900 text-center mb-10"
      >
        By the numbers
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-10 mb-12">
        <div className="flex items-center gap-4">
          <FiUsers size={40} className="text-blue-700" />
          <StatBlock value="~9,900" label="Total headcount" />
        </div>
        <StatBlock value="14" label="Countries of operation" />
        <StatBlock value="62%" label="U.S. population" />
      </div>

      <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
        <div>
          <p className="text-center font-semibold text-neutral-900 mb-6">U.S. representation</p>
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-emerald-700">67%</span>
              <span className="text-neutral-700">White</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-emerald-700">33%</span>
              <span className="text-neutral-700">POC¹</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center font-semibold text-neutral-900 mb-6">Global representation</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-700">74%</span>
              <span className="text-neutral-700 text-sm">Men</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-700">18%</span>
              <span className="text-neutral-700 text-sm leading-tight">of men are leaders</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-700">26%</span>
              <span className="text-neutral-700 text-sm">Women</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-700">17%</span>
              <span className="text-neutral-700 text-sm leading-tight">of women are leaders</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-neutral-500 text-center mt-8">
        As of Dec. 31, 2025.
        <br />
        ¹People of Color (POC)
      </p>
    </section>
  );
}

/* =========================
   EEO REPORTS
========================= */

function EEOSection() {
  return (
    <section className="px-6 lg:px-16 py-12 bg-white max-w-3xl">
      <h2 className="text-3xl font-normal text-red-700 mb-6">
        U.S. Equal Employment Opportunity (EEO) reports
      </h2>

      <p className="text-neutral-700 leading-relaxed mb-4">
        We publicly disclose the ConocoPhillips Consolidated EEO-1 Report on a voluntary basis.
        The report characterizes our U.S. workforce by race, ethnicity and gender across job
        categories established by the U.S. Equal Employment Opportunity Commission (EEOC). The
        makeup of our U.S. workforce is included below.
      </p>

      <p className="text-neutral-700 mb-4">
        ConocoPhillips EEO-1 reports for the last three years:
      </p>

      <ul className="flex flex-col gap-2 mb-6">
        <li className="text-neutral-700">• 2025 EEO-1 Report (pending)</li>
        <li>
          <Link to="#" className="text-red-700 font-semibold hover:underline">
            • 2024 EEO-1 Report
          </Link>
        </li>
        <li>
          <Link to="#" className="text-red-700 font-semibold hover:underline">
            • 2023 EEO-1 Report
          </Link>
        </li>
      </ul>

      <p className="text-neutral-700">
        Additional details on EEO reports are available on the{" "}
        <Link to="#" className="text-red-700 font-semibold hover:underline">
          EEOC website
        </Link>
        .
      </p>
    </section>
  );
}

/* =========================
   IN THIS SECTION
========================= */

const inThisSection = [
  {
    title: "A compelling culture",
    description: "SPIRIT Values guide our words and actions.",
    to: "/about-us/our-people/culture",
  },
  {
    title: "Attracting a world-class workforce",
    description: "Attracting a world-class workforce.",
    to: "/about-us/our-people/workforce",
  },
  {
    title: "Valuing our people",
    description: "Rigorous talent development and succession planning.",
    to: "/about-us/our-people/valuing",
  },
  {
    title: "Compensation, benefits and well-being",
    description: "Competitive compensation and benefits.",
    to: "/about-us/our-people/benefits",
  },
];

function InThisSectionCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="block bg-neutral-100 hover:bg-neutral-200 transition-colors p-6 border-t-2 border-blue-700"
    >
      <p className="text-xl text-blue-700 mb-2">{title}</p>
      <p className="text-sm text-neutral-600 mb-4">{description}</p>
      <span className="flex items-center gap-1 text-sm font-semibold text-neutral-900">
        Learn More <span>›</span>
      </span>
    </Link>
  );
}

function InThisSection() {
  return (
    <section className="px-6 lg:px-16 py-12 bg-white">
      <p className="text-xs font-bold tracking-wide text-blue-700 border-b-2 border-blue-700 pb-3 mb-8 w-fit">
        IN THIS SECTION
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {inThisSection.map((item) => (
          <InThisSectionCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

/* =========================
   REPORT BUILDER CTA
========================= */

function CurveLines() {
  return (
    <svg
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
      <path
        d="M0,500 L0,340 C260,220 520,470 760,360 C1000,260 1220,150 1440,240 L1440,500 Z"
        fill="#1D4ED8"
      />
      <path
        d="M0,500 L0,410 C300,320 560,520 820,410 C1080,320 1260,230 1440,300 L1440,500 Z"
        fill="#241E96"
      />
    </svg>
  );
}

function ReportBuilderCTA() {
  return (
    <section className="relative bg-blue-950 overflow-hidden min-h-[300px]">
      <CurveLines />
      <div className="relative z-10 px-6 lg:px-16 pt-16 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-normal text-white max-w-lg"
        >
          Custom sustainability report builder
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-white/90"
        >
          Download the entire report or specific sections.
        </motion.p>

        <Link
          to="/sustainability/report-builder"
          className="mt-6 w-fit flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold px-6 py-4 transition-colors"
        >
          Try it here
        </Link>
      </div>
    </section>
  );
}

/* =========================
   OUR PEOPLE PAGE
========================= */

export default function OurPeoplePage() {
  return (
    <div className="pt-[104px] lg:pt-[136px] bg-white">
      <Breadcrumb />
      <PageHero />
      <IntroSection />
      <PillarsSection />
      <ByTheNumbersSection />
      <EEOSection />
      <InThisSection />
      <ReportBuilderCTA />
    </div>
  );
}