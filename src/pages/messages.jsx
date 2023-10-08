import {Flex, Card, Box, Heading, VStack, Stack, Text, Avatar,
    InputGroup, Input, InputLeftElement, Button
} from '@chakra-ui/react'
import React, { useState } from 'react';

import MessageChat from '../components/messages/MessageChat';
import getCurrentDateTime from '../utils/DateUtil';

function Messages() {
    const [messagesArr, setMessagesArr] = React.useState([
        {
            text: "Hey",
            isRecipient: false,
            timestamp: '2023-12-02 10:08:20.0'
        },
        {
            text: "The quick brown fox jumps over the lazy dog is an English-language pangram—a",
            isRecipient: false,
            timestamp: '2023-12-02 10:08:21.0'
        },
        {
            text: "The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all of the letters of the English alphabet. Owing to its existence, Chakra was created",
            isRecipient: true,
            timestamp: '2023-12-02 10:09:20.0'
        },
        {
            text: "ok",
            isRecipient: false,
            timestamp: '2023-12-02 10:10:20.0'
        },
        {
            text: "cool",
            isRecipient: true,
            timestamp: '2023-12-02 10:10:24.0'
        },
    ]) 

    const profile_data={
        name: "Josh Smosh",
        title: "Software Engineer",
        education: "Studied Computer Science at UCLA",
        employment: "Researching at Rochester Institute of Technology and Interning at Netflix",
        years: "2 Years",
        skills: ['Programming', 'AI', 'Mentoring']
      }
    const [isMessageSent, setIsMessageSent] = React.useState(false)
    const [value, setValue] = React.useState('')

    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    function sendMessage(){
      
        console.log('value: ', value)
        if(value !== ''){
            var joined = messagesArr.concat({text: value, isRecipient: false, timestamp: getCurrentDateTime()});
            setMessagesArr(joined)

            // console.log(this.state.messagesArr)
            setValue('')
        }

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
            <Flex flex={7} height="80%" className="message-chat">
                <VStack mt="20px" mb="20px">
                    {
                        messagesArr.map((message) => {
                            let added_style = message.isRecipient == false ? 'message-box--sender' : '';
                            return (<Text key={message.timestamp} className={`message-box ${added_style}`} ml='20px'>{message.text}</Text>);
                        })
                    }
                    <InputGroup size='md' width="95%">
                        <InputLeftElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={sendMessage}>
                                Send
                            </Button>
                        </InputLeftElement>
                        <Input
                            pl='100px'
                            placeholder='Send Message'
                            value={value}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </VStack>
            </Flex>
        </Flex>
    </Card>
    )
}

export default Messages;