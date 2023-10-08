import {Flex, SimpleGrid, Tabs, TabList, Tab, TabPanels, TabPanel, Image, Card, Box, Heading, CardFooter, VStack, Stack, Text, Avatar} from '@chakra-ui/react'

import MessageChat from '../components/messages/MessageChat';

function Messages() {
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
        maxW='100%'
        mt='30px'
    >
        <Flex spacing='10'>
            <VStack flex={3} align='left' ml='30px' mt='30px' mb='30px'>
                <Stack direction='row'>
                    <Avatar
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                    className=''
                    />{''}
                    <Box>
                        <Heading alight='right' size='sm'>Joshua Bosh</Heading>
                        <Text fontSize='xs'>Software Engineer</Text>
                    </Box>
                </Stack>
                <hr />
                <Stack direction='row'>
                    <Avatar
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                    className=''
                    />{''}
                    <Box>
                        <Heading alight='right' size='sm'>Joshua Bosh</Heading>
                        <Text fontSize='xs'>Software Engineer</Text>
                    </Box>
                </Stack>
                <hr />             
            </VStack>
            <MessageChat/>
        </Flex>
    </Card>
    )
}

export default Messages;