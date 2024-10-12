import Footer from "@/components/foooter";
import Header from "@/components/header";
import ProfileExp from "@/components/profileExp";
import ProfileSingle from "@/components/profileSingle";
import TeamForm from "@/components/teamForm";
import { emmaAll, emmaProfile } from "@/utils/data";
import React from "react";

const Emmanuel = () => {
  return (
    <div>
      <Header />
      {emmaProfile?.map((items, index) => {
        return (
          <ProfileSingle
            key={index}
            image={items.image}
            fullName={items.fullName}
            position1={items.position1}
            position2={items.position2}
            expertise={items.expertise}
            responsibility={items.responsibility}
            email={items.email}
            phone={items.phone}
            link={items.link}
          />
        );
      })}
      {emmaAll?.map((items, index) => {
        return (
          <ProfileExp
            key={index}
            titleOne={items.titleOne}
            titleTwo={items.titleTwo}
            titleThree={items.titleThree}
            textOne={items.textOne}
            textTwo={items.textTwo}
            textThree={items.textThree}
          />
        );
      })}
      <TeamForm />
      <Footer />
    </div>
  );
};

export default Emmanuel;
