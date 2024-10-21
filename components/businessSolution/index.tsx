"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import { tabsHeadOne, tabsPannelOne } from "@/utils/data";
import TabSingle from "../tabsSingle";
import CustomStyledTab from "@/styles/tabstyles";
import StyledTabList from "@/styles/tablist";

const BusinessSolutions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleTabChange = (index: number) => {
    setTransitioning(true);
    setSelectedIndex(index);
    setTimeout(() => setTransitioning(false), 300);
  };

  return (
    <div className={styles.pgContain}>
      <div className={styles.contain}>
        <h6>_WHAT WE OFFER_</h6>
        <h2>Unified Business Solutions</h2>
        <p>
          Harness our full spectrum of consultation to strengthen your
          operational efficiency and market presence.
        </p>
      </div>

      <div className={styles.allTabs}>
        <Tabs
          onChange={handleTabChange}
          index={selectedIndex}
          isLazy
          variant="enclosed"
        >
          <StyledTabList>
            {tabsHeadOne?.map((items, index) => (
              <CustomStyledTab key={index}>
                <div className={styles.iconBox}>{items.icon}</div>
                <p className={styles.tabsText}>{items.title}</p>
              </CustomStyledTab>
            ))}
          </StyledTabList>
          <TabPanels>
            {tabsPannelOne?.map((items, index) => (
              <TabPanel
                key={index}
                className={`${styles.tabPanel} ${
                  transitioning ? styles.slideOut : styles.slideIn
                }`}
              >
                <TabSingle
                  image={items.image}
                  title={items.title}
                  index={index}
                  text={items.text}
                  text2={items.text2}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessSolutions;
