export type Service = {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    icon: string;
    benefits: string[];
    whatsappMessage: string;
  };
  
  export const services: Service[] = [
    {
      id: "brooding-services",
      title: "Brooding Services",
      slug: "brooding-services",
      icon: "Home",
      shortDescription:
        "Safe early-stage chick care for farmers who need support during brooding.",
      description:
        "Farmstead Poultry offers brooding support to help chicks grow safely during their delicate early stages. This is ideal for farmers who want healthier starts and better survival rates.",
      benefits: [
        "Supports delicate chick growth stages",
        "Helps reduce early-stage losses",
        "Good for farmers without full brooding setup",
        "Practical care and feeding support",
      ],
      whatsappMessage:
        "Hello Farmstead Poultry, I would like to inquire about your brooding services.",
    },
    {
      id: "poultry-consultation",
      title: "Poultry Consultation",
      slug: "poultry-consultation",
      icon: "Users",
      shortDescription:
        "Practical poultry farming advice for new and existing farmers.",
      description:
        "Farmstead Poultry guides farmers on poultry housing, feeding, breed selection, disease prevention, and general poultry management.",
      benefits: [
        "Guidance for new poultry farmers",
        "Support on breed selection",
        "Advice on feeding and management",
        "Helps farmers avoid costly mistakes",
      ],
      whatsappMessage:
        "Hello Farmstead Poultry, I would like to inquire about poultry consultation.",
    },
    {
      id: "feeding-guidance",
      title: "Feeding Guidance",
      slug: "feeding-guidance",
      icon: "Wheat",
      shortDescription:
        "Support in choosing the right feeds for chicks, layers, and growing birds.",
      description:
        "Farmstead Poultry helps customers understand suitable feeding programs for chicks, growers, layers, broilers, and mature birds.",
      benefits: [
        "Helps customers choose suitable feeds",
        "Supports better growth and productivity",
        "Useful for chick, grower, and layer stages",
        "Connects well with Farmstead feed products",
      ],
      whatsappMessage:
        "Hello Farmstead Poultry, I would like guidance on poultry feeds.",
    },
    {
      id: "farm-setup-advice",
      title: "Farm Setup Advice",
      slug: "farm-setup-advice",
      icon: "Sprout",
      shortDescription:
        "Helpful guidance for farmers starting or expanding poultry projects.",
      description:
        "Farmstead Poultry supports farmers with practical advice on poultry housing, setup planning, stocking decisions, and management basics.",
      benefits: [
        "Good for beginners",
        "Helps with proper poultry planning",
        "Supports better housing decisions",
        "Useful for expansion planning",
      ],
      whatsappMessage:
        "Hello Farmstead Poultry, I would like advice on setting up a poultry farm.",
    },
  ];