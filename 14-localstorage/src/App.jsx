import React from "react";

const App = () => {
  const user = {
    username: "Ali",
    age: 29,
    city: "Karachi",
  };

  localStorage.setItem("user", JSON.stringify(user));

  const usera = JSON.parse(localStorage.getItem("user"));
  console.log(usera);

  return <div>App</div>;
};

export default App;
