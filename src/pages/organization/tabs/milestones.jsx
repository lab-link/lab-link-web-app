import MilestoneCard from "../components/milestoneCard";
import { LoremIpsum } from "react-lorem-ipsum";

export default function Milestones({ milestonesList }) {
  // -use the design from the profile page.
  // also a modal component can be a good idea
  // because people only want to see the success
  // of the company quickly.

  // -
  //
  //
  return (
    <div className="flex justify-center">
      {/* <JobPositionCard /> */}
      <MilestoneCard
        photoURL={
          "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        }
        photoAlt={"Caffe Latte"}
        milestoneTitle={"Produced Oxygen on Mars"}
        description={<LoremIpsum p={1}/>}
      />
    </div>
  );
}
