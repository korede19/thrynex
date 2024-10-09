import BusinessSolutions from "@/components/businessSolution";
import Footer from "@/components/foooter";
import Header from "@/components/header";
import Navigate from "@/components/navigate";
import OtherHeros from "@/components/otherHeros";
import PartnerUs from "@/components/partner";
import React from "react";

const Consultation = () => {
  return (
    <div>
      <Header />
      <OtherHeros
        title="Business Consultation Services"
        image="/assets/About-Company.webp"
      />
      <Navigate />
      <PartnerUs />
      <BusinessSolutions />
      <Footer />
    </div>
  );
};

export default Consultation;
