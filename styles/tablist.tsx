"use client";
import styled from "styled-components";
import { TabList as ChakraTabList } from "@chakra-ui/react";

// Increase specificity by creating a styled component
const StyledTabList = styled(ChakraTabList)`
  display: grid !important; // Use !important if needed
  gap: 20px;
  grid-template-columns: repeat(6, 1fr); // Use repeat for clarity

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important; // Ensures it switches to 1 column on smaller screens
  }
`;

export default StyledTabList;
