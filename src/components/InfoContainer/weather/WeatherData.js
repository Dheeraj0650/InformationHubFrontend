import React from "react";
import '../InfoContainer.css';
import Dropdown from '../Dropdown';
import InputField from '../InputField';
import {useHistory, NavLink} from 'react-router-dom';


export default function Weather(props){
  const history = useHistory();
  const getDetails = (details,method) => {
    fetch('http://localhost:9000/' + method,{
      method: 'POST',
      body: details,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        history.push('/results',{ details: data});
    })
    .catch(err => {
    });
  }
  let clickHandler = (event) => {
    event.preventDefault();
    var details = ['lat','lon','exclude','units','lang'];
    var values = [event.target.latitude.value,event.target.longitude.value,event.target.exclude.value,event.target.units.value,event.target.language.value];
    var formBody = [];
    var idx = 0;
    for (var property in details) {
      var encodedKey = encodeURIComponent(details[property]);
      var encodedValue = encodeURIComponent(values[idx]);
      formBody.push(encodedKey + "=" + encodedValue);
      idx++;
    }
    formBody = formBody.join("&");
    getDetails(formBody,props.api);
  }
  return (
    <div class="wrapper" >
  			<div class="inner">
  				<form onSubmit={clickHandler}>
  					<h3 class="heading">{props.heading}</h3>
  					<p>{props.info}</p>
            {props.details.map((info) => (info.type === "InputField"?<InputField name={info.name} description={info.description}/>:<Dropdown name={info.name} description={info.description} content={info.content}/>))}
  					<button class="form-button" type="submit" value = "submit">Submit
  						<i class="zmdi zmdi-arrow-right"></i>
  					</button>
  				</form>
  		 </div>
    </div>
  );
}
