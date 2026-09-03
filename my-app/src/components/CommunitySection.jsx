import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop",
    title: "Nominate a teacher for 2027 Math Teacher of the Month",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    title: "Collaborating to benefit communities",
  },
];

function CommunityCard({ image, title }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white w-full sm:w-72"
    >
      <span className="block h-1 bg-red-700 w-full" />
      <div className="w-full aspect-4/3 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-xl text-neutral-900 leading-snug">{title}</p>
        <span className="flex items-center gap-1 text-red-700 font-semibold text-sm">
          Learn more <span>›</span>
        </span>
      </div>
    </motion.a>
  );
}

export default function CommunitySection({
  eyebrow,
  title = "Invested in communities",
  subtitle = "To be a good corporate citizen, we must first be good neighbors.",
  backgroundImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
  items = cards,
}) {
  return (
    <section className="relative overflow-hidden bg-neutral-900">
      {/* background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 via-blue-950/50 to-blue-950/80" />
      </div>

      <div className="relative z-10 px-6 lg:px-16 pt-16 lg:pt-24 pb-0">
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
          className="mt-4 text-white/90 text-lg max-w-xl"
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

        {/* cards */}
        <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row gap-0 sm:gap-0 w-fit">
          {items.map((c) => (
            <CommunityCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}