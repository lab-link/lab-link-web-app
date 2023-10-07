// import {goBeaker} from '@chakra-ui/icons'
import { useState } from "react";
export default function NavBar() {
  const [selectedTab, setSelectedTa] = useState();
  return (
    <div className="bg-red-400 w-[1080px] flex  justify-between items-center px-[40px]">
      <div className="font-bold text-[32px] "> LAB LINK</div>

      {/* nav bar buttons */}
      <div className="flex justify-evenly">
        <div id="navBarButton">button 1</div>
        <div id="navBarButton">button 2</div>
        <div id="navBarButton">button 3</div>
      </div>
    </div>
  );
}
