import { CardBody, Stack, Heading, Text, Badge } from "@chakra-ui/react";
import "./../../styles/profile.css";

function ProfileAboutMe(props) {
  const color_arr = [
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
    "linkedin",
    "facebook",
    "messenger",
    "whatsapp",
    "twitter",
    "telegram",
  ];
  const get_color = (i) => {
    let arr_len = color_arr.length;
    let rand_num = Math.floor(i % arr_len);
    return color_arr[rand_num];
  };
  return (
    <Stack ml="40px">
      <CardBody className="profile-about-data">
        <Heading size="s">Education</Heading>
        <Text py="1">{props.institution_data[0].institution_name}</Text>
        <Heading mt="10px" size="s">
          Employment
        </Heading>
        <Text py="1">{props.profile_data.employment}</Text>
        <Heading mt="10px" size="s">
          Years of Experience
        </Heading>
        <Text py="1">{props.profile_data.years_of_experience}</Text>
        <Heading mt="10px" size="s">
          Skills
        </Heading>
        <Stack direction="row">
          {props.profile_data.skills.split(",").map((skill, i) => (
            <Badge key={i} colorScheme={get_color(i)}>
              {skill.trim()}
            </Badge>
          ))}
        </Stack>
      </CardBody>
    </Stack>
  );
}
export default ProfileAboutMe;
