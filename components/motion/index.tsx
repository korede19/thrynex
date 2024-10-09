// MotionTabPanel.tsx
import React, { forwardRef } from "react";
import { TabPanel, TabPanelProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Create a motion-enhanced TabPanel
const MotionTabPanel = motion(TabPanel);

// Use forwardRef to properly forward refs
const CustomMotionTabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  (props, ref) => {
    return (
      <MotionTabPanel
        ref={ref}
        initial={{ x: 100, opacity: 0 }} // Starting position and opacity
        animate={{ x: 0, opacity: 1 }} // Final position and opacity
        exit={{ x: -100, opacity: 0 }} // Exit animation
        transition={{ duration: 0.5 }} // Animation duration
        {...props} // Spread the rest of the props
      />
    );
  }
);

// Set display name for debugging
CustomMotionTabPanel.displayName = "CustomMotionTabPanel";

export default CustomMotionTabPanel;
