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
        <DemonicContainer maxWidth="sm">
            <DemonicCard>
                <Box sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        Регистрация Души
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
                                Зарегистрироваться
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