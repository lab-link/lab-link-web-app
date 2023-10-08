import ProjectPageTitle from "./ProjectPageTitle";
import { LoremIpsum } from "react-lorem-ipsum";
export default function RoleDescription({
  position = "job position",
  jobDescription = null,
}) {
  return (
    <div className="w-full  flex flex-col items-start">
      <div className="flex flex-col space-y-0 items-start">
        <ProjectPageTitle title={"Role Description"} />
        <div className="font-light text-[24px]">position</div>
      </div>
      {/* body */}
      <div className="text-left text-[18px]">
        {!jobDescription ? <LoremIpsum p={3} className="" /> : jobDescription}
      </div>
    </div>
  );
}
