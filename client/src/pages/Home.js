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
    </div>
  )
}

export default Home
