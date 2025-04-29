import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigation = useNavigate();

  return (
    <section className="header">
      {location.pathname === "/" && <h2 className='h2'></h2>}
      {location.pathname === "/events" && <h2 className='h2'>Events</h2>}
      {location.pathname === "/cart" && <h2 className="h2">Order</h2> }
    </section>
  )
}

export default Header;