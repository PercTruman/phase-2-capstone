import React from "react";

function ContactDetails({ name, email, phone, hasDonated, amountDonated }) {
  return (
    <div className="cardContainer">
      <div className="card">
        <h4>Name: {name}</h4>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Donated? {hasDonated ? "Yes" : "No"}</h4>
        <h4>Amount of donation: {amountDonated}</h4>
      </div>
    </div>
  );
}

export default ContactDetails;
