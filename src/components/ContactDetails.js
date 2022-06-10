import React, { useState, useEffect } from "react";
import  { useParams } from "react-router-dom"

function ContactDetails() {
  const [detailedCard, setDetailedCard] = useState(null);
  const { id } = useParams()
  
  useEffect(()=> {
      fetch(`http://localhost:3000/contacts/${id}`)
        .then(res=>res.json())
        .then(contactObject=>setDetailedCard(contactObject))
  }, [id])

  console.log(detailedCard)

  return (
    <div className="cardContainer">
      <div className="card">
       
        <h4>Name: {detailedCard}</h4> 
        {/* <h4>Email: {email}</h4> */}
        {/* <h4>Phone: {phone}</h4>
        <h4>Donated? {hasDonated ? "Yes" : "No"}</h4>
        <h4>Amount of donation: {amountDonated}</h4> */}
      </div>
    </div>
  );
}

export default ContactDetails;
