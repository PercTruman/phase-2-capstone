import React from 'react'

function ContactCard({name, email, phone, hasDonated, amountDonated}) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Has he/she donated? {hasDonated? "Yes": "No"}</h3>
      <h3>Amount of donation: {amountDonated}</h3>
      </div>
  )
}

export default ContactCard