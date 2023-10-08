import {
  Card,
  Image,
  CardBody,
  Heading,
  CardFooter,
  VStack,
  Stack,
  Text,
  Box,
  Avatar,
} from "@chakra-ui/react";

import "./../../styles/profile.css";
function ProfilePortfolio(props) {
  return props.institution_data.map((ele, i) => {
    return (
      <Card
        key={ele.institution_id}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={ele.image_url}
          alt="Caffe Latte"
        />
        <Stack
          style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            boxShadow: "0px 0px 10px #eee",
          }}
        >
          <CardBody>
            <Heading
              mb="20px"
              size="sm"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              {ele.institution_name} - {ele.institution_position}
            </Heading>

            <div
              className="profile-portfolio-content"
              style={{ lineHeight: "1.6" }}
            >
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {ele.institution_accomplishments
                  .split(".")
                  .filter((sentence) => sentence.trim() !== "")
                  .map((sentence, i) => {
                    return <li key={i}>{sentence.trim()}.</li>;
                  })}
              </ul>
            </div>
          </CardBody>
        </Stack>
      </Card>
    );
  });
}

export default ProfilePortfolio;
