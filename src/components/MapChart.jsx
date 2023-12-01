import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function MapChart() {

  
  const containerRef = useRef();

  useEffect(() => {
    const container = d3.select(containerRef.current);

    const distances = [
      {name: "Mercury", distance: 0.387},
      {name: "Venus", distance: 0.723},
      {name: "Earth", distance: 1},
      {name: "Mars", distance: 1.52},
      {name: "Jupiter", distance: 5.2},
      {name: "Saturn", distance: 9.54},
      {name: "Uranaus", distance: 19.2},
      {name: "Neptune", distance: 30.1},
      {name: "Ceres", distance: 2.765},
      {name: "Plutp", distance: 39.481},
      {name: "Eris", distance: 67.67},
      {name: "Haumea", distance: 43},
      {name: "Makemake", distance: 45.346}
    ];

    container
      .selectAll("li")
      .data(distances)
      .join("li")
      .text(function(d) {
        return d.name + ": " + d.distance;
      })
    
  }, []);

  return(
   
      <ul ref={containerRef}>

      </ul>
    
  )

} 

export default MapChart