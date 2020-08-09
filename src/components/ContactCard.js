import React from "react";

function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img src={props.imageUrl} />
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default ContactCard;
