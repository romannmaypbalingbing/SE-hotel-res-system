import './App.css';
import React, { useState } from 'react';
import GuestNavBar from './components/GuestNavBar';
import ReservationInfo from './guest/ReservationInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookaRoom from './guest/BookaRoom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route point */}
          <Route exact path="/" element={<BookaRoom />} />
          {/* Define the route for ReservationInfo page */}
          <Route path="/reservation-info" element={<ReservationInfo />} />

          {/* Define the route for BookaRoom page */}
          <Route path="/book-a-room" component={<BookaRoom/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
