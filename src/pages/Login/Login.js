import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useDispatch, useSelector } from "react-redux";

import axios  from 'axios'
import { register } from '../../redux/slices/user-slice';


function Login() {

  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [msg,setMsg] = useState("")
  const navigate =useNavigate()
   const dispatch = useDispatch()
    let userAuth = useSelector(state => state.user.username)
    let token  = useSelector(state => state.user.token)




const handleSubmit = (e)=>{

    e.preventDefault()


  axios.post('http://localhost:1337/api/auth/local', {
    identifier : `${userName}`,
    password: `${password}`,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log(response)
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    dispatch(
      register({
        username:response.data.user.username,
        token:response.data.jwt,
        seller:response.data.user.seller,
        userId:response.data.user.id

      })
    )
  
    setUserName("")
    setPassword("")
  setError("")
   setMsg("You have been logged in successfully")

    setTimeout(()=>{
      navigate("/")
     
    },2000)
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    setMsg("")
    setError("An error occurred,please try again")
  });



}





  return (
 <div className='register'>
{msg && <div className="alert alert-success" role="alert">
 {msg}
</div>}  

{error && <div class="alert alert-danger" role="alert">
 {error}
</div>}
 

<form className='mb-5' onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="InputUserName" className="form-label">User Name</label>
    <input type="text" className="form-control" id="InputUserName" onChange={(e)=>{setUserName(e.target.value)}} value={userName} />
  </div>

  <div className="mb-3">
    <label htmlFor="InputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="InputPassword" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<Link to="/register">I do not have an account sign up</Link>

    </div>
  )
}

export default Login