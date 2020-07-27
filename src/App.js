import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Test from "./components/testComponent";

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Test} />
            </Switch>
        </div>
    );
};

export default App;
