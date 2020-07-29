import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Board from "./components/Board";

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Board} />
            </Switch>
        </div>
    );
};

export default App;
