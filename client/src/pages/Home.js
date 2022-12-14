import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import CreateItems from '../components/CreateItems'
import TrackedItems from '../components/TrackedItems'
import WordList from '../components/WordList'

const Home = () => {
  const [words, setWords] = useState([])

  const apiCall = async () => {
    let response = await axios.get('http://localhost:3001/habit')
    setWords(response.data)
  }

  const deleteDailyWord = async (id) => {
    let response = await axios.delete(`http://localhost:3001/habit/${id}`)
    apiCall()
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div className="App">
      <CreateItems setWords={setWords} />
      <WordList>
        {words.map(({ _id, name, translation, date }) => (
          <TrackedItems
            key={_id}
            id={_id}
            name={name}
            trans={translation}
            date={date}
            // onUpdateDailyWord={updateDailyWord}
            onDeleteDailyWord={deleteDailyWord}
          />
        ))}
      </WordList>
    </div>
  )
}

export default Home
