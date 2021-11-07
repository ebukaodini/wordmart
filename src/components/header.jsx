import logo from '../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import './header.scss';

export default function Header() {

  const history = useHistory();
  const path = history.location.pathname;

  return (
    <header className='w-100 container'>
      <div className='navbar h-100 w-100 d-flex justify-content-between align-items-center'>

        <div className='d-flex align-items-center justify-content-center'>
          <img className='' src={logo} alt="Wordmart Logo" />
        </div>

        <ul className='d-flex align-items-center my-0 list-unstyled'>
          <li className=''>
            <Link className={`text-decoration-none btn ${path === '/' ? 'btn-primary' : 'btn-muted'} btn-sm`} to='/'>HOME</Link>
          </li>
          <li className=''>
            <Link className={`text-decoration-none btn ${path === '/about' ? 'btn-primary' : 'btn-muted'} btn-sm`} to='/about'>ABOUT</Link>
          </li>
          <li className=''>
            <Link className={`text-decoration-none btn ${path === '/services' ? 'btn-primary' : 'btn-muted'} btn-sm`} to='/services'>SERVICES</Link>
          </li>
          <li className=''>
            <Link className={`text-decoration-none btn ${path === '/blog' ? 'btn-primary' : 'btn-muted'} btn-sm`} to='/blog'>BLOG</Link>
          </li>
          <li className=''>
            <Link className={`text-decoration-none btn ${path === '/contact' ? 'btn-primary' : 'btn-muted'} btn-sm`} to='/contact'>CONTACT</Link>
          </li>
        </ul>

      </div>
    </header>
  );
}