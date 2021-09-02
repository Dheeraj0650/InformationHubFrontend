import React from "react";
import '../InfoContainer.css';
import Dropdown from '../Dropdown';
import InputField from '../InputField';

export default function Weather(props){
  return (
      <div class="wrapper" >
    			<div class="inner">
    				<form action="">
    					<h3 class="heading">{props.heading}</h3>
    					<p>{props.info}</p>
              {props.details.map((info) => (info.type === "InputField"?<InputField name={info.name} description={info.description}/>:<Dropdown name={info.name} description={info.description}/>))}
    					<button class="form-button">Submit
    						<i class="zmdi zmdi-arrow-right"></i>
    					</button>
    				</form>
    			</div>
      </div>
  );
}
