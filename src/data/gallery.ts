export type GalleryCategory =
  | "Chicks"
  | "Birds"
  | "Eggs"
  | "Feeds"
  | "Farm"
  | "Brooding";

export type GalleryImage = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-chicks-1",
    title: "Healthy Chicks",
    category: "Chicks",
    image: "/images/gallery/chicks-1.jpg",
    alt: "Healthy chicks at Farmstead Poultry",
  },
  {
    id: "gallery-birds-1",
    title: "Poultry Birds",
    category: "Birds",
    image: "/images/gallery/birds-1.jpg",
    alt: "Poultry birds at Farmstead Poultry",
  },
  {
    id: "gallery-eggs-1",
    title: "Fresh Eggs",
    category: "Eggs",
    image: "/images/gallery/eggs-1.jpg",
    alt: "Fresh farm eggs from Farmstead Poultry",
  },
  {
    id: "gallery-feeds-1",
    title: "Poultry Feeds",
    category: "Feeds",
    image: "/images/gallery/feeds-1.jpg",
    alt: "Poultry feeds available at Farmstead Poultry",
  },
  {
    id: "gallery-farm-1",
    title: "Farm Environment",
    category: "Farm",
    image: "/images/gallery/farm-1.jpg",
    alt: "Farmstead Poultry farm environment in Muhoroni",
  },
  {
    id: "gallery-brooding-1",
    title: "Brooding Setup",
    category: "Brooding",
    image: "/images/gallery/brooding-1.mp4",
    alt: "Brooding setup for chicks at Farmstead Poultry",
  },
];