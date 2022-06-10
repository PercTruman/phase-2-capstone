import React, { useState } from 'react'

function NewDonorForm({handleAddNewDonor}) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    hasDonated:false,
    amountDonated: 0.00
  });

  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  return (
    <form onSubmit={(e)=>handleAddNewDonor(e, formData)}style={{display:"flex", flexDirection:"column", width: "400px", margin:"auto"}}>
      <label>First Name</label>
      <input value={formData.firstname} type="text" name="firstname" aria-label="first name" onChange={handleChange}></input>
      <label>Last Name</label>
      <input value={formData.lastname}type="text" name="lastname" aria-label="last name"onChange={handleChange}></input>
      <label>Email</label>
      <input value={formData.email}type="text" name="email" aria-label="email"onChange={handleChange}></input>
      <label>Phone</label>
      <input value={formData.phone}type="text" name="phone" aria-label="phone"onChange={handleChange}></input>
      <label>Has Donated?</label>
      <input value={formData.hasDonated}type="text" name="hasDonated" aria-label="Have they donated?"onChange={handleChange}></input>
      <label>Amount Donated</label>
      <input value={formData.amountDonated}type="number" name="amountDonated" aria-label="Amount Donated"onChange={handleChange}></input>
      <input type="submit" />
    </form>
  )
}

export default NewDonorForm