import React from "react";
import Markdoc from "@markdoc/markdoc";
import { markdocConfig } from "./markdoc/schema";
import { Encounter } from "./components/Encounter";
import { Starter } from "./components/Starter";
import { Sidebar } from "./components/Sidebar";
import { SpeedCheck } from "./components/SpeedCheck";
import { DamageIn } from "./components/DamageIn";
import { KoChance } from "./components/KoChance";
import { useRoute } from "./hooks/useRoute";
import { RouteHeader } from "./components/RouteHeader";

const components = {
  Encounter,
  Starter,
  SpeedCheck,
  DamageIn,
  KoChance,
};

export default function App() {
  const route = useRoute();

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-gray-900">
      <Sidebar />
      <div className="ml-80 flex-1 p-10">
        <div className="max-w-3xl mx-auto">
          {route.status === "ready" && route.data.frontmatter && (
            <RouteHeader frontmatter={route.data.frontmatter} />
          )}
          <div className="prose prose-blue prose-headings:font-black">
            {route.status === "loading" && (
              <p className="text-gray-400 italic">Loading route...</p>
            )}
            {route.status === "error" && (
              <p className="text-red-500 font-bold">{route.message}</p>
            )}
            {route.status === "ready" && (
              <RouteRenderer content={route.data.content} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RouteRenderer({ content }: { content: string }) {
  const ast = Markdoc.parse(content);
  const transformed = Markdoc.transform(ast, markdocConfig);
  return Markdoc.renderers.react(transformed, React, { components });
}
