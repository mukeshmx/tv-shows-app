import React, { useState, useEffect } from 'react';

const BookingForm = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    movieName: show ? show.name : '',
  });

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    setFormData(prevData => ({
      ...prevData,
      ...storedUserDetails,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(formData));
    onClose();
  };

  return (
    <div className="booking-form">
      <div className="close-btn" onClick={onClose}>
        &times;
      </div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input type="text" name="movieName" value={formData.movieName} readOnly />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
