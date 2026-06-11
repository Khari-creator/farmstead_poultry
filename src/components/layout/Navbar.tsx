"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import MobileMenu from "@/components/layout/MobileMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-white/90 backdrop-blur-xl">
      <div className="bg-green-900 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <p className="hidden sm:block">
            Located opposite Koru Mission Hospital, Muhoroni
          </p>

          <Link
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 font-semibold transition hover:text-yellow-300"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </Link>
        </div>
      </div>

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white p-1 shadow-xl ring-1 ring-green-100 transition group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} logo`}
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-2xl font-extrabold leading-none text-slate-950">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm font-semibold text-green-700">
              Poultry Solutions
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition hover:text-green-700",
                  isActive ? "text-green-700" : "text-slate-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton label="Order Now" className="px-5 py-2.5" />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}