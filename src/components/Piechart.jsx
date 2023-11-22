
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';


function Piechart() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const myLine = d3.line()
      .x((value, index) => index * 50)
      .y(value => 150 - value)
      .curve(d3.curveCardinal);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d",value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
      </svg>
        
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>Update Data</button>
      <button onClick={() => setData(data.filter(value => value < 35))}>Filter data</button>
    </React.Fragment>

  )
}

export default Piechart