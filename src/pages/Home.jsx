import React from "react";
import Slider from "../components/Slider";
import Card from "../components/Card";
import GroupCard from "../components/GroupCard/GroupCard";
import ScrollingCards from "../components/ScrollingCards/ScrollingCards";

const Home = () => {
  return (
    <>
      <Slider />

      <Card />
      <GroupCard />
      <ScrollingCards />
    </>
  );
};

export default Home;
