import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "2px solid grey",
        borderCollapse: "collapse",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
          fontSize: "25px",
        userSelect:"none"
      }}
      className="square"
    >
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
