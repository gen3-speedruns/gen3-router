import React from "react";
import Markdoc from "@markdoc/markdoc";
import { markdocConfig } from "./engine/schema";
import { Encounter } from "./components/Encounter";
import { Starter } from "./components/Starter";
import { Sidebar } from "./components/Sidebar";

const routeSource = `
# Pallet Town
Grab your Squirtle and check its stats!
{% starter species="Squirtle" level="5" natures=["Mild", "Rash"] /%}

# Route 1
Kill the mandatory Pidgey to get your first Speed EV.
{% encounter species="Pidgey" level="3" /%}
`;

export default function App() {
  const ast = Markdoc.parse(routeSource);
  const content = Markdoc.transform(ast, markdocConfig);
  const RouteContent = Markdoc.renderers.react(content, React, {
    components: {
      Encounter: Encounter,
      Starter: Starter,
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
