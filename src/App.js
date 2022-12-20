import React, { useState, useEffect, lazy, Suspense } from "react";
import MainHome from "./pages/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RandMHome = lazy(() => import("./components/rAndMComponents/RandMHome"));

const App = () => {
  const [isLoading, setLoading] = useState(true);

  function loadingRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
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
      </Routes>

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Routes>
          <Route path="/RandMHome" element={<RandMHome />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
};

export default App;
