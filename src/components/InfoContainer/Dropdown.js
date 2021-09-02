import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function(props){
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <FormControl variant="filled" style={{width:"32rem"}}>
      <InputLabel htmlFor="filled-age-native-simple" style={{color:"#00ade6"}}>{props.name}</InputLabel>
      <Select
        native
        value={state.age}
        onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'filled-age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        <option value={10} >Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
      <span style={{margin:"8px 0 8px 0"}}>{props.description}</span>
    </FormControl>
  );
}
