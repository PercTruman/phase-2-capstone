import React from 'react'
import ContactCard from './ContactCard'

function ContactList({contacts}) {
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
    <div>ContactList
        {individualCards}
    </div>
  )
}

export default ContactList