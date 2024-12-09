import { createStore } from 'redux'

const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_R = 'SET_R';
const ADD_POINT = 'ADD_POINT';
const CLEAR_POINTS = 'CLEAR_POINTS';
// const LOGIN = 'LOGIN';
// const REGISTER = 'REGISTER';
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// const LOGIN_FAILED = 'LOGIN_FAILED';
// const REGISTER_FAILED = 'REGISTER_FAILED';
const SET_STATUS = 'STATUS';

const init = {
    r: 3,
    // username: "",
    // password: "",
    points: [],
    api: 'http://localhost:9696/lab4/api/areaCheck',
    isAuthorized: false,
    token: null,
    loading: false,
    error: null,
    status: ''
}



export const setR = (r) => ({
    type: SET_R,
    payload: r
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    payload: status
});

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
})

export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username
})

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
        case SET_PASSWORD: return {...state, password: action.payload};

        case SET_STATUS: return {...state, status: action.payload};

        // case LOGIN: return { ...state, loading: true, error: null };
        // case REGISTER: return { ...state, loading: true, error: null };
        // case LOGIN_SUCCESS: return { ...state, isAuthorized: true, loading: false, token: action.payload };
        // case REGISTER_SUCCESS: return { ...state, loading: false, error: null };
        // case LOGIN_FAILED: return { ...state, loading: false, error: action.payload };
        // case REGISTER_FAILED: return { ...state, loading: false, error: action.payload };

        default: return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;