import './cart.css';
import CartItem from '../CartItem/CartItem';
import useConcertStore from '../../Stores/ConcertStore';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const events = useConcertStore((state) => state.events);
    const cart = useConcertStore((state) => state.cart);

    const cartItems = Object.entries(cart).map(([eventId, quantity]) => {
        const event = events.find(e => e.id === eventId);
        return event ? { ...event, quantity } : null;
      }).filter(Boolean);

      const totalPrice = cartItems.reduce(
        (total, event) => total + event.price * event.quantity,
        0
      );
    
      const navigate = useNavigate();

    const handlePurchaseBtn = () => {
        localStorage.setItem('receipts', JSON.stringify(cartItems));
        console.log(cartItems)
        navigate('/receipt');
    };


  return (
    <section className="cartPage-container">
        {cartItems.length === 0 ? (
            <p className='noItems'>Nothing to show here, go shop first!</p>
        ) : (
            cartItems.map(event => (
                <CartItem key={event.id} event={event} />
            ))
        )}
        {cartItems.length > 0 && (
            <section className="cartPage-total">
                <h5 className='cartPage-price'>Price: </h5>
                <span>{totalPrice} sek</span>
                <button 
                    className="cartPage-payoutBtn"
                    onClick={handlePurchaseBtn}
                    >
                    Purchase</button>
            </section>
        )}
    </section>
  )
}

export default Cart;