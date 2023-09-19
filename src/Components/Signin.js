import React from "react";
import { DiGithubBadge } from 'react-icons/di';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';



function signin() {

  return (

    <div className="main">

      <div className="LeftMain">
        <svg xmlns="http://www.w3.org/2000/svg" width="720" height="1024" viewBox="0 0 720 1024" fill="none">
          <path d="M0 0L719.988 0L569.314 1024H0V0Z" fill="url(#paint0_linear_0_147)" />
          <defs>
            <linearGradient id="paint0_linear_0_147" x1="359.994" y1="0" x2="359.994" y2="1024" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4285F4" />
              <stop offset="1" stop-color="#286DE0" />
            </linearGradient>
          </defs>
        </svg>

        <h1>LOGO</h1>
        <h3>BOARD.</h3>
        <div className="logos">

          <h1><DiGithubBadge /></h1>
          <h1><AiFillTwitterCircle /></h1>
          <h1><AiFillLinkedin /></h1>

        </div>
      </div>
      <div className="RightMain">
        <h1> Sign In </h1>
        <p> Sign in to you Account
        </p>
        <div>
   
        <form className="form">
      <div className="form-floating mt-3">
        <h6>Email Address </h6>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

      </div>
      <div className="form-floating mt-3 ">
      <h6> Password </h6>
        <input type="password" className="form-control input-sm" id="inputdefault" placeholder="Password"/>
      </div>
      <button className="btn btn-primary  mt-3" type="submit">Sign in</button>
      <h5> Don't have Any Account <a href="#">Register Here</a> </h5>
    </form>

   </div>
      </div>
    </div>

  )


}


export default signin