import React, { useState } from "react";
import Main from "./components/Main";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <div
      className="App"
    >
      <Main setProgress={setProgress} />
      <LoadingBar height={3} color="#30C1C9" progress={progress} />
    </div>
  );
}

export default App;
