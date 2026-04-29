import { useState, useEffect } from "react";

const DEFAULT_ROUTE = "/routes/frlg-anypct-squirtle.mdoc";

type RouteState =
  | { status: "loading" }
  | { status: "ready"; content: string }
  | { status: "error"; message: string };

export function useRoute(): RouteState {
  const [state, setState] = useState<RouteState>({ status: "loading" });

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("route");
    const url = param ?? DEFAULT_ROUTE;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.text();
      })
      .then((content) => setState({ status: "ready", content }))
      .catch((err) =>
        setState({
          status: "error",
          message: param
            ? `Could not load route from "${param}": ${err.message}`
            : `Could not load default route: ${err.message}`,
        }),
      );
  }, []);

  return state;
}
