import { LoremIpsum } from "react-lorem-ipsum";

export default function AboutUsOrganization({ aboutUsDescription = null }) {
  return (
    <div className="bg-gray-100 w-[850px] h-auto px-[40px] py-[10px] text-[18px] shadow-md rounded-lg flex items-center justify-center">
      {/*  */}
        {!aboutUsDescription ? <LoremIpsum p={2} /> : aboutUsDescription}
 
    </div>
  );
}
