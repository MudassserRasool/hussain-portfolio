import React from 'react';
import { useTranslation } from 'react-i18next';
import MissionCard from '../../common/cards/MissionCard/MissionCard';

const Missions = ({ pagName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.${string}`, {
      returnObjects: returnObjects,
    });
  };

  const missions = data('missions', true);
  const missionsArray = Array.isArray(missions) ? missions : [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 px-4 max-w-screen-lg mx-auto">
      {missionsArray.map((mission, index) => (
        <MissionCard key={mission.id} mission={mission} index={index} />
      ))}
    </div>
  );
};

export default Missions;
