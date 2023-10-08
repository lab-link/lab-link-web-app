import ProjectPageTitle from "./ProjectPageTitle";
import { Button, Stack } from '@chakra-ui/react'
import {LiaDownloadSolid} from 'react-icons/lia'
import {PiNotePencilLight} from 'react-icons/pi'
// to search from react icons: download, write.
export default function ApplicationInfo() {
  return (
    <div className="flex flex-col items-start space-y-2">
      <ProjectPageTitle title={"Application Info"} />
      {/* flex buttons "Upload your resume" "additional info" */}
      {/* empty box space */}

      <Stack direction={'row'} spacing={1}>
        <Button  className="shadow-md" leftIcon={<LiaDownloadSolid/>}>Upload your resume</Button>
        <Button  className="shadow-md" leftIcon={<PiNotePencilLight/>}>Additional documents</Button>
      </Stack>
      <textarea rows="5" cols="100" placeholder="Enter a brief description about yourself."/>
      {/* button for "Submit Application" */}
      <div className="flex items-start">

      <Button colorScheme="twitter" className="shadow-md">Submit Application</Button>
      </div>
    </div>
  );
}
