import React,{useEffect,useState} from 'react';
import './App.css';
import Bar from './BB.jfif';
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";

 


function Result(match) {
    
  const location = useLocation()
  const user = "dine";
  console.log(match)
  console.log(location.state)
  
  
    return (
        
      <div>
          <img src = {Bar}></img>
          <br></br>
        <p>Congratulations!!  your are granded with {location.state} Card. The card has annual percentage rate (APR) of 0.8% . Please use this card as fuel card to benefit the case back offer.  </p>
        <br></br><br></br><br></br><br></br>
      </div>
    );
  }
  
  export default Result;