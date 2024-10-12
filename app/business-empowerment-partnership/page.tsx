import EmpowermentStrategy from "@/components/empowermentStrategy";
import Footer from "@/components/foooter";
import Header from "@/components/header";
import OtherBenefits from "@/components/otherBenefits";
import OtherHeros from "@/components/otherHeros";
import OurBusiness from "@/components/ourBusiness";
import OurCommitment from "@/components/ourCommitment";
import Overview from "@/components/overview";
import React from "react";

const BusinessEmpowerment = () => {
  return (
    <div>
      <Header />
      <OtherHeros
        title="Business Empowerment and Partnership"
        image="/assets/busines.png"
      />
      <Overview />
      <OtherBenefits />
      <EmpowermentStrategy />
      <OurCommitment />
      <OurBusiness
        titleOne="_DIVE INTO THE WORLD OF POSSIBILITIES_"
        titleTwo="Explore Professional Insights with Our Complimentary Consultation"
        text="Unlock your business’s potential with ThryNex – your guide to innovative solutions and strategic partnerships."
      />
      <Footer />
    </div>
  );
};

export default BusinessEmpowerment;
