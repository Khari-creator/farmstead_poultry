export const siteConfig = {
    name: "Farmstead Poultry",
    tagline: "Healthy Chicks, Quality Eggs & Complete Poultry Solutions",
    description:
      "Farmstead Poultry supplies healthy SASSO F1 chicks, layers, fresh eggs, poultry feeds, brooding services, and poultry consultation in Muhoroni, Kisumu.",
    url: "https://farmstead-poultry.vercel.app",
    phoneDisplay: "+254 728 038 474",
    phoneRaw: "+254728038474",
    whatsapp: "254728038474",
    email: "maungap@gmail.com",
    location: "Opposite Koru Mission Hospital, Muhoroni Sub-County, Kisumu",
    keywords: [
      "Farmstead Poultry",
      "poultry farm in Muhoroni",
      "poultry farm in Kisumu",
      "SASSO F1 chicks Kenya",
      "day old chicks Kenya",
      "layers in Kenya",
      "fresh eggs Muhoroni",
      "poultry feeds Muhoroni",
      "brooding services Kenya",
      "poultry consultation Kenya",
    ],
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  } as const;
  
  export type NavLink = (typeof siteConfig.navLinks)[number];