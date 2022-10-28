import React from "react";

function Link(props) {
  return (
    <a className="profile-link" id={props.id} href={props.link}>
      {props.name}
    </a>
  );
}

export default Link;
