import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import OffersSection from "@/components/home/OffersSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SassoSpotlight from "@/components/home/SassoSpotlight";
import EggsSection from "@/components/home/EggsSection";
import FeedsSection from "@/components/home/FeedsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import LocationSection from "@/components/home/LocationSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <OffersSection />
      <FeaturedProducts />
      <SassoSpotlight />
      <EggsSection />
      <FeedsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FAQSection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}