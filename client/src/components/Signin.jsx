import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Signin = (props) => {

const [userSignin, setUserSignin] = useState({
  email: "",
  password: ""
})

let navigate = useNavigate()

const handleSigninChange = (e) => {
  setUserSignin({ ...userSignin, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
  e.preventDefault()
  const payload = await SignInUser(formValues)
  setUserSignin({ email: '', password: '' })
  props.setUser(payload)
  props.toggleAuthenticated(true)
  navigate('/home')
}

// //original
// const handleSigninChange = (e) => {
//   const {id, value} = e.target
//   setUserSignin((current) => ({
//     ...current,
//     [id]: value,
// }))
// }

  return (
    <div>
      <div className='form-header'>Sign-In</div>
      <form className='form-containers' onSubmit={handleSubmit}>
        <section>
        <label htmlFor='email'></label>
        <input name="email" type="text" value={userSignin.email} placeholder="Email" maxLength="75" onChange={handleSigninChange} required></input>
        </section>
        <section>
        <label htmlFor='password'></label>
        <input name="password" type="text" value={userSignin.password} placeholder="Password" onChange={handleSigninChange} required></input>
        </section>
        <button className='form-buttons' type="submit" disabled={!userSignin.email || !userSignin.password}>Submit</button>
      </form>
      <div className='account-note'>Don't have an account? <Link to="/register" className='links'>Register</Link></div>
    </div>
  )
}

export default Signin