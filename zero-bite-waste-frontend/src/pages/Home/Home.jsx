import React from "react";
// import HowItWorks from "../../components/HowItWorks";
import Banner from "./Banner/Banner";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import StatsSection from "./StatsSection/StatsSection";

import HowItWorks from "./HowItWorks/HowItWorks";
import MiddleSection from "./MiddleSection/MiddleSection";
import WhyItMatters from "./WhyItMatters/WhyItMatters";
import VolunteerCTA from "./VolunteerCTA/VolunteerCTA";

const Home = () => {
  return (
    <>
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      <Banner />
      <MiddleSection></MiddleSection>
      <WhyItMatters></WhyItMatters>
      <VolunteerCTA></VolunteerCTA>
      <HowItWorks></HowItWorks>
      <StatsSection />
      {/* Back to Top */}
      <ScrollToTopButton />
    </>
  );
};

export default Home;
