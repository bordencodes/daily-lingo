import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
const [userReg, setUserReg] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
})

let navigate = useNavigate()

const handleRegChange = (e) => {
  setUserReg({ ...userReg, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
  e.preventDefault()
  await RegisterUser({
    firstName: userReg.firstName,
    lastName: userReg.lastName,
    email: userReg.email,
    userPassword: userReg.password,
  })

  setUserReg({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  navigate('/signin')
}

  return (
    <div>
      <div className='form-header'>Register</div>
      <form className='form-containers' onSubmit={handleSubmit}>
        <section>
          <label htmlFor="firstName"></label>
          <input name="firstName" type="text" value={userReg.firstName} placeholder="First Name" maxLength="40" onChange={handleRegChange} required></input>
        </section>
        <section>
          <label htmlFor="lastName"></label>
          <input name="lastName" type="text" value={userReg.lastName} placeholder="Last Name" maxLength="40" onChange={handleRegChange} required></input>
        </section>
        <section>
          <label htmlFor="email"></label>
          <input name="email" type="text" value={userReg.email} placeholder="Email" maxLength="75" onChange={handleRegChange} required></input>
        </section>
        <section>
          <label htmlFor="password"></label>
          <input name="password" type="text" value={userReg.password} placeholder="Password" onChange={handleRegChange} required></input>
        </section>
        <section>
          <label htmlFor="confirmPassword"></label>
          <input name="confirmPassword" type="text" value={userReg.confirmPassword} placeholder="Confirm Password" onChange={handleRegChange} required></input>
        </section>
        <button className='form-buttons' type="submit" disabled={
              !userReg.email ||
              (!userReg.password &&
                userReg.confirmPassword === userReg.password)
            }>Submit</button>
      </form>
      <div className='account-note'>Already have an account? <Link to="/signin" className='links'>Sign-in</Link></div>
    </div>
  )
}

export default Register