import React from 'react';
import './InfoContainer.css';
import SimpleBar from 'simplebar-react';
import WeatherCard from './weather/WeatherCards';
import WeatherData from './weather/WeatherData';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import 'simplebar/dist/simplebar.min.css';
import SidebarMenuComponent from './SidebarMenuComponent';
import {NavLink} from 'react-router-dom';

export default function InfoContainer(){
  var sidebarMenuArray = [
    { name:'Weather',
      description:'get the information about weather'
    },
    { name:'Movies',
      description:'get the information about Movies'
    },
    { name:'Dogs',
      description:'get the information about Dogs'
    },
    { name:'Nasa',
      description:'get the information about Nasa'
    },
    { name:'Food',
      description:'get the information about Food'
    },
    { name:'Food',
      description:'get the information about Food'
    },
    { name:'Food',
      description:'get the information about Food'
    },
    { name:'Food',
      description:'get the information about Food'
    },
    { name:'Food',
      description:'get the information about Food'
    },
    { name:'Food',
      description:'get the information about Food'
    },
  ];

  var method_1 = [
  {
    type:"InputField",
    name:"latitude",
  },
  {
    type:"InputField",
    name:"latitude",
  },
  {
    type:"Dropdown",
    name:"exclude",
    description:"exclude some parts of the weather data from the API response"
  },
  {
    type:"Dropdown",
    name:"units",
    description:"Units of measurement"
  },
  {
    type:"Dropdown",
    name:"language",
    description:"You can use the lang parameter to get the output in your language"
  },
];

  return (
    <Router>
        <Switch>
            <div class="main-row">
                <div class="menu-row">
                    <SimpleBar style={{height:"40rem"}}>
                        {sidebarMenuArray.map((info) => (<NavLink to = {`./${info.name}`}><SidebarMenuComponent name={info.name} info={info.description} /></NavLink>))}
                    </SimpleBar>
                </div>
                <div class="container info-container">
                  <Route path = "/Weather" exact>
                    <WeatherCard />
                  </Route>
                  <Route path = "/method_1" exact>
                      <WeatherData info="Get complete weather data at particular location using location coordinates" heading="Location Coordinates" details={method_1}/>
                  </Route>
                </div>
            </div>
        </Switch>
    </Router>
  );
}
