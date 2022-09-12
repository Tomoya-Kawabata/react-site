import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>Portfolio</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/react-site/">Home</Link>
          </li>
          <li>
            <Link to="/react-site/works">works</Link>
          </li>
          <li>
            <Link to="/react-site/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;