import {createStore} from 'redux';
import Cookies from 'js-cookie';

const authReducer = (state = {isLoggedIn : false}, action) => {
  if(action.type === 'login'){
    Cookies.set('information-hub-cookie', true, { expires: 2 });
    return {
      isLoggedIn: true,
    };
  }
  else if(action.type === 'logout'){
    Cookies.remove('information-hub-cookie');
    return {
      isLoggedIn: false,
    };
  }

  return state;
}

const store = createStore(authReducer);

export default store;
