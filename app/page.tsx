import AboutThrynex from "@/components/about";
import Benefits from "@/components/benefits";
import Counter from "@/components/counter";
import Footer from "@/components/foooter";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import OtherOffers from "@/components/otherOffers";
import Strategy from "@/components/strategy";
import Teams from "@/components/team";
import Testimonials from "@/components/testimonials";
import Vision from "@/components/vision";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutThrynex />
      <Offers />
      <Benefits />
      <Strategy />
      <Teams />
      <Counter />
      <Vision />
      <OtherOffers />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
