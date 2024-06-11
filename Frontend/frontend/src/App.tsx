import React from 'react';
import './App.css';
import {MainContent} from "./view/common/Main/MainContent";
import {NavBar} from "./view/common/NavBar/NavBar";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar signIn={true} signUp={true} date={true}/>
            <MainContent/>
        </BrowserRouter>
    </div>
  );
}

export default App;
