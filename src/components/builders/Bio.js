import React from "react";

function Bio(props) {
  return (
    <ul style={{ fontWeight: "900" }}>
      First Name: <span className="light">{props.bio.firstName}</span> <br />
      Last Name: <span className="light"> {props.bio.lastName} </span>
      <br />
      Rating: {props.bio.rating} <br />
      Phone: <span className="light"> {props.bio.phone}</span>
      <br />
      E-Mail: <span className="light">{props.bio.email}</span> <br />
      <br />
      <br /> {props.bio.bio} <br />
    </ul>
  );
}

export default Bio;
