import React from 'react';
import './Results.css'

export default function(props){
  return (
    <div class={props.class}>
         <div class="card-statistic-3 p-4">
             <div class="card-icon card-icon-large"><img src={props.weatherIcon} /></div>
             <div class="mb-4">
                 <h2 class="card-title mb-0">{props.heading}</h2>
             </div>
             <div class="row align-items-center mb-2 d-flex">
                 <div class="col-8">
                     <h5 class="d-flex align-items-center mb-0">
                         {props.value}
                     </h5>
                 </div>
                 <div class="col-4 text-right">
                     <span>{props.weather}</span>
                 </div>
             </div>
             <div class="progress mt-1 " data-height="8" style={{height: "8px"}}>
                 <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
             </div>
         </div>
     </div>
  );
}
