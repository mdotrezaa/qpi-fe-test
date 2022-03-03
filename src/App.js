import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/elements/button";
import { GlobalProvider } from "./context/GlobalState";
import AddUser from "./pages/addUser";
import List from "./pages/list";
import Profile from "./pages/profile";

function App() {
  
  return (
    <div className='App'>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<><List/></>} />
            <Route exact path='/profile/:id' element={<Profile />} />
            <Route exact path='/create' element={<><AddUser/></>} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
