import React, { useState } from "react";
import GeneralInfoList from "./GeneralInfoList";
import Search from "./Search";
import Sort from "./Sort";
import { Grid }from "@mui/material";

function ContactList({ contacts }) {
  const [search, setSearch] = useState("");
  const [showOnlyNonDonors, setShowOnlyNonDonors] = useState(false);

  const nonDonorsList = contacts.filter(
    (contact) => contact.hasDonated === false
  );
  const cards = showOnlyNonDonors ? nonDonorsList : contacts;

  function handleShowOnlyNonDonors() {
    setShowOnlyNonDonors(!showOnlyNonDonors);
  }
  function onHandleChange(e) {
    setSearch(e.target.value);
  }

  const filteredContacts = cards.filter(
    (card) =>
      search === "" ||
      card.lastname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
       <Search
        contacts={contacts}
        handleChange={onHandleChange}
        showOnlyNonDonors={showOnlyNonDonors}
      />
      <Sort handleShowOnlyNonDonors={handleShowOnlyNonDonors} />
      <h2>Contacts</h2>
      <Grid container spacing={2} justify="space-around" padding={8}>
        <GeneralInfoList filteredContacts={filteredContacts} cards={cards} />
      </Grid>
    </div>
  );
}

export default ContactList;
