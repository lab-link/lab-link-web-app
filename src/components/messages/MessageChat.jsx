import {Flex, CardBody, TabList, Tab, TabPanels, TabPanel, Image, Card, Box, Heading, CardFooter, VStack, Stack, Text, Avatar} from '@chakra-ui/react'


function MessageChat(){
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        mt='30px'
        >  
            <CardBody>
                <Text>Hello</Text>
            </CardBody>
        </Card>
    )
}

export default MessageChat;