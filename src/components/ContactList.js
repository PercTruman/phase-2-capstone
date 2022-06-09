import React from 'react'
import ContactCard from './ContactCard'

function ContactList({contacts}) {
  console.log(typeof contacts)
  const individualCards = contacts.map((contact)=>
    <ContactCard  
      key={contact.id} 
      name={contact.firstname + contact.lastname} 
      email={contact.email} 
      phone={contact.phonenumber} 
      hasDonated={contact.hasDonated}
      amountDonated={contact.amountDonated}
      /> 
    )
      
  return (
    <div>
      <h2>Contacts:</h2>
        {individualCards}
    </div>
  )
}

export default ContactList