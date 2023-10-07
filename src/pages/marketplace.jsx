import { Input } from "@chakra-ui/react";
import FilterBox from "../components/filters/filterBox.jsx";
import JobPositionCard from "../components/cards/jobPositionCard.jsx";
export default function MarketPlace() {
  //TODO bring the UI for the marketplace.
  return (
    <div className="h-full w-full bg-[#C5C5C5] flex flex-col items-center">
      {/* title */}
      <div className="flex flex-col items-start">
        <div className="font-bold text-[36px]">MARKETPLACE</div>
        {/* main body */}
        <div className="flex items-center justify-center flex-col space-y-2 w-auto h-auto">
          {/* search bar */}
          <div className=" w-[600px] bg-green-300">
            <Input placeholder="Search for positions ..." />
          </div>
          <div className="flex space-x-5">
            {/* filters */}
            <div className="flex flex-col items-start">
              <div className="text-[32px]">Filters</div>
              <div className="flex flex-col space-y-3">
                <FilterBox />
                <FilterBox />
                <FilterBox />
                <FilterBox />
              </div>
            </div>
            {/* job offers */}
            <div className="flex flex-col items-start">
              <div className="text-[32px]">Results</div>
              <div className="flex flex-col space-y-3">
                <JobPositionCard />
                <JobPositionCard />
                <JobPositionCard />
                <JobPositionCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
