import React from "react";
import { Link } from "react-router-dom";

const Info = (props) => {
    return (
        <div>
            <h2 style={{ marginBottom: "2.5vh" }}>Background Info</h2>
            <h3>Cellular Automata</h3>
            <p>
                A cellular automaton&nbsp;
                <em>(pl. celluar automata, abbr. CA)</em>&nbsp; is a
                self-contained program that operates on a data set, typically
                stored in a grid. CA each have their own distinct rulesets,
                which describe how their data changes in relation to time. For
                every "tick" forward of time, a new "generation" of the data set
                is calculated based on the previous data.
            </p>
            <p>
                In&nbsp;<Link to="/">this</Link>&nbsp;implementation of&nbsp;
                <em>The Game of Life</em>, data is stored on a 2-dimensional
                grid, or a matrix. Following a certain set of&nbsp;
                <Link to="/info/rules">rules</Link>, "cells" will live, die, or
                reproduce&nbsp;<em>ad infinitum</em>. Despite the simplicity of
                the rules and of the simulation itself, complex and beautiful
                patterns can sometimes emerge on the game board, seemingly at
                random.
            </p>
            <h3 style={{ marginTop: "2.5vh" }}>Turing Completeness</h3>
            <p>
                This term, named for famed computer scientist Alan Turing, is a
                term that describes a data-manipulation system that can
                manipulate data for or simulate other systems. For instance,
                almost all programming languages and computer systems are
                considered&nbsp;<em>turing complete</em>&nbsp;because they
                manipulate given data based on their own set of rules.
            </p>
            <p>
                Due to the surprisingly complex nature of large-scale cellular
                automata, the possibilities for what they can accomplish are
                nearly endless. In&nbsp;<em>The Game of Life</em>, the board can
                be set up to handle logical comparisons using simple&nbsp;
                <em>gliders</em>&nbsp;to create signals as well as store data.
                The ability to create simulated circuitry and memory is what
                grants the game the status of&nbsp;<em>turing complete</em>.
            </p>
        </div>
    );
};

export default Info;
