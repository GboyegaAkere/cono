import { motion } from "framer-motion";
import { FiPrinter, FiSettings, FiArrowUp } from "react-icons/fi";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function CurveLines() {
  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <path
        d="M300,700 C 500,700 600,500 750,500 S 1050,300 1440,150"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M600,700 C 800,700 850,560 1000,560 S 1250,420 1440,380"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function BottomBar() {
  const socials = [
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaXTwitter, label: "X" },
    { Icon: FaLinkedinIn, label: "LinkedIn" },
  ];

}

export default function PowerInCooperationSection({
  title = "Power in Cooperation",
  paragraph = "Power in Cooperation exists to build common ground around smart energy solutions. It is an advocacy community made up of ConocoPhillips employees, retirees, partners, neighbors and friends.",
}) {
  return (
    <section className="relative bg-blue-700 overflow-hidden">
      <CurveLines />

      <div className="relative z-10 px-6 lg:px-16 pt-16 lg:pt-24 pb-24 lg:pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-normal text-white max-w-xl leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-white/90 text-lg max-w-lg"
        >
          {paragraph}
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 w-fit flex items-center gap-1.5 bg-neutral-100 hover:bg-white text-neutral-900 font-semibold px-6 py-4 transition-colors"
        >
          Learn more <span>›</span>
        </motion.a>
      </div>

      <BottomBar />
    </section>
  );
}