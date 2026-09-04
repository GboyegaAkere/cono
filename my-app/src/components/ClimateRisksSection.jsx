import { motion } from "framer-motion";
import { FiPrinter, FiSettings, FiArrowUp } from "react-icons/fi";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

function BottomBar() {
  const socials = [
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaXTwitter, label: "X" },
    { Icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  return (
   <></>
  );
}

export default function ClimateRisksSection({
  title = "Managing climate-related risks",
  subtitle = "We have adopted a comprehensive framework with an ambition to become a net-zero company for operational emissions by 2050.",
  backgroundImage = "/climate.jpg",
}) {
  return (
    <section className="relative bg-white" >
      {/* Full-bleed image with overlay text */}
      <div className="relative min-h-120 lg:min-h-155 overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/25 to-black/40" />

        <div className="relative z-10 h-full px-6 lg:px-16 pt-16 lg:pt-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-normal text-white max-w-2xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-white/90 text-lg max-w-xl"
          >
            {subtitle}
          </motion.p>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 w-fit flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold px-6 py-4 transition-colors"
          >
            Learn more <span>›</span>
          </motion.a>
        </div>
      </div>
      <BottomBar />
    </section>
  );
}