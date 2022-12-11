import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Habits from './pages/Habits'
import Home from './pages/Home'
import Register from './components/Register'
import Signin from './components/Signin'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habit" element={<Habits />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
