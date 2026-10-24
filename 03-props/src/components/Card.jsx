import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="content">
          <h1>
            {props.firstName} {props.lastName}
          </h1>
          <p>Welcome to the world of React components.</p>
          <button>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
