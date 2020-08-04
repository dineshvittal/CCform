import React,{useEffect,useState} from 'react';
import './App.css';
import Vcard from './Vcard.jfif';
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";

 


function Ctest(match) {
    
  const location = useLocation()
  const user = "dine";
  console.log(match)
  console.log(location.state)
  
  
    return (
        
      <div>
          <img src = {Vcard}></img>
          <br></br>
        <p>Congratulations!!! your are granded with privileged   {location.state} . The card has annual percentage rate (APR) of 1.2% . Please use this card as shopping card to benefit the case back offer.  </p>
        <p>This contains wthdrawal limit of $10000</p>
        <br></br><br></br><br></br><br></br>
      </div>
    );
  }
  
  export default Ctest;