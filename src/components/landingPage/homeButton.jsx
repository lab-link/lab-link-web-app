import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { GiChemicalTank } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./../../styles/landing.css"

function homeButton() {
    
  return (
      <Box width="200px" height="200px" display="flex" alignt='center' className='landing-button'>
        <Link to="/marketplace">
          <Button width="auto" height="100px" variant='link' colorScheme="black">
            <GiChemicalTank className="w-[30px] h-[30px]" />
              View Research Projects
          </Button>
        </Link>
      </Box>
  );
}

export default homeButton;
