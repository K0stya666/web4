import { createStore } from 'redux'

const ADD_POINT = 'ADD_POINT';
const CLEAR_POINTS = 'CLEAR_POINTS';
const SET_R = 'SET_R';

const init = {
    points: [],
    r: 5
};

export const addPoint = (point) => ({
    type: ADD_POINT,
    payload: point
});
export const setRadius = (r) => ({
    type: SET_R,
    payload: r
});
export const clearPoints = () => ({
    type: CLEAR_POINTS,
});

const reducer = (state = init, action) => {
    switch (action.type) {
        case ADD_POINT: return {...state, points: [...state.points, action.payload]};
        case CLEAR_POINTS: return {...state, points: []};
        case SET_R: return {...state, r: action.payload};
        default: return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;