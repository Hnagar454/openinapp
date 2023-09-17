import React from "react";
import { DiGithubBadge } from 'react-icons/di';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';



function signin(){

    return(

<div className="main">
    
    <div className="LeftMain">
    <svg xmlns="http://www.w3.org/2000/svg" width="720" height="1024" viewBox="0 0 720 1024" fill="none">
  <path d="M0 0L719.988 0L569.314 1024H0V0Z" fill="url(#paint0_linear_0_147)"/>
  <defs>
    <linearGradient id="paint0_linear_0_147" x1="359.994" y1="0" x2="359.994" y2="1024" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4285F4"/>
      <stop offset="1" stop-color="#286DE0"/>
    </linearGradient>
  </defs>
</svg>

<h1>LOGO</h1>
<h3>BOARD.</h3>
<div className="logos">

<h1><DiGithubBadge /></h1>
<h1><AiFillTwitterCircle /></h1>
<h1><AiFillLinkedin/></h1>

</div>
    </div>
    <div className="RightMain">
    <h1> Sign In </h1>
    <p> sign in to you Account
    </p>
    </div>
  
     </div>

    )


}


export default signin