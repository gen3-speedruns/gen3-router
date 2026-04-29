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

  const toggleTheme = () => {
    const html = document.documentElement;
    html.setAttribute(
      "data-theme",
      html.getAttribute("data-theme") === "dark" ? "light" : "dark",
    );
  };

  return (
    <div className="min-h-screen bg-base-200 flex font-sans">
      <Sidebar />
      <div className="ml-80 flex-1 p-10">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-sm btn-circle fixed top-4 right-4"
        >
          🌙
        </button>
        <div className="max-w-3xl mx-auto">
          {route.status === "loading" && (
            <span className="loading loading-spinner loading-md" />
          )}
          {route.status === "error" && (
            <div className="alert alert-error">
              <span>{route.message}</span>
            </div>
          )}
          {route.status === "ready" && (
            <>
              {route.data.frontmatter && (
                <RouteHeader frontmatter={route.data.frontmatter} />
              )}
              <div className="prose prose-sm sm:prose max-w-none dark:prose-invert">
                <RouteRenderer content={route.data.content} />
              </div>
            </>
          )}
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
