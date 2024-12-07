import React from 'react';
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import {Button, Link} from "@mui/material";

const StartPage = () => {

    const navigate = useNavigate();

    const redirect = () => { navigate('/main') }

    return (
        <div>
            <Header />
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