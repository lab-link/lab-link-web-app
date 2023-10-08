import { useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar.jsx";
import Signup from "./pages/auth/signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-full">
      {/* <NavBar /> */}
      <Signup/>
    </div>
  );
}

export default App;
