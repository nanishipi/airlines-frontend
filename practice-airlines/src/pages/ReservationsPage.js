import React from "react";

// STYLES
import "../pages/ReservationsPage.css";

export default function Revervations() {
  return (
    <div className="reservations">
      <h1>Reservations</h1>
      <div className="reservationsContainer">
        <div className="reservationWrapper">
          <div className="column">
            <h2>Flight Reservation</h2>
            <div className="flightDetails">
              <p className="leftContent">Flight Number:</p>
              <p className="rightContent"> TP0039</p>
            </div>
            <div className="flightDetails">
              <p className="leftContent">From/To:</p>
              <p className="rightContent"> Spain/Brazil</p>
            </div>
          </div>
          <div className="column">
            <div className="flightDetails">
              <p className="leftContent">First Name:</p>
              <p className="rightContent"> Fernando</p>
            </div>
            <div className="flightDetails">
              <p className="leftContent">Last Name:</p>
              <p className="rightContent"> Silva</p>
            </div>
            <div className="flightDetails">
              <p className="leftContent">Age:</p>
              <p className="rightContent"> 32</p>
            </div>
          </div>
          <div className="column">
            <div className="flightDetails">
              <p className="leftContent">Departure Time:</p>
              <p className="rightContent"> 14:15</p>
            </div>
            <div className="flightDetails">
              <p className="leftContent">Arrival Time:</p>
              <p className="rightContent"> 18:30</p>
            </div>
            <div className="flightDetails">
              <p className="leftContent">Company:</p>
              <p className="rightContent"> TAP Air Portugal</p>
            </div>
            <div className="flightDetails">
              <p className="leftContent">Scales:</p>
              <p className="rightContent">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}