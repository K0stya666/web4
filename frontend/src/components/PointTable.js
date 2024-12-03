import React from "react";
import {useSelector} from "react-redux";

const PointTable = () => {
    const points = useSelector((state) => state.points)

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