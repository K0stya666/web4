import { createStore } from 'redux'

const ADD_POINT = 'ADD_POINT';
const CLEAR_POINTS = 'CLEAR_POINTS';

const init = {
    points: []
};

export const addPoint = (point) => ({
        type: ADD_POINT,
        payload: point
});
export const clearPoints = () => ({
    type: CLEAR_POINTS,
})

const reducer = (state = init, action) => {
    switch (action.type) {
        case ADD_POINT: return {...state, points: [...state.points, action.payload]};
        case CLEAR_POINTS: return {...state, points: []};
        default: return state;
    }
}

const store = createStore(reducer)

export default store;