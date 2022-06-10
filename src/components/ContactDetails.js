import React, { useState, useEffect } from "react";
import  { useParams } from "react-router-dom"

function ContactDetails() {
  const [detailedCard, setDetailedCard] = useState(null)
  const { id } = useParams()

  useEffect(()=> {
      fetch(`/mycontacts/${id}`)
        .then(res=>res.json())
        .then(card=>setDetailedCard(card.detailedCard))
  }, [id])

  const { name, email, phone, hasDonated, amountDonated } = detailedCard

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
