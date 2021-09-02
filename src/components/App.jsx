import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Info from './Info';
import Tab from './Login';
import Contact from './Contact';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import InfoMain from './InfoContainer/InfoContainer';
import Cookies from 'js-cookie';
import {useSelector, useDispatch} from 'react-redux';
import { authActions } from '../store/index';

function App(){
  // const [isLoggedIn,setIsLoggedIn] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

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
                      <Navbar />
                  </div>

                  <div class="information-part">
                      <Route path = "/" >
                           {!isLoggedIn && <Intro />}
                           {isLoggedIn && <InfoMain />}
                       </Route>
                  </div>

                  <div class="container-fluid">
                      <Route path = "/" exact>
                          {!isLoggedIn && <Info />}
                      </Route>
                  </div>

                  {!isLoggedIn && <h2 style={{fontFamily: "'Alata', sans-serif",textAlign:"center",fontSize:"3rem",paddingTop:"2rem"}}>Many More ...</h2>}
                  <div className="container-fluid" id = "login" style = {{marginTop:"7rem",display: "flex",justifyContent: "center",alignItems: "center"}}>
                      <Route path = "/" exact>
                          {!isLoggedIn && <Tab />}
                      </Route>
                  </div>

                  <div class="" id = "bottom-section">
                       <Contact />
                  </div>
           </div>
        </Switch>
    </Router>
         );

}

export default App;
