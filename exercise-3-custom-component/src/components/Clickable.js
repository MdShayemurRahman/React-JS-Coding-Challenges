import React from "react";

const Clickable = (props) => {
  const showName = () => {
    alert("You clicked on " + props.name);
  };
  return <button onClick={showName}>{props.name}</button>;
};

export default Clickable;
