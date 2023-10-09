import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Flex,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { GiChemicalTank } from "react-icons/gi";
import Messages from "./../../pages/messages.jsx";
import Profile from "../../pages/profile.jsx";
import MarketPlace from "../../pages/marketplace/marketplace.jsx";
import ProjectDetails from "../../pages/projectDetails/projectDetails.jsx";
import Organization from "../../pages/organization/organization.jsx";
import { useAuth } from "../../context/auth.jsx";
import Signup from "../../pages/auth/signup.jsx";
// Create separate components for each page

function NavBar() {
  const auth = useAuth();

  auth.currentUser;

  <Signup />;
  return (
    <Stack direction="row">
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
            {protectedNav() ? (
              <>
                <Tab as={Link} to="/messages/:id">
                  Messages
                </Tab>
                <Tab as={Link} to="/marketplace">
                  Marketplace
                </Tab>
                <Tab as={Link} to="/profile">
                  Profile
                </Tab>
              </>
            ) : (
              <></>
            )}
          </TabList>
          {/* protecting the route. */}
          {protectedNav() ? (
            <TabPanels>
              <Routes>
                <Route path="/messages/:id" element={<Messages />}></Route>
                <Route path="/marketplace" element={<MarketPlace />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Signup />} />
                {/* define the login page. */}
                <Route
                  path="/projectDetails/:projectId"
                  element={<ProjectDetails />}
                />
                <Route
                  path="/organization/:organizationId"
                  element={<Organization />}
                />
              </Routes>
            </TabPanels>
          ) : (
            <Signup />
          )}
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
