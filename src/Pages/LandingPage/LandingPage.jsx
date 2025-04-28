import './landingPage.css';
import Logo from '../../Components/Logo/Logo';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function LandingPage() {

  return (
    <section className="page landing-page">
        <Header />
        <Logo />
        <Footer />
    </section>
  )
}

export default LandingPage;