
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';


function LineChart() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    // Setting svg reference to allow us to use d3 and change the elemtn inside this useEffect
    const svg = d3.select(svgRef.current);

    // Setting X-axis
    const xScale = d3.scaleLinear()
      .domain([0, 6])
      .range([0, 300])

    const xAxis = d3.axisBottom(xScale).ticks(7);
    
    svg.select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

      // Setting Y-axis
    const yScale = d3.scaleLinear()
      .domain([0, 75])
      .range([150, 0]);

    const yAxis = d3.axisRight(yScale);

    svg.select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

      // Setting line
    const myLine = d3.line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(d3.curveCardinal);


    // Adding svg components
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue");

  }, [data]);

  // Returning statement
  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis"/>
        <g className="y-axis"/>
      </svg>
        
      <br />
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>Update Data</button>
    </React.Fragment>

  )
}

export default LineChart