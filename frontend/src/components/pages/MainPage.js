import React from 'react';
import InputForm from "../forms/InputForm";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import PointTable from "../PointTable";
import Graph from "../Graph";

const MainPage = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate("/");
        window.location.reload();
    }

    return (
        <div>
            <Graph />
            <InputForm />
            <Button
                onClick={logout}
                variant="contained"
                color="black"
            >Log Out</Button>
            <PointTable />
        </div>
    );
}

export default MainPage;