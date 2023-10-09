import ProjectPageTitle from "./ProjectPageTitle";
export default function ProjectDescription({ projectDescription = null }) {
    return (
    <div className="w-full  flex flex-col items-start">
      <ProjectPageTitle title={"Project Description"} />
      {/* body */}
      <div className="text-left text-[18px]">
        {!projectDescription ? (
          <LoremIpsum p={3} className="" />
        ) : (
          projectDescription
        )}
      </div>
    </div>
  );
}
