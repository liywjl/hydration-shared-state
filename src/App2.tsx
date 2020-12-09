import React, { useEffect, useState } from "react";

import { emitter } from "./sharedData";

export const App2 = () => {
  const [count, setCount] = useState<undefined | number>();

  console.log("App2 is rendered");
  useEffect(() => {
    const listener = emitter.on("foo", setCount);
    return () => emitter.off(listener);
  }, [setCount]);

  return (
    <>
      <h1>App2</h1>
      {count && <p>{count}</p>}
    </>
  );
};
