import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactList from "./components/ContactList";
import NavBar from "./components/NavBar";
import NewDonorForm from "./components/NewDonorForm";
import Login from "./components/Login";
import FiltersAndSearch from "./components/FiltersAndSearch";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/newdonorform">
          <NewDonorForm />
        </Route>
        <Route path="/mycontacts">
          <ContactList />
        </Route>
      </Switch>
      <FiltersAndSearch />
    </div>
  );
}

export default App;
