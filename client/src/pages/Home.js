import { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import React from 'react'
import CreateItems from '../components/CreateItems'
import TrackedItems from '../components/TrackedItems'
import WordList from '../components/WordList'
import Habits from './Habits'

const Home = () => {
  // let navigate = useNavigate()

  const [words, setWords] = useState([])

  const createDailyWord = (name, trans, date) => {
    const newDailyWord = { id: Habits(), name, trans, date }
    const newState = [...words]

    newState.push(newDailyWord)
    setWords(newState)
  }

  const deleteDailyWord = (id) => {
    const newDailyWord = words.filter((check) => check.id !== id)
    setWords(newDailyWord)
  }
  // const [form, updateForm] = useState({
  //   title: '',
  //   description: ''
  // })
  // const [remove, removeTheme] = useState('')

  // const apiCall = async () => {
  //   let response = await axios.get('/collections')
  //   updateCollections(response.data)
  // }

  // useEffect(() => {
  //   apiCall()
  // }, [])

  // const handleChange = async (e) => {
  //   navigate(`/themes/${e.target.value}`)
  // }

  // const handleFormChange = async (e) => {
  //   updateForm({ ...form, [e.target.id]: e.target.value })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   let response = await axios.post('/collections', form)
  //   apiCall()
  //   updateForm({
  //     title: '',
  //     description: ''
  //   })
  // }

  // const deleteList = async (e) => {
  //   let response = await axios.delete(`/collections/${remove.deleteList}`)
  //   apiCall()
  // }

  // const handleListChange = async (e) => {
  //   removeTheme({ ...remove, [e.target.id]: e.target.value })
  // }

  return (
    <div className="App">
      <CreateItems onCreatDailyWord={createDailyWord} />
      <WordList>
        {/* <TrackedItems
          name="Word of the day"
          trans="Translation Here"
          date={new Date().toLocaleDateString()}
        /> */}
        {words.map(({ id, name, trans, date }) => (
          <TrackedItems
            key={id}
            id={id}
            name={name}
            trans={trans}
            date={date}
            onDeleteDailyWord={deleteDailyWord}
          />
        ))}
      </WordList>
      {/* <h2>Select a List</h2>
      {collections.map((collection) => (
        <section key={collection.id}>
          <button
            className="theme-btns"
            id="themes"
            value={collection.title}
            onClick={handleChange}
          >
            {collection.title}
          </button>
        </section>
      ))}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="title">
          Title:{' '}
        </label>
        <input id="title" value={form.title} onChange={handleFormChange} />
        <label className="formLabel" htmlFor="description">
          {' '}
          Description:{' '}
        </label>
        <input
          id="description"
          value={form.description}
          onChange={handleFormChange}
        />
        <button className="homeBtn" type="submit">
          Add to List
        </button>
      </form>
      <br />
      <label className="formLabel" htmlFor="title">
        Select List Item:{' '}
      </label>
      <select
        className="deleteDropdown"
        id="deleteList"
        onChange={handleListChange}
      >
        <option></option>
        {collections.map((collection) => (
          <option value={collection._id}>{collection.title}</option>
        ))}
      </select>
      <button className="homeBtn" type="submit" onClick={deleteList}>
        Remove List
      </button> */}
    </div>
  )
}

export default Home
