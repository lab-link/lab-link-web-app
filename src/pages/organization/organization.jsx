import OrganizationBanner from "./components/OrganizationBanner";
import AboutUsOrganization from "./components/aboutUsOrganization";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Stack,
} from "@chakra-ui/react";

export default function Organization() {
  return (
    <div className="flex flex-col h-[1000px] space-y-3">
      Organization
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
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </div>
  );
}
