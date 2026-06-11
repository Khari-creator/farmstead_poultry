export type Offer = {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
  };
  
  export const offers: Offer[] = [
    {
      id: "chicks-birds",
      title: "Chicks & Birds",
      description:
        "Healthy day-old chicks, SASSO F1 birds, growers, and mature birds.",
      icon: "Bird",
      href: "/products",
    },
    {
      id: "layers",
      title: "Layers",
      description:
        "Quality layers for farmers focused on consistent egg production.",
      icon: "Egg",
      href: "/products",
    },
    {
      id: "fresh-eggs",
      title: "Fresh Eggs",
      description:
        "Fresh farm eggs for homes, shops, hotels, schools, and bulk buyers.",
      icon: "CircleDot",
      href: "/products/fresh-eggs",
    },
    {
      id: "poultry-feeds",
      title: "Poultry Feeds",
      description:
        "Feeds and nutrition support for chicks, growers, layers, and broilers.",
      icon: "Wheat",
      href: "/products",
    },
    {
      id: "brooding",
      title: "Brooding Services",
      description:
        "Support for chicks during early growth stages for stronger starts.",
      icon: "Home",
      href: "/services",
    },
    {
      id: "consultation",
      title: "Poultry Consultation",
      description:
        "Practical advice on housing, feeding, breed selection, and management.",
      icon: "Users",
      href: "/services",
    },
  ];