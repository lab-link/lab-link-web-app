import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Stack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GiChemicalTank } from "react-icons/gi";

import Profile from "../../pages/profile.jsx"
import Marketplace from "./../../pages/marketplace.jsx"

// Create separate components for each page
const Home = () => <Box p={4}>Home Page Content</Box>;
const Contact = () => <Box p={4}>Contact Page Content</Box>;

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
          <Tab as={Link} to="/messages">Messages</Tab>
          <Tab as={Link} to="/marketplace">Marketplace</Tab>
          <Tab as={Link} to="/profile">Profile</Tab>
        </TabList>
        <TabPanels>
          <Routes>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/marketplace" element={<Marketplace/>}/>
              <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </TabPanels>
      </Tabs>
    </Router>
    </Stack>
  );
}

export default NavBar;
