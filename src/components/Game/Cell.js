import React from "react";

const Cell = (props) => {
    return <div className={`Cell ${props.status === 0 ? "dead" : "alive"}`} />;
};

export default Cell;
