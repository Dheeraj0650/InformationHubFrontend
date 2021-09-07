import React from "react";

export default function(props){
  return (
    <label class="form-group">
      <input name = {props.name} type="text" class="form-control"  required/>
      <span>{props.name}</span>
      <span class="border"></span>
    </label>
  );
}
