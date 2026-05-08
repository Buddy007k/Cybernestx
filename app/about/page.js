import AboutHero from "@/components/about/about-hero";
import AboutIntro from "@/components/about/about-intro";
import MissionVision from "@/components/about/mission-vision";
import Expertise from "@/components/about/expertise";
import Ecommerce from "@/components/about/ecommerce";
import WorkCulture from "@/components/about/work-culture";
import WhyUs from "@/components/about/why-us";
import Technologies from "@/components/about/technologies";
import Team from "@/components/about/team";
import CTA from "@/components/about/cta";
import Stats from "@/components/about/stats";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <Expertise />
      <Ecommerce />
      <Stats />
      <WorkCulture />
      <WhyUs />
      <Technologies />
      <Team />
      <CTA />
    </>
  );
}