import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

const Register = () => {

const [userReg, setUserReg] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
})

const handleUserRegChange = (e) => {
  const {id, value} = e.target
  setUserReg((current) => ({
    ...current,
    [id]: value,
}))
}

// const handleSubmit = () => {

// }

// onClick={handleSubmit}

  return (
    <div>
      <div className='form-header'>Register</div>
      <form className='form-containers'>
        <section>
        <label></label>
        <input type="text" id="firstName" placeholder="First Name" maxLength="40" onChange={handleUserRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="lasttName" placeholder="Last Name" maxLength="40" onChange={handleUserRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="email" placeholder="Email" maxLength="75" onChange={handleUserRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="password" placeholder="Password" onChange={handleUserRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="confirmPassword" placeholder="Confirm Password" onChange={handleUserRegChange}></input>
        </section>
        <button className='form-buttons' type="submit">Submit</button>
      </form>
      <div className='account-note'>Already have an account? <Link to="/signin" className='links'>Sign-in</Link></div>
    </div>
  )
}

export default Register