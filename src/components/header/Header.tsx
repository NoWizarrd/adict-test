import { Link } from 'react-router'
import './Header.scss'

export default function Header() {
  return (
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
  )
}
