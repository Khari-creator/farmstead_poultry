import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Farmstead Poultry gallery featuring chicks, birds, eggs, feeds, brooding, and farm environment photos.",
};

const categories = ["Chicks", "Birds", "Eggs", "Feeds", "Farm", "Brooding"];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#FFFDF5] py-20 lg:py-28">
        <Container>
          <SectionHeader
            centered
            eyebrow="Farm Gallery"
            title="See the poultry products, farm environment, and daily work behind Farmstead Poultry."
            description="A strong gallery helps customers trust the farm before calling or placing a WhatsApp inquiry."
          />
        </Container>
      </section>

      <section className="bg-white pb-20 lg:pb-28">
        <Container>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="rounded-full border border-green-700/20 bg-green-50 px-5 py-2 text-sm font-black text-green-800 transition hover:bg-green-700 hover:text-white"
              >
                {category}
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {categories.map((category) => {
              const images = galleryImages.filter(
                (image) => image.category === category
              );

              if (images.length === 0) return null;

              return (
                <div
                  key={category}
                  id={category.toLowerCase()}
                  className="scroll-mt-32"
                >
                  <div className="mb-8 border-b border-green-900/10 pb-5">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">
                      Gallery Category
                    </p>
                    <h2 className="mt-2 text-3xl font-black text-slate-950">
                      {category}
                    </h2>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((item) => (
                      <article
                        key={item.id}
                        className="group overflow-hidden rounded-[2rem] bg-green-100 shadow-sm"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
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

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                          <div className="absolute bottom-5 left-5 right-5">
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
                              {item.category}
                            </p>
                            <h3 className="mt-1 text-xl font-black text-white">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}