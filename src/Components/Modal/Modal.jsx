import './modal.css';
import useConcertStore from '../../Stores/ConcertStore';
import { useEffect } from 'react';

function Modal({ event, onClose }) {
  const { cart, addTicket, removeTicket, setEvents } = useConcertStore();

  const quantity = cart[event.id] || 1;



  const handleAddToCart = () => {
    addTicket(event.id);
    console.log({eventId: event.id, quantity: cart[event.id]});
    onClose();
  }

  return (
    <section className="modal-container">
      <button onClick={onClose} className='modal__closeBtn'><i class="fa-solid fa-x"></i></button>
      <h2 className='h2'>Event</h2>
      <p>You are about to score some tickets to</p>
      <h2 className='h2'>{event.name}</h2>
      <section className="modal__details-container">
        <p>{event.when.date}</p>
        <p>kl</p>
        <p>{event.when.from} - {event.when.to}</p>
      </section>
      <p>{event.where}</p>

      <section className="modal__ticketbox">
        <h4>
          {quantity === 0
          ? `${event.price} sek`
          : `${quantity * event.price} sek`}
        </h4>
        <section className='modal__ticketbox--counter'>
          <button onClick={() => removeTicket(event.id)}><i class="fa-solid fa-minus"></i></button>
          <span>{quantity}</span>
          <button onClick={() => addTicket(event.id)}><i class="fa-solid fa-plus"></i></button>
        </section>
      </section>

      <button 
        className='modal__cartBtn'
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </section>
  )
}

export default Modal;