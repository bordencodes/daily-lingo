import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
// import Habits from './pages/Habits'
import Home from './pages/Home'
import Register from './components/Register'
import Signin from './components/Signin'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const CheckToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      CheckToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/habit" element={<Habits />} /> */}
          {/* <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} /> */}
          <Route
            path="/signin"
            element={
              <Signin
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
