import './events.css';
import EventItem from '../EventItem/EventItem';
import { useState, useEffect } from 'react';
import { fetchAPI} from '../../Hooks/fetchAPI';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await fetchAPI();
        if (data && Array.isArray(data.events)) {
          setEvents(data.events);
          console.log(data);
        } else {
          console.error("API response does not contain 'events' array", data);
        }
      } catch (err) {
        console.error('Failed to fetch API', err);
      }
    }
    loadEvents();
  }, []);

  return (
    <section className="eventPage-container">
        <figure className="event__search">
            <i className="fas fa-search"></i>
            <p className='event__search--desc'>enter location...</p>
        </figure>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
    </section>
  )
}

export default Events