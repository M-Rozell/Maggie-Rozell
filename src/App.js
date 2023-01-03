import React, { lazy, Suspense } from "react";
import MainHome from "./pages/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RandMHome = lazy(() => import("./components/rAndMComponents/RandMHome"));

const App = () => {


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
