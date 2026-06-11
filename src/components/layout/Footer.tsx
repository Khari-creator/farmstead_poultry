import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const productLinks = [
  { label: "SASSO F1 Chicks", href: "/products/sasso-f1-chicks" },
  { label: "Day Old Chicks", href: "/products/day-old-chicks" },
  { label: "Layers", href: "/products/layers" },
  { label: "Fresh Eggs", href: "/products/fresh-eggs" },
  { label: "Poultry Feeds", href: "/products/poultry-feeds" },
];

const serviceLinks = [
  { label: "Brooding Services", href: "/services" },
  { label: "Poultry Consultation", href: "/services" },
  { label: "Feeding Guidance", href: "/services" },
  { label: "Farm Setup Advice", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-lg font-black text-white">
              FP
            </div>

            <div>
              <p className="text-lg font-black leading-none">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-xs font-semibold text-green-300">
                Poultry Solutions
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            {siteConfig.description}
          </p>

          <WhatsAppButton
            label="WhatsApp Us"
            variant="light"
            className="mt-6"
          />

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
            <a href="#" aria-label="Facebook" className="transition hover:opacity-80">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:opacity-80">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:opacity-80">
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-green-300">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-yellow-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-green-300">
            Products
          </h3>

          <ul className="mt-5 space-y-3">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-yellow-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-green-300">
            Contact
          </h3>

          <ul className="mt-5 space-y-4 text-sm text-slate-300">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
              <span>{siteConfig.location}</span>
            </li>

            <li>
              <Link
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex gap-3 transition hover:text-yellow-300"
              >
                <Phone className="h-5 w-5 shrink-0 text-yellow-300" />
                <span>{siteConfig.phoneDisplay}</span>
              </Link>
            </li>

            <li>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex gap-3 transition hover:text-yellow-300"
              >
                <Mail className="h-5 w-5 shrink-0 text-yellow-300" />
                <span>{siteConfig.email}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-green-300">
            Newsletter
          </h3>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Get updates on chicks, feeds and special offers.
          </p>

          <form className="mt-4 flex w-full max-w-xs items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400"
            />

            <button className="rounded-md bg-green-600 px-3 py-2 text-sm font-bold">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p>Designed for healthy poultry growth and trusted farm support.</p>
        </div>
      </div>
    </footer>
  );
}