import React from 'react'
import ContactDetails from './ContactDetails'


function GeneralInfoList({name, email, phone, hasDonated, amountDonated, contacts}) {
  const detailCards = contacts.map((contact)=>
    <ContactDetails
      key={contact.id} 
      name={name} 
      phone={phone}
      email={email}
      hasDonated={hasDonated ? "Yes": "No"}
      amountDonated={amountDonated}
      contacts={contacts}
    /> 
  )
      
  return (
    <div>
      <h2 className='cardsHeader'>Contacts:</h2>
       <h4>{name}</h4>
       <h4>{hasDonated}</h4>
      <button>See Details</button>
    </div>
  )
}

export default GeneralInfoList