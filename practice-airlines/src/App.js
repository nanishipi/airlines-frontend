import './App.css';
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react'

import Home from "./pages/HomePage";
import Tickets from './pages/TicketsPage';
import Reservations from './pages/ReservationsPage';
import About from './pages/AboutPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);
  console.log(reservations)
  return (
    <div className="App">
      {<Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Reservations" element={<Reservations flightNumber={reservations[0].flightNumber} />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>}
    </div>
  );
}

export default App;
