import { combineReducers } from "@reduxjs/toolkit";
import {SET_X, SET_Y, SET_R} from "./action";

const init = {
    x: null,
    y: '',
    r: null,
}

const formReducer = (state = init, action) => {
    switch (action.type) {
        case SET_X: return {...state, x:action.payload};
        case SET_Y: return {...state, y:action.payload};
        case SET_R: return {...state, r:action.payload};
        default: return state;
    }
}

const rootReducer = combineReducers({
    form: formReducer,
});

export default rootReducer;