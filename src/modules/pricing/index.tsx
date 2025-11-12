import { Container } from "@/components/container";
import { PricingSection } from "./sections/pricing-section";
import { FeatureSection } from "./sections/feature-section";

export const PricingPage = () => {
  return (
    <Container className="bg-neutral-50">
      <PricingSection />
      <FeatureSection />
    </Container>
  );
};
