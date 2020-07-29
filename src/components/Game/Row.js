import React from "react";
import Cell from "./Cell";

const Row = (props) => {
    const { data, y } = props;
    return (
        <div className="Row">
            {data.map((cell, i) => {
                return <Cell key={i} status={cell} coords={[i, y]} />;
            })}
        </div>
    );
};

export default Row;
