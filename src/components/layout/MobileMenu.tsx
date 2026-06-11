"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
	isOpen: boolean;
	onClose?: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const pathname = usePathname();
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key="mobile-menu"
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.22, ease: "easeOut" }}
					className="border-t border-slate-100 bg-white px-4 pb-6 pt-2 shadow-xl lg:hidden"
				>
						<div className="space-y-1">
							{siteConfig.navLinks.map((link) => {
								const isActive =
									pathname === link.href ||
									(link.href !== "/" && pathname?.startsWith(link.href));

								return (
									<Link
										key={link.href}
										href={link.href}
										onClick={onClose}
										className={cn(
											"block rounded-2xl px-4 py-3 text-sm font-bold transition",
											isActive
												? "bg-green-50 text-green-800"
												: "text-slate-700 hover:bg-slate-50"
										)}
									>
										{link.label}
									</Link>
								);
							})}
						</div>

					<WhatsAppButton className="mt-5 w-full" />
				</motion.div>
			)}
		</AnimatePresence>
	);
}
