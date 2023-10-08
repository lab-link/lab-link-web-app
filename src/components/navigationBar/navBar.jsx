// import {goBeaker} from '@chakra-ui/icons'
import { useState } from "react";
import { SlChemistry } from "react-icons/sl";
import { GiChemicalTank } from "react-icons/gi";
import NavBarButton from "../buttons/navBarButton.jsx"
export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState();
  function test(){
    console.log('his')
  }
  return (
    <div className="w-[1080px] h-[50px] bg-white flex  justify-between items-center px-[40px]">
      <div className="flex">
        <GiChemicalTank className="w-[50px] h-[50px]" />
        {/* <SlChemistry className="w-[50px] h-[50px]"/> */}
        <a
          href=""
          className="font-bold   text-[32px] hover:underline hover:text-black"
        >
          LAB LINK
        </a>
      </div>
      <hr />
      {/* nav bar buttons */}

      <div className="flex justify-evenly space-x-3 h-full">
        <NavBarButton text={"Messages"} isSelected={false}/>
        <NavBarButton text={"Marketplace"} isSelected={false}/>
        <NavBarButton text={"Profile"} isSelected={false}/>
      </div>
    </div>
  );
}
