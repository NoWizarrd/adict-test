import { Link } from "react-router";
import picture from '../../assets/images/first-block-image.png'
import btn from '../../assets/images/first-block-btn.png'
import clockIcon from '../../assets/images/clock-icon.svg'
import snowflake from '../../assets/images/snowflake.svg'
import config from '../../assets/images/config_preview.png'
import Footer from "../../components/Footer/Footer";
import { sponsorImages } from "../../data/sponsors";
import './HomePage.scss'
import '../../components/header/Header.scss'
// import AnimationConfig from "../../components/config_animation/animation";


export default function HomePage() {
  return (
    <div className="main-page">
        <section className="first-block">
        <header className="header">
            <div className='header__title'>
                Figma’s conference for people<br/>
                who build products
            </div>
            <div className='header__buttons'>
                <Link to={'/speakers'} className='header__buttons--speakers'>
                    speakers
                </Link>
                <Link to={'/registration'} className='header__buttons--get-tickets'>
                    get tickets
                </Link>
            </div>
        </header>
          <div className="first-block__rhomb"/>
          <div className="first-block__text">
            <p>
              June 26-27<br/>
              2024
            </p>
            <p>
              Moscone Center <br/>
              San Francisco, CA
            </p>
          </div>
          {/* <AnimationConfig/> */}
          <img src={config} alt="first-block__config" className="first-block__config"/>
          <img src={picture} alt="first-block__image" className="first-block__image"/>
          <button className="first-block__btn">
            <img src={btn} alt="first-block__btn"/>
          </button>
        </section>
        <section className="get-tickets">
          <div className="get-tickets__text">
            <p className="get-tickets__intro">
              <img src={clockIcon} alt="clockIcon"/>
              join us
            </p>
            <p className="get-tickets__offer">
              Early bird tickets
              available now
            </p>
            <p className="get-tickets__description">
              Register now to save 50% and be
              the first to reserve a seat at the
              most popular talks.
            </p>
          </div>
          <Link to={'/registration'} className="get-tickets__button">
            Get tickets
          </Link>
        </section>
        <section className="speakers">
        <div className="speakers__left-block">
            <p className="speakers__intro">
              <img src={snowflake} alt="snowflake"/>
              the lineup
            </p>
            <p className="speakers__offer">
              2024 will be the most exciting Config
              yet, with programming designed to
              connect a dynamic community of
              builders to the future of product
              development.
            </p>
            <Link to={'/speakers'}  className="speakers__button">
              see all speakers
            </Link>
          </div>
          <div className="speakers__right-block">
            <p className="speakers__big-text">
              75 <span className="speakers__extra-space">+ Speakers</span>
            </p>
            <p className="speakers__big-text">
              50 <span className="speakers__extra-space">+ Sessions</span>
            </p>
            <p className="speakers__big-text">
              8,000 <span className="speakers__extra-space">+ Attendees</span>
            </p>
          </div>
        </section>
        <section className="sponsors">
            <p className="sponsors__intro">
              <img src={clockIcon} alt="clockIcon"/>
              sponsors
            </p>
            <p className="sponsors__offer">
              Thank you to our sponsors
            </p>
            <p className="sponsors__description">
              We're excited to bring you an incredible Config experience,
              made possible by the support of our sponsors.
            </p>
            <div className="sponsors__grid">
              {
                sponsorImages.map(image => (
                  <img src={image} alt={image} className="sponsors__grid--image"/>
                ))
              }
            </div>
            <button className="sponsors__button">
              see all sponsors
            </button>
        </section>
        <div className="under-footer-hp">
          <div className="under-footer-hp__element"/>
          <div className="under-footer-hp__element"/>
          <div className="under-footer-hp__element"/>
          <div className="under-footer-hp__element"/>
        </div>
        <Footer/>
    </div>
  )
}
