import React from "react";
import { Switch, Route } from "react-router-dom";
import DetailsStyles from "./DetailsStyles";
import Info from "./Info";
import Rules from "./Rules";

const Details = (props) => {
    return (
        <DetailsStyles>
            <Switch>
                <Route exact path="/info" component={Info} />
                <Route exact path="/info/rules" component={Rules} />
            </Switch>
        </DetailsStyles>
    );
};

export default Details;
