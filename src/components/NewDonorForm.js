import React from "react";

function NewDonorForm({ handleSubmit, formData, handleChange }) {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
        paddingTop: "2rem"
      }}
    >
      <label className="formLabel">First Name</label>
      <input
        value={formData.firstname}
        type="text"
        name="firstname"
        aria-label="first name"
        onChange={handleChange}
      ></input>
      <label className="formLabel">Last Name</label>
      <input
        value={formData.lastname}
        type="text"
        name="lastname"
        aria-label="last name"
        onChange={handleChange}
      ></input>
      <label className="formLabel">Email</label>
      <input
        value={formData.email}
        type="text"
        name="email"
        aria-label="email"
        onChange={handleChange}
      ></input>
      <label className="formLabel">Phone</label>
      <input
        value={formData.phone}
        type="text"
        name="phone"
        aria-label="phone"
        onChange={handleChange}
      ></input>
      <label className="formLabel">Has Donated?</label>
      <input
        value={formData.hasDonated ? 'Yes':'No'}
        type="text"
        name="hasDonated"
        aria-label="Have they donated?"
        onChange={handleChange}
      ></input>
      <label className="formLabel">Amount Donated</label>
      <input
        value={formData.amountDonated}
        type="number"
        name="amountDonated"
        aria-label="Amount Donated"
        onChange={handleChange}
      ></input>
      <input type="submit" />
    </form>
  );
}

export default NewDonorForm;
