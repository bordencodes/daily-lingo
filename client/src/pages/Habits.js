// import { useState, useEffect } from 'react'
// import axios from 'axios'
import React from 'react'

const Habits = () => {
  // const [phrases, updatePhrases] = useState([])
  // const [changePhrase, setPhrase] = useState({
  //   checkPhrase: ''
  // })
  // const [input, setInput] = useState('')

  // const [remove, removePhrase] = useState('')

  // const apiCall = async () => {
  //   let response = await axios.get('/phrases')
  //   updatePhrases(response.data)
  // }

  // useEffect(() => {
  //   apiCall()
  // }, [])

  // const handleChange = (e) => {
  //   setPhrase({ ...changePhrase, [e.target.id]: e.target.value })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   let response = await axios.put(
  //     `/phrases/${changePhrase.checkPhrase}`,
  //     input
  //   )
  //   apiCall()

  //   setInput({
  //     phrase: ''
  //   })
  //   setPhrase({
  //     checkPhrase: ''
  //   })
  // }

  // const inputChange = (e) => {
  //   setInput({ ...input, [e.target.id]: e.target.value })
  // }

  // const deletePhrase = async (e) => {
  //   let response = await axios.delete(`/phrases/${remove.phrase}`)
  //   apiCall()
  // }

  // const handlePhraseChange = async (e) => {
  //   removePhrase({ ...remove, [e.target.id]: e.target.value })
  // }

  return (
    <div className="App">
      The habits go here.
      {/* <h3 className="allPhrases">All Phrases</h3>
      <br />
      <div className="phraseGrid">
        {phrases.map((phrase) => (
          <section key={phrase.id}>
            <div>{phrase.phrase}</div>
          </section>
        ))}
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <label className="updateLabel" htmlFor="phrase">
          Enter Phrase Here:{' '}
        </label>
        <input id="phrase" onChange={inputChange} value={input.phrase} />
        <select
          value={changePhrase.checkPhrase}
          className="updateDropdown"
          id="checkPhrase"
          onChange={handleChange}
        >
          <option></option>
          {phrases.map((phrase) => (
            <option value={phrase._id}>{phrase.phrase}</option>
          ))}
        </select>
        <button className="listBtn" type="submit">
          Update Phrase
        </button>
      </form>
      <br />
      <label className="formLabel" htmlFor="phrase">
        Select Phrase:{' '}
      </label>
      <select
        className="deleteDropdown"
        id="phrase"
        onChange={handlePhraseChange}
      >
        <option></option>
        {phrases.map((phrase) => (
          <option value={phrase._id}>{phrase.phrase}</option>
        ))}
      </select>
      <button className="homeBtn" type="submit" onClick={deletePhrase}>
        Remove Phrase
      </button> */}
    </div>
  )
}

export default Habits
