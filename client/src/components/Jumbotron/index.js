import "./style.css";
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const SocialJumbotron = (props) => {
  return (
    
      <Jumbotron fluid>
        
        <div className="container-full-bg d-flex align-items-center justify-content-center">
        <img className="logo" src="../../assets/image/socialLogo_vectorGreen.svg" alt="logo"/>

        
        </div>
      </Jumbotron>
    
  );
};

export default SocialJumbotron;