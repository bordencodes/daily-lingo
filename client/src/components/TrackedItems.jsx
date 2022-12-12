import React from "react";

const TrackedItems = ({name, trans, id, date, onDeleteDailyWord}) => (
  <div>
    <li>
    <div className="tracked-item">
      <span className="tracked-name">{name}</span>
      <span className="tracked-translation">Translation: {trans}</span>
      <span className="tracked-date">{date}</span>
      <span className="delete-item" onClick={()=> onDeleteDailyWord(id)}>Delete</span>
    </div>
    </li>
  </div>
)

export default TrackedItems