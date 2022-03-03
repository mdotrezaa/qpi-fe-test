import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/elements/button";
import { GlobalProvider } from "./context/GlobalState";
import AddUser from "./pages/addUser";
import ListUser from "./pages/listUser";
import User from "./pages/user";

function App() {
  
  return (
    <div className='App'>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<ListUser/>} />
            <Route exact path='/profile/:id' element={<User />} />
            <Route exact path='/create' element={<><AddUser/></>} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
