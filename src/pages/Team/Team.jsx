import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import BackgroundNumberedCard from '../../components/common/cards/BackgroundNumberedCard/BackgroundNumberedCard';
import HeadingWithBackgroundText from '../../components/common/headings/HeadingWithBackgroundText/HeadingWithBackgroundText';
import OurTechStack from '../../components/common/OurTechStack/OurTechStack';
import ClientFeedbackSlider from '../../components/common/Testimonials/ClientFeedbackSlider';
import Companies from '../../components/home/Companies/Companies';
import Experience from '../../components/team/Experience/Experience';
import Hero from '../../components/team/Hero/Hero';
import HomeData from '../../data/home';
const pagName = 'team';
const Team = () => {
  const [searchParams] = useSearchParams();
  const paramsEmployeeId = searchParams.get('employee');

  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const employees = data('employeesData', true);
  const employeesArray = Array.isArray(employees) ? employees : [];
  const employeeData = employeesArray.find(
    (employee) => employee.id == paramsEmployeeId
  );

  return (
    <>
      <Hero data={employeeData?.hero} />
      <Companies data={HomeData.companies} />
      <Experience data={employeeData.experience} />
      <OurTechStack pageName={'team'} />
      <section className="bg-white bg-gradient-to-b from-[#000C29] to-[#1a1a4d] ">
        <div className="flex justify-center">
          {employeeData?.projects?.heading && (
            <HeadingWithBackgroundText
              white={employeeData.projects.heading.white || ''}
              blue={employeeData.projects.heading.blue || ''}
              background={employeeData.projects.heading.backgroundText || ''}
            />
          )}
        </div>
        {employeeData?.projects?.innovations?.map((item, index) => (
          <div key={index}>
            <BackgroundNumberedCard key={index} data={item} />
          </div>
        ))}
      </section>
      <ClientFeedbackSlider pagName={pagName} />
    </>
  );
};

export default Team;
