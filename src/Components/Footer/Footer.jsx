import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className="footer-container">
        <ul className='footer__ul'>
            <li className='footer__li'>
              <Link to="/" className="link">Home</Link></li>
            <li className='footer__li'>
              <Link to="/events" className="link"> Events</Link></li>
            <li className='footer__li'>Cart</li>
        </ul>
    </nav>
  )
}

export default Footer