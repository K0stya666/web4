export const SET_X = "SET_X";
export const SET_Y = "SET_Y";
export const SET_R = "SET_R";

export const setX = (x) => ({
    type: SET_X,
    payload: x,
});

export const setY = (y) => ({
    type: SET_Y,
    payload: y,
});

export const setR = (r) => ({
    type: SET_R,
    payload: r,
});