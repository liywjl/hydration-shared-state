import React, { useEffect, useState } from "react";

import { emitter } from "./sharedData";

export const App1 = () => {
  const [count, setCount] = useState<undefined | number>();

  console.log("App1 is rendered");
  useEffect(() => {
    const listener = emitter.on("foo", console.log);
    return () => emitter.off(listener);
  }, [setCount]);

  return (
    <>
      <h1>App2</h1>
      {count && <p>{count}</p>}
    </>
  );
};
