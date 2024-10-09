"use client";
import styled from "styled-components";
import { Tab } from "@chakra-ui/react";

const CustomStyledTab = styled(Tab)`
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  flex-direction: column;
  line-height: 1;
  color: #222;
  font-family: unset;
  font-size: 16px;
  transition: all 0.8s ease;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  border-radius: 10px;

  &:hover {
    border: 1px solid #bc24f1;
  }

  &[aria-selected="true"] {
    color: #fff !important;
    background-color: #0c003a;
    border-bottom: 1px solid #bc24f1;
  }
`;

export default CustomStyledTab;
