import React, { useState } from "react";
import axios from "axios";
import { Autocomplete } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPoint, clearPoints, setR } from "../../store/store";
import DemonicCard from "../common/DemonicCard";
import DemonicInput from "../common/DemonicInput";
import DemonicButton from "../common/DemonicButton";
import { Box, Typography } from "@mui/material";

const xValues = ['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3'];
const rValues = ['1', '2', '3', '4', '5'];

const InputForm = () => {
    const API_URL = useSelector((state) => state.api);
    const dispatcher = useDispatch();

    const [errors, setErrors] = useState({});
    const [x, setX] = useState(null);
    const [y, setY] = useState('');
    const r = useSelector((state) => state.r);

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
            };

            axios.post(`${API_URL}/point`, data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    console.log("Данные были отправлены:", data.x, data.y, data.r, response.data.hit);
                    dispatcher(addPoint(response.data));
                })
                .catch(error => {
                    console.log("Ошибка при отправке данных:", error);
                });
        }
    }

    const clear = (e) => {
        e.preventDefault();
        axios.delete(`${API_URL}/clear`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                dispatcher(clearPoints());
            })
            .catch(error => {
                console.error("Ошибка при очистке точек:", error);
            });
    }

    return (
        <DemonicCard sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Координаты Точки
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Typography>X:</Typography>
                    <Autocomplete
                        renderInput={(params) => (
                            <DemonicInput
                                {...params}
                                label="Выберите X"
                                error={!!errors.x}
                                helperText={errors.x}
                            />
                        )}
                        options={xValues}
                        onChange={(event, value) => setX(value)}
                        sx={{ width: 200 }}
                    />
                </Box>

                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Typography>Y:</Typography>
                    <DemonicInput
                        type="number"
                        label="Введите Y"
                        value={y}
                        onChange={(e) => setY(e.target.value)}
                        error={!!errors.y}
                        helperText={errors.y}
                        inputProps={{ step: "0.1", min: "-3", max: "3" }}
                        sx={{ width: 200 }}
                    />
                </Box>

                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Typography>R:</Typography>
                    <Autocomplete
                        renderInput={(params) => (
                            <DemonicInput
                                {...params}
                                label="Выберите R"
                                error={!!errors.r}
                                helperText={errors.r}
                            />
                        )}
                        options={rValues}
                        onChange={(event, value) => {
                            dispatcher(setR(Number(value)))
                        }}
                        sx={{ width: 200 }}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <DemonicButton
                        onClick={submit}
                        variant="contained"
                        fullWidth
                    >
                        Отправить
                    </DemonicButton>

                    <DemonicButton
                        onClick={clear}
                        variant="contained"
                        fullWidth
                    >
                        Очистить
                    </DemonicButton>
                </Box>
            </Box>
        </DemonicCard>
    )
}

export default InputForm;