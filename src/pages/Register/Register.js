import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useDispatch, useSelector } from "react-redux";
import axios  from 'axios'
import { register } from '../../redux/slices/user-slice';


function Register() {

  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [seller,setIsSeller] = useState(false)
  const [image,setImage]=useState("")
  const [error,setError] = useState("")
  const [msg,setMsg] = useState("")

  const navigate =useNavigate()
   const dispatch = useDispatch()
    let userAuth = useSelector(state => state.user.username)
    let token  = useSelector(state => state.user.token)


const handleSubmit = async (e)=>{
  axios
  .post('http://localhost:1337/api/auth/local/register', {
    username: `${userName}`,
    email: `${email}`,
    password: `${password}`,
    seller:`${seller}`,
   
  })
  .then(response => {
    // Handle success.
    console.log(response)
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    dispatch(
      register({
        username:response.data.user.username,
        token:response.data.jwt,
        seller:response.data.user.seller,
        userId:response.data.user.id,
      })
    )
  
    setEmail("")
    setUserName("")
    setPassword("")

    setError("")
    setMsg("You have been registerd in successfully")

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
{msg && <div class="alert alert-success" role="alert">
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
    <label htmlFor="InputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="InputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="InputPassword" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
  </div>
 
  <div class="form-check form-switch mb-3" >
  <input className="form-check-input" type="checkbox" id="sellerInput" style={{cursor:"pointer"}} onClick={(e)=> setIsSeller(e.target.checked)}/>
  <label className="form-check-label" htmlFor="sellerInput">Are You seller</label>
</div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<Link to="/login">already i have an account log in</Link>

    </div>
  )
}

export default Register