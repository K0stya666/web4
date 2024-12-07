import React from 'react';
import Header from "../Header";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import RegisterForm from "../forms/RegisterForm";

const StartPage = () => {

    const navigate = useNavigate();
    const redirect = () => { navigate('/main') }



    return (
        <div>
            <Header />
            <RegisterForm />
            <Button
                onClick={redirect}
                variant="contained"
                color="black"
                to="main"
            >На основную</Button>
        </div>
    )
}

export default StartPage;