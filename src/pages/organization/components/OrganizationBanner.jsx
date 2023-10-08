export default function OrganizationBanner({avatarURL = null}) {
  return (
    <div className="bg-gray-100 w-[850px] h-[300px] px-[40px] shadow-md rounded-lg flex items-center justify-between">
      {/*  */}
      <div className="text-[74px] ">NASA</div>
      <div className="w-[200px] h-[200px] bg-green-300 rounded-[100px]">{!avatarURL ? <>avatar</>: avatarURL}</div>
    </div>
  );
}
