import axios from "axios";
import {useSelector} from "react-redux";

export const register = (username, password) => async dispatch => {

    const API_URL = 'http://localhost:9696/lab4/api/auth';
    dispatch({ type: 'REGISTER' });

    await axios.post(`${API_URL}/register`, {
        username,
        password
    }, {
        withCredentials: true
    }).then((response) => {
        if (response.status === 201) dispatch({ type: 'REGISTER_SUCCESS' });
        console.log('Зарегистрировалось');
    }).catch((error) => {
        dispatch({
            type: 'REGISTER_FAILED',
            payload: error.response?.data?.message || 'Register failed'
        });
        console.log('не зарегистрировалось')
    });
}

export const login = (username, password) => async dispatch => {

    const API_URL = 'http://localhost:9696/lab4/api/auth';
    dispatch({ type: 'LOGIN' });

    await axios.post(`${API_URL}/login`, {
        username,
        password
    }, {
        withCredentials: true
    }).then((response) => {
        if (response.status === 200) {
            dispatch({ type: 'LOGIN_SUCCESS' });
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            dispatch({ type: 'LOGIN_SUCCESS', payload: token });
        }
    }).catch((error) => {
        dispatch({
            type: 'LOGIN_FAILED',
            payload: error.response?.data?.message || 'Login failed'
        })
    })
}