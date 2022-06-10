import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ContactList from "./components/ContactList";
import NavBar from "./components/NavBar";
import NewDonorForm from "./components/NewDonorForm";
import ContactDetails from "./components/ContactDetails";
import Login from "./components/Login";
import FiltersAndSearch from "./components/FiltersAndSearch";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((initialContacts) => setContacts(initialContacts));
  }, []);

  function handleAddNewDonor(e, donorObj){
    e.preventDefault()
    setContacts([...contacts, donorObj])
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/newdonorform">
          <NewDonorForm  handleAddNewDonor={handleAddNewDonor}/>
        </Route>
        <Route exact path = "/mycontacts">
          <ContactList contacts={contacts} />
        </Route>
        <Route  path = "/mycontacts/:id">
          <ContactDetails />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
      <FiltersAndSearch />
    </div>
  );
}

export default App;
