import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './CreaturePage.module.css';
import { CreatureData } from '../../components/pages/creature-page/CreatureData';
import { useAppSelector } from '../../hooks/redux';

interface IProps {}

export const CreaturePage: React.FC<IProps> = () => {
  const params = useParams();
  const creature = useAppSelector((state) =>
    state.creatures.creatures.find((creature) => creature.name === params.name),
  );

  if (!creature) return <div className="ml-24">Такого существа нет!</div>;

  return (
    <div className={styles.creaturePage}>
      <CreatureData creatureData={creature} />
    </div>
  );
};
