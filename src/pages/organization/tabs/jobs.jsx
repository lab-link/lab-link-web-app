import JobPositionCard from "../../../components/cards/jobPositionCard";

export default function Jobs({ jobsList = null }) {
  //TODO: bring the card from market place
  //and reuse it here
  return (
    <div className="grid grid-cols-2 gap-y-2 ">
      <JobPositionCard />
      <JobPositionCard />
      <JobPositionCard />
      <JobPositionCard />
      <JobPositionCard />
    </div>
  );
}
