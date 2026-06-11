export type Testimonial = {
    id: string;
    name: string;
    location: string;
    message: string;
    role?: string;
  };
  
  export const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      name: "Local Poultry Farmer",
      location: "Muhoroni",
      role: "Farmer",
      message:
        "Farmstead Poultry offers healthy birds and helpful guidance. Their support makes poultry farming easier for farmers.",
    },
    {
      id: "testimonial-2",
      name: "Egg Customer",
      location: "Kisumu",
      role: "Bulk Buyer",
      message:
        "The eggs are fresh and reliable. Ordering through WhatsApp makes the process simple and convenient.",
    },
    {
      id: "testimonial-3",
      name: "New Poultry Farmer",
      location: "Koru",
      role: "Beginner Farmer",
      message:
        "I received practical advice on feeding and managing chicks. Farmstead is more than just a poultry supplier.",
    },
  ];