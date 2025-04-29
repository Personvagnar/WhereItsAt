import './cartItem.css';
import useConcertStore from '../../Stores/ConcertStore';

function CartItem({ event }) {
    const { addTicket, removeTicket } = useConcertStore();

    const { name, when, quantity } = event;

  return (
    <section className="cartItem-container">
        <section className="cartItem__description">
            <h3 className="cartItem-title h2">{name}</h3>
            <p className="cartItem-when">{when.date}</p>
            <p className="cartItem-time">kl {when.from} - {when.to}</p>
        </section>
        <section className="cartItem__ticketbox">
          <button onClick={() => removeTicket(event.id)}><i class="fa-solid fa-minus"></i></button>
          <span>{quantity}</span>
          <button onClick={() => addTicket(event.id)}><i class="fa-solid fa-plus"></i></button>
        </section>
    </section>
  )
}

export default CartItem;