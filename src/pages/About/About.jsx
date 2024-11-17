import React from 'react';
import Hero from '../../components/about/Hero/Hero';
// import Map from '../../components/about/Map/Map';

import Missions from '../../components/about/Missions/Missions';
import TargetMarkets from '../../components/about/TargetMarkets/TargetMarkets';
// import Team from '../../components/about/Team/Team';
import OurTechStack from '../../components/common/OurTechStack/OurTechStack';
import ClientFeedbackSlider from '../../components/common/Testimonials/ClientFeedbackSlider';
// import Testimonial from '../../components/home/Testimonial/Testimonial';
import Journey from '../../components/services/Journy/Journy';

const About = () => {
  return (
    <>
      <Hero pagName={'about'} />
      <Missions pagName={'about'} />
      {/* <Team pageName={'about'} /> */}
      <TargetMarkets pageName={'about'} />
      <OurTechStack pageName={'about'} />
      <Journey pageName="about" />
      {/* <Testimonial pagName={'about'} /> */}
      <ClientFeedbackSlider pagName={'about'} />
      {/* <Map pagName={'about'} /> */}
    </>
  );
};

export default About;
