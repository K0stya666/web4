import React from 'react';
import InputForm from "./InputForm";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

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
        </div>
    );
}

export default MainPage;