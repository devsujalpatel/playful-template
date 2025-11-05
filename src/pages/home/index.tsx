import { Container } from "@/components/container";
import { HeroSection } from "./sections/hero-section";
import { FeatureSection } from "./sections/feature-section";

export const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <FeatureSection />
    </Container>
  );
};
