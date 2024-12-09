import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DemonicContainer from "../layout/DemonicContainer";
import DemonicInput from "../common/DemonicInput";
import DemonicButton from "../common/DemonicButton";
import DemonicCard from "../common/DemonicCard";

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
        <DemonicContainer maxWidth="sm">
            <DemonicCard>
                <Box sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        Вход в Демонический Портал
                    </Typography>

                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <DemonicInput
                            label="Имя"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter login"
                            required
                        />

                        <DemonicInput
                            label="Пароль"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />

                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <DemonicButton
                                onClick={navigateToRegister}
                                variant="contained"
                                fullWidth
                            >
                                Регистрация
                            </DemonicButton>

                            <DemonicButton
                                onClick={login}
                                variant="contained"
                                fullWidth
                            >
                                Войти
                            </DemonicButton>
                        </Box>
                    </Box>
                </Box>
            </DemonicCard>
        </DemonicContainer>
    )
}

export default LoginForm;