import React from 'react';
import "./Bookfinal.css"
import Header from './Header';
function Bookfinal() {
  return (
    <div>
    <Header/>
      <div className="booking-container">
        <h1>BOOK HERE!!</h1>
        <form className="booking-form">
          <div className="booking-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="booking-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="booking-group">
            <label htmlFor="event-date">Event Date</label>
            <input type="date" id="event-date" name="event-date" required />
          </div>
          <div className="booking-group">
            <label htmlFor="event-venue">Select Venue</label>
            <select id="event-venue" name="event-venue">
              <option value="MEGA">MEGA</option>
              <option value="MINI">MINI</option>
              <option value="MEDIUM">MEDIUM</option>
            </select>
          </div>
          <div className="booking-group">
            <label htmlFor="event-decoration">Decoration</label>
            <select id="event-decoration" name="event-decoration">
              <option value="SIMPLE">SIMPLE</option>
              <option value="CLASSY">CLASSY</option>
              <option value="GRAND">GRAND</option>
            </select>
          </div>
          <div className="booking-group">
            <label htmlFor="event-event">Event</label>
            <select id="event-event" name="event-event">
              <option value="MARRIAGE">MARRIAGE</option>
              <option value="BIRTHDAY">BIRTHDAY</option>
              <option value="BACHELORRATE">BACHELORRATE</option>
            </select>
          </div>
          <div className="booking-group">
            <label htmlFor="event-menu">Menu</label>
            <div className="checkbox-group">
              <input type="checkbox" id="veg" name="veg" value="VEG" />
              <label htmlFor="veg">VEG</label>
              <input type="checkbox" id="non-veg" name="non-veg" value="NON-VEG" />
              <label htmlFor="non-veg">NON-VEG</label>
              <input type="checkbox" id="combo" name="combo" value="COMBO" />
              <label htmlFor="combo">COMBO</label>
            </div>
          </div>
          <div className="booking-group">
            <label htmlFor="event-addons">Addons</label>
            <div className="checkbox-group">
              <input type="checkbox" id="magic-show" name="magic-show" value="MAGIC SHOW" />
              <label htmlFor="magic-show">MAGIC SHOW</label>
              <input type="checkbox" id="dj" name="dj" value="DJ" />
              <label htmlFor="dj">DJ</label>
              <input type="checkbox" id="food-stall" name="food-stall" value="FOOD STALL" />
              <label htmlFor="food-stall">FOOD STALL</label>
            </div>
          </div>
          <button type="submit">Book Event</button>
        </form>
      </div>
    </div>
  );
}

export default Bookfinal;
