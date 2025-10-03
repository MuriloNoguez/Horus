
import { LandingHeader } from "../components/LandingHeader";
import { HeroSection } from "../components/HeroSection";
import { WhySection } from "../components/WhySection";
import { LandingCarouselSection } from "../components/LandingCarouselSection";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <>
      <LandingHeader />
      <HeroSection />
      <main>
        <LandingCarouselSection />
        <WhySection />
      </main>
      <Footer />
    </>
  );
}

export default Home;