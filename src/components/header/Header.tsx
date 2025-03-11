import './Header.scss'

export default function Header() {
  return (
    <header className="header">
        <div className='header__title'>
            Figma’s conference for people<br/>
            who build products
        </div>
        <div className='header__buttons'>
            <button className='header__buttons--speakers'>
                speakers
            </button>
            <button className='header__buttons--get-tickets'>
                get tickets
            </button>
        </div>
    </header>
  )
}
