import React from 'react';
// import NewAtCompany from '../../components/common/cards/NewAtCompany/NewAtCompany';
import Fqas from '../../components/common/Faqs/Faqs';
import ClientFeedbackSlider from '../../components/common/Testimonials/ClientFeedbackSlider';
import AboutCard from '../../components/home/AboutCard/AboutCard';
import Companies from '../../components/home/Companies/Companies';
import Hero from '../../components/home/Hero/Hero';
import Approaches from '../../components/home/InnovationsAndApproaches/Approaches';
import Innovations from '../../components/home/InnovationsAndApproaches/Innovations';
import OurServices from '../../components/home/OurServices/OurServices';
// import Testimonial from '../../components/home/Testimonial/Testimonial';
import WhyUs from '../../components/home/WhyUs/WhyUs';
import HomeData from '../../data/home';
const Home = () => {
  return (
    <div>
      <Hero />
      <Companies data={HomeData.companies} />
      <AboutCard />
      <OurServices pageName={'home'} />
      <WhyUs pagName={'home'} />
      <section className="bg-white bg-gradient-to-r from-[#0a0a2a] to-[#1a1a4d] my-10 pb-10">
        <Innovations pageName="home" />
        <Approaches pageName="home" />
      </section>
      {/* <Testimonial pagName={'home'} /> */}
      <ClientFeedbackSlider pagName={'home'} />
      <Fqas pageName={'home'} />
      {/* <NewAtCompany pagName={'home'} /> */}
    </div>
  );
};

export default Home;
