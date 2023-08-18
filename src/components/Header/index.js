import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-nav">
    <div className="logo-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="logo-label">Wave</p>
    </div>
    <div className="sec-con">
      <ul className="un-list">
        <li className="list-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="list-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
