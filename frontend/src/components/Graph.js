import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPoint} from "../store/store";
import {green} from "@mui/material/colors";

const Graph = () => {
    const dispatch = useDispatch();

    const scale = 40;
    const radius = useSelector((state) => state.r) * scale;
    const graph = useRef(null);
    const points = useSelector((state) => state.points);

    const trPoint1 = {x: 250, y: 250};
    const trPoint2 = {x: 250 + radius, y: 250};
    const trPoint3 = {x: 250, y: 250 + radius / 2};
    const trianglePoints = `
        ${trPoint1.x}, ${trPoint1.y} 
        ${trPoint2.x}, ${trPoint2.y} 
        ${trPoint3.x}, ${trPoint3.y}
    `

    const circleParams = `
        M ${250} ${250}
        L ${250} ${250 - radius}
        A ${radius} ${radius} 0 0 0 ${250 - radius} ${250}
    `;

    // document.getElementById('graph').addEventListener('click', (e) => {
    //     e.preventDefault();
    //
    //     const svgX = e.offsetX;
    //     const svgY = e.offsetY;
    //
    //     const x = (svgX - 250) / scale;
    //     const y = (250 - svgY) / scale;
    //
    //     dispatch(addPoint(x, y))
    // });

    useEffect(() => {
        const svg = graph.current;
        svg.addEventListener('click', (e) => {
            e.preventDefault();

            const svgX = e.offsetX;
            const svgY = e.offsetY;

            const x = (svgX - 250) / scale;
            const y = (250 - svgY) / scale;
            const r = radius / scale

            dispatch(addPoint({x, y, r}))
        })
    }, []);

    return (
        <div>
            <svg id="graph" ref={graph} xmlns="http://www.w3.org/2000/svg" width="500" height="500">

                <rect
                    x={250}
                    y={250 - radius}
                    width={radius}
                    height={radius}
                    fill="#122028"
                    fill-opacity={0.6}
                />

                <path
                    d={circleParams}
                    fill="#122028"
                    fill-opacity={0.6}
                />

                <polygon
                    points={trianglePoints}
                    fill="#122028"
                    fill-opacity={0.6}
                />

                {/*X line*/}
                <line x1="0" y1="250" x2="500" y2="250" stroke="#122028"/>
                {/*Y lin*/}
                <line x1="250" y1="0" x2="250" y2="500" stroke="#122028"/>

                <line x1="210" y1="248" x2="210" y2="252" stroke="#122028"/>
                {/*-1 point on x*/}
                <line x1="290" y1="248" x2="290" y2="252" stroke="#122028"/>
                {/*1 point on x*/}
                <text x="205" y="240">-1</text>
                {/*'-1' on x*/}
                <text x="285" y="240">1</text>
                {/*'1' on x*/}

                <line x1="170" y1="248" x2="170" y2="252" stroke="#122028"/>
                {/*-2 point on x*/}
                <line x1="330" y1="248" x2="330" y2="252" stroke="#122028"/>
                {/*2 point on x*/}
                <text x="165" y="240">-2</text>
                {/*'-2' on x*/}
                <text x="325" y="240">2</text>
                {/*'2' on x*/}

                <line x1="130" y1="248" x2="130" y2="252" stroke="#122028"/>
                {/*-3 point on x*/}
                <line x1="370" y1="248" x2="370" y2="252" stroke="#122028"/>
                {/*3 point on x*/}
                <text x="125" y="240">-3</text>
                {/*'-3' on x*/}
                <text x="365" y="240">3</text>
                {/*'3' on x*/}

                <line x1="90" y1="248" x2="90" y2="252" stroke="#122028"/>
                {/*-4 point on x*/}
                <line x1="410" y1="248" x2="410" y2="252" stroke="#122028"/>
                {/*4 point on x*/}
                <text x="85" y="240">-4</text>
                {/*'-4' on x*/}
                <text x="405" y="240">4</text>
                {/*'4' on x*/}

                <line x1="50" y1="248" x2="50" y2="252" stroke="#122028"/>
                {/*-5 point on x*/}
                <line x1="450" y1="248" x2="450" y2="252" stroke="#122028"/>
                {/*5 point on x*/}
                <text x="45" y="240">-5</text>
                {/*'-5' on x*/}
                <text x="445" y="240">5</text>
                {/*'5' on x*/}

                <line x1="248" y1="210" x2="252" y2="210" stroke="#122028"/>
                {/*1 on y*/}
                <line x1="248" y1="290" x2="252" y2="290" stroke="#122028"/>
                {/*-1 on y*/}
                <text x="256" y="215">1</text>
                {/*1 on y*/}
                <text x="256" y="295">-1</text>
                {/*-1 on y*/}

                <line x1="248" y1="170" x2="252" y2="170" stroke="#122028"/>
                {/*2 on y*/}
                <line x1="248" y1="330" x2="252" y2="330" stroke="#122028"/>
                {/*-2 on y*/}
                <text x="256" y="175">2</text>
                {/*-2 on y*/}
                <text x="256" y="335">-2</text>
                {/*-2 on y*/}


                <line x1="248" y1="130" x2="252" y2="130" stroke="#122028"/>
                {/*3 on y*/}
                <line x1="248" y1="370" x2="252" y2="370" stroke="#122028"/>
                {/*-3 on y*/}
                <text x="256" y="135">3</text>
                {/*3 on y*/}
                <text x="256" y="375">-3</text>
                {/*-3 on y*/}

                <line x1="248" y1="90" x2="252" y2="90" stroke="#122028"/>
                {/*4 on y*/}
                <line x1="248" y1="410" x2="252" y2="410" stroke="#122028"/>
                {/*-4 on y*/}
                <text x="256" y="95">4</text>
                {/*4 on y*/}
                <text x="256" y="415">-4</text>
                {/*-4 on y*/}

                <line x1="248" y1="50" x2="252" y2="50" stroke="#122028"/>
                {/*5 on y*/}
                <line x1="248" y1="450" x2="252" y2="450" stroke="#122028"/>
                {/*-5 on y*/}
                <text x="256" y="55">5</text>
                {/*3 on y*/}
                <text x="256" y="455">-5</text>
                {/*-3 on y*/}

                {points.map((point, index) => (
                    <circle
                        key={index}
                        cx={250 + point.x * scale}
                        cy={250 - point.y * scale}
                        r={2.5}
                        fill={'green'}
                    />
                ))}
            </svg>
        </div>
    );
}

export default Graph;