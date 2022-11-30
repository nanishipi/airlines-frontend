import React from "react";

import "../pages/TicketsPage.css"

export default function Tickets() {
  return (
    <div className="tickets">
      <h1>Tickets</h1>
      <div className="searchContainer">
        <div className="column">
          <h2>Trip Details</h2>
          <form>
            <label style={{ fontWeight: "bold" }} htmlFor="origins">Origin</label><br></br>
            <select name="origins" id="origins" required>
              <option value="select" disabled selected>Select a Country</option>
              <option value="brazil">Brazil</option>
              <option value="norway">Norway</option>
              <option value="spain">Spain</option>
              <option value="china">China</option>
              <option value="south-africa">South Africa</option>
            </select><br></br><br></br>

            <label style={{ fontWeight: "bold" }} htmlFor="destinations">Destination</label><br></br>
            <select name="destinations" id="destinations" required>
              <option value="select" disabled selected>Select a Country</option>
              <option value="brazil">Brazil</option>
              <option value="norway">Norway</option>
              <option value="spain">Spain</option>
              <option value="china">China</option>
              <option value="south-africa">South Africa</option>
            </select><br></br><br></br>

            <label style={{ fontWeight: "bold" }} htmlFor="date">Trip date</label><br></br>
            <input type="date" required></input><br></br><br></br>
          </form>
          <form className="tripTypeForm">
            <label style={{ fontWeight: "bold" }} htmlFor="tripType">Trip Type</label><br></br>
            <input type="radio" id="oneWayTrip" name="tripType" value="oneWayTrip" checked></input>
            <label htmlFor="oneWayTrip">One Way Trip</label><br></br>
            <input type="radio" id="roundTrip" name="tripType" value="roundTrip"></input>
            <label htmlFor="roundTrip">Round Trip</label><br></br>
          </form>
        </div>
        <div className="column">
          <h2>Filters</h2>
          <form>
            <label style={{ fontWeight: "bold" }} htmlFor="airLine">Air Line</label><br></br>
            <select name="arlines" id="arilines" required>
              <option value="select" disabled selected>Select an Air Line</option>
              <option value="tap">TAP</option>
              <option value="ryanair">Ryanair</option>
              <option value="qatar">Qatar</option>
              <option value="emirates">Emirates</option>
              <option value="airFrance">Air France</option>
              <option value="any">Any Air Lines</option>
            </select><br></br><br></br>

            <label style={{ fontWeight: "bold" }} htmlFor="scales">Allow Scales</label><br></br>
            <input type="radio" id="withScales" name="allowScales" value="withScales" checked></input>
            <label htmlFor="withScales">Yes</label><br></br>
            <input type="radio" id="withoutScales" name="allowScales" value="withoutScales"></input>
            <label htmlFor="withoutScales">No</label><br></br><br></br>

            <label style={{ fontWeight: "bold" }} htmlFor="luggage">Luggage</label><br></br>
            <input type="radio" id="withLuggage" name="luggage" value="yes" checked></input>
            <label htmlFor="withLuggage">Yes</label><br></br>
            <input type="radio" id="withoutLuggage" name="luggage" value="no"></input>
            <label htmlFor="withoutLuggage">No</label><br></br><br></br>

            <label style={{ fontWeight: "bold" }} htmlFor="schedule">Schedule</label><br></br>
            <input type="radio" id="anySchedule" name="schedule" value="any" checked required></input>
            <label htmlFor="anySchedule">Any</label><br></br>
            <input type="radio" id="morning" name="schedule" value="morning"></input>
            <label htmlFor="morning">Morning(00:00 - 12:00)</label><br></br>
            <input type="radio" id="afternoon" name="schedule" value="afternoon"></input>
            <label htmlFor="afternoon">Afternoon(12:00 - 00:00)</label><br></br><br></br>
        </form> 
      </div>

      <div className="column">
        <img id="ticketsImg" src="https://media.cntraveler.com/photos/57067c1e9adc6caf5afe3f4c/master/pass/plane-landing-cr-getty-sb10062851ai-001.jpg" alt="plane"></img><br></br><br></br>
        <button className="searchTicketBtn">Search</button>
      </div>
    </div>
    </div >

    /* <div className="formContainer">
          <form>
            <label htmlFor="firstName">First name</label><br></br>
            <input type="text" id="firstName" name="firstName"></input><br></br><br></br>
            <label htmlFor="lastName">Last name</label><br></br>
            <input type="text" id="lastName" name="lastName"></input><br></br><br></br>
            <label htmlFor="age">Age</label><br></br>
            <input type="number" id="age" name="age"></input><br></br><br></br>
            <label htmlFor="nif">NIF</label><br></br>
            <input type="number" id="nif" name="nif"></input><br></br><br></br>
            <label htmlFor="nationality">Nationality</label><br></br>
            <input type="text" id="nationality" name="nationality"></input><br></br><br></br>
            <label htmlFor="luggage">Luggage</label><br></br>
            <input type="radio" id="luggage" name="luggage" value="yes" checked></input>
            <label htmlFor="luggage">Yes</label><br></br>
            <input type="radio" id="noLuggage" name="luggage" value="no"></input>
            <label htmlFor="luggage">No</label><br></br>
          </form>
        </div> */
  );
}

