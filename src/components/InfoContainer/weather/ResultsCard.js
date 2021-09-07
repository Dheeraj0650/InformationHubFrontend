import React from 'react';
import './Results.css'

export default function(props){
  return (
    <div class={props.class}>
         <div class="card-statistic-3 p-4">
             <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
             <div class="mb-4">
                 <h5 class="card-title mb-0">New Orders</h5>
             </div>
             <div class="row align-items-center mb-2 d-flex">
                 <div class="col-8">
                     <h2 class="d-flex align-items-center mb-0">
                         3,243
                     </h2>
                 </div>
                 <div class="col-4 text-right">
                     <span>12.5% <i class="fa fa-arrow-up"></i></span>
                 </div>
             </div>
             <div class="progress mt-1 " data-height="8" style={{height: "8px"}}>
                 <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "25%"}}></div>
             </div>
         </div>
     </div>
  );
}
