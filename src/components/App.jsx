import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Info from './Info';
import Tab from './Login';
import Contact from './Contact';
import {BrowserRouter as Router, Switch , Route, Redirect, NavLink} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useSelector, useDispatch} from 'react-redux';
import { authActions } from '../store/index';
import 'simplebar/dist/simplebar.min.css';
import SidebarMenuComponent from './InfoContainer/SidebarMenuComponent';
import languages from './InfoContainer/languages';
import Results from './InfoContainer/weather/Results';
import './InfoContainer/InfoContainer.css';
import SimpleBar from 'simplebar-react';
import {sidebarMenuArray, method_1} from './InfoContainer/InfoData';
import WeatherCard from './InfoContainer/weather/WeatherCards';
import WeatherData from './InfoContainer/weather/WeatherData';
import toggleDropdown from './toggleDropdown';
import Select from './Select'

function App(){
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  var redirect = false;
  useEffect(() => {
        let state = Cookies.get('information-hub-cookie');
        if(state){
          var stateParse = JSON.parse(state);
          if(stateParse.isLoggedIn){
            let username = stateParse.username;
            dispatch(authActions.login(username));
          }
        }
    }, []);


  // const loginHandler = (value) => {
  //     if(value === true){
  //       Cookies.set('information-hub-cookie', true, { expires: 2 });
  //       setIsLoggedIn(true);
  //     }
  // }
  //
  // const logoutHandler = () => {
  //     Cookies.remove('information-hub-cookie');
  //     setIsLoggedIn(false);
  // };
  return (
    <Router>
        <Switch>
            <div className="" style={{position:"absolute",left:"0",right:"0"}}>
                  <div class="navbar-container" style={{paddingTop:"0px"}}>
                      <Route path = "/">
                          <Navbar />
                      </Route>
                  </div>

                  <div class="information-part">
                      <Route path = "/">
                           {!isLoggedIn && <Intro />}
                           {isLoggedIn &&
                               <div class="main-row">
                                   <div class="menu-row" id="menu-row">
                                       <SimpleBar style={{height:"40rem"}}>
                                           {sidebarMenuArray.map((info) => (<NavLink style={{textDecoration: "none"}} to = {`./${info.name}`}><SidebarMenuComponent name={info.name} info={info.description} onClick={toggleDropdown}/></NavLink>))}
                                       </SimpleBar>
                                   </div>
                                   <button type="button" class="btn btn-outline-primary toggleDropdown" id="toggleDropdown" onClick={toggleDropdown} ><i class="fas fa-chevron-circle-right"></i></button>
                                   <div class="container info-container">
                                     <Route path = "/" exact>
                                         {isLoggedIn?<Select />:<Redirect to="/" />}
                                     </Route>
                                     <Route path = "/Weather" exact>
                                         {isLoggedIn?<WeatherCard />:<Redirect to="/" />}
                                     </Route>
                                     <Route path = "/method_1" exact>
                                         {isLoggedIn?<WeatherData info="Get complete weather data at particular location using location coordinates" heading="Location Coordinates" details={method_1} api="Weather"/>:<Redirect to="/" />}
                                     </Route>
                                     <Route path = "/results" exact>
                                         {isLoggedIn?<Results />:<Redirect to="/" />}
                                     </Route>
                                   </div>
                               </div>}
                      </Route>
                  </div>

                  <div class="container-fluid">
                      <Route path = "/">
                          {!isLoggedIn && <Info />}
                      </Route>
                  </div>

                  {!isLoggedIn && <h2 style={{fontFamily: "'Alata', sans-serif",textAlign:"center",fontSize:"3rem",paddingTop:"2rem"}}>Many More ...</h2>}
                  <div className="container-fluid" id = "login" style = {{marginTop:"7rem",display: "flex",justifyContent: "center",alignItems: "center"}}>
                      <Route path = "/">
                          {!isLoggedIn && <Tab />}
                      </Route>
                  </div>

                  <div class="" id = "bottom-section">
                      <Route path = "/">
                           <Contact />
                      </Route>
                  </div>
                  <Route path='*'>
                      <Redirect to = "/"/>
                  </Route>
           </div>
        </Switch>
    </Router>
  );
}

export default App;
