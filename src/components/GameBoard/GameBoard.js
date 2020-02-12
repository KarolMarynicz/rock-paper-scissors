import React from "react";

import GameButton from "../GameButton/GameButton";

import "./GameBoard.css";

import Rock from "../../resources/images/icon-rock.svg";
import Paper from "../../resources/images/icon-paper.svg";
import Scissors from "../../resources/images/icon-scissors.svg";
import Lizard from "../../resources/images/icon-lizard.svg";
import Spock from "../../resources/images/icon-spock.svg";

class GameBoard extends React.Component {
    render() {
        return(
            <div className="game-board full-parent-width">
                <div className="one-item-line top-line flex-horizontal">
                    <GameButton
                        id="scissors"
                        color="linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))"
                        source={Scissors}
                        alt="scissors"
                        changeGameBoard={this.props.gameButtonClick}/>
                </div>
                <div className="two-items-line flex-horizontal">
                    <div className="left-item">
                        <GameButton
                            id="spock"
                            color="linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%))"
                            source={Spock}
                            alt="spock"
                            changeGameBoard={this.props.gameButtonClick}/>
                    </div>
                    <div className="right-item">
                        <GameButton
                            id="paper"
                            color="linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))"
                            source={Paper}
                            alt="paper"
                            changeGameBoard={this.props.gameButtonClick}/>
                    </div>
                </div>
                <div className="two-items-line bottom-line flex-horizontal">
                    <GameButton
                        id="lizard"
                        color="linear-gradient(to bottom, hsl(261, 73%, 60%), hsl(261, 72%, 63%))"
                        source={Lizard}
                        alt="lizard"
                        changeGameBoard={this.props.gameButtonClick}/>
                    <GameButton
                        id="rock"
                        color="linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))"
                        source={Rock}
                        alt="rock"
                        changeGameBoard={this.props.gameButtonClick}/>
                </div>
            </div>
        );
    }
}

export default GameBoard;