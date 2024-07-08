import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='navbar'>
      <Image className='navbar-logo' src={logo} alt='Logo' />
      <Link className='navbar-login-btn' href='/login'>
        Login
      </Link>
    </div>
  )
}

export default Navbar
