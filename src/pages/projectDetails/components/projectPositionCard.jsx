import Linebreaker from "./linebreaker";
import { Link } from "react-router-dom";
import {faker} from "@faker-js/faker"

export default function ProjectPositionCard({position="position", organization="organization"}){
    // TODO: fetch api data for the position and organization
    return <div className="flex flex-col items-start w-[450px]">
        <div className="text-[32px]">
            Project Position
        </div>
        <Linebreaker/>
        <div className="text-[24px] font-semibold">{faker.person.jobTitle()}</div>
        <Link to={"/organization/223332"}>
                  {/* <JobPositionCard /> */}
                  <div className="text-[24px] font-light hover:cursor-pointer hover:underline">{faker.company.buzzPhrase()}</div>
                </Link>
        {/* <div className="text-[24px] font-light hover:cursor-pointer hover:underline">{organization}</div> */}
    </div>
}