import React from 'react';
// import NewAtCompany from '../../components/common/cards/NewAtCompany/NewAtCompany';
import Fqas from '../../components/common/Faqs/Faqs';
import Header from '../../components/common/headers/Header/Header';
import AllServices from '../../components/services/AllServices/AllServices';
import Innovations from '../../components/services/Innovations/Innovations';
import SuccessStories from '../../components/services/SuccessStories/SuccessStories';

const Services = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header pagName="services" />
      <AllServices />
      <Innovations pageName="services" />
      <SuccessStories />
      {/* <NewAtCompany pagName={'services'} /> */}
      <Fqas pageName={'services'} />
    </div>
  );
};

export default Services;

// add video content in json file
