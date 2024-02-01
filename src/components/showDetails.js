import React from 'react';

const ShowDetails = ({ show, onClose, onBookTickets }) => {
  return (
    <div className="show-details">
      <div className="close-btn" onClick={onClose}>
        &times;
      </div>
      <h2>{show.name}</h2>
      <img src={show.image.original} alt={show.name} />
      <p>Summary: {show.summary}</p>
      <button onClick={() => onBookTickets(show)}>Get Tickets</button>
    </div>
  );
};

export default ShowDetails;
