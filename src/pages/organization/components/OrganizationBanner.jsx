import { Image } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import {BsBuildings} from "react-icons/bs"
export default function OrganizationBanner({avatarURL = null}) {
  return (
    <div className="bg-gray-100 w-[850px] h-[300px] px-[40px] shadow-md rounded-lg flex items-center justify-between">
      {/*  */}
      <div className="text-[74px] max-w-[550px] text-left">{faker.company.buzzPhrase(1)}</div>
      <div className="w-[200px] h-[200px] bg-gray-300 rounded-[100px] flex items-center justify-center">{
        <BsBuildings className="w-[100px] h-[100px] text-gray-400"/>
      }</div>
    </div>
  );
}
