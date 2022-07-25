import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h3><b>Name: </b>{props.name}</h3>
      <h3><b>State: </b>{props.state}</h3>
      <p><b>Description: </b>{props.description}</p>
      <p><b>Stack: </b>{props.stack}</p>
    </div>
  );
}

export default Card;
