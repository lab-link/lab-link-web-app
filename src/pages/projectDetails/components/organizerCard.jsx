import Linebreaker from "./linebreaker";
import { faker } from "@faker-js/faker";
import { Image } from "@chakra-ui/react";
export default function OrganizerCard({
  clientsName = "clientsName",
  clientsPosition = "clientsPosition",
}) {
  //with the id get the avatar, clientsName, and clientsPosition.
  return (
    <div className="flex flex-col items-start  w-[450px]">
      <div className="text-[32px]">Organizer</div>
      <Linebreaker />
      <div className="flex my-[10px] space-x-3">
        <div className="bg-gray-400 h-[80px] w-[80px] rounded-[50px]">
          <Image
            objectFit="cover"
            borderRadius="full"
            maxW={{ base: "25%", sm: "80px" }}
            src={faker.image.avatar()}
            alt={""}
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="text-[24px] font-semibold">{faker.person.fullName()}</div>
          <div className="text-[24px] underline font-light">
            {faker.person.jobTitle()}
          </div>
        </div>
      </div>
    </div>
  );
}
