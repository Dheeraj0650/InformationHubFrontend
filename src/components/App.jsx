import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Info from './Info';
import Tab from './Login';
import Contact from './Contact';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import InfoMain from './InfoMain';
import Cookies from 'js-cookie';
import {useSelector, useDispatch} from 'react-redux';

function App(){
  // const [isLoggedIn,setIsLoggedIn] = useState(false);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
        let state = Cookies.get('information-hub-cookie');
        if(state){
          dispatch({type:'login'});
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
                  <div class="navbar-container">
                      <Navbar />
                  </div>

                  <div class="container-fluid information-part">
                      <Route path = "/" exact>
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
