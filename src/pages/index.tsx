import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import JoinSection from "@/components/JoinSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <JoinSection />
      <CTASection />
    </Layout>
  );
}
