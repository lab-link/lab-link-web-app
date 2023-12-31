import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";

import { useAuth } from "../../context/auth.jsx";
import Signup from "../../pages/auth/signup.jsx";
import Login from "../../pages/auth/login.jsx";
// Create separate components for each page

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GiChemicalTank } from "react-icons/gi";
import Landing from '../../pages/landing.jsx'

import Messages from "./../../pages/messages.jsx"
import Profile from "../../pages/profile.jsx";
import MarketPlace from "../../pages/marketplace/marketplace.jsx";
import ProjectDetails from '../../pages/projectDetails/projectDetails.jsx';
import Organization from '../../pages/organization/organization.jsx';

function NavBar() {
  const auth = useAuth();

  auth.currentUser;

  <Signup />;
  return (
    <Stack direction='row'>
    <Router>
      <Tabs isLazy>
        <TabList>
          {protectedNav() ? (
                <>
          <Tab as={Link} to="/landing">
            <GiChemicalTank className="w-[50px] h-[50px]" />
            <a
              href=""
              className="font-bold   text-[32px] hover:underline hover:text-black"
            >
              LAB LINK
            </a>
          </Tab>
          <Tab as={Link} to="/messages/:id">Messages</Tab>
          <Tab as={Link} to="/marketplace">Marketplace</Tab>
          <Tab as={Link} to="/profile" onClick={() => setKey(Date.now())}>Profile</Tab> 
          <Button onClick={()=>{auth.logout()}}>Sign Out</Button>
          </>
            ) : (
              <></>
            )}
        </TabList>
        {protectedNav() ? (
        <TabPanels>
          <Routes>
              <Route path="/landing" element={<Landing/>}></Route>
              <Route path="/messages/:id" element={<Messages/>}></Route>
              <Route path="/marketplace" element={<MarketPlace/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/projectDetails/:projectId" element={<ProjectDetails/>}/>
              <Route path="/organization/:organizationId" element={<Organization/>}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </TabPanels>
        ) : (auth.isUserSignIn ? (
          <Login />
        ) : (
          <Signup />
        ))}
      </Tabs>
    </Router>
    </Stack>
  );
}

export default NavBar;

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (auth.currentUser !== null) {
    console.log("logged in user:" + auth.currentUser);
    return children ? children : <Outlet />;
  }
  return <Navigate to="/signup" />;
};
const protectedNav = () => {
  const auth = useAuth();
  return auth.currentUser !== null;
};
