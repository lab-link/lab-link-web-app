import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { Image } from "@chakra-ui/react";
export default function JobPositionCard({
  jobTitle = "Job Title",
  companyName = "company Name",
  avatar = null,
  routeDirectory = null,
  projectId = null,
}) {
  return (
      <Link to={`/projectDetails/${projectId}`}>
    <div className="w-[350px] h-[160px] bg-white hover:shadow-xl hover:cursor-pointer shadow-md rounded-2xl flex items-center justify-start px-[20px] space-x-2">
      {/* avatar */}
        <div className="w-[100px] h-[100px] rounded-[50px] bg-green-300">
          
          <Image
            objectFit="cover"
            borderRadius='full'
            maxW={{ base: "25%", sm: "100px" }}
            src={faker.image.avatar()}
            alt={""}
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="text-[20px] font-semibold">{faker.person.jobTitle()}</div>
          <div className="text-[20px] font-light">{faker.company.buzzPhrase()}</div>
        </div>
    </div>
      </Link>
  );
}
