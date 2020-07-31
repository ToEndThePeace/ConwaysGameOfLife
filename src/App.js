import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Board from "./components/Board";
import Details from "./components/Details/Details";

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Board} />
                <Route path="/info" component={Details} />
            </Switch>
        </div>
    );
};

export default App;
