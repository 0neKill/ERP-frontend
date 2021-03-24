import {combineReducers} from 'redux';

//Reducers
import reducerGeneral from "./general";

//Types
import {IRootReducer} from '../../types/store/reducers/rootReducer';


export default combineReducers<IRootReducer>({
    general: reducerGeneral,
})


