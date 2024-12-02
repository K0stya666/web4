import { createStore } from 'redux'
import rootReducer from './reducers'

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const ADD_POINT = 'ADD_POINT'

const init = {
    points: []
};

export const addPoint = (point) => ({
        type: ADD_POINT,
        payload: point
});

const reducer = (state = init, action) => {
    switch (action.type) {
        case ADD_POINT: return {...state, points: [...state.points, action.payload]};
        default: return state;
    }
}

const store = createStore(reducer)

export default store;