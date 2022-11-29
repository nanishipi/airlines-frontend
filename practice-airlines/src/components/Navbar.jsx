import React, { useState } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../components/Navbar.css";

export default function Navbar() {
    return (<>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Tickets">Tickets</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
    </>)
}