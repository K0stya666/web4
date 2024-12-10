import React, { useState, useEffect } from "react";
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
    const [error, setError] = useState("");

    useEffect(() => {
        // Clear any existing invalid tokens
        const token = localStorage.getItem('token');
        if (token) {
            axios.get(`${API_URL}/validate`, {
                headers: { 'Authorization': `Bearer ${token}` }
            }).catch(() => {
                localStorage.removeItem('token');
                delete axios.defaults.headers.common['Authorization'];
            });
        }
    }, []);

    const navigateToRegister = () => { navigate("/register") }

    const login = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(`${API_URL}/login`, {
                username,
                password
            }, {
                withCredentials: true
            });

            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            navigate("/main");
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.error;
                if (errorMessage === "User not found") {
                    setError("Пользователь не найден");
                } else if (errorMessage === "Incorrect password") {
                    setError("Неверный пароль");
                } else {
                    setError("Произошла ошибка при входе");
                }
            } else {
                setError("Ошибка сервера");
            }
        }
    }

    return (
        <DemonicContainer maxWidth="sm">
            <DemonicCard>
                <Box sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        #DEAD
                    </Typography>

                    {error && (
                        <Typography color="error" sx={{ mb: 2 }}>
                            {error}
                        </Typography>
                    )}

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