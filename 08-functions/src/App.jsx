import React from "react";

const App = () => {
  const btnClicked = () => {
    console.log("button clicked");
  };
  // const pageScroll = (e) => {
  //   if (e > 0) {
  //     console.log("scroll down");
  //   } else {
  //     console.log("scroll up");
  //   }
  // };
  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
    // <div onWheel={(e) => pageScroll(e.deltaY)}>
    //   <div className="page1"></div>
    //   <div className="page2"></div>
    //   <div className="page3"></div>
    // </div>
  );
};

export default App;
