import * as d3 from 'd3';
import React, { useState, useEffect, useRef } from 'react';

function BarChart() {

  // Set data and reference
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const myRef = useRef();



  useEffect(() => {

    // Setting reference value so that I can manipulate the svg return in the return statement
    const svg = d3.select(myRef.current);

    //        * Setting scales *
    // X-scale
    const xScale = d3.scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);
    // Y-scale
    const yScale = d3.scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    //        * Creating axix *

    // X-axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(index => index);
    
    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    // Y-axis
    const yAxis = d3.axisRight(yScale);

    svg 
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

    // Adding colors
    const colorScale = d3.scaleLinear()
      .domain([0, 150])
      .range(["green", "red"])

    //       * Creating bars *
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (event, value) => {
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);

        svg
          .selectAll(".tooltip")
          .data([value])
          .join((enter) => enter.append("text").attr("y", yScale(value)))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 4)
          .attr("opacity", 1);
      }) // define before transition
      .on("mouseleave", () => {
        svg.selectAll(".tooltip").transition().attr("opacity", 0);
      })
      .transition() 

      .attr("height", value => 150 - yScale(value)) // defined after transition, otherwise it won't be a smooth transition
      .attr("fill", colorScale);

      console.log(Math.max(...data));

  }, [data])

  return (
    <React.Fragment>
      <svg ref={myRef}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
      <br />
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>Update Data</button>
    </React.Fragment>
  )


}

export default BarChart