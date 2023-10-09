import {Flex, Card, Box, Heading, VStack, Stack, Text, Avatar} from '@chakra-ui/react'
import { Link } from "react-router-dom";

import MessageChat from '../components/messages/MessageChat';
import { useEffect, useState } from 'react';

function Messages() {
    

    const profile_data=[{
        profile_id:1,
        name: "Josh Smosh",
        title: "Software Engineer",
        education: "Studied Computer Science at UCLA",
        employment: "Researching at Rochester Institute of Technology and Interning at Netflix",
        years: "2 Years",
        skills: ['Programming', 'AI', 'Mentoring']
      },
      {
        profile_id: 2,
        name: "Frank Smosh",
        title: "Chemist",
        education: "Studied Computer Science at UCLA",
        employment: "Researching at Rochester Institute of Technology and Interning at Netflix",
        years: "2 Years",
        skills: ['Programming', 'AI', 'Mentoring']
      },
      {
        profile_id: 12,
        name: "Bron Bon",
        title: "Chemist",
        education: "Studied Computer Science at CSUF",
        employment: "Researching at Rochester Institute of Technology and Interning at Netflix",
        years: "3 Years",
        skills: ['Programming', 'AI', 'Mentoring']
      }
    ]
    
    const [selectedProfileId, setSelectedProfileId] = useState(profile_data[0].profile_id)
    const [userProfileId, setUserProfileId] = useState(profile_data[2].profile_id)
    const [isLoading, setIsLoading] = useState(false)
    const initMessages = () => new Promise((resolve, reject) => {
        resolve([profile_data[0], profile_data[2]])
    });

    useEffect(()=> {
        let isUnmounted = false;
        initMessages().then( response => {
            if(isUnmounted){
                return;
            }
            // console.log(response)
            setSelectedProfileId(response[0].profile_id)
            setUserProfileId(response[1].profile_id)
            setIsLoading(false)
        })
        return () => {
            isUnmounted = true;
        }  
    }, [])

    function fetchMessageData(e, data){
        setSelectedProfileId(data.profile_id)
    }

    useEffect(() => {
    }, [selectedProfileId])
  
      
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        maxW='100%'
        mt='30px'
    >
        
        { isLoading ?  <div>Loading Page...</div> :
        <Flex spacing='10'>
            <VStack flex={3} align='left' ml='30px' mt='30px' mb='30px'>
                {
                    profile_data.map(profile=>{
                        if(profile.profile_id != userProfileId){
                   
                            return (
                                <div className="messageUserCard" id={profile.profile_id} key={profile.profile_id}>
                                    <Link onClick={(e) => fetchMessageData(e,profile)} to={`/messages/${profile.profile_id}`}>
                                        <Stack direction='row' mt="10px" mb="10px">
                                            <Avatar
                                            size='lg'
                                            name='Prosper Otemuyiwa'
                                            src='https://bit.ly/prosper-baba'
                                            className=''
                                            />{''}
                                            <Box>
                                                <Heading alight='right' size='sm'>{profile.name}</Heading>
                                                <Text fontSize='xs'>{profile.title}</Text>
                                            </Box>
                                        </Stack>
                                    </Link>
                                    <hr />
                                </div>
                            );
                        }
                    })
                }          
            </VStack>
            <MessageChat 
                selected_profile_id={selectedProfileId}
                user_profile_id={userProfileId}
            />
        </Flex>
        }
    </Card>
    )
}

export default Messages;
