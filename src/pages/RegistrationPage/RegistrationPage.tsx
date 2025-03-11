import { Link } from "react-router";
import headerLogo from '../../assets/images/header-logo-registration.png'
import registrationIcon from '../../assets/images/registration-icon.png'
import './RegistrationPage.scss'
import Footer from "../../components/Footer/Footer";
import { useLayoutEffect } from "react";

export default function RegistrationPage() {

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

  return (
    <div className="registration-page">
      <section className="registration-wrapper">
        <header className="header">
          <Link to={'/'}>
            <img src={headerLogo} alt='headerLogo'/>
          </Link>
          <div className='header__buttons'>
              <Link to={'/speakers'} className='header__buttons--speakers'>
                  speakers
              </Link>
              <Link to={'/registration'} className='header__buttons--get-tickets'>
                  get tickets
              </Link>
          </div>
        </header>
        <div className="registration-content">
          <p className="registration-head">
            <img src={registrationIcon} className="registration-head__img"/>
            register
          </p>
          <div className="registration-info">
            <p className="left-text">
              Join us in June for
              Config 2024.
            </p>
            <div className="right-content">
              <p className="right-content__header">
              Attend in person at <u>Moscone Center</u> in San Francisco. Your
              ticket includes access to the virtual Config experience too.
              </p>
              <div className="info-block">
                <p className="info-block__big-text">
                  Single in person ticket
                </p>
                <p className="info-block__price">
                  <del>$699</del> <b>$349.50</b>
                </p>
                <p className="info-block__description">
                  Early bird (50% off) while supplies last
                </p>
              </div>
              <div className="info-block">
                <p className="info-block__big-text">
                Multiple in person tickets
                </p>
                <p className="info-block__medium-text">
                Buy 3 tickets, get 1 free! Discount applied at checkout.
                </p>
                <p className="info-block__price">
                  <del>$699</del> <b>$349.50</b> per attendee
                </p>
              </div>
              <p className="info-block__outer-text">
                Attend virtually from anywhere.
              </p>
              <div className="info-block">
                <p className="info-block__big-text">
                Virtual
                </p>
                <p className="info-block__medium-text">
                  Live-streaming online, limit one virtual ticket per attendee.
                </p>
                <p className="info-block__price">
                  <b>Free</b> 
                </p>
              </div>
            </div>
          </div>
        </div>
            <div className="under-footer-re">
              <div className="under-footer-re__element first"/>
              <div className="under-footer-re__element second"/>
            </div>
      </section>
      <Footer/>
    </div>
  )
}
