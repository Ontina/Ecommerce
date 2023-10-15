import React from 'react'
import "./login.css"
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Login() {
  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    let form = new FormData(e.currentTarget)

    axios.post("http://localhost:8000/login/", form)
    .then((res) => {
      toast.success("login successful")
      navigate("/")
    })
    .catch((err) =>{
      if(err.response.data === "Invalid Credentials"){
        toast.error("Invalid Credentials")
      }else{
        for(let key in err.response.data){
          toast.error(`${key} ${err.response.data[key]}`)
      }
      }
    })
  }

  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <form onSubmit={handleLogin} className="login w-50 m-auto ">

           <div className="my-2">
             <label htmlFor="" className="form-label">Email</label>
             <input name="email" type="email" className="form-control" />
            </div>

            <div className="my-2">
             <label htmlFor="" className="form-label">Password</label>
             <input name="password" type="password" className="form-control" />
            </div>

            <button  className="btn btn-secondary w-100 ">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Login