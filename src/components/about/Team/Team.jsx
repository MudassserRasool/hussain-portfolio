import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueWhiteHeading from '../../common/headings/BlueWhiteHeading/BlueWhiteHeading';
import EmployeeCard from './EmployeeCard';
const Team = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.team.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const employees = data('employees', true);
  const employeesArray = Array.isArray(employees) ? employees : [];
  return (
    <section className="bg-white bg-gradient-to-r from-[#0a0a2a] to-[#1a1a4d]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto">
        <div className="ml-40">
          <h2 className="text-gray-500 uppercase text-sm">{data('title')}</h2>
          <BlueWhiteHeading
            white={data('heading.white')}
            blue={data('heading.blue')}
          />
        </div>

        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-3 gap-6">
            {employeesArray.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
