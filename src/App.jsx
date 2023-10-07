import { useState } from "react";
// import React, { Suspense } from "react";
// import "./App.css";

// import ModelViewer from "./modelComponents/ModelViewer";
import TempTab from "./components/TempTab";
// function App() {
//   return (
//     <div >
      
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import NavBar from "./components/navigationBar/navBar.jsx";
// import MarketPlace from "./pages/marketplace";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-full ">
      <TempTab/>
    </div>
  );
}

export default App;
