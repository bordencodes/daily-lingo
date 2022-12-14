import React from "react";

const TrackedItems = ({name, trans, id, date, onUpdateDailyWord, onDeleteDailyWord}) => (
  <div className="tracked-item">
    <span >
      <div className="tracked-name">
        <input value={name} />
      </div>
      <div className="tracked-translation"><strong>Translation:</strong> {trans}</div>
      <div className="tracked-date">{date}</div>
      
    </span>
    <div className="update-item" onClick={()=> onUpdateDailyWord(id)}>Update</div>
    <div className="delete-item" onClick={()=> onDeleteDailyWord(id)}>Delete</div>
  </div>
)

export default TrackedItems