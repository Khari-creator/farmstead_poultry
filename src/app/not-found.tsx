import Link from "next/link";
import { Home, Search } from "lucide-react";
import Container from "@/components/shared/Container";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[#FFFDF5] py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-green-800">
            <Search className="h-10 w-10" />
          </div>

          <p className="text-sm font-black uppercase tracking-[0.24em] text-green-700">
            Page Not Found
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            This page does not exist.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
            The page you are looking for may have been moved, deleted, or the
            link may be incorrect. You can go back home or contact Farmstead
            Poultry directly.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-0.5 hover:bg-green-800"
            >
              <Home className="h-5 w-5" />
              Back Home
            </Link>

            <WhatsAppButton variant="outline" label="Contact Farmstead" />
          </div>
        </div>
      </Container>
    </section>
  );
}