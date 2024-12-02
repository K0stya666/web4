import React from 'react';

const Graph = () => {

    const trPoint1 = {x: 250, y: 250};
    const trPoint2 = {x: 450, y: 250};
    const trPoint3 = {x: 250, y: 350};
    const trianglePoints = `
        ${trPoint1.x}, ${trPoint1.y} 
        ${trPoint2.x}, ${trPoint2.y} 
        ${trPoint3.x}, ${trPoint3.y}
    `

    const circleParams = `
        M ${250} ${250}
        L ${250} ${50}
        A ${250} ${250} 0 0 0 ${50} ${250}
    `;

    return (
        <div>
            <svg id="graph" xmlns="http://www.w3.org/2000/svg" width="500" height="500">

                <rect
                    x={250}
                    y={50}
                    width={200}
                    height={200}
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




                {/*<polygon id="triangle" points="250,250 #{250 - areaCheck.r * 40},250 250,#{250 - areaCheck.r * 40 / 2}"*/}
                {/*         fill="#122028" fill-opacity="0.6"/>*/}
                {/*<rect id="rectangle" x="#{250 - areaCheck.r * 20}" y="250" width="#{areaCheck.r * 20}"*/}
                {/*      height="#{areaCheck.r * 40}" fill="#122028" fill-opacity="0.6"/>*/}
                {/*<path id="circle" fill="#122028" fill-opacity="0.6" d="*/}
                {/*                    M 250 250*/}
                {/*                    L ${250} 250*/}
                {/*                    A #{40 * areaCheck.r} #{40 * areaCheck.r} 0 0 0 #{250} #{250 - areaCheck.r * 40}"/>*/}

                {/*<ui:repeat value="#{areaCheck.points}" var="point">*/}
                {/*    <circle r="3"*/}
                {/*            cx="#{point.x * 40 + 250}"*/}
                {/*            cy="#{- point.y * 40 + 250}"*/}
                {/*            fill="#{point.hit ? 'yellow' : 'red'}"/>*/}
                {/*</ui:repeat>*/}


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
                {/*arrows*/}
                <polygon points="250,0 255,5 245, 5" fill="#000720" stroke="#000720"/>
                <polygon points="500, 250 495,245 495,255" fill="#000720" stroke="#000720"/>
            </svg>
        </div>
    );
}

export default Graph;