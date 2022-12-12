import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <nav>
        <div className="navbar">
          <div className="appTitle">Daily Lingo</div>
          <div><Link to="/" className="navLinks">Home</Link></div>
          {/* <Link to="/calendar" className="navLinks">Calendar</Link> */}
          <div><Link to="/signin" className="navLinks">Sign-In</Link></div>
          <div><Link to="/register" className="navLinks">Register</Link></div>
        </div>
      </nav>
  )
}

export default Nav