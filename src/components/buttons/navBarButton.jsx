export default function NavBarButton({
  text,
  routeDirectory,
  isSelected = false,
}) {
  return (
    <div
      className={`${
        isSelected ? "bg-[#F7FAFC]" : "bg-white"
      } h-full flex flex-col items-start`}
    >
      <div className="grow"></div>
      {/* text element */}
      <div
        className={`${
          isSelected ? "font-bold" : ""
        } w-full flex hover:font-bold items-center justify-center`}
      >
        {text}
      </div>
      {/* bottom bar */}

      <div className="grow"></div>

      {isSelected ? (
        <div className="h-[3px] w-full bg-[#3182CE]"/>
      ) : (
        <></>
      )}
    </div>
  );
}
