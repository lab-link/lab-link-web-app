import ApplicationInfo from "./components/applicationInfo";
import OrganizerCard from "./components/organizerCard";
import PreferredExperience from "./components/preferredExperience";
import ProjectDescription from "./components/projectDescription";
import ProjectPositionCard from "./components/projectPositionCard";
import RoleDescription from "./components/roleDescription";

export default function ProjectDetails({id=null}) {
  
    /**
     * TODO, fetch the data from the backend with the id
     * that is used to store the details of the project.
     */
    return (
    //project header
    <div className="flex flex-col py-[25px] px-[50px] space-y-3">
      <div className="flex justify-between">
        <ProjectPositionCard />
        <OrganizerCard />
      </div>
      <ProjectDescription />
      <RoleDescription />
      <PreferredExperience />
      <ApplicationInfo />
    </div>
  );
}
