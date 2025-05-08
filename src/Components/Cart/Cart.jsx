import './cart.css';
import CartItem from '../CartItem/CartItem';
import useConcertStore from '../../Stores/ConcertStore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const events = useConcertStore((state) => state.events);
    const cart = useConcertStore((state) => state.cart);
    const clearCart = useConcertStore((state) => state.clearCart);

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
        const sortedReceipts = cartItems.flatMap((event) => {
        const arenasection = String.fromCharCode(Math.floor(Math.random() * 5) + 65);
        const seatStart = Math.floor(Math.random() *500) + 1;

        return Array.from({ length: event.quantity}, (_, index) => ({
          ...event,
          barcode: uuidv4().substring(0, 5).toUpperCase(),
          arenasection,
          seat: seatStart + index,
        }));
      });
        localStorage.setItem('receipts', JSON.stringify(sortedReceipts));
        clearCart();
        navigate('/receipt');
    };

  if (Object.keys(cart).length === 0) {
      return <p className='noItems'>Nothing to show here, go shop first!</p>
  }

  return (
    <section className="cartPage-container">
        {cartItems.map ((event) => (
          <CartItem key={event.id} event={event} />
        ))}
        
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