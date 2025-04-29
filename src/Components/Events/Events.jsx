import './events.css';
import EventItem from '../EventItem/EventItem';
import useFetchConcerts from '../../Hooks/fetchAPI';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';

function Events() {
  const { data, isLoading, error } = useFetchConcerts();
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error}</p>;

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="eventPage-container">
      <figure className="event__search">
        <i className="fas fa-search"></i>
        <p className="event__search--desc">enter location...</p>
      </figure>

      {data.events.map((event) => (
        <EventItem 
          key={event.id} 
          event={event}
          onClick={()=> handleEventClick(event)}
          />
      ))}
      {selectedEvent && (
        <Modal event={selectedEvent} onClose={closeModal} />
      )}
    </section>
  );
}

export default Events;