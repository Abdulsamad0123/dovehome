import { HeroSection } from "./HeroSection";

export function DoveHero() {
  return (
    <HeroSection
      title="Where Elegant Living Meets Timeless Design"
      subtitle="Discover thoughtfully crafted homes designed for comfort, beauty, and lasting value."
      primaryCta={{ label: "Explore Our Properties", to: "/properties" }}
      secondaryCta={{ label: "Speak With an Advisor", to: "/contact" }}
      imageSrc="https://images.unsplash.com/photo-1740479948645-3eb39a64e843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9ufGVufDF8fHx8MTc2Nzc5Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      heightClass="h-screen"
    />
  );
}
