import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DemonicContainer from "../layout/DemonicContainer";
import DemonicInput from "../common/DemonicInput";
import DemonicButton from "../common/DemonicButton";
import DemonicCard from "../common/DemonicCard";

const RegisterForm = () => {
    const API_URL = 'http://localhost:9696/lab4/api/auth';
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    const register = async (e) => {
        e.preventDefault();
        setError("");

        if (password.length < 6) {
            setError("Пароль должен содержать минимум 6 символов");
            return;
        }

        if (password !== confirm) {
            setError("Пароли не совпадают");
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/register`, {
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
            if (error.response && error.response.data.error === "Username already taken") {
                setError("Пользователь с таким именем уже существует");
            } else {
                setError("Ошибка при регистрации");
            }
        }
    }

    const navigateToStart = () => { navigate("/"); }

    return (
        <DemonicContainer maxWidth="sm">
            <DemonicCard>
                <Box sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        Регистрация Души
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

                        <DemonicInput
                            label="Подтверждение пароля"
                            type="password"
                            fullWidth
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            placeholder="Confirm password"
                            required
                        />

                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <DemonicButton
                                onClick={register}
                                variant="contained"
                                fullWidth
                            >
                                Pass away (Зарегистрироваться)
                            </DemonicButton>

                            <DemonicButton
                                onClick={navigateToStart}
                                variant="contained"
                                fullWidth
                            >
                                На главную
                            </DemonicButton>
                        </Box>
                    </Box>
                </Box>
            </DemonicCard>
        </DemonicContainer>
    )
}

export default RegisterForm;