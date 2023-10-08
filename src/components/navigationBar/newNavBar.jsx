import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Create separate components for each page
const Home = () => <Box p={4}>Home Page Content</Box>;
const About = () => <Box p={4}>About Page Content</Box>;
const Contact = () => <Box p={4}>Contact Page Content</Box>;

function newNavBar() {
  return (
    <Router>
      <Tabs isLazy>
        <TabList>
          <Tab as={Link} to="/">Home</Tab>
          <Tab as={Link} to="/about">About</Tab>
          <Tab as={Link} to="/contact">Contact</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Router>
  );
}

export default Navbar;
