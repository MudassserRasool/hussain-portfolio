import React from 'react';
// import NewAtCompany from '../../components/common/cards/NewAtCompany/NewAtCompany';
import Fqas from '../../components/common/Faqs/Faqs';
import Header from '../../components/common/headers/Header/Header';
import ClientFeedbackSlider from '../../components/common/Testimonials/ClientFeedbackSlider';
// import Testimonial from '../../components/home/Testimonial/Testimonial';
import AllPortfolios from '../../components/portfolio/AllPortfolios/AllPortfolios';

const Portfolio = () => {
  return (
    <>
      <Header pagName="portfolio" />

      <section className="bg-white bg-gradient-to-b from-[#000C29] to-[#1a1a4d] ">
        <AllPortfolios pageName="portfolio" />
      </section>

      {/* <Testimonial pagName={'portfolio'} /> */}
      <ClientFeedbackSlider pagName={'portfolio'} />
      {/* <NewAtCompany pagName={'portfolio'} /> */}
      <Fqas pageName={'portfolio'} />
    </>
  );
};

export default Portfolio;
