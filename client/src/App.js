import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>One Word a Day</h1>
      </header>
      <div>
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
      </main>
    </div>
  )
}

export default App
