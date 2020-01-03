import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthContext from '../../context/auth/authContext'

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, user } = authContext;
  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!">
          <i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );
  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </li>
    </>
  )

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}/>{title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
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
