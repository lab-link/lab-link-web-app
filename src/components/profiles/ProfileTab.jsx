import { useEffect, useState } from "react";
import {
  Card,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  VStack,
  Text,
  Box,
  Avatar,
  Heading,
} from "@chakra-ui/react";

import ProfileAboutMe from "./ProfileAboutMe.jsx";
import ProfilePortfolio from "./ProfilePortfolio.jsx";
import fetchUserProfile from "../../api/profile/fetchProfile.jsx";
import fetchProfileInstitutions from "../../api/institution/fetchInstitution.jsx";

function ProfileTab() {
  const [profileData, setProfileData] = useState({});
  const [institutionData, setInstitutionData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const profileId = 1;
  useEffect(() => {
    fetchUserProfile(profileId)
      .then((profile_data) => {
        setProfileData(profile_data);
        return fetchProfileInstitutions(profileId);
      })
      .then((institution_data) => {
        setInstitutionData(institution_data);
      })
      .then(setIsLoading(false))
      .catch((err) => {
        console.error("Error fetching profile data:", err);
      });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt="30px"
    >
      <Flex spacing="10">
        <VStack spacing={3} align="center" ml="30px" mt="30px" mb="30px">
          <Avatar
            size="lg"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
            className="profile-avatar"
          />
          {""}
          <Box>
            <Heading size="sm">
              {profileData.firstname} {profileData.lastname}
            </Heading>
            <Text fontSize="xs">{profileData.title}</Text>
          </Box>
        </VStack>
        <Tabs ml="60px" mt="60px">
          <TabList>
            <Tab>About Me</Tab>
            <Tab>Profile Portfolio</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ProfileAboutMe
                profile_data={profileData}
                institution_data={institutionData.filter(
                  (ele, i) =>
                    (ele.institution_type === "University") &
                    (ele.is_currently_attending === true)
                )}
              />
            </TabPanel>
            <TabPanel>
              <ProfilePortfolio
                portfolio_data={profileData}
                institution_data={institutionData.filter(
                  (ele, i) =>
                    (ele.institution_type === "Employer") &
                    (ele.is_currently_attending === false)
                )}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Card>
  );
}

export default ProfileTab;
