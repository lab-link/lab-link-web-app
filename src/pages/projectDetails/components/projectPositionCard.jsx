import Linebreaker from "./linebreaker";

export default function ProjectPositionCard({position="position", organization="organization"}){
    return <div className="flex flex-col items-start w-[450px]">
        <div className="text-[32px]">
            Project Position
        </div>
        <Linebreaker/>
        <div className="text-[24px] font-semibold">{position}</div>
        <div className="text-[24px] font-light">{organization}</div>
    </div>
}