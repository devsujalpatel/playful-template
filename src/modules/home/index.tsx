import { Container } from "@/components/container";
import { HeroSection } from "./sections/hero-section";
import { FeatureSection } from "./sections/feature-section";
import { ProductSection } from "./sections/product-section";
import { AvailablitySection } from "./sections/availablity-section";

export const HomePage = () => {
  return (
    <Container className="bg-neutral-50">
      <HeroSection />
      <FeatureSection />
      <ProductSection />
      <AvailablitySection />
    </Container>
  );
};
