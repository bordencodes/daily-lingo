import React from "react";

const CreateItems = () => {
  return (
    <div>
      <input type="text" placeholder="Word" />
      <input type="text" placeholder="Translation"/>
      <input type="date" />
      <button className="add-button">Add</button>
    </div>
  )
}

export default CreateItems