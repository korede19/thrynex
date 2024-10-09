import AboutTeam from "@/components/aboutTeam";
import Footer from "@/components/foooter";
import Header from "@/components/header";
import OtherHeros from "@/components/otherHeros";
import Teams from "@/components/team";
import React from "react";

const OurTeams = () => {
  return (
    <div>
      <Header />
      <OtherHeros title="Our Team" image="/assets/teams.png" />
      <AboutTeam />
      <Teams />
      <Footer />
    </div>
  );
};

export default OurTeams;
