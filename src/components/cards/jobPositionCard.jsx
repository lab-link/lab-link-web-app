export default function JobPositionCard({
  jobTitle = "Job Title",
  companyName = "company Name",
  avatar = null,
  routeDirectory = null,
}) {
  return (
    <div className="w-[350px] h-[160px] bg-white hover:shadow-xl hover:cursor-pointer shadow-md rounded-2xl flex items-center justify-start px-[20px] space-x-2">
      {/* avatar */}
      <div className="w-[100px] h-[100px] rounded-[50px] bg-green-300">
        {avatar}
      </div>
      <div className="flex flex-col items-start">
        <div className="text-[20px] font-semibold">{jobTitle}</div>
        <div className="text-[20px] font-light">{companyName}</div>
      </div>
    </div>
  );
}
