import React from 'react';
import './Results.css'

export default function(props){
  return (
    <div class="row">
      <div class="col-6" style={{fontFamily: "'Lato', sans-serif",fontSize:"22px",textAlign: "left"}}>
        {props.heading}
        <div style={{fontFamily: "'Raleway', sans-serif",fontSize:"15px"}} >{props.headingInfo?props.headingInfo:''}</div>
      </div>
      <div class="col-6" style={{fontFamily: "'Rubik', sans-serif",fontSize:"16px",textAlign: "center"}}>
        {props.value}
      </div>
    </div>
  );
}
