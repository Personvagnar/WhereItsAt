import './events.css';
import EventItem from '../EventItem/EventItem';
import useConcertStore from '../../Stores/ConcertStore';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function Events() {
  const events = useConcertStore((state) => state.events);
  const [selectedEvent, setSelectedEvent] = useState(null);

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

      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        events.map((event) => (
          <EventItem 
            key={event.id} 
            event={event}
            onClick={() => handleEventClick(event)}
          />
        ))
      )}

      {selectedEvent && (
        <Modal event={selectedEvent} onClose={closeModal} />
      )}
    </section>
  );
}

export default Events;