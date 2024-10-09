import Footer from "@/components/foooter";
import Header from "@/components/header";
import Integrate from "@/components/integrate";
import Mission from "@/components/mission";
import OtherHeros from "@/components/otherHeros";
import Partners from "@/components/partners";
import Teams from "@/components/team";
import Testimonials from "@/components/testimonials";
import React from "react";

const About = () => {
  return (
    <div>
      <Header />
      <OtherHeros title="About Company" image="/assets/About-Company.webp" />
      <Partners />
      <Mission />
      <Integrate />
      <Teams />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
