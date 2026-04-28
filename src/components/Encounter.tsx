import React, { useState } from 'react';
import { useRunStore } from '../store/runState';
import { PokemonData } from '../core/data/pokemon';
import { calculateExpYield } from '../core/mechanics/experience';

interface EncounterProps {
  species: string;
  level: number;
  isTrainer: boolean;
}

export const Encounter: React.FC<EncounterProps> = ({ species, level, isTrainer }) => {
  const [defeated, setDefeated] = useState(false);
  const gainEncounter = useRunStore((state) => state.gainEncounter);

  const handleDefeat = () => {
    if (defeated) return;
    
    const data = PokemonData[species];
    if (!data) {
      console.error(`Pokemon ${species} not found in dictionary!`);
      return;
    }

    const expYield = calculateExpYield(data.baseExp, level, isTrainer);

    gainEncounter(expYield, data.evYield);
    setDefeated(true);
  };

  return (
    <div className={`border-l-4 p-4 my-4 rounded shadow-sm bg-white flex justify-between items-center transition-opacity ${defeated ? 'opacity-50 border-gray-300' : 'border-blue-500'}`}>
      <div>
        <h3 className="font-bold text-lg text-gray-800">
          {isTrainer ? 'Trainer Battle' : 'Wild Encounter'}: {species}
        </h3>
        <p className="text-gray-600 text-sm">Lv. {level}</p>
      </div>
      
      <button 
        onClick={handleDefeat}
        disabled={defeated}
        className={`px-4 py-2 font-bold rounded text-white ${defeated ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {defeated ? 'Defeated' : 'Defeat'}
      </button>
    </div>
  );
};