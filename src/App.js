import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import Login from './components/Login';
import SearchMovie from './components/SearchMovie'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path='/movies' element={
            <>
              <Header />
              <SearchMovie />
            </>}> </Route>  

        <Route path='/login' element={
            <>
              <Header />
              <Login />
            </>}> </Route>
        
        <Route path='/' element={
            <>
              <Header />
              <Home />
            </>}> </Route>

          <Route path='/detail' element={
            <>
              <Header />
              <Details />
            </>}> </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
