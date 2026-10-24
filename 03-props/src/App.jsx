import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Card
        firstName="John"
        lastName="Doe"
        img="https://plus.unsplash.com/premium_photo-1661824165440-4a5198c45e3d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        firstName="Jane"
        lastName="Smith"
        img="https://plus.unsplash.com/premium_photo-1683120854878-16f1e95d43c8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        firstName="Bob"
        lastName="Johnson"
        img="https://plus.unsplash.com/premium_photo-1683141328899-2c61f48a6d58?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        firstName="Alice"
        lastName="Williams"
        img="https://plus.unsplash.com/premium_photo-1670872845067-cc84d1873291?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
};

export default App;
