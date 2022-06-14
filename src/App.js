import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ContactList from "./components/ContactList";
import NavBar from "./components/NavBar";
import NewDonorForm from "./components/NewDonorForm";
import ContactDetails from "./components/ContactDetails";
import MissionStatement from "./components/MissionStatement";

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    hasDonated: false,
    amountDonated: 0.0,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((initialContacts) => setContacts(initialContacts));
  }, []);
  

  function handleAddNewDonor(formData) {
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newDonor) => setContacts([newDonor, ...contacts]));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddNewDonor(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      hasDonated: false,
      amountDonated: 0.0,
    });
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/newdonorform">
          <NewDonorForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        </Route>
        <Route exact path="/contacts">
          <ContactList contacts={contacts} />
        </Route>
        <Route path="/contacts/:id">
          <ContactDetails />
        </Route>
        <Route path="/mission">
          <MissionStatement />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
