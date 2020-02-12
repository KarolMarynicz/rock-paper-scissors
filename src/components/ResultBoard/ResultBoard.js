import React from "react";

import "./ResultBoard.css";

import GameButton from "../GameButton/GameButton";
import PlayAgainButton from "../PlayAgainButton/PlayAgainButton";

import Rock from "../../resources/images/icon-rock.svg";
import Paper from "../../resources/images/icon-paper.svg";
import Scissors from "../../resources/images/icon-scissors.svg";
import Lizard from "../../resources/images/icon-lizard.svg";
import Spock from "../../resources/images/icon-spock.svg";


class ResultBoard extends React.Component {
    player = {
        image: "",
        color: ""
    };

    computer = {
        image: "",
        color: ""
    };

    render() {
        this.createButton(this.props.clickedElement, this.player);
        this.createButton(this.props.computerElement, this.computer);

        return (
            <div className="box">
                <div className="box box-column">
                    <p className="picked-text">YOU PICKED</p>
                    <GameButton
                        color={this.player.color}
                        source={this.player.image}
                        alt="spock"
                        isBig="true"
                        onClick="false" />
                </div>
                <div id="middle-element" className="box box-column box-margin center-vert hidden">
                    <p className="result-text">{this.props.resultText.toString()}</p>
                    <PlayAgainButton  onClick={this.props.playAgainClick} />
                </div>
                <div id="middle-element-placeholder" />
                <div className="box box-column">
                    <p className="picked-text">THE HOUSE PICKED</p>
                    <div id="placeholder" className="placeholder"/>
                    <div id="button-result" className="hidden">
                        <GameButton
                            color={this.computer.color}
                            source={this.computer.image}
                            alt="spock"
                            isBig="true"
                            onClick="false" />
                    </div>
                </div>
            </div>
        );
    }

    createButton(buttonID, object) {
        switch (buttonID) {
            case "spock":
                object.image = Spock;
                object.color = "linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%))";
                break;
            case "lizard":
                object.image = Lizard;
                object.color = "linear-gradient(to bottom, hsl(261, 73%, 60%), hsl(261, 72%, 63%))";
                break;
            case "rock":
                object.image = Rock;
                object.color = "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
                break;
            case "paper":
                object.image = Paper;
                object.color = "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
                break;
            case "scissors":
                object.image = Scissors;
                object.color = "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
                break;
            default:
                object.image = null;
                object.color = "white";
        }
    }
}

export default ResultBoard;