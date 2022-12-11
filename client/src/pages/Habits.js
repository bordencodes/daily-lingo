// import { useState, useEffect } from 'react'
// import axios from 'axios'
import React from 'react'

const Habits = () => {
  // const [habits, updateHabits] = useState([])
  // const [changeHabit, setHabit] = useState({
  //   checkHabit: ''
  // })
  // const [input, setInput] = useState('')

  // const [remove, removeHabit] = useState('')

  // const apiCall = async () => {
  //   let response = await axios.get('/habits')
  //   updateHabits(response.data)
  // }

  // useEffect(() => {
  //   apiCall()
  // }, [])

  // const handleChange = (e) => {
  //   setPhrase({ ...changeHabit, [e.target.id]: e.target.value })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   let response = await axios.put(
  //     `/habits/${changeHabit.checkHabit}`,
  //     input
  //   )
  //   apiCall()

  //   setInput({
  //     habit: ''
  //   })
  //   setPhrase({
  //     checkHabit: ''
  //   })
  // }

  // const inputChange = (e) => {
  //   setInput({ ...input, [e.target.id]: e.target.value })
  // }

  // const deleteHabit = async (e) => {
  //   let response = await axios.delete(`/habits/${remove.habit}`)
  //   apiCall()
  // }

  // const handleHabitChange = async (e) => {
  //   removeHabit({ ...remove, [e.target.id]: e.target.value })
  // }

  return (
    <div className="App">
      The habits go here.
      {/* <h3 className="allHabits">All Habits</h3>
      <br />
      <div className="habitGrid">
        {phrases.map((habit) => (
          <section key={habit.id}>
            <div>{habit.habit}</div>
          </section>
        ))}
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <label className="updateLabel" htmlFor="habit">
          Enter Habit Here:{' '}
        </label>
        <input id="habit" onChange={inputChange} value={input.habit} />
        <select
          value={changePhrase.checkHabit}
          className="updateDropdown"
          id="checkHabit"
          onChange={handleChange}
        >
          <option></option>
          {phrases.map((habit) => (
            <option value={habit._id}>{habit.habit}</option>
          ))}
        </select>
        <button className="listBtn" type="submit">
          Update Habit
        </button>
      </form>
      <br />
      <label className="formLabel" htmlFor="habit">
        Select Habit:{' '}
      </label>
      <select
        className="deleteDropdown"
        id="habit"
        onChange={handleHabitChange}
      >
        <option></option>
        {habits.map((habit) => (
          <option value={habit._id}>{habit.habit}</option>
        ))}
      </select>
      <button className="homeBtn" type="submit" onClick={deleteHabit}>
        Remove Habit
      </button> */}
    </div>
  )
}

export default Habits
