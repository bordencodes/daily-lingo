import { useState } from 'react'
// import axios from 'axios'
import React from 'react'
import CreateItems from '../components/CreateItems'
import TrackedItems from '../components/TrackedItems'
import WordList from '../components/WordList'
import Habits from './Habits'

const Home = () => {
  const [words, setWords] = useState([])
  // const [changeWords, updateWords] = ({
  //   checkWord: ''
  // })
  // const [input, setInput] = useState('')

  const createDailyWord = (name, trans, date) => {
    const newDailyWord = { id: Habits(), name, trans, date }
    const newState = [...words]

    newState.push(newDailyWord)
    setWords(newState)
  }

  // const updateDailyWord = (id) => {
  //   const changeDailyWord = words.filter((check) => check.id !== id)
  //   setWords(changeDailyWord)
  // }

  const deleteDailyWord = (id) => {
    const newDailyWord = words.filter((check) => check.id !== id)
    setWords(newDailyWord)
  }

  return (
    <div className="App">
      <CreateItems onCreatDailyWord={createDailyWord} />
      <WordList>
        {words.map(({ id, name, trans, date }) => (
          <TrackedItems
            key={id}
            id={id}
            name={name}
            trans={trans}
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
