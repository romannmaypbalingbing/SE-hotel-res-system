import './App.css';
import React, { useState } from 'react';
import ReservationInfo from './guest/ReservationInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookaRoom from './guest/BookaRoom';
import GuestInfo from './guest/GuestInfo';
import { supabase } from './supabaseClient';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route point */}
          <Route exact path="/reservation" element={<ReservationInfo supabaseClient={supabase} />} />
          {/* Define the route for ReservationInfo page */}
          <Route path="/book-room" element={<BookaRoom supabaseClient={supabase} />} />

          {/* Define the route for BookaRoom page */}
          <Route path="/guest-info" element={<GuestInfo supabaseClient={supabase} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
