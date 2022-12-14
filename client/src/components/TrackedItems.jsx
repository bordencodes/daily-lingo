import React from "react";
import { useState } from "react";

const TrackedItems = ({name, trans, id, date, updateForm, onUpdateDailyWord, onDeleteDailyWord}) => {
  const [editMode, toggleEditMode] = useState(false)
  const [form, editForm] = useState({
    name: '',
    translation: ''
  })

  const handleEdit = () => {
    editForm({ 
      name: name,
      translation: trans})
    toggleEditMode(true)
  } 

  const handleUpdate = () => {
    toggleEditMode(false)
    onUpdateDailyWord(id, form) 
  }

  const handleChange = (e) => {
    console.log(e.target.id)
    console.log(e.target.value)
    editForm({ ...form, [e.target.id]: e.target.value })
  }

  let editButtonRender = <div className="update-item" onClick={handleEdit}>Edit</div>

  if (editMode) {
    editButtonRender = <div className="update-item" onClick={handleUpdate}>Update</div>
  }

  let itemsRender = <span >
  <div className="tracked-name">
    {name}
  </div>
  <div className="tracked-translation"><strong>Translation:</strong> {trans}</div>
  <div className="tracked-date">{date}</div>

  </span>
  if (editMode) {
    itemsRender = <span >
    <div className="tracked-name">
      <input id="name" value={form.name} onChange={handleChange}/>
    </div>
    <div className="tracked-translation"><strong>Translation:</strong> 
      <input id="translation" value={form.translation} onChange={handleChange} />
    </div>
    <div className="tracked-date">{date}</div>
  </span>
  }

  return (
    <div className="tracked-item">
      {itemsRender}
      {editButtonRender}
      <div className="delete-item" onClick={()=> onDeleteDailyWord(id)}>Delete</div>
    </div>
  )
}

export default TrackedItems