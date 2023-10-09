import { Link } from "react-router-dom";
import {Avatar} from "@chakra-ui/react"

export default function JobPositionCard({
  jobTitle = "Job Title",
  companyName = "company Name",
  avatar = null,
  routeDirectory = null,
  projectId=null,
  imageUrl
}) {
  return (
    <div className="w-[350px] h-[160px] bg-white hover:shadow-xl hover:cursor-pointer shadow-md rounded-2xl flex items-center justify-start px-[20px] space-x-2">
      <Link to={`/projectDetails/${projectId}`}>
      <Avatar
      size="lg"
      name={jobTitle}
      src={imageUrl}
      >

      </Avatar>
      <div className="flex flex-col items-start">
        <div className="text-[15px] font-semibold">{jobTitle}</div>
        <div className="text-[12px] font-light">{companyName}</div>
      </div>
      </Link>
    </div>
  );
}
