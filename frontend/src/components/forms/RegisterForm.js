import React, {useState} from "react";
import {Button} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const RegisterForm = () => {

    const API_URL = 'http://localhost:9696/lab4/api/areaCheck';
    // const dispatch = useDispatch();
    // const username = useSelector((state) => state.username);
    // const password = useSelector((state) => state.password);
    const navigate = useNavigate();
    const redirect = () => { navigate('/main') };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password
        }

        console.log(data.username)
        console.log(data.password)

        axios.post(`${API_URL}/users`, data)
            .then((response) => {
                console.log("hui")
                redirect();
            }
        )
    }

    return (
        <div>
            <h2>Регистрация</h2>

            <form id="registrationForm" onSubmit={submit}>
                <label>Имя пользователя: </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Введите имя пользователя"
                />

                <label>Пароль: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Введите пароль"
                />

                <Button
                    type="submit"
                    // onClick={submit}
                    variant="contained"
                    color="black"
                >Регистрация</Button>

                <Button
                    // onClick={}
                    variant="contained"
                    color="black"
                >Войти</Button>
            </form>

        </div>
    );
}

export default RegisterForm;