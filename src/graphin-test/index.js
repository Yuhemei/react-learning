import React from "react";
import ReactDOM from "react-dom";
import Graphin, { Utils } from "@antv/graphin";
import "@antv/graphin/dist/index.css";
import "./styles.css";

const data = Utils.mock(13)
  .circle()
  .graphin();

data.nodes = data.nodes.map(node => {
  return {
    ...node,
    shape: "cricle",
    style: {
      fill: "blue"
    }
  };
});

data.edges = data.edges.map(edge => {
  return {
    ...edge,
    shape: "line",
    label: "line",
    style: {
      stroke: "blue"
    }
  };
});

const GraphinApp = () => {
  return (
    <div className="App">
      <Graphin data={data} layout={{name:'force'}} />
    </div>
  );
};

export {GraphinApp}
