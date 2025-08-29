import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [aura, setAura] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>IMSss + POSsss</h1>
      <div className="card">
        <button onClick={() => setAura((aura) => aura + 1)}>
          aura is {aura}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Date Time created: 08/29/2025 6:47PM</p>
      </div>
      <p className="read-the-docs">I changed thisS</p>
    </>
  );
}

export default App;
