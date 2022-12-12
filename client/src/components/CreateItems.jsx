import React from "react";

const CreateItems = ({onCreatDailyWord}) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const {name, trans, date} = e.target.elements

    if(name.value && trans.value && date){
    onCreatDailyWord(name.value, trans.value, date.value)
    }
    name.value = ""
    trans.value = ""
    date.value = ""
  }

  return (
    <div>
      <h2>One Word a Day!</h2>
    <div>
      <form className="create-item-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Word of the day" name="name"/>
        <input type="text" placeholder="Translation" name="trans"/>
        <input type="date" name="date"/>
        <button className="add-button">Add</button>
      </form>
    </div>
    </div>
  )
}

export default CreateItems