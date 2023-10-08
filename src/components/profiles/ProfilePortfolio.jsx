import { Card, Image, CardBody, Heading, CardFooter, VStack, Stack, Text, Box, Avatar} from '@chakra-ui/react'

import './../../styles/profile.css'
function ProfilePortfolio(){
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                <Heading mb="10px" size='sm'>Software Engineer</Heading>
                <div className="profile-portfolio-content">
                    <ul>
                        <li>Creating data drive pipelines that will bulk copy from satellites.</li>
                        <li>Developed microservices for several scientist's needs</li>
                    </ul>
                </div>
                </CardBody>
            </Stack>
        </Card>
    );
}

export default ProfilePortfolio;