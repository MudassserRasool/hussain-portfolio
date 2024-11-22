import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: 400 }}
      className="border border-white rounded-md ml-2 w-72 text-white bg-indigo-950 hover:bg-blue-600 cursor-pointer"
      // onClick={() => navigate(`${routes.team}/?employee=${employee.id}`)}
      // just link to #
      onClick={() => navigate('#')}
    >
      <div className="h-68 overflow-hidden">
        <img
          loading="lazy"
          className="h-full w-full object-cover"
          src={employee.image}
          alt="person"
        />
      </div>
      <div className="">
        <p className="font-semibold text-2xl ml-4 mt-2">{employee.name}</p>
        <p className="font-semibold text-xl mt-1 ml-4">{employee.position}</p>
        <p className="ml-4 mt-2 text-sm w-60 line-clamp-4">
          {employee.description}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
