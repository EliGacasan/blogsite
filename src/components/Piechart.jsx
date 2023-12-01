
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';


function PieChart() {

  const [ data, setData ] = useState([
    {name: "Bad thoughts", value: 10}, 
    {name: "Good thoughts", value: 1}
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)

    // set up svg container
    const w = 300;
    const h = 300;
    const radius = w / 2;
    
    svg
      .attr('width', w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("transform", "translate(200px,100px)");
  


    // set up chart
    const formattedData = d3.pie().value(d => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const colorGenerator = d3.scaleOrdinal().range(["red", "blue"]);

    // set up svg data
    svg.selectAll()
      .data(formattedData)
      .join('path')
        .attr("d", arcGenerator)
        .attr("fill", d => colorGenerator(d.value))
        .style("opacity", 1)

  
    // set up annotation
    svg.selectAll()
      .data(formattedData)
      .join('text')
      .text(d => d.data.name)
      .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
      .style('text-anchor', 'middle');


  }, [data])

  // Returning statement
  return (
    <React.Fragment>
      <svg ref={svgRef}>

      </svg>
    </React.Fragment>

  )
}

export default PieChart