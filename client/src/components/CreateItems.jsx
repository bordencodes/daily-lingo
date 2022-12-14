import React from "react";
import { useState } from "react";
import axios from 'axios'

const CreateItems = ({onCreatDailyWord, setWords}) => {
  const [form, updateForm] = useState({
    name: '',
    translation: '',
    date: ''
  })

  const handleChange = (e) => {
    updateForm({ ...form, [e.target.id]: e.target.value })
  }

  const apiCall = async () => {
    let response = await axios.get('/habit')
    setWords(response.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 
    let response = await axios.post('/habit', form)
    apiCall()

  }

  return (
    <div>
      <h2>One Word a Day!</h2>
    <div>
      <form className="create-item-form" onSubmit={handleSubmit}>
        <input id="name" type="text" placeholder="Word of the day" value={form.name} name="name" onChange={handleChange}/>
        <input id="translation" type="text" placeholder="Translation" value={form.translation} name="trans" onChange={handleChange}/>
        <input id="date" type="date" name="date" onChange={handleChange}/>
        <button className="add-button">Add</button>
      </form>
    </div>
    </div>
  )
}

export default CreateItems