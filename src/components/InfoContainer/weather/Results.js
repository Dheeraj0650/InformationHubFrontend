import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Results.css';
import ResultsCard from './ResultsCard';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import weatherInfo from './weatherInfo';
import SelectOption from './Select'

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

  const date = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString("en-US", {timeZoneName: "short"});
    return humanDateFormat;
  }
  // <ResultsCard class = "card l-bg-cherry" />
  // <ResultsCard class = "card l-bg-blue-dark"/>
  // <ResultsCard class = "card l-bg-green-dark"/>
  // <ResultsCard class = "card l-bg-orange-dark"/>
  // <div style = {{fontSize:"2rem",textAlign:"center",color:"#6a197d",marginBottom:"1rem"}}>Current</div>
  // {timeOption === "daily" &&
  //     <Carousel variant="dark">
  //         {dailyTime.map((info) => {
  //             var dailyKeys = Object.keys(info);
  //             var weatherIcon = info.weather?`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`:'';
  //             var weather = info.weather?info.weather[0].description:'';
  //             return <Carousel.Item>
  //                       <div class = "results_1">
  //                           {dailyKeys.map((key,index) => {
  //                             if(typeof info[key] === "number"){
  //                               return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {info[key]} weatherIcon = {weatherIcon} weather={weather}/>
  //                             }
  //                           })}
  //                       </div>
  //                    </Carousel.Item>
  //         })}
  //     </Carousel>
  // }
  return (
    <div class = "container results-container" style={{textAlign:'center'}}>
          <FormControl variant="filled" className={classes.formControl} style={{minWidth: 250,marginBottom:"2rem"}} >
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
          {timeOption === "" && <div class="container"><SelectOption /></div>}
          {timeOption === "current" &&
              <div class="wrapper results-card" style={{marginLeft:'0px',marginRight:'0px'}}>
                  <div class="inner" style={{width:"70rem",paddingLeft:"0px",paddingRight:"0px"}}>
                      <h3 class="heading">Current Time</h3>
                      <p>{date(currentTime.dt)}</p>
                      <div class="container" >
                        {timeKeys.map((key,index) => {
                          var weatherIcon = `http://openweathermap.org/img/wn/${currentTime.weather[0].icon}@2x.png`;
                          var weather = currentTime.weather[0].description;
                            if(typeof currentTime[key] === "number"){
                              let value = currentTime[key];
                              let headingInfo = undefined;
                              if(['dt','sunrise','sunset','moonrise','moonset'].includes(key)){
                                  value = date(value);
                              }
                              if(key in weatherInfo){
                                headingInfo = weatherInfo[key];
                              }
                              return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {value} weatherIcon = {weatherIcon} headingInfo = {headingInfo} weather={weather}/>
                            }
                        })}
                      </div>
                 </div>
              </div>
            }
            {timeOption === "daily" &&
                <AwesomeSlider bullets = {false} style={{height:"90rem"}}>
                        {dailyTime.map((info) => {
                            var dailyKeys = Object.keys(info);
                            var weatherIcon = info.weather?`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`:'';
                            var weather = info.weather?info.weather[0].description:'';
                            return (
                                    <div class="container results">
                                        <div class="wrapper results-card">
                                              <div class="inner" style={{width:"70rem",height:"100rem",paddingLeft:"0px",paddingRight:"0px"}}>
                                                  <h3 class="heading">Daily Time</h3>
                                                  <p>{date(info.dt)}</p>
                                                  <div class="container" >
                                                      {dailyKeys.map((key,index) => {
                                                        if(typeof info[key] === "number"){
                                                          let value = info[key];
                                                          let headingInfo = undefined;
                                                          if(['dt','sunrise','sunset','moonrise','moonset'].includes(key)){
                                                              value = date(value);
                                                          }
                                                          if(key in weatherInfo){
                                                            headingInfo = weatherInfo[key];
                                                          }
                                                          return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {value} weatherIcon = {weatherIcon} headingInfo = {headingInfo} weather={weather}/>
                                                        }
                                                      })}
                                                  </div>
                                             </div>
                                          </div>
                                    </div>
                                   )
                        })}
                </AwesomeSlider>
            }
            {timeOption === "minutely" &&
            <AwesomeSlider bullets = {false} style={{height:"80rem"}}>
                    {minuteTime.map((info) => {
                        var minuteKeys = Object.keys(info);
                        var weatherIcon = info.weather?`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`:'';
                        var weather = info.weather?info.weather[0].description:'';
                        return (
                                <div class="container results">
                                    <div class="wrapper results-card">
                                          <div class="inner" style={{width:"70rem",height:"100rem",paddingLeft:"0px",paddingRight:"0px"}}>
                                              <h3 class="heading">Minutely Time</h3>
                                              <p>{date(info.dt)}</p>
                                              <div class="container" >
                                                  {minuteKeys.map((key,index) => {
                                                    if(typeof info[key] === "number"){
                                                      let value = info[key];
                                                      let headingInfo = undefined;
                                                      if(['dt','sunrise','sunset','moonrise','moonset'].includes(key)){
                                                          value = date(value);
                                                      }
                                                      if(key in weatherInfo){
                                                        headingInfo = weatherInfo[key];
                                                      }
                                                      return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {value} weatherIcon = {weatherIcon} headingInfo = {headingInfo} weather={weather}/>
                                                    }
                                                  })}
                                              </div>
                                         </div>
                                      </div>
                                </div>
                               )
                    })}
            </AwesomeSlider>
            }
            {timeOption === "hourly" &&
                <AwesomeSlider bullets = {false} style={{height:"80rem"}}>
                        {hourTime.map((info) => {
                            var hourKeys = Object.keys(info);
                            var weatherIcon = info.weather?`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`:'';
                            var weather = info.weather?info.weather[0].description:'';
                            return (
                                    <div class="container results">
                                        <div class="wrapper results-card">
                                              <div class="inner" style={{width:"70rem",height:"100rem",paddingLeft:"0px",paddingRight:"0px"}}>
                                                  <h3 class="heading">Hourly Time</h3>
                                                  <p>{date(info.dt)}</p>
                                                  <div class="container">
                                                      {hourKeys.map((key,index) => {
                                                        if(typeof info[key] === "number"){
                                                          let value = info[key];
                                                          let headingInfo = undefined;
                                                          if(['dt','sunrise','sunset','moonrise','moonset'].includes(key)){
                                                              value = date(value);
                                                          }
                                                          if(key in weatherInfo){
                                                            headingInfo = weatherInfo[key];
                                                          }
                                                          return <ResultsCard class = "card l-bg-green-dark" heading = {key} value = {value} weatherIcon = {weatherIcon} headingInfo = {headingInfo} weather={weather}/>
                                                        }
                                                      })}
                                                  </div>
                                             </div>
                                          </div>
                                    </div>
                                   )
                        })}
                </AwesomeSlider>
            }
            {timeOption === "alerts" && alertsTime.map((key,index) => {
              if(typeof alertsTime[key] === "number"){
                let value = alertsTime[key];
                if(['dt','sunrise','sunset','start','end'].includes(key)){
                    value = date(value);
                }
                return <ResultsCard class = "card l-bg-orange-dark" heading = {key} value = {value} />
              }
            })}
      </div>
  );
}
