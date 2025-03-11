import figmaIcon from '../../assets/images/figmaIcon.png'
import config from '../../assets/images/config.png'
import arrowDown from '../../assets/images/arrow-down.png'
import planetICon from '../../assets/images/planet-icon.png'
import './Footer.scss'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="first-section">
            <p className="first-section__logo">
              <img src={figmaIcon} alt='figmaIcon'/>
            </p>
            <div className="first-section__links">
              <div className="first-section__links--column">
                <h4 className='first-section__links--header'>menu</h4>
                <Link to={'/speakers'}>speakers</Link>
                <Link to={'/registration'}>get tickets</Link>
              </div>
              <div className="first-section__links--column">
                <h4 className='first-section__links--header'>resources</h4>
                <Link to={''}>
                  why attend
                  <img src='src/assets/images/arrow.png' className='arrow'/>
                </Link>
                <Link to={''}>faq</Link>
                <Link to={''}>sponsors</Link>
                <Link to={''}>
                  hotels
                  <img src='src/assets/images/arrow.png' className='arrow'/>
                </Link>
                <Link to={''}>
                  visa letters
                  <img src='src/assets/images/arrow.png' className='arrow'/>
                </Link>
                <Link to={''}>
                  Code of conduct
                  <img src='src/assets/images/arrow.png' className='arrow'/>
                </Link>
              </div>
              <div className="first-section__links--column">
              <h4 className='first-section__links--header'>follow</h4>
                <Link to={''}>
                  x 
                  <img src='src/assets/images/arrow.png' className='arrow'/></Link>
                <Link to={''}>
                  linkedin 
                  <img src='src/assets/images/arrow.png' className='arrow'/></Link>
                <Link to={''}>
                  instagram 
                  <img src='src/assets/images/arrow.png' className='arrow'/></Link>
                <Link to={''}>
                  youtube 
                  <img src='src/assets/images/arrow.png' className='arrow'/>
                  </Link>
              </div>
            </div>
        </div>
        <div className="second-section">
          <img src={config} alt='config'/>
          <div className='second-section__settings'>
            <img src={planetICon} alt='planetICon' className='second-section__gap'/>
            <span>English</span>
            <img src={arrowDown} alt='arrowDown' className='second-section__gap'/>
            <span>Cookie settings <span className='second-section__gap'>/</span> © Figma 2024</span>
          </div>
        </div>
    </footer>
  )
}
