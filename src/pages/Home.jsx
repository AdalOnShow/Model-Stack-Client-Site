import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import AboutAIModels from "../components/home/AboutAIModels";
import GetStarted from "../components/home/GetStarted";
import FeaturedModels from "../components/home/FeaturedModels";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PopularFrameworks from "../components/home/PopularFrameworks";
import PlatformStats from "../components/home/PlatformStats";
import UseCases from "../components/home/UseCases";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <div>
      {/* Section 1: Hero Slider */}
      <HeroSlider />

      {/* Section 2: Featured Models */}
      <FeaturedModels />

      {/* Section 3: How It Works */}
      <HowItWorks />

      {/* Section 4: About AI Models */}
      <AboutAIModels />

      {/* Section 5: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 6: Popular Frameworks */}
      <PopularFrameworks />

      {/* Section 7: Platform Statistics */}
      <PlatformStats />

      {/* Section 8: Use Cases & Industries */}
      <UseCases />

      {/* Section 9: Newsletter Signup */}
      <Newsletter />

      {/* Section 10: Get Started CTA */}
      <GetStarted />
    </div>
  );
};

export default Home;
