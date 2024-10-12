import BusinessSolutions2 from "@/components/businessSolution2";
import Expertise from "@/components/expertise";
import Footer from "@/components/foooter";
import Header from "@/components/header";
import OtherHeros from "@/components/otherHeros";
import OurBusiness from "@/components/ourBusiness";
import OurDedication from "@/components/ourDedication";
import Thrive from "@/components/thriving";
import React from "react";

const BusinessSolutions = () => {
  return (
    <div>
      <Header />
      <OtherHeros
        title="Business Digital Solutions"
        image="/assets/Our-Team5.png"
      />
      <Expertise />
      <Thrive />
      <BusinessSolutions2 />
      <OurDedication />
      <OurBusiness
        titleOne="_DIVE INTO THE WORLD OF POSSIBILITIES_"
        titleTwo="Unlock Your Business Potential — Free Consultation Awaits!"
        text="Dive into a world of possibilities with our expert business consulting services. Uncover pathways to growth and innovation you hadn’t even considered yet."
      />
      <Footer />
    </div>
  );
};

export default BusinessSolutions;
