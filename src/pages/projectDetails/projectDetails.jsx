import ApplicationInfo from "./components/applicationInfo";
import OrganizerCard from "./components/organizerCard";
import PreferredExperience from "./components/preferredExperience";
import ProjectDescription from "./components/projectDescription";
import ProjectPositionCard from "./components/projectPositionCard";
import RoleDescription from "./components/roleDescription";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import fetchProject from "../../api/marketplace/fetchProject";
import fetchOrganization from "./../../api/organization/fetchOrganization";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState({});
  const [org, setOrg] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(projectId);
    fetchProject(projectId)
      .then((data) => {
        console.log(data);
        setProjectData(data);
        setLoading(false);
        fetchOrganization(projectId).then(response=>{
          setOrg(response)
        })
      })
      .catch((err) => {
        console.error("Error loading project details: ", err);
      });
  }, []);
  //   const history = useHistory();
  /**
   * TODO, fetch the data from the backend with the id
   * that is used to store the details of the project.
   */
  // use projectId to fetch the data from the API.
  console.log("id is:" + projectId);
  return (
    //project header
    <div>
      {loading === true ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col py-[25px] px-[50px] space-y-3">
          <div className="flex justify-between">
            {/* <div onClick={this.context.router.history.goBack}> go back</div> */}
            <ProjectPositionCard
              position={projectData.project_tasks}
              organization={projectData.projects_tasks}
              organizationId={projectData.organization_id}
              org={org}
            />
            <OrganizerCard
              clientsName={projectData.project}
              clientsPosition={projectData.project_email}
            />
          </div>
          <ProjectDescription
            projectDescription={projectData.project_description}
          />
          <RoleDescription
            position={projectData.projects_tasks}
            jobDescription={projectData.project_tasks}
          />
          <PreferredExperience
            preferredGroups={projectData.project_targeted_groups}
          />
          <ApplicationInfo />
        </div>
      )}
    </div>
  );
}
