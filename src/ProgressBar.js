import React from "react";

const ProgressBar = ({ progress }) => (
  <div style={{ width: "100%", backgroundColor: "#e0e0df", borderRadius: "5px" }}>
    <div
      style={{
        width: `${progress}%`,
        backgroundColor: "#0078d4",
        height: "10px",
        borderRadius: "5px",
        transition: "width 0.3s",
      }}
    ></div>
  </div>
);

export default ProgressBar;
