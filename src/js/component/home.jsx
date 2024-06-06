import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

const data = [
  {
    title: "Donec ac lorem neque",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Curabitur blandit rhoncus facilisis. Maecenas faucibus sit amet risus vel blandit. Aliquam vel elementum lectus, vitae tempus felis.",
  },
  {
    title: "Fusce id gravida lacu",
    image:
      "https://images.unsplash.com/photo-1550686041-366ad85a1355?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      " Maecenas a ex quis libero condimentum commodo. Maecenas pretium molestie lorem, et pharetra quam aliquet eu. Integer placerat viverra porttitor.",
  },
  {
    title: "Nam quis consectetur tortor",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Nunc quis urna nisl. Nulla in turpis vitae libero malesuada rutrum. Quisque sit amet imperdiet ligula, in tincidunt dui.",
  },
  {
    title: "Donec ac lorem neque",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Curabitur blandit rhoncus facilisis. Maecenas faucibus sit amet risus vel blandit. Aliquam vel elementum lectus, vitae tempus felis.",
  },
];
//create your first component

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-sm">
        <Jumbotron />
        <div class="row justify-content-center gap-3">
          {data.map((item, index) => (
            <Card
              title={item.title}
              image={item.image}
              description={item.description}
              className="col-3 mx-2"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
