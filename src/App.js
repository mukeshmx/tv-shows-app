import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ShowDetails from './components/showDetails';
import BookingForm from './components/bookingForm';

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(response => setShows(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleShowDetails = (show) => {
    setSelectedShow(show);
  };

  const handleBookTickets = () => {
    setShowBookingForm(true);
    setSelectedShow(null);
  };

  const handleCloseModal = () => {
    setSelectedShow(null);
    setShowBookingForm(false);
  };

  return (
    <div className="App">
      <h1>Shows for you</h1>
      <div className="show-container">
        {shows.map(show => (
          <div key={show.id} className="show-card" onClick={() => handleShowDetails(show)}>
            <img src={show.image.medium} alt={show.name} />
            <h2>{show.name}</h2>
            <p>Rating: {show.rating.average || 'N/A'}</p>
          </div>
        ))}
      </div>

      {selectedShow && (
        <ShowDetails show={selectedShow} onClose={handleCloseModal} onBookTickets={handleBookTickets} />
      )}

      {showBookingForm && (
        <BookingForm show={selectedShow} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
