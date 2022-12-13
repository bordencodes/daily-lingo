import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { RegisterUser } from '../services/Auth'

const Register = () => {

// const [authenticated, toggleAuthenticated] = useState(false)
// const [user, setUser] = useState(null)

const [userReg, setUserReg] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
})

// let navigate = useNavigate()

const handleRegChange = (e) => {
  const {id, value} = e.target
  setUserReg((current) => ({
    ...current,
    [id]: value,
}))
}

// const handleSubmit = async (e) => {
//   e.preventDefault()
// }

  return (
    <div>
      <div className='form-header'>Register</div>
      <form className='form-containers'>
        <section>
        <label></label>
        <input type="text" id="firstName" placeholder="First Name" maxLength="40" onChange={handleRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="lasttName" placeholder="Last Name" maxLength="40" onChange={handleRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="email" placeholder="Email" maxLength="75" onChange={handleRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="password" placeholder="Password" onChange={handleRegChange}></input>
        </section>
        <section>
        <label></label>
        <input type="text" id="confirmPassword" placeholder="Confirm Password" onChange={handleRegChange}></input>
        </section>
        <button className='form-buttons' type="submit">Submit</button>
      </form>
      <div className='account-note'>Already have an account? <Link to="/signin" className='links'>Sign-in</Link></div>
    </div>
  )
}

export default Register