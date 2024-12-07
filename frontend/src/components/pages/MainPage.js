import React from 'react';
import InputForm from "../forms/InputForm";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import PointTable from "../PointTable";
import Graph from "../Graph";

const MainPage = () => {

    const navigate = useNavigate();
    const redirect = () => { navigate("/"); }

    return (
        <div>
            <Graph />
            <InputForm />
            <Button
                onClick={redirect}
                variant="contained"
                color="black"
            >На главную</Button>
            <PointTable />
        </div>
    );
}

export default MainPage;