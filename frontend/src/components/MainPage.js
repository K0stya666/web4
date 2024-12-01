import React from 'react';
import InputForm from "./InputForm";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import ResultTable from "./ResultTable";

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
            <ResultTable />
        </div>
    );
}

export default MainPage;