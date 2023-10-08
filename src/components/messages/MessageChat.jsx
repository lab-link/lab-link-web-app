import {Flex,  InputGroup, Input, InputLeftElement, Button, VStack, Stack, Text, Avatar} from '@chakra-ui/react'
import "./../../styles/message.css"
import React, { useState, useEffect } from 'react';
import getCurrentDateTime from './../../utils/DateUtil'


function MessageChat(props){
    const [profileId, setProfileId] = useState(props.user_profile_id)
    const [selectedProfileId, setSelectedProfileId] = useState(props.selected_profile_id)
    const [messagesArr, setMessagesArr] = React.useState([
        {   
            messageId: 1,
            messageData: "Hey",
            authorId: 12,
            userSenderId: 12,
            userRecipientId: 1,
            timestamp: '2023-12-02 10:08:20.0'
        },
        {   
            messageId: 231,
            messageData: "Hey",
            authorId: 1,
            userSenderId: 1,
            userRecipientId: 12,
            timestamp: '2023-12-02 10:08:20.0'
        },
        {   
            messageId: 21,
            authorId: 12,
            messageData: "Hedy",
            userSenderId: 12,
            userRecipientId: 1,
            timestamp: '2023-12-02 10:08:20.1'
        },
        {
            messageId: 2,
            authorId: 1,
            messageData: "The quick brown fox jumps over the lazy dog is an English-language pangram—a",
            isRecipient: false,
            userSenderId: 21,
            userRecipientId: 1,
            timestamp: '2023-12-02 10:08:21.0'
        },
        {
            messageId: 3,
            authorId: 23,
            messageData: "The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all of the letters of the English alphabet. Owing to its existence, Chakra was created",
            isRecipient: true,
            userSenderId: 23,
            userRecipientId: 12,
            timestamp: '2023-12-02 10:09:20.0'
        },
        {
            messageId: 4,
            authorId: 2,
            messageData: "ok",
            userSenderId: 2,
            userRecipientId: 12,
            timestamp: '2023-12-02 10:10:20.0'
        },
        {
            messageId: 5,
            authorId: 12,
            messageData: "cool",
            userSenderId: 2,
            userRecipientId: 12,
            timestamp: '2023-12-02 10:10:24.0'
        },
    ]) 

    const [value, setValue] = React.useState('')
    let messageId = 3232


    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    function sendMessage(){
      
        if(value !== ''){
            const newMessage = {
                messageId: messageId+=1, messageData:value, 
                authorId: profileId,
                userSenderId:profileId,
                userRecipientId: selectedProfileId,
                timestamp: getCurrentDateTime()
            }
            var joined = messagesArr.concat(newMessage);
            setMessagesArr(joined)

            // console.log(this.state.messagesArr)
            setValue('')
        }

    }
    useEffect(() => {
        console.log("test")
        if (props) {
            setProfileId(props.user_profile_id);
            setSelectedProfileId(props.selected_profile_id)
        }
      }, [profileId, selectedProfileId])

    return (
        <Flex flex={7} height="80%" className="message-chat">
                { profileId === undefined ? <div>Loading Component...</div> :
                <VStack mt="20px" mb="20px">
                    {
                        messagesArr.map((message) => {
                            console.log("message-chat - selectedProfileId: "+  selectedProfileId + " profileId: " + profileId)
                            if((message.userRecipientId == profileId && message.userSenderId == selectedProfileId) || 
                                (message.userSenderId == profileId && message.userRecipientId == selectedProfileId)){
                                let added_style = ''
                                console.log("userProfileId: " + profileId + " usesrSenderId: " + message.userSenderId + " userREcipient: " + message.userRecipientId)

                                if( profileId == message.authorId){
                                    console.log("HIT")
                                    added_style ='message-box--sender';
                                }
                                return (<Text key={message.messageId} className={`message-box ${added_style}`} ml='20px'>{message.messageData}</Text>);
                            }
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
                } 
        </Flex>
    );
}

export default MessageChat;