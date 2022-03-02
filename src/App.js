import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./pages/list";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<List />} />
          <Route exact path='/profile/:id' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
