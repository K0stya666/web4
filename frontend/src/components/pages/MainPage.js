import React from 'react';
import { useNavigate } from "react-router-dom";
import InputForm from "../forms/InputForm";
import PointTable from "../PointTable";
import Graph from "../Graph";
import DemonicContainer from "../layout/DemonicContainer";
import DemonicButton from "../common/DemonicButton";
import GlowEffect from "../effects/GlowEffect";

const MainPage = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/");
        window.location.reload();
    }

    return (
        <>
            <GlowEffect />
            <DemonicContainer>
                <Graph />
                <InputForm />
                <DemonicButton
                    onClick={logout}
                    variant="contained"
                    fullWidth
                    sx={{ mb: 3 }}
                >
                    Выход из Портала
                </DemonicButton>
                <PointTable />
            </DemonicContainer>
        </>
    );
}

export default MainPage;