import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

//create your first component

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-sm">
        <Jumbotron />
        <Card />
      </div>
    </div>
  );
};

export default Home;
