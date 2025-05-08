import './modal.css';
import useConcertStore from '../../Stores/ConcertStore';
import { useState } from 'react';

function Modal({ event, onClose }) {
  const { addTicket } = useConcertStore();

  const [localQty, setLocalQty] = useState(1);

  const handleAdd = () => setLocalQty((prev) => prev + 1);
  const handleSubtract = () => {
    if (localQty > 1) {
      setLocalQty((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < localQty; i++) {
      addTicket(event.id);
    }
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
          {localQty === 0
          ? `${event.price} sek`
          : `${localQty * event.price} sek`}
        </h4>
        <section className='modal__ticketbox--counter'>
          <button onClick={handleSubtract}><i class="fa-solid fa-minus"></i></button>
          <span>{localQty}</span>
          <button onClick={handleAdd}><i class="fa-solid fa-plus"></i></button>
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