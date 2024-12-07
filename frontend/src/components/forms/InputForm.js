import React, {useState} from "react";
import axios from "axios";
import {Autocomplete, Button, Input, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addPoint, clearPoints, setR} from "../../store/store";

const xValues = ['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3'];
const rValues = ['1', '2', '3', '4', '5'];

const InputForm = () => {

    const API_URL = 'http://localhost:9696/lab4/api/areaCheck';
    const dispatcher = useDispatch();

    const [errors, setErrors] = useState({});
    const [x, setX] = useState(null);
    const [y, setY] = useState('');
    const r = useSelector((state) => state.r);
    const username = useSelector((state) => state.username);
    const password = useSelector((state) => state.password);



    const validate = () => {
        const errors = {}
        if (x === null) errors.x = 'Введите значение X';
        if (isNaN(y) || y.trim === '') errors.y = 'Y не является числом. Попробуйте ещё раз';
        if (r === null) errors.r = 'Введите значение R';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const submit = (e) => {
        e.preventDefault();

        if (validate()) {

            const data = {
                x: Number(x),
                y: Number(y),
                r: Number(r),
                // username: username,
                // password: password
            };

            axios.post(`${API_URL}/points`, data)
                .then(response => {
                    console.log("Данные были отправлены:", data.x, data.y, data.r, response.data.hit);
                    console.log("Тип данных response.data:", response.data );
                    dispatcher(addPoint(response.data));
                })
                .catch(error => {
                    console.log("Ошибка при отправке данных:", error);
                    console.log(error.data);
                });
        }
    }

    const clear = (e) => {
        e.preventDefault();
        axios.delete(`${API_URL}/clear`)
            .then(response => {
                dispatcher(clearPoints());
            })
            .catch(error => {
                console.error("Ошибка при очистке точек:", error);
                // alert("Не удалось очистить точки. Попробуйте ещё раз.");
            });
     }

    return (
        <div>
            <form>

                <div style={{display: "flex"}}>
                    <label htmlFor="x">Изменение X:</label>
                    <Autocomplete
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Выбери значение X"
                                variant="outlined"
                                error={!!errors.x}
                                helperText={errors.x}
                            />
                        )}
                        options={xValues}
                        onChange={(event, value) => setX(value)}
                        style={{
                            width: "20%",
                            height: "60px"
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="y">Изменение Y:</label>
                    <Input
                        type="number"
                        step="0.1"
                        value={y}
                        onChange={(e) => setY(e.target.value)}
                        error={!!errors.y}
                        min="-3"
                        max="3"
                        placeholder="Введите значение от -3 до 3"
                    />
                    {errors.y && <p style={{color: "red"}}>{errors.y}</p>}
                </div>

                <div style={{display: "flex"}}>
                    <label htmlFor="r">Изменение R:</label>
                    <Autocomplete
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Выбери значение R"
                                variant="outlined"
                                error={!!errors.r}
                                helperText={errors.r}
                            />
                        )}
                        options={rValues}
                        onChange={(event, value) => {
                            // setR(value);
                            dispatcher(setR(Number(value)))
                        }}
                        style={{
                            width: "20%",
                            height: "60px"
                        }}
                    />
                </div>

                <Button
                    type="submit"
                    onClick={submit}
                >Отправить</Button>

                <Button
                    type="button"
                    onClick={clear}
                >Очистить</Button>

            </form>
        </div>
    )
}

export default InputForm;