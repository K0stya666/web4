import React, {useEffect, useState} from "react";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setStatus} from "../../store/store";


const LoginForm = () => {

    const API_URL = 'http://localhost:9696/lab4/api/auth';
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigateToRegister = () => { navigate("/register") }

    const login = async (e) => {
        e.preventDefault();
        console.log('Login function called');

        await axios.post(`${API_URL}/login`, {
            username,
            password
        }, {
            withCredentials: true
        }).then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log('Зарегистрировалось с token', token);
            navigate("/main");
        }).catch(() => {
            console.log('не зарегистрировалось')
        });

    }

    return (
        <Container maxWidth="sm">

            <Box sx={{ mt: 8 }}>
                <Typography variant="h4">
                    Вход
                </Typography>
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
                    onClick={navigateToRegister}
                    variant="contained"
                    color="black"
                >Регистрация</Button>

                <Button
                    sx={{ mt: 2 }}
                    type="submit"
                    onClick={login}
                    variant="contained"
                    color="black"
                >Войти</Button>
            </Box>

        </Container>

)}

export default LoginForm;