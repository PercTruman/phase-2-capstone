import React, { useState } from "react";
import GeneralInfoList from "./GeneralInfoList";
import Search from "./Search";
import Sort from "./Sort";

function ContactList({ contacts }) {
  const [search, setSearch] = useState("");
  const [showNonDonors, setShowNonDonors] = useState(false);

  const nonDonorsList = contacts.filter(
    (contact) => contact.hasDonated === false
  );
  const cards = showNonDonors ? nonDonorsList : contacts;

 
  function handleChange(e) {
    setSearch(e.target.value);
    searchContacts(search);
  }
  function handleShowNonDonors() {
    setShowNonDonors(!showNonDonors);
  }
  function searchContacts(search) {

  };
 


  
  return (
    <div>
      <Sort showNonDonors={showNonDonors} handleShowNonDonors={handleShowNonDonors} />
      <Search contacts={contacts} handleChange={handleChange} showNonDonors={showNonDonors} />
      <h2>Contacts</h2>
      <GeneralInfoList cards={cards}/>
    </div>
  );
}

export default ContactList;
