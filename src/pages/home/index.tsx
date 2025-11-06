import { Container } from "@/components/container";
import { HeroSection } from "./sections/hero-section";
import { FeatureSection } from "./sections/feature-section";
import { ProductSection } from "./sections/product-section";

export const HomePage = () => {
  return (
    <Container className="bg-neutral-50">
      <HeroSection />
      <FeatureSection />
      <ProductSection />
    </Container>
  );
};
