import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navigationBar/navBar.jsx";
import MarketPlace from "./pages/marketplace";
import Profile from "./pages/profiles";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-full">
      {/* <MarketPlace /> */}
      <Profile/>
      
    </div>
  );
}

export default App;
