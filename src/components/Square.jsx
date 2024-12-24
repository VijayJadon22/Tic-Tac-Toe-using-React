import React from "react";

const Square = () => {
    return (
        <div
            style={{
                border: "1px solid black",
                borderCollapse:"collapse",
                height: "100px",
                width: "100%",
                display:"flex",
                justifyContent:"center",
                alignItems: "center",
                fontSize:"25px"
            }}
            className="square">
            <h5>O</h5>
        </div>
    )
};

export default Square;