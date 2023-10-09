import OrganizationBanner from "./components/OrganizationBanner";
import AboutUsOrganization from "./tabs/aboutUsOrganization";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchOrganization from "../../api/organization/fetchOrganization";
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
  const { projectId } = useParams();
  const [organizationData, setOrganizationData] = useState({});
  const [loading, setLoading] = useState(true);
  
  console.log(projectId)
  useEffect(() => {
    fetchOrganization(projectId)
      .then((data) => {
        setOrganizationData(data);
        console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading organization details: ", err);
      });
  }, []);

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
