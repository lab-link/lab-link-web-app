import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import FilterBox from "../../components/filters/filterBox.jsx";
import JobPositionCard from "../../components/cards/jobPositionCard.jsx";
import OrganizationFilterChildComponent from "./components/organizationFilterChildComponent.jsx";
import ProjectTypeFilterChildComponent from "./components/projectTypeFilterChildComponent.jsx";
import WorkTypeFilterChildComponent from "./components/workTypeFilterChildComponent.jsx";
import StartDateFilterChildComponent from "./components/StartDateFilterChildComponent.jsx";
import fetchProjects from "../../api/marketplace/fetchProjects.jsx";

export default function MarketPlace() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    // Fetch projects from your backend or API
    fetchProjects()
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project data: ", err);
      });
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const displayedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const maxVisiblePages = 10;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="h-full w-full py-[25px] flex flex-col items-center">
      {/* Title */}
      <div className="flex flex-col items-start">
        <div className="font-bold text-[36px]">MARKETPLACE</div>
        {/* Main body */}
        <div className="flex items-center justify-center flex-col space-y-2 w-auto h-auto">
          {/* Search bar */}
          <div className="w-[600px] bg-white rounded-md">
            <Input placeholder="Search for Projects..." />
          </div>
          <div className="flex space-x-5">
            {/* Filters */}
            <div className="flex flex-col items-start">
              <div className="text-[32px]">Filters</div>
              <div className="flex flex-col space-y-3">
                <FilterBox
                  title={"Organization"}
                  children={<OrganizationFilterChildComponent />}
                />
                {/* Include other filter components as needed */}
              </div>
            </div>
            {/* Job listings */}
            <div className="flex flex-col items-start">
              <div className="text-[32px]">Results</div>
              <div className="text-[16px]">{projects.length} Listings</div>
              <div style={{ padding: "12px" }} />
              <div className="flex flex-col space-y-3">
                {/* <Link to={"/projectDetails/123"}> */}
                {loading === true ? (
                  <div>Loading...</div>
                ) : (
                  displayedProjects.map((project, i) => (
                    <JobPositionCard
                      key={i}
                      jobTitle={project.projects_tasks}
                      companyName={project.project_owners}
                      projectId={i + 1} // Use a unique identifier here
                      imageUrl=""
                    />
                  ))
                )}
              </div>
              {/* Pagination */}
              <div className="flex justify-center mt-4">
                <ul className="flex space-x-2">
                  {pageNumbers.slice(0, maxVisiblePages).map((pageNumber) => (
                    <li
                      key={pageNumber}
                      className={`cursor-pointer ${
                        currentPage === pageNumber ? "font-bold" : ""
                      }`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
