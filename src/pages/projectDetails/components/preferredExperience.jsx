import { Tag, TagLabel, HStack } from "@chakra-ui/react";
import ProjectPageTitle from "./ProjectPageTitle";
export default function PreferredExperience() {
  // Data to fetch here.
  // Tags for preferred experience in the job position.
  return (
    <div className="flex flex-col items-start">
      <ProjectPageTitle title={"Preferred Experience"} />
      <div className="flex">
        {" "}
        <HStack spacing={1}>
          <Tag colorScheme="green">
            <TagLabel>Linux</TagLabel>
          </Tag>
          <Tag colorScheme="green">Farm Computing</Tag>
          <Tag colorScheme="green">
            <TagLabel>Pasteurization Regresion</TagLabel>
          </Tag>
          <Tag colorScheme="green">
            <TagLabel>Cow Milking Analysis</TagLabel>
          </Tag>
          <Tag colorScheme="green">
            <TagLabel>Crypto mining</TagLabel>
          </Tag>
        </HStack>
      </div>
    </div>
  );
}
