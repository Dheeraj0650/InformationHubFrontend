import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Results.css'
import ResultsCard from './ResultsCard';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


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

export default function(){
  const classes = useStyles();
  const [timeOption,setTimeOption] = useState('');
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  var details = history.location.state.details;
  var detailsArray = {
    current:false,
    hourly:false,
    minutely:false,
    daily:false,
    alerts:false
  };
  for(var time in details){
    if(time in detailsArray){
      detailsArray[time] = details[time];
    }
  }
  var currentTime = detailsArray.current;
  var hourTime = detailsArray.hourly;
  var minuteTime = detailsArray.minutely;
  var dailyTime = detailsArray.daily;
  var alertsTime = detailsArray.alerts;

  var timeKeys = Object.keys(currentTime);
  const handleChange = (event) => {
    setTimeOption(event.target.value);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // <ResultsCard class = "card l-bg-cherry" />
  // <ResultsCard class = "card l-bg-blue-dark"/>
  // <ResultsCard class = "card l-bg-green-dark"/>
  // <ResultsCard class = "card l-bg-orange-dark"/>
  // <div style = {{fontSize:"2rem",textAlign:"center",color:"#6a197d",marginBottom:"1rem"}}>Current</div>
  return (
    <div class = "container results-container" style={{textAlign:'center'}}>
      <FormControl className={classes.formControl} style={{minWidth: 250,marginBottom:"2rem"}} >
        <InputLabel id="demo-controlled-open-select-label" style = {{fontSize:"1.1rem",color:"#6a197d"}}>Time Options</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
        >
          <MenuItem value={''}>None</MenuItem>
          {detailsArray.current && <MenuItem value={'current'}>current</MenuItem>}
          {detailsArray.daily && <MenuItem value={'daily'}>daily</MenuItem>}
          {detailsArray.minutely && <MenuItem value={'minutely'}>minutely</MenuItem>}
          {detailsArray.hourly && <MenuItem value={'hourly'}>hourly</MenuItem>}
          {detailsArray.alerts && <MenuItem value={'alerts'}>alerts</MenuItem>}
        </Select>
      </FormControl>
      <div class = "results">
          {(timeOption === "" ) && <div class = "container results_1" ><img src="./select.webp" width="360"/></div>}
          {timeOption === "current" && timeKeys.map((key,index) => {
            var weatherIcon = `http://openweathermap.org/img/wn/${currentTime.weather[0].icon}@2x.png`;
            var weather = currentTime.weather[0].description;
            if(typeof currentTime[key] === "number"){
              return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {currentTime[key]} weatherIcon = {weatherIcon} weather={weather}/>
            }
          })}
          {timeOption === "daily" && dailyTime.map((info) => {
            var dailyKeys = Object.keys(info);
            var weatherIcon = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
            var weather = info.weather[0].description;
            return <div class = "results_1">
                      {dailyKeys.map((key,index) => {
                        if(typeof info[key] === "number"){
                          return <ResultsCard class = "card l-bg-cherry" heading = {key} value = {info[key]} weatherIcon = {weatherIcon} weather={weather}/>
                        }
                      })}
                  </div>
          })}
          {timeOption === "minutely" && minuteTime.map((info) => {
            var minuteKeys = Object.keys(info);
            var weatherIcon = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
            var weather = info.weather[0].description;
            return <div class = "results_1">
                      {minuteKeys.map((key,index) => {
                        if(typeof info[key] === "number"){
                          return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {info[key]} weatherIcon = {weatherIcon} weather={weather}/>
                        }
                      })}
                  </div>
          })}
          {timeOption === "hourly" && hourTime.map((info) => {
            var hourKeys = Object.keys(info);
            var weatherIcon = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
            var weather = info.weather[0].description;
            return <div class = "results_1">
                      {hourKeys.map((key,index) => {
                        if(typeof info[key] === "number"){
                          return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {info[key]} weatherIcon = {weatherIcon} weather={weather}/>
                        }
                      })}
                  </div>
          })}
          {timeOption === "alerts" && alertsTime.map((key,index) => {
            if(typeof alertsTime[key] === "number"){
              return <ResultsCard class = "card l-bg-orange-dark" heading = {key} value = {alertsTime[key]} />
            }
          })}
      </div>
    </div>
  );
}
