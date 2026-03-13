import { DoveHeader } from "../components/DoveHeader";
import { DoveHero } from "../components/DoveHero";
import { DoveAbout } from "../components/DoveAbout";
import { DoveProperties } from "../components/DoveProperties";
import { DoveWhyChoose } from "../components/DoveWhyChoose";
import { DoveServices } from "../components/DoveServices";
import { DoveTestimonials } from "../components/DoveTestimonials";
import { DoveContact } from "../components/DoveContact";
import { DoveFooter } from "../components/DoveFooter";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <DoveHeader />
      <DoveHero />
      <DoveAbout />
      <DoveProperties />
      <DoveWhyChoose />
      <DoveServices />
      <DoveTestimonials />
      <DoveContact />
      <DoveFooter />
    </div>
  );
}
