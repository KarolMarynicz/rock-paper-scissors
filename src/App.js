import React from 'react';
import './App.css';

import Pentagon from "./resources/images/bg-pentagon.svg"

import Toolbar from "./components/Toolbar/Toolbar";
import RulesWindow from "./components/RulesWindow/RulesWindow";
import GameBoard from "./components/GameBoard/GameBoard";
import ResultBoard from "./components/ResultBoard/ResultBoard";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            score: 0,
            result: "TIE",
            playerChoice: "scissors",
            computerChoice: "scissors"
        };

        this.choices = {
            rock: {defeats: ["scissors", "lizard"]},
            paper: {defeats: ["rock", "spock"]},
            scissors: {defeats: ["paper", "lizard"]},
            lizard: {defeats: ["paper", "spock"]},
            spock: {defeats: ["scissors", "rock"]}
        }
    }

    render() {
        if(this.state.display) {
            this.displayStylePick = "flex";
            this.displayStylePicked = "none"
        } else {
            this.displayStylePick = "none";
            this.displayStylePicked = "flex"
        }

        return (
            <div>
                <div id="background" className="container bottom sm-middle full-screen">
                    <RulesWindow />
                </div>
                <section id="top">
                    <div className="container">
                        <Toolbar score={this.state.score}/>
                    </div>
                </section>
                <section id="middle">
                    <div className="container height-400 height-270" style={ {display: this.displayStylePick} }>
                        <img className="pentagon-image height-400 height-270" src={Pentagon} alt="pentagon" />
                        <GameBoard gameButtonClick={this.changeBoardToResult}/>
                    </div>
                    <div className="container" style={ {display: this.displayStylePicked} }>
                        <ResultBoard
                            clickedElement={this.state.playerChoice}
                            computerElement={this.state.computerChoice}
                            playAgainClick={this.changeBoardToGame}
                            resultText={this.state.result}/>
                    </div>
                </section>
            </div>
        );
    }

    addPoint = () => {
        this.setState({score:(this.state.score + 1)});
    };

    removePoint = () => {
        this.setState({score:(this.state.score - 1)});
    };

    setComputerChoice = () => {
        let choice = "";
        let random = Math.floor(Math.random() * 5) + 1;

        switch (random) {
            case 1:
                choice = "spock";
                break;
            case 2:
                choice = "lizard";
                break;
            case 3:
                choice = "rock";
                break;
            case 4:
                choice = "paper";
                break;
            case 5:
                choice = "scissors";
                break;
        }

        return choice
    };

    compare = () => {
        if(this.state.playerChoice.toString().localeCompare(this.state.computerChoice.toString()) === 0) {
            this.setState({result:"TIE"});
        } else {
            let userChoice = this.choices[this.state.playerChoice.toString()].defeats;
            for (let i = 0; i < userChoice.length; i++) {
                if (userChoice[i].toString().localeCompare(this.state.computerChoice.toString()) === 0) {
                    this.setState({result: "YOU WIN"});
                    this.addPoint();
                    return;
                }
            }
            this.setState({result: "YOU LOSE"});
            this.removePoint();
        }
    };

    changeBoardToResult = (id) => {
        this.state.playerChoice = id;
        this.state.computerChoice = this.setComputerChoice();
        this.compare();

        setTimeout(function() {
            document.getElementById("placeholder").style.display = "none";
            document.getElementById("middle-element-placeholder").style.display = "none";
            document.getElementById("button-result").style.display = "flex";
            document.getElementById("middle-element").style.display = "flex";
        }, 1000);

        this.setState({display:false});
    };

    changeBoardToGame = () => {
        document.getElementById("placeholder").style.display = "flex";
        document.getElementById("middle-element-placeholder").style.display = "flex";
        document.getElementById("button-result").style.display = "none";
        document.getElementById("middle-element").style.display = "none";

        this.setState({display:true});
    };
}

export default App;
