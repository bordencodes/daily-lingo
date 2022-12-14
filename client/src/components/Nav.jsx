import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {

  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <div className="navbar2">
        <div className="appTitle2">Daily Lingo</div>
        <h3>Welcome {user.email}!</h3>
        <Link to="/" className="navLinks"></Link>
        <Link className="navLinks" onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
    <div className="navbar">
      <div className="appTitle">Daily Lingo</div>
      <div><Link to="/" className="navLinks">Home</Link></div>
      <div><Link to="/signin" className="navLinks">Sign-In</Link></div>
      <div><Link to="/register" className="navLinks">Register</Link></div>
    </div>
  </nav>
  )

  return (
      <nav>
        {authenticated && user ? authenticatedOptions : publicOptions}
      </nav>
  )
}

export default Nav