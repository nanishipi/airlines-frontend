import './App.css';
import Navbar from "./components/Navbar";

import Home from "./pages/HomePage";
import Tickets from './pages/TicketsPage';
import Reservations from './pages/ReservationsPage';
import About from './pages/AboutPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
