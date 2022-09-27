import React, { useCallback, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

function App() {
  const handleClick = useCallback(async () => {
    const res = await fetch("https://api.npms.io/v2/search?q=react");
    const data = await res.json();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
