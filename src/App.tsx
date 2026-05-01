import React, { useState } from "react";
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
import { Calcs } from "./components/Calcs";
import { Strategy } from "./components/Strategy";
import { Moon, Sun } from "lucide-react";
import { PoisonDamage } from "./components/PoisonDamage";
import { LevelUpHpGain } from "./components/LevelUpHpGain";

const components = {
  Encounter,
  Starter,
  Strategy,
  Calcs,
  SpeedCheck,
  DamageIn,
  KoChance,
  PoisonDamage,
  LevelUpHpGain,
};

export default function App() {
  const route = useRoute();
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") === "dark",
  );

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
    setIsDark(next);
  };

  return (
    <div className="min-h-screen bg-base-200 flex font-sans">
      <Sidebar />
      <div className="ml-80 flex-1 p-10">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-sm btn-circle fixed top-4 right-4"
        >
          {isDark ? <Sun /> : <Moon />}
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
  const errors = Markdoc.validate(ast, markdocConfig);

  if (errors.length > 0 && import.meta.env.DEV) {
    return (
      <div className="rounded-box border border-error/30 bg-error/10 p-4 text-sm font-mono">
        <div className="mb-2 font-bold text-error">
          Schema validation errors
        </div>
        <ul className="space-y-1">
          {errors.map((e, i) => (
            <li key={i} className="text-error/80">
              Line {e.lines?.[0]}: {e.error.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const transformed = Markdoc.transform(ast, markdocConfig);
  return Markdoc.renderers.react(transformed, React, { components });
}
