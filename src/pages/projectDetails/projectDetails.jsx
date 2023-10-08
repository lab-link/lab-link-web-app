import ApplicationInfo from "./components/applicationInfo";
import OrganizerCard from "./components/organizerCard";
import PreferredExperience from "./components/preferredExperience";
import ProjectDescription from "./components/projectDescription";
import ProjectPositionCard from "./components/projectPositionCard";
import RoleDescription from "./components/roleDescription";
import { useParams, } from "react-router-dom";
export default function ProjectDetails() {
  const { projectId } = useParams();
//   const history = useHistory();
  /**
   * TODO, fetch the data from the backend with the id
   * that is used to store the details of the project.
   */
  // use projectId to fetch the data from the API.
  console.log("id is:" + projectId);
  return (
    //project header
    <div className="flex flex-col py-[25px] px-[50px] space-y-3">
      <div className="flex justify-between">
        {/* <div onClick={this.context.router.history.goBack}> go back</div> */}
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
