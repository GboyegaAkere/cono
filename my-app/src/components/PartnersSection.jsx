import { motion } from "framer-motion";
import { FiLinkedin, FiGlobe } from "react-icons/fi";

const partners = [
  {
    name: "Michael Lone",
    role: "Managing Partner",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Sarah Whitfield",
    role: "Strategy & Operations",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    website: "#",
  },
  {
    name: "David Okonkwo",
    role: "Technology Partner",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Elena Martins",
    role: "Client Relations",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    website: "#",
  },
];

function PartnerCard({ name, role, image, linkedin, website }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col"
    >
      <div className="relative w-full aspect-4/5 overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {linkedin && (
            <a
              href={linkedin}
              aria-label={`${name} on LinkedIn`}
              className="w-9 h-9 flex items-center justify-center bg-white text-neutral-900 hover:bg-blue-700 hover:text-white transition-colors"
            >
              <FiLinkedin size={16} />
            </a>
          )}

          {website && (
            <a
              href={website}
              aria-label={`${name}'s website`}
              className="w-9 h-9 flex items-center justify-center bg-white text-neutral-900 hover:bg-blue-700 hover:text-white transition-colors"
            >
              <FiGlobe size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold text-neutral-900">
          {name}
        </p>

        <p className="text-sm text-neutral-500">
          {role}
        </p>
      </div>
    </motion.div>
  );
}

export default function PartnersSection({
  eyebrow = "Our Team",
  title = "Meet our partners",
  subtitle = "The people behind our work, bringing years of experience across strategy, technology, and client relationships.",
}) {
  return (
    <section className="bg-white px-6 lg:px-16 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-12 lg:mb-16"
      >
        <span className="text-sm font-bold tracking-wide text-red-700 uppercase">
          {eyebrow}
        </span>

        <h2 className="mt-2 text-4xl lg:text-5xl font-normal text-neutral-900">
          {title}
        </h2>

        <p className="mt-4 text-neutral-600 text-lg">
          {subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {partners.map((p) => (
          <PartnerCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}