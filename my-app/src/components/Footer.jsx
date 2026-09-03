import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiMail, href: "#", label: "Email" },
];

const footerLinks = [
  { title: "Company", links: ["About", "Careers", "Blog"] },
  { title: "Resources", links: ["Docs", "Support", "FAQ"] },
  { title: "Legal", links: ["Privacy", "Terms"] },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-slate-900 text-slate-300"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <span className="text-xl font-bold text-white">
            Brand<span className="text-indigo-500">.</span>
          </span>
          <p className="mt-3 text-sm text-slate-400">
            A short dummy tagline describing what this brand does, replace me later.
          </p>
          <div className="mt-4 flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-slate-400 hover:text-white transition-colors text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-white mb-3">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Brand. All rights reserved.
      </div>
    </motion.footer>
  );
}
