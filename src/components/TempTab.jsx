import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"; // Assuming you're using Chakra UI
import MarketPlace from "./../pages/marketplace";
import ModelViewer from "./../modelComponents/ModelViewer";
import { Box } from '@chakra-ui/react';
class TempTab extends React.Component {
  render() {
    return (
      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Tab>Market Place</Tab>
          <Tab>Landing Page</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <MarketPlace />
          </TabPanel>
          <TabPanel>
            <div className='landing-page-model'>
            <ModelViewer scale="40" modelPath={"/scene.glb"} />
            </div>
         

          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
}

export default TempTab;