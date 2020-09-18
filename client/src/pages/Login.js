import React, { useState, useEffect } from 'react';
import LoginForm from "../components/LoginForm";
import ReactAutoScroll from "../components/ReactAutoScroll";
import SocialJumbotron from "../components/Jumbotron";





function LoginPage() {

  return(
  <div>
  <SocialJumbotron />
  <ReactAutoScroll></ReactAutoScroll>
   <LoginForm />
   </div>
  
  );
   
 
      

    
  }


       


export default LoginPage;