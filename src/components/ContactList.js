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


  function handleShowNonDonors() {
    setShowNonDonors(!showNonDonors);
  }
  function onHandleChange(e) {
    setSearch(e.target.value);
  }

  const filteredContacts = contacts.filter(contact =>
        search == '' || contact.lastname.toLowerCase().includes(search) 
  ) 

  return (
    <div>
      <Sort
        showNonDonors={showNonDonors}
        handleShowNonDonors={handleShowNonDonors}
      />
      <Search
        contacts={contacts}
        handleChange={onHandleChange}
        showNonDonors={showNonDonors}
      />
      <h2>Contacts</h2>
      <GeneralInfoList filteredContacts={filteredContacts} search={search}/>
    </div>
  );
}

export default ContactList;
