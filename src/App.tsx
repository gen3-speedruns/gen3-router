import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { markdocConfig } from './engine/schema';
import { Encounter } from './components/Encounter';
import { useRunStore } from './store/runState';
import { getLevelFromExp } from './core/mechanics/experience';

const routeSource = `
# Pallet Town
Grab your Squirtle.

# Route 1
Kill the mandatory Pidgey to get your first Speed EV.
{% encounter species="Pidgey" level="3" /%}

# Route 22 (Rival 1)
Make sure to win this fight for the early EXP!
{% encounter species="Pidgey" level="9" isTrainer=true /%}
{% encounter species="Bulbasaur" level="9" isTrainer=true /%}
`;

export default function App() {
  const player = useRunStore((state) => state.player);
  const currentLevel = getLevelFromExp(player.totalExp, player.growthRate);

  const ast = Markdoc.parse(routeSource);
  const content = Markdoc.transform(ast, markdocConfig);
  const RouteContent = Markdoc.renderers.react(content, React, {
    components: {
      Encounter: Encounter, 
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-gray-900">
      
      <div className="w-80 bg-slate-900 text-white p-6 shadow-xl flex flex-col gap-6 fixed h-full">
        <div>
          <h1 className="text-2xl font-black text-blue-400 tracking-tight">Gen3 Router</h1>
          <p className="text-slate-400 text-sm mt-1">Live State Engine</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <h2 className="text-xl font-bold">{player.species} <span className="text-blue-400">Lv. {currentLevel}</span></h2>
          <div className="mt-2 text-sm text-slate-300">
            <p>Total EXP: {player.totalExp}</p>
            <p>Nature: {player.nature}</p>
          </div>
        </div>

        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <h3 className="font-bold mb-2 text-slate-200 border-b border-slate-600 pb-1">Current EVs</h3>
          <ul className="text-sm space-y-1 text-slate-300">
            <li>HP: <span className="text-white font-mono">{player.evs.hp}</span></li>
            <li>Attack: <span className="text-white font-mono">{player.evs.atk}</span></li>
            <li>Defense: <span className="text-white font-mono">{player.evs.def}</span></li>
            <li>Sp. Atk: <span className="text-white font-mono">{player.evs.spa}</span></li>
            <li>Sp. Def: <span className="text-white font-mono">{player.evs.spd}</span></li>
            <li>Speed: <span className="text-white font-mono text-green-400">{player.evs.spe}</span></li>
          </ul>
        </div>
      </div>

      <div className="ml-80 flex-1 p-10">
        <div className="max-w-3xl mx-auto prose prose-blue prose-headings:font-black">
          {RouteContent}
        </div>
      </div>

    </div>
  );
}