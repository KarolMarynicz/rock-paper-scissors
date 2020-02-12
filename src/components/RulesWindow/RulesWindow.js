import React from "react";

import "./RulesWindow.css"

import "../RulesButton/RulesButton"
import Rules from "../../resources/images/image-rules-bonus.svg"
import Close from "../../resources/images/icon-close.svg"

import RulesButton from "../RulesButton/RulesButton";

class RulesWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
    }

    showRules = () => {
        this.setState({ show: true });
        document.getElementById("background").style.backgroundColor = "rgba(33,32,29,0.75)";
        document.getElementById("background").style.zIndex = "1";
    };
    hideRules = () => {
        this.setState({ show: false });
        document.getElementById("background").style.backgroundColor = "transparent";
        document.getElementById("background").style.zIndex = "-1";
    };

    render() {
        if(!this.state.show) {
            return (
                <RulesButton showModal={this.showRules}/>
            );
        }

        return (
            <div>
                <RulesButton  showModal={this.showRules}/>
                <div className="modal">
                    <div className="title">
                        <p className="title-text">RULES</p>
                        <img className="close desktop" src={Close} alt="close" onClick={this.hideRules}/>
                    </div>
                    <img className="rules-image" src={Rules} alt="rules" />
                    <img className="close mobile" src={Close} alt="close" onClick={this.hideRules}/>
                </div>
            </div>
        );
    }
}

export default RulesWindow;