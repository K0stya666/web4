import React from 'react';
import InputForm from "./InputForm";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import PointTable from "./PointTable";

const MainPage = () => {

    const navigate = useNavigate();
    const redirect = () => { navigate("/"); }

    return (
        <div>
            <InputForm />
            <Button
                onClick={redirect}
                variant="contained"
                color="black"
            >На главную</Button>
            <PointTable />
            <PointTable />
        </div>
    );
}

export default MainPage;