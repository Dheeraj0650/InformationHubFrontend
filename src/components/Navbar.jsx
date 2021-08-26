import React from 'react';
import Logo from './Logo';
import {useSelector, useDispatch} from 'react-redux';

function Navbar(){
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  let logoutHandler = () => {
    dispatch({type:'logout'});
  }

  return (<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
        <a class="navbar-brand" href="#" style={{fontFamily: "'Pacifico', cursive",fontSize:"2.2rem"}}><Logo /><span style={{color:"#6a197d"}}>Information Hub</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" style={{textAlign:"center"}}>
            <li class="nav-item active">
              <a class="nav-link" href="#"><button type="button" className="nav-button">About</button> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-section" ><button type="button" className="nav-button">Contact</button></a>
            </li>
            <li class="nav-item">
              {!isLoggedIn && <a class="nav-link" href="#login"><button type="button" className="nav-button">Login/Signup</button></a>}
              {isLoggedIn  && <div class="btn-group">
                <a type="button" class="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <button type="button" className="nav-button dropdown-toggle"><i class="fas fa-user" style={{paddingRight:"1rem"}}></i></button>
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">User</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#" onClick={logoutHandler}>logout</a>
                </div>
              </div>
              }
            </li>
          </ul>
        </div>
      </nav>);

}

export default Navbar;
