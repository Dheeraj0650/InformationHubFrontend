import React from 'react';
import {useHistory} from 'react-router-dom';
import './Results.css'
import ResultsCard from './ResultsCard';

export default function(){
  const history = useHistory();
  var details = history.location.state;
  var detailsArray = {
    'current':false,
    'hourly':false,
    'minutely':false,
    'daily':false,
    'alerts':false
  };
  var current_time = details.current;
  return (
    <div class = "results-container">
      <div>Hourly</div>
      <div class = "results">
         <ResultsCard class = "card l-bg-cherry"/>
         <ResultsCard class = "card l-bg-blue-dark"/>
         <ResultsCard class = "card l-bg-green-dark"/>
         <ResultsCard class = "card l-bg-orange-dark"/>
      </div>
    </div>
  );
}
