import React from "react";
import GeneralInfoList from "./GeneralInfoList";

function ContactList({ contacts }) {
  const generalInfoCards = contacts.map((contact) => (
    <GeneralInfoList
      key={contact.id}
      id={contact.id}
      name={contact.firstname + contact.lastname}
      hasDonated={contact.hasDonated}
    />
  ));
  return (
    <div>
      <h2>Contacts</h2>
      <label for="checkbox">
        <input type="checkbox" id="checkbox" name="checkbox" />
        Show only non-donors
      </label>
      {generalInfoCards}
    </div>
  );
}

export default ContactList;
