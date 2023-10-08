import { useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar.jsx";
import Organization from "./pages/organization/organization";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-full">
      {/* <NavBar/>       */}
      <Organization/>
    </div>
  );
}

export default App;
