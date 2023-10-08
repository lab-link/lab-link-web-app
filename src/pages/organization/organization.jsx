import OrganizationBanner from "./components/OrganizationBanner";
import AboutUsOrganization from "./tabs/aboutUsOrganization";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Stack,
} from "@chakra-ui/react";
import Jobs from "./tabs/jobs";
import Milestones from "./tabs/milestones";

export default function Organization() {
  return (
    <div className="flex flex-col h-[1000px] space-y-3 py-[20px]">
      <OrganizationBanner />
      <Tabs align="center">
        <TabList>
          <Tab>About Us</Tab>
          <Tab>Jobs</Tab>
          <Tab>Milestones</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AboutUsOrganization />
          </TabPanel>
          <TabPanel>
            <Jobs/>
          </TabPanel>
          <TabPanel>
            <Milestones/>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </div>
  );
}
