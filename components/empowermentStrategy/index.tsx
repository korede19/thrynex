"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import { tabsHeadTwo, tabsPannelTwo } from "@/utils/data";
import TabSingle from "../tabsSingle";
import CustomStyledTab from "@/styles/tabstyles";
import StyledTabList from "@/styles/tablist";

const EmpowermentStrategy = () => {
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
        <h2>Specialized Empowerment Strategies</h2>
        <p>
          We are specialist in elevating businesses through strategic
          partnerships and advanced digital solutions, fostering sustainable
          growth and competitive prowess.
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
            {tabsHeadTwo?.map((items, index) => (
              <CustomStyledTab key={index}>
                <div className={styles.iconBox}>{items.icon}</div>
                <p className={styles.tabsText}>{items.title}</p>
              </CustomStyledTab>
            ))}
          </StyledTabList>
          <TabPanels>
            {tabsPannelTwo?.map((items, index) => (
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

export default EmpowermentStrategy;
