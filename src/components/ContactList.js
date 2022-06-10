import React from "react";
import GeneralInfoList from "./GeneralInfoList";

function ContactList({ contacts }) {
  const generalInfoCards = contacts.map((contact) => (
    <GeneralInfoList
      key={contact.id}
      id ={contact.id}
      name={contact.firstname + contact.lastname}
      email={contact.email}
      phone={contact.phone}
      hasDonated={contact.hasDonated}
      amountDonated={contact.amountDonated}
      contacts={contacts}
    />
  ));
  return (
    <div>
      <h2>Contacts</h2>
      {generalInfoCards}
    </div>
  );
}

export default ContactList;
