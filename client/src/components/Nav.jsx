import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <nav>
        <div className="navbar">
          <div className="appTitle">Daily Lingo</div>
          <Link to="/" className="navLinks">Home</Link>
          {/* <Link to="/calendar" className="navLinks">Calendar</Link> */}
          <Link to="/signin" className="navLinks">Sign-In</Link>
          <Link to="/register" className="navLinks">Register</Link>
        </div>
      </nav>
  )
}

export default Nav