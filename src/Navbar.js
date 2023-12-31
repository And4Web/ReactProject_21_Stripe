import React from 'react'
import { useGlobalContext } from './context';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const btnLocation = e.target.getBoundingClientRect();
    const submenuCenter = (btnLocation.left + btnLocation.right)/2;
    const submenuBottom = btnLocation.bottom - 3
    // console.log(page, submenuCenter, submenuBottom);
    openSubmenu(page, {submenuCenter, submenuBottom});
  }

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}><FaBars/></button>
        </div>
        <ul className="nav-links">
          <li><button className="link-btn" onMouseOver={displaySubmenu}>products</button></li>
          <li><button className="link-btn" onMouseOver={displaySubmenu}>developers</button></li>
          <li><button className="link-btn" onMouseOver={displaySubmenu}>company</button></li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
