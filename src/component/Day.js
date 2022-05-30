import React from "react";
import ReactDOM from "react-dom";

const Tick = () => {
  const elem = (
    <div>
      <h2>It is {new Date().toLocaleString() } </h2>
    </div>
  );
  ReactDOM.render(elem, document.getElementById("root"));
};

setInterval(() => {
  Tick();
}, 1000);

export default Tick;