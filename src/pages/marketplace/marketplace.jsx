import { Input } from "@chakra-ui/react";
import FilterBox from "../../components/filters/filterBox.jsx";
import JobPositionCard from "../../components/cards/jobPositionCard.jsx";
import OrganizationFilterChildComponent from "./components/organizationFilterChildComponent.jsx";
import ProjectTypeFilterChildComponent from "./components/projectTypeFilterChildComponent.jsx";
import WorkTypeFilterChildComponent from "./components/workTypeFilterChildComponent.jsx";
import StartDateFilterChildComponent from "./components/StartDateFilterChildComponent.jsx";

export default function MarketPlace() {
  //TODO bring the UI for the marketplace.
  return (
    <div className="h-full w-full py-[25px] flex flex-col items-center">
      {/* title */}
      <div className="flex flex-col items-start">
        <div className="font-bold text-[36px]">MARKETPLACE</div>
        {/* main body */}
        <div className="flex items-center justify-center flex-col space-y-2 w-auto h-auto">
          {/* search bar */}
          <div className=" w-[600px] bg-white rounded-md">
            <Input placeholder="Search for Projects..." />
          </div>
          <div className="flex space-x-5">
            {/* filters */}
            <div className="flex flex-col items-start">
              <div className="text-[32px]">Filters</div>
              <div className="flex flex-col space-y-3">
                <FilterBox
                  title={"Organization"}
                  children={<OrganizationFilterChildComponent />}
                />
                {/* <FilterBox
                  title={"Project Type"}
                  children={<ProjectTypeFilterChildComponent/>}
                />
                <FilterBox
                  title={"Work Type"}
                  children={<WorkTypeFilterChildComponent/>}
                />
                <FilterBox
                  title={"Start Date"}
                  children={<StartDateFilterChildComponent/>}
                /> */}
              </div>
            </div>
            {/* job offers */}
            <div className="flex flex-col items-start">
              <div className="text-[32px]">Results</div>
              <div className="flex flex-col space-y-3">
                {/* <Link to={"/projectDetails/123"}> */}
                  {/* { */}
                    <JobPositionCard
                      jobTitle="Software Engineer"
                      companyName="Johnson Space Center"
                      projectId={123}
                    />
                  {/* } */}
                {/* </Link> */}
                <JobPositionCard
                  jobTitle="Software Engineer"
                  companyName="Johnson Space Center"
                  projectId={233}
                />
                <JobPositionCard projectId={23323} />
                <JobPositionCard projectId={23123} />
                <JobPositionCard projectId={2332} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
