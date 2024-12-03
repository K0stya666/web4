import { createStore } from 'redux'

const ADD_POINT = 'ADD_POINT';
const CLEAR_POINTS = 'CLEAR_POINTS';
const SET_X = 'SET_X';
const SET_Y = 'SET_Y';
const SET_R = 'SET_R';

const init = {
    // x: null,
    // y: '',
    r: 3,
    points: []
}


// export const setX = (x) => ({
//     type: SET_X,
//     payload: x
// });
//
// export const setY = (y) => ({
//     type: SET_Y,
//     payload: y
// })

export const setR = (r) => ({
    type: SET_R,
    payload: r
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
        case SET_X: return {...state, x: action.payload};
        case SET_R: return {...state, r: action.payload};
        default: return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;