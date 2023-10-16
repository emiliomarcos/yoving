import logo from '../../Assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img className='navbar-logo' src={logo} alt='Yoving' />
    </nav>
  )
}
