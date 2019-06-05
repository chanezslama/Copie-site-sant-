import {combineReducers} from 'redux';
import reducerlist from './reducerlist';
import reducerlistpharmacie from './reducerpharmacie';
import reducerIMC from './reducerIMC';
import reducerreponse from './reducerreponse';

export default combineReducers({reducerlist,reducerlistpharmacie,reducerIMC,reducerreponse})