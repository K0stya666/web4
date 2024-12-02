import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const PointTable = () => {
    // const dispatch = useDispatch();

    const points = useSelector((state) => state.points);

    // const [points , setPoints] = useState([]);
    // const API_URL = 'http://localhost:9696/lab4/api';
    //
    // useEffect(() => {
    //     getPoints();
    // }, []);
    //
    // const getPoints = () => {
    //     axios.get(`${API_URL}/areaCheck`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setPoints(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Ошибка при получении данных:', error);
    //         });
    // };

    return (
        <div>
            {/*<table>*/}

            {/*    <thead>*/}
            {/*        <tr>*/}
            {/*            <th>X</th>*/}
            {/*            <th>Y</th>*/}
            {/*            <th>R</th>*/}
            {/*            <th>Результат</th>*/}
            {/*            <th>Дата</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}

            {/*    <tbody>*/}
            {/*        {points.map((point, index) => (*/}
            {/*            <tr key={index}>*/}
            {/*                <td>{point.x}</td>*/}
            {/*                <td>{point.y}</td>*/}
            {/*                <td>{point.r}</td>*/}
            {/*                <td>{point.hit ? "Попадание" : "Промах"}</td>*/}
            {/*                <td>{point.date}</td>*/}
            {/*            </tr>*/}
            {/*        ))}*/}
            {/*    </tbody>*/}

            {/*</table>*/}
        </div>
    )
}

export default PointTable;