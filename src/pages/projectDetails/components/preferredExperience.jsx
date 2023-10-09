import { Tag, TagLabel, HStack } from "@chakra-ui/react";
import ProjectPageTitle from "./ProjectPageTitle";
export default function PreferredExperience({ preferredGroups = null }) {
  console.log(preferredGroups.length);
  return (
    <div className="flex flex-col items-start">
      <ProjectPageTitle title={"Preferred Demographic"} />
      <div className="flex">
        {" "}
        <HStack spacing={1}>
          {preferredGroups.length > 0 ? (
            preferredGroups.split(",").map((group, i) => {
              return (
                <Tag key={i} colorScheme="green">
                  <TagLabel>{group}</TagLabel>
                </Tag>
              );
            })
          ) : (
            <div></div>
          )}
        </HStack>
      </div>
    </div>
  );
}
