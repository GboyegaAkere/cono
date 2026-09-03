import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp, FiChevronDown, FiArrowLeft, FiArrowRight, FiGlobe, FiPrinter, FiSettings, FiArrowUp } from "react-icons/fi";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const filterTypes = [
  { id: "all", label: "Show All", shape: null, color: null },
  { id: "headquarters", label: "Headquarters", shape: "pentagon", color: "bg-orange-600" },
  { id: "production", label: "Production", shape: "square", color: "bg-teal-500" },
  { id: "exploration", label: "Exploration & Production", shape: "circle", color: "bg-blue-700" },
];

const operations = [
  {
    id: "alaska",
    category: "exploration",
    categoryLabel: "Exploration & Production",
    title: "Alaska",
    description: "ConocoPhillips Alaska, Inc. (CPAI) is Alaska's largest crude oil producer.",
    cta: "Alaska highlights",
    image:
      "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "canada",
    category: "exploration",
    categoryLabel: "Exploration & Production",
    title: "Canada",
    description:
      "The ConocoPhillips Canadian operations are comprised primarily of Surmont in the Athabasca region of northeastern Alberta and the Montney unconventional development in British Columbia.",
    cta: "Canada highlights",
    image:
      "https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "lower48",
    category: "exploration",
    categoryLabel: "Exploration & Production",
    title: "Lower 48",
    description: "Unconventional resource plays across the Permian, Eagle Ford and Bakken.",
    cta: "Lower 48 highlights",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "houston",
    category: "headquarters",
    categoryLabel: "Headquarters",
    title: "Houston",
    description: "Global headquarters coordinating operations across every region.",
    cta: "Houston highlights",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "qatar",
    category: "production",
    categoryLabel: "Production",
    title: "Qatar",
    description: "LNG production and marketing operations in the Persian Gulf region.",
    cta: "Qatar highlights",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop",
  },
];

function FilterShape({ shape, color }) {
  if (!shape) return null;
  if (shape === "pentagon") {
    return (
      <svg viewBox="0 0 20 20" className={`w-3.5 h-3.5 ${color}`} style={{ fill: "currentColor" }}>
        <polygon points="10,1 19,7.5 15.5,18 4.5,18 1,7.5" />
      </svg>
    );
  }
  if (shape === "square") {
    return <span className={`w-3 h-3 ${color} inline-block`} />;
  }
  return <span className={`w-3 h-3 rounded-full ${color} inline-block`} />;
}

function TypeDropdown({ selected, onSelect }) {
  const [open, setOpen] = useState(false);
  const current = filterTypes.find((f) => f.id === selected);

  return (
    <div className="relative border border-neutral-300">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-sm font-bold text-neutral-900"
      >
        Select a Type
        {open ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-neutral-200"
          >
            <div className="flex flex-col">
              {filterTypes.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    onSelect(f.id);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 px-5 py-4 text-left text-base font-bold text-neutral-900 hover:bg-neutral-50"
                >
                  <FilterShape shape={f.shape} color={f.color} />
                  {f.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function OperationCard({ categoryLabel, title, description, cta, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative shrink-0 w-[85%] sm:w-72 aspect-3/4 overflow-hidden snap-start"
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold mb-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          {categoryLabel}
        </div>
        <p className="text-2xl font-medium">{title}</p>
        <p className="text-sm text-white/85 mt-2 leading-snug">{description}</p>
        
          < a href="#"
          className="mt-4 w-fit flex items-center gap-1.5 bg-neutral-100 hover:bg-white text-neutral-900 text-sm font-semibold px-4 py-3 transition-colors"
        >
          {cta} <span>›</span>
        </a>
      </div>
    </motion.div>
  );
}

function OperationsList() {
  const [type, setType] = useState("all");
  const scrollRef = useRef(null);

  const current = filterTypes.find((f) => f.id === type);
  const filtered =
    type === "all" ? operations : operations.filter((op) => op.category === type);

  const scrollByAmount = (dir) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild?.offsetWidth ?? 280;
    scrollRef.current.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="lg:hidden">
      <TypeDropdown selected={type} onSelect={setType} />

      <h3 className="mt-8 mb-4 text-2xl text-neutral-900">
        {type === "all" ? "All Operations" : current.label}
      </h3>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
      >
        {filtered.map((op) => (
          <OperationCard key={op.id} {...op} />
        ))}
      </div>

      <div className="flex gap-1 mt-4">
        <button
          onClick={() => scrollByAmount(-1)}
          aria-label="Previous"
          className="w-14 h-14 flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white transition-colors"
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          onClick={() => scrollByAmount(1)}
          aria-label="Next"
          className="w-14 h-14 flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white transition-colors"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function BottomBar() {
  const socials = [
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaXTwitter, label: "X" },
    { Icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  
}

export default function WorldwideOperationsSection() {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-16 pt-14 lg:pt-16 pb-10 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-5xl font-normal text-blue-700 leading-tight"
            >
              Worldwide Operations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-neutral-700 text-lg"
            >
              We explore for, produce, transport and market crude oil, bitumen, natural gas,
              natural gas liquids and liquefied natural gas on a worldwide basis.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-start gap-3 lg:flex-col lg:items-start"
          >
            <div className="flex items-center gap-3">
              <FiGlobe size={34} className="text-blue-700" />
              <span className="text-5xl font-normal text-blue-700">15</span>
            </div>
            <p className="text-xs font-bold text-neutral-900 tracking-wide leading-snug max-w-45">
              COUNTRIES WITH OPERATIONS AND ACTIVITIES
            </p>
          </motion.div>
        </div>

        <div className="mt-10">
          <OperationsList />
        </div>
      </div>

      <BottomBar />
    </section>
  );
}