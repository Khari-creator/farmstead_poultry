import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { galleryImages } from "@/data/gallery";
import MotionWrapper from "@/components/animations/MotionWrapper";

export default function GalleryPreview() {
  return (
    <section className="bg-[#FFFDF5] py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Farm Gallery"
            title="A closer look at our poultry products and farm environment."
            description="Use real farm photos to build trust and show customers the quality behind Farmstead Poultry."
            className="mb-0"
          />

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-green-700 px-6 py-3 text-sm font-extrabold text-green-800 transition hover:bg-green-700 hover:text-white"
          >
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.slice(0, 6).map((item) => (
            <MotionWrapper key={item.id}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-green-100 shadow-sm">
                {/\.(mp4|webm)$/i.test(item.image) ? (
                  <video
                    src={item.image}
                    poster={item.image.replace(/\.(mp4|webm)$/i, ".jpg")}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}