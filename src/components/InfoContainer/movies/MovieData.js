import React, {useState, useEffect} from "react";
import '../InfoContainer.css';
import Dropdown from '../Dropdown';
import InputField from '../InputField';
import {useHistory, NavLink} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieCards from './MovieCards';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Weather(props){
  const classes = useStyles();
  const [data,setData] = useState([]);
  const [method,setMethod] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    if(event.target.value === "trending" || event.target.value === ""){
      getDetails([],props.api + "/Trending");
    }
    else{
      setMethod(event.target.value);
    }
  };
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };
  const history = useHistory();
  const [circularProgress,setCircularProgress] = useState("static");
  const getDetails = (details,method) => {
    setCircularProgress("indeterminate");
    fetch('https://information-hub-backend.herokuapp.com/' + method,{
      method: 'POST',
      body: details,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        setCircularProgress("static");
        setData(data.results);
        setMethod('searchResults')
    })
    .catch(err => {
        setCircularProgress("static");
    });
  }

  let clickHandler = (event) => {
    event.preventDefault();
    var details = ['query','language','region','year'];
    var values = [event.target.name.value,event.target.language.value,event.target.region.value,event.target.year.value];
    var formBody = [];
    var idx = 0;
    for (var property in details) {
      var encodedKey = encodeURIComponent(details[property]);
      var encodedValue = encodeURIComponent(values[idx]);
      formBody.push(encodedKey + "=" + encodedValue);
      idx++;
    }
    formBody = formBody.join("&");
    getDetails(formBody,props.api + "/Search");
  }
  useEffect(function(){
    getDetails([],props.api + "/Trending");
  },[]);

  let reverseTheOrder = () => {
    data.reverse();
    setData(JSON.parse(JSON.stringify(data)));
  }

  let sortBy = (value) => {
    data.sort(function(a, b) {
      if(value === "release_date"){
        var A = a[value];
        var B = b[value];
        if (A > B) {
          return 1;
        }
        if (A < B) {
          return -1;
        }
        return 0;
      }
      else if(value === "vote_average"){
        var A = a[value];
        var B = b[value];
        if (A > B) {
          return 1;
        }
        if (A < B) {
          return -1;
        }
        return 0;
      }
      else{
        var nameA = a.name?a.name.toUpperCase():a.title.toUpperCase();
        var nameB = b.name?b.name.toUpperCase():b.title.toUpperCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      }
    });
    setData(JSON.parse(JSON.stringify(data)));
  }

  return (
    <div class="container-fluid h-100" >
      <div class="container" style={{textAlign:"center"}}>
          <FormControl variant="filled" className={classes.formControl} style={{minWidth: 250,marginBottom:"2rem"}} >
            <InputLabel id="demo-controlled-open-select-label" style = {{fontSize:"1.1rem",color:"#6a197d",zIndex:"-1"}}>Options</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={handleChange}
            >
              <MenuItem value={'trending'}>Trending</MenuItem>
              <MenuItem value={'search'}>Search</MenuItem>
            </Select>
          </FormControl>
          <div class="dropdown show" style={{display:"inline"}}>
            <button class="btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginTop:"1rem"}}>
              <i class="fas fa-filter"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <span class="dropdown-item" onClick = {() => sortBy('name')}>Sort by name</span>
              <span class="dropdown-item" onClick = {() => sortBy('release_date')}>Sort by year</span>
              <span class="dropdown-item" onClick = {() => sortBy('vote_average')}>Sort by rating</span>
              <div class="dropdown-divider"></div>
              <span class="dropdown-item" onClick={reverseTheOrder}>Reverse The Order</span>
            </div>
          </div>
      </div>
      {(method === "" || method ==="trending") &&
        <div class="row align-middle">
            {data.map((info) => (<MovieCards details={info}/>))}
        </div>
      }
      {(method ==="search") &&
        <div class="container results-card">
          <div class="wrapper" >
              <div class="inner">
                <form onSubmit={clickHandler}>
                  <h3 class="heading">Search Movies</h3>
                  <p></p>
                  {props.details.map((info) => (info.type === "InputField"?<InputField name={info.name} description={info.description}/>:<Dropdown name={info.name} description={info.description} content={info.content}/>))}
                  {circularProgress==="indeterminate"? <CircularProgress class="loader" color="default" variant={circularProgress}/>:
                  <button class="form-button" type="submit" value = "submit">Submit
                    <i class="zmdi zmdi-arrow-right"></i>
                  </button>}
                </form>
             </div>
          </div>
        </div>
      }
      {(method === "searchResults") &&
        <div class="row align-middle">
            {data.map((info) => (<MovieCards details={info} />))}
        </div>
      }

   </div>
  );
}
