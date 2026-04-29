import React from "react";
import Markdoc from "@markdoc/markdoc";
import { markdocConfig } from "./markdoc/schema";
import { Encounter } from "./components/Encounter";
import { Starter } from "./components/Starter";
import { Sidebar } from "./components/Sidebar";
import { SpeedCheck } from "./components/SpeedCheck";
import { DamageOut } from "./components/DamageOut";
import { DamageIn } from "./components/DamageIn";

const routeSource = `
# Pallet Town
Initialize your starter.
{% starter species="Squirtle" level="5" natures=["Mild", "Rash"] /%}

# Route 1
Kill the mandatory Pidgey.
{% encounter species="Pidgey" level="3" /%}

# Pewter City Gym
The first major roadblock. Do not heal before this fight if you are in Pinch range!

{% encounter species="Geodude" level="12" isTrainer=true %}

**Speed Check:**
{% speed-check stages="0" /%} *(If hit by Rock Tomb: {% speed-check stages="-1" /%})*

**Strategy:**
Spam Bubble. If you are in Torrent range, it is guaranteed.
{% damage-out move="Bubble" /%}
{% damage-out move="Bubble" pinch=true /%}

**Threats:**
{% damage-in move="Tackle" /%}
{% damage-in move="Rock Throw" /%}

{% /encounter %}
`;

export default function App() {
  const ast = Markdoc.parse(routeSource);
  const content = Markdoc.transform(ast, markdocConfig);
  const RouteContent = Markdoc.renderers.react(content, React, {
    components: {
      Encounter: Encounter,
      Starter: Starter,
      SpeedCheck: SpeedCheck,
      DamageOut: DamageOut,
      DamageIn: DamageIn,
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-gray-900">
      <Sidebar />
      <div className="ml-80 flex-1 p-10">
        <div className="max-w-3xl mx-auto prose prose-blue prose-headings:font-black">
          {RouteContent}
        </div>
      </div>
    </div>
  );
}
