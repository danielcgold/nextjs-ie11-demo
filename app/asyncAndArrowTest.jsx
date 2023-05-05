import React from "react";
import { useEffect, useState } from "react";

// IE11 polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

import { asyncFunc, arrowFunc } from "../utils";

function AsyncAndArrowTest() {
  const [asyncResult, setAsyncResult] = useState("");
  const [arrowResult, setArrowResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const asyncResult = await asyncFunc();
      setAsyncResult(asyncResult);
      setArrowResult(arrowFunc());
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Testing Transpilation for IE11</h1>
      <div>
        <strong>Async function result:</strong> {asyncResult}
      </div>
      <div>
        <strong>Arrow function result:</strong> {arrowResult}
      </div>
    </div>
  );
}

export default AsyncAndArrowTest;
