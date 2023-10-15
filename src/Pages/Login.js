import React from 'react'
import "./login.css"
import Navbar from '../components/Navbar'

function Login() {
  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <form>
           <div className="row">

           <div className="col-md-6">
             <label htmlFor="" className="form-label">Firstname</label>
             <input type="text" className="form-control" />
            </div>

            <div className="col-md-6">
             <label htmlFor="" className="form-label">Lastname</label>
             <input type="text" className="form-control" />
            </div>

           <div className="col-md-6">
             <label htmlFor="" className="form-label">Email</label>
             <input type="email" className="form-control" />
            </div>

            <div className="col-md-6">
             <label htmlFor="" className="form-label">Password</label>
             <input type="password" className="form-control" />
            </div>

            <button type='button' className="btn btn-secondary mt-4">Submit</button>


          </div>
        </form>
      </div>
    </div>
  )
}

export default Login