import Footer from "@/components/foooter";
import Header from "@/components/header";
import ProfileExp from "@/components/profileExp";
import ProfileSingle from "@/components/profileSingle";
import TeamForm from "@/components/teamForm";
import { benAll, benProfile } from "@/utils/data";
import React from "react";

const Benjamin = () => {
  return (
    <div>
      <Header />
      {benProfile?.map((items, index) => {
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
      {benAll?.map((items, index) => {
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

export default Benjamin;
