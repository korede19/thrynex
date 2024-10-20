import BusinessSolutions from "@/components/businessSolution";
import Footer from "@/components/foooter";
import Header from "@/components/header";
import Navigate from "@/components/navigate";
import OtherHeros from "@/components/otherHeros";
import OurBusiness from "@/components/ourBusiness";
import PartnerUs from "@/components/partner";
import Pledge from "@/components/pledge";
import React from "react";

const Consultation = () => {
  return (
    <div>
      <Header />
      <OtherHeros
        title="Business Consultation Services"
        image="/assets/teambanner.png"
      />
      <Navigate />
      <PartnerUs />
      <BusinessSolutions />
      <Pledge />
      <OurBusiness
        titleOne="_DIVE INTO THE WORLD OF POSSIBILITIES_"
        titleTwo="Unlock Your Business Potential — Free Consultation Awaits!"
        text="Dive into a world of possibilities with our expert business consulting services. Uncover pathways to growth and innovation you hadn’t even considered yet."
      />
      <Footer />
    </div>
  );
};

export default Consultation;
