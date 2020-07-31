import React from "react";
import { Link } from "react-router-dom";

const Rules = (props) => {
    return (
        <div>
            <h2>Game of Life Rules</h2>
            <p>
                <em>The Game of Life</em>&nbsp;is a simple simulation game
                created by the British mathematician John Conway in the year
                1970. The rules are very simple, as there are no players, and
                the game essentially plays itself.&nbsp;<em>Cells</em>&nbsp;on
                the board are either&nbsp;<em>alive</em>&nbsp;or&nbsp;
                <em>dead</em>. An initial board state is determined by the
                player, who can then simulate the life cycle of the cells that
                they've chosen to give life to.
            </p>
            <p>
                In&nbsp;<em>The Game of Life</em>, cells will grow or die until
                they no longer can, based on a simple set of rules.
            </p>
            <ul>
                <li>
                    A&nbsp;<em>living</em>&nbsp;cell:
                    <ul>
                        <li>
                            will stay alive if it only has 2 or 3 living&nbsp;
                            <em>neighbor</em>&nbsp;cells
                        </li>
                        <li>
                            will&nbsp;<em>die</em>&nbsp;from&nbsp;
                            <em>overpopulation</em>&nbsp;if it has more than 3
                            living neighbors.
                        </li>
                        <li>
                            will die if it has less than 2 living neighbors, as
                            if from&nbsp;<em>loneliness</em>.
                        </li>
                    </ul>
                </li>
                <li>
                    A dead cell can come back to life if it has&nbsp;
                    <em>exactly</em>&nbsp;3 living neighbors
                </li>
            </ul>
            <p>
                And that's all! These four rules have spawned 50 years of
                innovations. Though the game itself is simple, the implications
                of simulated life and infinite molecular growth have kept people
                interested, even after all this time.
            </p>
            <p>
                Head back to the&nbsp;<Link to="/">game</Link>&nbsp;page to see
                what you can create, or head to the&nbsp;
                <Link to="/info">background</Link>&nbsp;page to learn more!
            </p>
        </div>
    );
};

export default Rules;
