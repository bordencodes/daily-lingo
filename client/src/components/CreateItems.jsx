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
    <div className="create-item-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Word" name="name"/>
        <input type="text" placeholder="Translation" name="trans"/>
        <input type="date" name="date"/>
        <button className="add-button">Add</button>
      </form>
    </div>
  )
}

export default CreateItems