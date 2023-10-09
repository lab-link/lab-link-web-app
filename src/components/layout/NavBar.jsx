import React from 'react';
import { Tabs, TabList, Tab, TabPanels, Flex, Text, Box, Stack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GiChemicalTank } from "react-icons/gi";
import Landing from '../../pages/landing.jsx'

import Messages from "./../../pages/messages.jsx"
import Profile from "../../pages/profile.jsx"
import MarketPlace from "../../pages/marketplace/marketplace.jsx";
import ProjectDetails from '../../pages/projectDetails/projectDetails.jsx';
import Organization from '../../pages/organization/organization.jsx';
// Create separate components for each page

function NavBar() {
  return (
    <Stack direction='row'>
        <GiChemicalTank className="w-[50px] h-[50px]" />
        {/* <SlChemistry className="w-[50px] h-[50px]"/> */}
        <a
          href=""
          className="font-bold   text-[32px] hover:underline hover:text-black"
        >
          LAB LINK
        </a>
    <Router>
      <Tabs isLazy>
        <TabList>
          <Tab as={Link} to="/landing">Landing</Tab>
          <Tab as={Link} to="/messages/:id">Messages</Tab>
          <Tab as={Link} to="/marketplace">Marketplace</Tab>
          <Tab as={Link} to="/profile">Profile</Tab>
        </TabList>
        <TabPanels>
          <Routes>
              <Route path="/landing" element={<Landing/>}/>
              <Route path="/messages/:id" element={<Messages/>}></Route>
              <Route path="/marketplace" element={<MarketPlace/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/projectDetails/:projectId" element={<ProjectDetails/>}/>
              <Route path="/organization/:organizationId" element={<Organization/>}/>
          </Routes>
        </TabPanels>
      </Tabs>
    </Router>
    </Stack>
  );
}

export default NavBar;
