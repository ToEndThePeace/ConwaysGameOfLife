import React from "react";
import { connect } from "react-redux";

import { action } from "../store";

const Test = (props) => {
    return (
        <div>
            <h2>TEST COMP: {props.value}</h2>
            <button
                onClick={() => action("BUTTON_PRESS")}
                style={{ padding: "20px", background: "yellow" }}
            >
                TEXT
            </button>
        </div>
    );
};

export default connect((state) => {
    return {
        value: state.test.value,
    };
}, {})(Test);
