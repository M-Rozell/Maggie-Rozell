
import React, {useState, useEffect} from 'react';
import MainHome from "./pages/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RandMHome from "./components/rAndMComponents/RandMHome";
import Characters from "./components/rAndMComponents/Characters";
import CharacterDetails from "./components/rAndMComponents/CharacterDetails";



import People from "./components/rAndMComponents/People";
import Vehicles from './components/rAndMComponents/Vehicles';


import PilotDetails from './components/rAndMComponents/PilotDetails';
import PeopleDetails from './components/rAndMComponents/PeopleDetails';
import VehicleDetails from './components/rAndMComponents/VehicleDetails';


const App = () => {

    const [isLoading, setLoading] = useState(true);
  
  function loadingRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 

  useEffect(() => {
    loadingRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) { 
    return null;
  }

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/maggie-rozell" element={<MainHome />} />
                
                
                <Route path="/RandMHome" element={<RandMHome />} />
                <Route path="/Characters" element={<Characters />} />
                <Route path="/Characters/:characterid" element={<CharacterDetails />} />
                
                
                <Route path="/People" element={<People />} />
                <Route path="/Vehicles" element={<Vehicles />} />
                
                
                <Route path="/PeopleDetails" element={<PeopleDetails />} />
                <Route path="/VehicleDetails" element={<VehicleDetails />} />
                <Route path="/People/:peopleid" element={<PeopleDetails />} />
                <Route path="/Vehicles/:vehicleid" element={<VehicleDetails />} />
                <Route path="/PilotDetails/:peopleid" element={<PilotDetails />} />

            </Routes>
        </BrowserRouter>
    )
};

export default App;









