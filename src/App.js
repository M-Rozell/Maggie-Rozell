
import React, {useState, useEffect} from 'react';
import MainHome from "./pages/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Films from "./components/ghibliComponents/Films";
import People from "./components/ghibliComponents/People";
import Vehicles from './components/ghibliComponents/Vehicles';
import GhibliHome from "./components/ghibliComponents/GhibliHome";
import FilmDetails from "./components/ghibliComponents/FilmDetails";
import PilotDetails from './components/ghibliComponents/PilotDetails';
import PeopleDetails from './components/ghibliComponents/PeopleDetails';
import VehicleDetails from './components/ghibliComponents/VehicleDetails';


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
                <Route path="/Films" element={<Films />} />
                <Route path="/People" element={<People />} />
                <Route path="/Vehicles" element={<Vehicles />} />
                <Route path="/GhibliHome" element={<GhibliHome />} />
                <Route path="/Films/:filmid" element={<FilmDetails />} />
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









