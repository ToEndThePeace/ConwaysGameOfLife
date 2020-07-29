import React from "react";
import Cell from "./Cell";

const Row = (props) => {
    const { data } = props;
    return (
        <div className="Row">
            {data.map((cell, i) => {
                return <Cell key={i} status={cell} />;
            })}
        </div>
    );
};

export default Row;
