import type { Node } from "@markdoc/markdoc";
import {
  resolveTrainerEncounter,
  resolveWildEncounter,
  type Encounter,
} from "./encounter";
import type { BadgeBoosts } from "./run";

export type RouteStep =
  | { kind: "encounter"; id: string; encounter: Encounter; optional: boolean }
  | { kind: "badge"; id: string; badge: keyof BadgeBoosts }
  | { kind: "evolve"; id: string; species: string }
  | { kind: "rareCandy"; id: string }
  | { kind: "choice"; id: string; options: RouteOption[] }
  | { kind: "calcsFor"; id: string };

export interface RouteOption {
  value: string;
  label: string;
  steps: RouteStep[];
}

export type RouteTree = RouteStep[];

export function parseRouteTree(ast: Node): RouteTree {
  function walkSteps(nodes: Node[]): RouteStep[] {
    const steps: RouteStep[] = [];
    for (const node of nodes) {
      if (node.type !== "tag") {
        steps.push(...walkSteps(node.children ?? []));
        continue;
      }
      const attrs = (node.attributes ?? {}) as Record<string, unknown>;
      switch (node.tag) {
        case "trainer-encounter": {
          const encounter = resolveTrainerEncounter(
            attrs.trainerId as string,
            (attrs.slot as number) ?? 0,
          );
          if (encounter) {
            steps.push({
              kind: "encounter",
              id: `${attrs.trainerId}-${attrs.slot ?? 0}`,
              encounter,
              optional: (attrs.optional as boolean) ?? false,
            });
          }
          break;
        }
        case "wild-encounter": {
          const encounter = resolveWildEncounter(
            attrs.species as string,
            attrs.level as number,
          );
          if (encounter) {
            steps.push({
              kind: "encounter",
              id: attrs.id as string,
              encounter,
              optional: (attrs.optional as boolean) ?? false,
            });
          }
          break;
        }
        case "badge":
          steps.push({
            kind: "badge",
            id: `badge-${attrs.id}`,
            badge: attrs.id as keyof BadgeBoosts,
          });
          break;
        case "evolve":
          steps.push({
            kind: "evolve",
            id: `evolve-${attrs.into}`,
            species: attrs.into as string,
          });
          break;
        case "rare-candy":
          steps.push({
            kind: "rareCandy",
            id: attrs.id as string,
          });
          break;
        case "choice": {
          const options: RouteOption[] = [];
          for (const child of node.children ?? []) {
            if (child.type === "tag" && child.tag === "option") {
              const childAttrs = (child.attributes ?? {}) as Record<
                string,
                unknown
              >;
              options.push({
                value: childAttrs.value as string,
                label: childAttrs.label as string,
                steps: walkSteps(child.children ?? []),
              });
            }
          }
          steps.push({
            kind: "choice",
            id: attrs.id as string,
            options,
          });
          break;
        }
        case "calcs":
          if (attrs.id) {
            steps.push({ kind: "calcsFor", id: attrs.id as string });
          }
          steps.push(...walkSteps(node.children ?? []));
          break;
        case "calcs-for":
          steps.push({
            kind: "calcsFor",
            id: attrs.id as string,
          });
          break;
        default:
          steps.push(...walkSteps(node.children ?? []));
      }
    }
    return steps;
  }

  return walkSteps(ast.children ?? []);
}
