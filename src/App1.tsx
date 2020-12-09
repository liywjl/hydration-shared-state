import React, { useEffect } from "react";

import { emitter } from "./sharedData";

export const App1 = () => {
  console.log("App1 is rendered");
  useEffect(() => {
    const listener = emitter.on("foo", console.log);
    return () => emitter.off(listener);
  });
  return <h1>App1</h1>;
};
