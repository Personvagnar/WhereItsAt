import './modal.css';

function Modal({ concert, onClose, onAddTicket, onRemoveTicket }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>X</button>
        <h2>{concert.name}</h2>
        <p>{concert.description}</p>
        <p>Location: {concert.where}</p>
        <p>Price: {concert.price} SEK</p>
        <p>Date: {concert.when.date}</p>
        <p>Time: {concert.when.from} - {concert.when.to}</p>

        <div className="modal-buttons">
          <button onClick={() => onAddTicket(concert.id)}>Add Ticket</button>
          <button onClick={() => onRemoveTicket(concert.id)}>Remove Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;