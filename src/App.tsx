import { useCallback } from "react";

import { worker } from "./mocks/browser";
worker.start();

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
