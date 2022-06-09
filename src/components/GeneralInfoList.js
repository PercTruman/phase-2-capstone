import React from 'react'
import ContactDetails from './ContactDetails'


function GeneralInfoList({contacts}) {
  const detailCards = contacts.map((contact)=>
    <ContactDetails
      key={contact.id} 
      name={contact.firstname + contact.lastname} 
      hasDonated={contact.hasDonated}
    /> 
  )
      
  return (
    <div>
      <h2 className='cardsHeader'>Contacts:</h2>
        {detailCards}
    </div>
  )
}

export default GeneralInfoList