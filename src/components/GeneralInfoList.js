import React from "react";
import ContactDetails from "./ContactDetails";
import { NavLink } from "react-router-dom";

function GeneralInfoList({
  id,
  name,
  hasDonated,
  // contacts,
}) 
{
  // const detailCards = contacts.map((contact) => (
  //   <ContactDetails
  //     // key={contact.id}
  //     // id = {contact.id}
  //     // name={contact.name}
  //     // phone={contact.phone}
  //     // email={contact.email}
  //     // hasDonated={contact.hasDonated ? "Yes" : "No"}
  //     // amountDonated={contact.amountDonated}
  //     // contacts={contacts}
  //    />
  // ));

  return (
    <div className="card">
      <h4>{name}</h4>
      <h4>Donor? {hasDonated ? "Yes" : "No"}</h4>
      <NavLink to = {`/mycontacts/${id}`}>See Details</NavLink>
    </div>
  );
}

export default GeneralInfoList;
