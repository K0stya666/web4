import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import InputForm from "../forms/InputForm";
import PointTable from "../PointTable";
import Graph from "../Graph";
import DemonicContainer from "../layout/DemonicContainer";
import DemonicButton from "../common/DemonicButton";
import GlowEffect from "../effects/GlowEffect";
import axios from "axios";
import {Paper, Typography} from "@mui/material";

const MainPage = () => {
    const navigate = useNavigate();
    const API_URL = 'http://localhost:9696/lab4/api/auth';

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         navigate('/');
    //         return;
    //     }
    //
    //     axios.get(`${API_URL}/validate`, {
    //         headers: { 'Authorization': `Bearer ${token}` }
    //     }).catch(() => {
    //         localStorage.removeItem('token');
    //         delete axios.defaults.headers.common['Authorization'];
    //         navigate('/');
    //     });
    // }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        navigate("/");
    }

    return (
        <>
            <GlowEffect />
            <DemonicContainer>
                <Paper
                    elevation={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '32px 32px',
                        margin: '0 auto',
                        maxWidth: '600px',
                        height: '100px',
                        color: 'white',
                        backgroundColor: 'black',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        MY SOUL
                    </Typography>
                </Paper>

                <Graph />
                <InputForm />
                <DemonicButton
                    onClick={logout}
                    variant="contained"
                    fullWidth
                    sx={{ mb: 3 }}
                >
                    Выход
                </DemonicButton>
                <PointTable />
            </DemonicContainer>
        </>
    );
}

export default MainPage;