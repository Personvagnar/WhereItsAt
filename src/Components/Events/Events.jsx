import './events.css';
import EventItem from '../EventItem/EventItem';
import { useState, useEffect } from 'react';
import useFetchConcerts from '../../Hooks/fetchAPI';
import useConcertStore from '../../Stores/ConcertStore';
import Modal from '../../Modal/Modal';

function Events() {
  const { data, isLoading, error } = useFetchConcerts();

  const events = useConcertStore((state) => state.concerts)
  const setConcerts = useConcertStore((state) => state.setConcerts);
  const addTicket = useConcertStore((state) => state.addTicket);
  const removeTicket = useConcertStore((state) => state.removeTicket);

  const [selectedConcert, setSelectedConcert] = useState(null);

  const handleConcertClick =(event) => {
    setSelectedConcert(event);
  };

  const closeModal = () => {
    setSelectedConcert(null);
  };

  useEffect(() => {
    if (data && Array.isArray(data.events)) {
      setConcerts(data.events);
      console.log('Fetched and set events:', data.events);
    }
  }, [data, setConcerts]);

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error}</p>;

  return (
    <section className="eventPage-container">
      <figure className="event__search">
        <i className="fas fa-search"></i>
        <p className="event__search--desc">enter location...</p>
      </figure>

      {events.map((event) => (
        <EventItem 
          key={event.id} 
          event={event}
          onClick={() => handleConcertClick(event)}
          />
      ))}

      {selectedConcert && (
        <Modal
          concert={selectedConcert}
          onClose={closeModal}
          onAddTicket={addTicket}
          onRemoveTicket={removeTicket}
        />
      )}
    </section>
  );
}

export default Events;