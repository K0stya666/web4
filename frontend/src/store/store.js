import { createStore } from 'redux'

const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_R = 'SET_R';
const ADD_POINT = 'ADD_POINT';
const CLEAR_POINTS = 'CLEAR_POINTS';

const init = {
    r: 3,
    username: "unknown",
    password: "",
    points: []
}

export const setR = (r) => ({
    type: SET_R,
    payload: r
});

export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username
});

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
});


export const addPoint = (point) => ({
    type: ADD_POINT,
    payload: point
});


export const clearPoints = () => ({
    type: CLEAR_POINTS,
});

const reducer = (state = init, action) => {
    switch (action.type) {
        case ADD_POINT: return {...state, points: [...state.points, action.payload]};
        case CLEAR_POINTS: return {...state, points: []};
        case SET_R: return {...state, r: action.payload};
        case SET_USERNAME: return {...state, username: action.payload};
        case SET_PASSWORD: return {...state, points: action.payload};
        default: return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;