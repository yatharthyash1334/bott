import React, { useState, useEffect } from 'react';
import './Nav.css'
import img from './bott.png'

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false) ;
    });
    return () => {
      window.removeEventListener("scroll" ,()=>{});
    };
  }, []); 

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        src=/*'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'*/{img}
        alt='Netlix Logo'
      />

      <img
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='Netflix Logo'
      />
    </div>
  )
}

export default Nav;

// https://upload.wikimedia.org/wikipedia/commons/0/0f/
// https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png
// https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg