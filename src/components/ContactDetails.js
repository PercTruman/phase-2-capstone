import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ContactDetails() {
  const [detailedCard, setDetailedCard] = useState("hi");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/contacts/${id}`)
      .then((res) => res.json())
      .then((contactObject) => setDetailedCard(contactObject));
  }, [id]);

  return (
    <div className="cardContainer">
      <div className="bigcard">
        <h4>Name: {detailedCard.firstname + detailedCard.lastname}</h4>
        <h4>Email: {detailedCard.email}</h4>
        <h4>Phone: {detailedCard.phonenumber}</h4>
        <h4>Donated? {detailedCard.hasDonated ? "Yes" : "No"}</h4>
        <h4>Amount of donation: ${detailedCard.amountDonated} </h4>
        <Link to={"/mycontacts"}>Back to Contacts</Link>
      </div>
    </div>
  );
}

export default ContactDetails;
