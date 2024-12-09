import React, {useState} from "react";
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setPassword, setStatus, setUsername} from "../../store/store";

const RegisterForm = () => {

    const API_URL = 'http://localhost:9696/lab4/api/auth';
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const username = useSelector((state) => state.username)

    const register = async (e) => {
        e.preventDefault();
        console.log('Register function called');
        // dispatch(setStatus('REGISTER'));
        // setName(username);
        // setPass(password);

        await axios.post(`${API_URL}/register`, {
            username,
            password
        }, {
            withCredentials: true
        }).then((response) => {
            // dispatch(setStatus('REGISTER_SUCCESS'));
            // console.log('Username:', data.username)
            // dispatch(setUsername(username));
            // dispatch(setPassword(password));
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log('Зарегистрировалось с token', token);
        }).catch((error) => {
            dispatch(setStatus('REGISTER_FAILED'));
            // dispatch({
            //     type: 'REGISTER_FAILED',
            //     payload: error.response?.data?.message || 'Register failed'
            // });
            console.log('не зарегистрировалось')
        });

        navigate("/main");
    }

    return (
        <Container maxWidth="sm">

            <Box sx={{ mt: 8 }}>
                <Typography variant="h4">
                    Регистрация
                </Typography>
                {/*{ auth.error && (*/}
                {/*    <Alert severity="error" sx={{ mb: 2 }}>{ auth.error }</Alert>*/}
                {/*)}*/}
            </Box>

            <Box component="form">
                <TextField
                    label="Имя"
                    variant="outlined"
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter login"
                    required
                />

                <TextField
                    label="Пароль"
                    type="password"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                />

                <Button
                    sx={{ mt: 2 }}
                    type="submit"
                    onClick={register}
                    variant="contained"
                    color="black"
                >Зарегистрироваться</Button>

                <Button
                    // onClick={}
                    variant="contained"
                    color="black"
                >Войти</Button>
            </Box>

        </Container>

)}

export default RegisterForm;