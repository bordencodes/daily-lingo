import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

const Signin = () => {

const [userSignin, setUserSignin] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
})

const handleSigninChange = (e) => {
  const {id, value} = e.target
  setUserSignin((current) => ({
    ...current,
    [id]: value,
}))
}

  return (
    <div>
      <div className='form-header'>SignIn</div>
      <form className='form-containers'>
        <section>
        <label></label>
        <input type="text" id="email" placeholder="Email" maxLength="75" onChange={handleSigninChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="password" placeholder="Password" onChange={handleSigninChange}></input>
        </section>
        <button className='form-buttons' type="submit">Submit</button>
      </form>
      <div>Don't have an account? <Link to="/register" className='links'>Register</Link></div>
    </div>
  )
}

export default Signin