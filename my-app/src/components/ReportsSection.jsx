import { motion } from "framer-motion";

function PdfIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M6 2h8l4 4v16H6V2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M14 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <text x="7" y="15.5" fontSize="5.5" fontWeight="700" fill="currentColor">
        PDF
      </text>
    </svg>
  );
}

function SwirlArt({ color = "#0EA5C4" }) {
  return (
    <svg
      viewBox="0 0 330 260"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-[55%]"
    >
      <path
        d="M0 200 C 60 100, 90 260, 160 150 S 260 40, 330 120"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M-10 240 C 70 260, 110 140, 190 220 S 300 150, 340 210"
        stroke="#5EEAD4"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

function BackgroundShapes() {
  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
      <polygon points="0,0 500,0 250,700 0,700" fill="#E9E9EA" />
      <polygon points="300,0 750,0 500,700 100,700" fill="#DEDEDF" opacity="0.7" />
      <polygon points="700,0 1440,0 1440,700 900,700" fill="#E5E5E6" opacity="0.6" />
    </svg>
  );
}

function ReportCard({ title, variant }) {
  const isDark = variant === "dark";
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`relative w-40 sm:w-48 aspect-3/4 p-5 flex flex-col justify-between overflow-hidden ${
        isDark ? "bg-blue-800 text-white" : "bg-white text-neutral-900 border border-neutral-200"
      }`}
    >
      <PdfIcon className="w-7 h-7 relative z-10" />

      <div className="relative z-10">
        <p className="text-xl font-semibold leading-tight">{title}</p>
      </div>

      <SwirlArt color={isDark ? "#5EEAD4" : "#0EA5C4"} />

      <div className="relative z-10 flex items-center gap-1.5">
        <svg viewBox="0 0 60 40" className="w-5 h-3.5">
          <path
            d="M2 8 C 20 2, 35 2, 58 10 C 40 22, 22 22, 2 8 Z"
            fill="#D0021B"
          />
        </svg>
        <span className="text-xs font-semibold">ConocoPhillips</span>
      </div>
    </motion.a>
  );
}

function ReportRow({ title }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 py-6 border-t border-blue-800/60 last:border-b"
    >
      <PdfIcon className="w-7 h-7 text-blue-800 shrink-0" />
      <span className="text-lg text-blue-800 font-medium">{title}</span>
    </motion.a>
  );
}

export default function ReportsSection() {
  const reports = [
    { title: "2026 Proxy Statement", variant: "light" },
    { title: "2025 Annual Report", variant: "dark" },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-200 px-6 lg:px-16 py-14 lg:py-20">
      <BackgroundShapes />

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-8">
        {/* left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight">
            Company reports &<br className="hidden lg:block" /> resources
          </h2>

          
           <a href="#"
            className="mt-8 w-fit flex items-center gap-1.5 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold px-6 py-4 transition-colors shadow-sm"
          >
            View our reports <span>›</span>
          </a>
        </motion.div>

        {/* right column */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl lg:text-3xl text-neutral-900 mb-4"
          >
            Annual Reports
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-neutral-700 max-w-xl mb-8 lg:mb-10"
          >
            Our annual publications provide insights from Ryan Lance, chairman and CEO, and
            overviews of our operations and company-wide programs.
          </motion.p>

          {/* desktop: card tiles */}
          <div className="hidden lg:flex gap-6 flex-wrap">
            {reports.map((r) => (
              <ReportCard key={r.title} {...r} />
            ))}
          </div>

          {/* mobile: simple link rows */}
          <div className="lg:hidden -mx-6">
            <div className="px-6">
              {reports.map((r) => (
                <ReportRow key={r.title} title={r.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}