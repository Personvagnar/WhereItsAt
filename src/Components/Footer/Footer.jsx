import './footer.css';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <nav className="footer-container">
        <ul className='footer__ul'>
            <li className={`footer__li ${location.pathname === "/events" ? 'footer__li--active' : ''}`}>
              <Link to="/events" className="link"> Events</Link></li>
            <li className={`footer__li ${location.pathname === "/cart" ? 'footer__li--active' : ''}`}>
              <Link to="/cart" className="link"> Cart</Link></li>
        </ul>
    </nav>
  )
}

export default Footer