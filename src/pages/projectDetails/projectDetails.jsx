import ApplicationInfo from "./components/applicationInfo";
import OrganizerCard from "./components/organizerCard";
import PreferredExperience from "./components/preferredExperience";
import ProjectDescription from "./components/projectDescription";
import ProjectPositionCard from "./components/projectPositionCard";
import RoleDescription from "./components/roleDescription";

export default function ProjectDetails() {
  return (
    //project header
    <div className="flex flex-col">
      <div className="flex">
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
