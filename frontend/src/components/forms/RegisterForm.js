import React, {useState} from "react";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import axios from "axios";
import {setStatus} from "../../store/store";
import {useNavigate} from "react-router-dom";


const RegisterForm = () => {

    const API_URL = 'http://localhost:9696/lab4/api/auth';
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("")

    const register = async (e) => {
        e.preventDefault();
        console.log('Register function called');

        if (password === confirm) {
            await axios.post(`${API_URL}/register`, {
                username,
                password
            }, {
                withCredentials: true
            }).then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                console.log('Зарегистрировалось с token', token);
            }).catch(() => {
                console.log('не зарегистрировалось')
            });

            navigate("/main");
        } else {
            alert("Пароль не такой же")
        }
    }

    const navigateToStart = () => { navigate("/"); }

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

                <TextField
                    label="Подтверждение пароля"
                    type="password"
                    margin="normal"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
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
                    sx={{ mt: 2 }}
                    type="submit"
                    onClick={navigateToStart}
                    variant="contained"
                    color="black"
                >На главную</Button>
            </Box>

        </Container>
    )
}

export default RegisterForm;