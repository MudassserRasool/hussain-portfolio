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
    <div className="flex flex-col md:flex-row justify-center gap-10 my-20">
      {missionsArray.map((mission) => (
        <MissionCard key={mission.id} mission={mission} />
      ))}
    </div>
  );
};

export default Missions;
