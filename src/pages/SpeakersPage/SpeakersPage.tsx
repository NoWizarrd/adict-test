import Footer from '../../components/Footer/Footer'
import snowflake from '../../assets/images/snowflake_speakers.svg'
import headerLogo from '../../assets/images/header-logo-speakers.png'

import './SpeakersPage.scss'
import { Link } from 'react-router'
import { speakers } from '../../data/speakers'
import { useLayoutEffect } from 'react'


export default function SpeakersPage() {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

  return (
    <div className="speakers-page">
        <section className='speakers-content'>
        <header className="header">
            <Link to={'/'}>
                <img src={headerLogo} alt='headerLogo'/>
            </Link>
            <div className='header__buttons'>
                <Link to={'/speakers'} className='header__buttons--speakers btn1-speakers'>
                    speakers
                </Link>
                <Link to={'/registration'} className='header__buttons--get-tickets btn2-speakers'>
                    get tickets
                </Link>
            </div>
        </header>
        <div className="speakers-content__text">
            <p className="speakers-content__intro">
              <img src={snowflake} alt="snowflake"/>
              the lineup
            </p>
            <p className="speakers-content__offer">
                More than 75 speakers from around the globe will
                join us at Config 2024 to share how they’re
                thinking, what they’re making, and what's next.
            </p>
            <p className="speakers-content__description">
                Attendees will leave feeling more connected to a
                community of builders and to the future of product
                development.
            </p>
          </div>
          <div className="speakers-content__grid">
              {
                speakers.map(speaker => (
                    <div className='grid-item'>
                        <img src={speaker.img} alt={speaker.name}/>
                        <div>
                            <p className='grid-item__name'>
                                {speaker.name}
                            </p>
                            <p className='grid-item__pronouns'>
                                {speaker.pronouns}
                            </p>
                            <p className='grid-item__position'>
                                {speaker.position}
                            </p>
                            {
                                speaker.leadership &&
                                <div className='grid-item__leadership'>
                                    leadership collective
                                </div>
                            }
                        </div>
                        <div className='grid-item__border'/>
                    </div>
                ))
              }
            </div>
            <button className="speakers-content__button">
              load more
            </button>
            <div className="under-footer-sp">
                <div className="under-footer-sp__element"/>
                <div className="under-footer-sp__element"/>
            </div>
        </section>
        <Footer/>
    </div>
  )
}
