import React from "react";
import GeneralInfoList from "./GeneralInfoList";



function ContactList({contacts}) {
    const generalInfoCards = contacts.map(contact=>
        <GeneralInfoList 
        key={contact.id} 
        name={contact.firstname + contact.lastname} 
        hasDonated={contact.hasDonated}
        contacts={contacts}
        />)
  return (
    <div>{generalInfoCards}</div>
  )
}

export default ContactList