import './eventItem.css';

function EventItem({event}) {
  return (
    <section 
      className="eventItem-container"
      onClick ={() => console.log(event)}
      >
      <figure className='eventItem__date'>
        <p>{event.when.date}</p>
      </figure>
      <article className="eventItem-card__container">
        <h3 className="eventItem-card__title">{event.name}</h3>
        <p className="eventItem-card__location italic">{event.where}</p>
        <section className='eventItem-card__desc-container'>
          <p className="eventItem-card__time">{event.when.from} - {event.when.from}</p>
          <p className="eventItem-card__price">{event.price} sek</p>
        </section>
      </article>
    </section>
  )
}

export default EventItem