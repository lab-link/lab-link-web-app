import { useState } from "react";
import React, { Suspense } from "react";
import "./App.css";

import ModelViewer from "./modelComponents/ModelViewer";

function App() {
  return (
    <div >
      <div className="">
        <ModelViewer scale="40" modelPath={"/scene.glb"} />
      </div>
    </div>
  );
}

export default App;
