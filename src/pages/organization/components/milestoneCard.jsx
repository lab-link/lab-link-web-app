import {
  Card,
  Image,
  CardBody,
  Heading,
  Stack,
} from "@chakra-ui/react";

export default function MilestoneCard({
  photoURL,
  photoAlt,
  milestoneTitle,
  description,
  briefDescription,
}) {
  return (
    <Card
      className="max-w-[800px] max-h-[200px]"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={photoURL}
        alt={photoAlt}
      />
      <Stack>
        <CardBody>
          <Heading mb="10px" size="sm">
            {milestoneTitle}
          </Heading>
          <p>{description}</p>
        </CardBody>
      </Stack>
    </Card>
  );
}
