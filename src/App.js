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
  const [search, setSearch]=useState('')
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

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((initialContacts) => setContacts(initialContacts));
  }, []);

  // const filteredAndSortedContacts = contacts
    // .filter((contact)=> !filterValue || contact.hasDonated === filterValue)
    

  function handleAddNewDonor(e, formData){
    e.preventDefault()
    fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then(res=>res.json())
    .then(newDonor=>setContacts([newDonor, ...contacts]))
  }

  function handleSubmit(e){
    e.preventDefault();
    handleAddNewDonor(e,formData)
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      hasDonated:false,
      amountDonated: 0.00
    })
  }

  function searchContacts(search){
    const filteredContacts = contacts.filter(contact=>contact.firstname.toLowerCase().includes(search) )
    setContacts(filteredContacts)
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/newdonorform">
          <NewDonorForm  handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
        </Route>
        <Route exact path = "/mycontacts">
          <FiltersAndSearch search={search} setSearch={setSearch} searchContacts={searchContacts}/>
          <ContactList contacts={contacts} />
        </Route>
        <Route  path = "/mycontacts/:id">
          <ContactDetails />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
