import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { GiChemicalTank } from "react-icons/gi";
import { Link } from "react-router-dom";
function homeButton() {
    
  return (
    
      <Box width="200px" height="200px" display="flex">
        <Link to="/marketplace">
          <Button width="300px" height="100px" colorScheme="green">
            <GiChemicalTank className="w-[30px] h-[30px]" />
            Enter Lab Links
          </Button>
        </Link>
      </Box>
  );
}

export default homeButton;
