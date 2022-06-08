import React from "react";


import NavBar from './components/NavBar';
import NewDonorForm from './components/NewDonorForm';
import FiltersAndSearch from './components/FiltersAndSearch';

function App() {
  return (
    <div>
      <NavBar />
      <NewDonorForm />
      <FiltersAndSearch />
    </div>
  );
}

export default App;
