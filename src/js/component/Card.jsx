import React from "react";

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
];

export const Card = data.map((item, index) => {
  console.log(item.title);
  return (
    <div
      className="card"
      style="width: 18rem;"
      key={index}
    >
      <img
        src={item.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <a
          href="#"
          className="btn btn-primary"
        >
          Find Out More!
        </a>
      </div>
    </div>
  );
});
