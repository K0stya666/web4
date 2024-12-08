import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addPoint} from "../store/store";

const PointTable = () => {

    const API_URL = useSelector((state) => state.api);
    const points = useSelector((state) => state.points);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${API_URL}/points`)
            .then((response) => {
                // console.log("Response data:", response.data);
                response.data.forEach((point) => {
                    dispatch(addPoint(point));
                    // console.log("Added point:", point);
                });
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, []);

    return (
        <div>
            <table>

                <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Результат</th>
                        <th>Дата</th>
                    </tr>
                </thead>

                <tbody>
                    {points.map((point, index) => (
                        <tr key={index}>
                            <td>{point.x}</td>
                            <td>{point.y}</td>
                            <td>{point.r}</td>
                            <td>{point.hit ? "Попадание" : "Промах"}</td>
                            <td>{point.date}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default PointTable;