import home from './home';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


let reducer = combineReducers({
    home,
    router:routerReducer
});
export default reducer;
