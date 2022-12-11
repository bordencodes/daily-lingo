import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Habits from './pages/Habits'
import Home from './pages/Home'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <header>
        {/* <h1>One Word a Day</h1> */}
        <Nav />
      </header>
      {/* <div>
        <form>
          <div>
            <label>Word: </label>
            <input type="text" id="habit" />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
      <main>
        <h2>Date</h2>
        <ul>
          <li> Word: </li>
        </ul>
      </main> */}
      <div>
        <Home />
        <Habits />
        <Register />
      </div>
      {/* <Route path="/" element={<Home />} />
      <Route path="/habit" element={<Habits />} /> */}
    </div>
  )
}

export default App
