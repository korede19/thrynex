"use client";
import styled from "styled-components";
import { TabList as ChakraTabList } from "@chakra-ui/react";

// Increase specificity by creating a styled component
const StyledTabList2 = styled(ChakraTabList)`
  display: grid !important;
  gap: 20px;
  grid-template-columns: repeat(7, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important; // Ensures it switches to 1 column on smaller screens
  }
`;

export default StyledTabList2;
