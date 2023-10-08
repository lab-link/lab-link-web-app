import React from 'react';
import { Tabs, TabList, Tab, TabPanels, Flex, Text, Box, Stack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GiChemicalTank } from "react-icons/gi";

import Messages from "./../../pages/messages.jsx"
import Profile from "../../pages/profile.jsx"
import MarketPlace from "../../pages/marketplace/marketplace.jsx";
// Create separate components for each page

function NavBar() {
  return (
    <Stack direction='row'>
      {/* <Box>
      <GiChemicalTank className="w-[50px] h-[50px]" />   
        <Text>LAB LINK</Text>
      </Box> */}
      <Router>
        <Tabs>
          <TabList>
            <Stack direction='row'>
              <GiChemicalTank className="w-[50px] h-[50px]" />   
              <p>LAB LINK</p>
            </Stack>
            <Tab as={Link} to="/profile">Profile</Tab>
            <Tab as={Link} to="/messages">Messages</Tab>
            <Tab as={Link} to="/marketplace">Marketplace</Tab>
          </TabList>
          <TabPanels>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/marketplace" element={<MarketPlace/>}/>
            </Routes>
          </TabPanels>
        </Tabs>
      </Router>
    </Stack>
  );
}

export default NavBar;
