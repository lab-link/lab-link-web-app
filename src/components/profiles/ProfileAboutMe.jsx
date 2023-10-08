import { CardBody, Stack, 
    Heading, Text,  Badge } from '@chakra-ui/react'

import './../../styles/profile.css'

function ProfileAboutMe(props){
    return (
        <Stack ml='40px'>
        <CardBody className='profile-about-data'>
            <Heading size='s'>Education</Heading>
            <Text py='1'>
                {props.profile_data.education}
            </Text>
            <Heading mt='10px' size='s'>Exmployment</Heading>
            <Text py='1'>
                {props.profile_data.employment}
            </Text>
            <Heading mt='10px' size='s'>Years of Experience</Heading>
            <Text py='1'>
                {props.profile_data.years}
            </Text>
            <Heading mt='10px' size='s'>Skills</Heading>
            <Stack direction='row'>
                <Badge colorScheme='green'>Programming</Badge>
                <Badge colorScheme='red'>AI</Badge>
                <Badge colorScheme='purple'>Mentoring</Badge>
            </Stack>
        </CardBody>
    </Stack>
    );
}
export default ProfileAboutMe;