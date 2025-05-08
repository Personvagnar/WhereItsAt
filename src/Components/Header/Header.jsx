import './header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <section className="header">
      {location.pathname === "/" && <h2 className='h2'></h2>}
      {location.pathname === "/events" && <h2 className='h2'>Events</h2>}
      {location.pathname === "/cart" && <h2 className="h2">Cart</h2> }
      {location.pathname === "/receipt" && <h2 className='h2'>Receipts</h2>}
    </section>
  )
}

export default Header;