import './landingPage.css';
import Logo from '../../Components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGoShop = () => {
    localStorage.clear();
    navigate('/events');
  };

  return (
    <section className="landing-page">
        <Logo />
        <button 
          className='landing-page--Btn' 
          onClick={handleGoShop}
          >
          Go Shop!
        </button>
    </section>
  )
}

export default LandingPage;