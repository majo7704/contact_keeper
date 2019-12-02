import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const Navbar = ({title, icon}) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}/>{title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/Register'>Register</Link>
          <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}
Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'm fas fa-address-card'
}
export default Navbar
