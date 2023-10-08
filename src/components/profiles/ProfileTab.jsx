import { Card, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, VStack, Text, Box, Avatar, Heading} from '@chakra-ui/react'

import ProfileAboutMe  from "./ProfileAboutMe.jsx";
import ProfilePortfolio from './ProfilePortfolio.jsx';

function ProfileTab() {

    const profile_data={
        name: "Josh Smosh",
        title: "Software Engineer",
        education: "Studied Computer Science at UCLA",
        employment: "Researching at Rochester Institute of Technology and Interning at Netflix",
        years: "2 Years",
        skills: ['Programming', 'AI', 'Mentoring']
      }

    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        mt='30px'
    >
        <Flex spacing='10'>
                <VStack spacing={3} align='center' ml='30px' mt='30px' mb='30px'>
                    <Avatar
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                    className='profile-avatar'
                    />{''}
                    <Box>
                        <Heading size='sm'>Joshua Bosh</Heading>
                        <Text fontSize='xs'>Software Engineer</Text>
                    </Box>
                </VStack>
                <Tabs ml="60px" mt='60px'>  
                    <TabList>
                        <Tab>About Me</Tab>
                        <Tab>Profile Portfolio</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ProfileAboutMe profile_data={profile_data}/>
                        </TabPanel>
                        <TabPanel>
                            <ProfilePortfolio/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
        </Flex>
    </Card>
    );
}

export default ProfileTab;