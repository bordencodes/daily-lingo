import React from "react";

const TrackedItems = ({name, trans, id, date, onDeleteDailyWord}) => (
  <div className="tracked-item">
    <span >
      <div className="tracked-name">{name}</div>
      <div className="tracked-translation"><strong>Translation:</strong> {trans}</div>
      <div className="tracked-date">{date}</div>
      
    </span>
    <div className="delete-item" onClick={()=> onDeleteDailyWord(id)}>Delete</div>
  </div>
)

export default TrackedItems