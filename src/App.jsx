import { useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar.jsx";
import {BrowserRouter,Router} from "react-router-dom"
import ProjectDetails from "./pages/projectDetails/projectDetails";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-full">
      
      <NavBar/>      
    </div>
  );
}

export default App;
