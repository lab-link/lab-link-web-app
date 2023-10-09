import Linebreaker from "./linebreaker";

export default function OrganizerCard({clientsName="clientsName",clientsPosition="clientsPosition"}) {
  //with the id get the avatar, clientsName, and clientsPosition.
    return (
    <div className="flex flex-col items-start  w-[450px]">
      <div className="text-[32px]">Organizer</div>
      <Linebreaker/>
      <div className="flex my-[10px] space-x-3">
        <div className="bg-gray-400 h-[80px] w-[80px] rounded-[50px]">user</div>
        <div className="flex flex-col items-start">
          <div className="text-[24px] font-semibold">{clientsName}</div>
          <div className="text-[24px] underline font-light">{clientsPosition}</div>
        </div>
      </div>
    </div>
  );
}
