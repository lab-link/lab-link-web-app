import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";
export default function FilterBox({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-[200px] h-auto flex flex-col bg-white rounded-sm items-start py-[5px] px-[5px] shadow-md">
      {/* title */}
      <div className="w-full flex justify-between items-center">
        <div onClick={onToggle} className="text-[20px] hover:cursor-pointer">
          {title}
        </div>
        <div onClick={onToggle} className="hover:cursor-pointer">
          {/* button */}
          {isExpanded ? (
            <MdOutlineKeyboardArrowDown className="h-[30px] w-[30px]" />
          ) : (
            <MdOutlineKeyboardArrowRight className="h-[30px] w-[30px]" />
          )}
        </div>
      </div>
      {/* child components of the section */}
      {isExpanded ? <div>{children}</div> : <></>}
    </div>
  );
}
