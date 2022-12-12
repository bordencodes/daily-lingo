// import { useState, useEffect } from 'react'
// import axios from 'axios'
import React from 'react'

const Habits = () => {
  let habitID = new Uint32Array(8)
  window.crypto.getRandomValues(habitID)
  let id = ''
  for (let i = 0; i < habitID.length; i++) {
    id += (i < 2 || i > 5 ? '' : '-') + habitID[i].toString()
  }

  return id
}

export default Habits
