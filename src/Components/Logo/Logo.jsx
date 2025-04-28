import './logo.css';
import logoImage from '../../assets/Logos/logo.png';

function Logo() {
  return (
    <section className='logo-container sansita'>
        <img src= {logoImage} alt='logo' className='logo__image' />
        <h1 className='logo__title italic bold'>Where It's @</h1>
        <p className='logo__details italic'>Ticketing made easy</p>
    </section>
  )
}

export default Logo;