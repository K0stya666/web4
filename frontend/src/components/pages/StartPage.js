import React from 'react';
import Header from "../Header";
import LoginForm from "../forms/LoginForm";
import GlowEffect from "../effects/GlowEffect";

const StartPage = () => {
    return (
        <>
            <GlowEffect />
            <Header />
            <LoginForm />
        </>
    )
}

export default StartPage;