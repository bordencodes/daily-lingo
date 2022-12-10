import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <nav>
        <div className="navbar">
          <div className="appTitle">Daily Lingo</div>
          <Link to="/" className="navLinks">Home</Link>
          <Link to="/calendar" className="navLinks">Calendar</Link>
          {/* <Link to="/sign" className="navLinks">Sign-In</Link> */}
        </div>
      </nav>
  )
}

export default Nav