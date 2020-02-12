import React from "react";

import './Toolbar.css'
import Logo from "../../resources/images/logo-bonus.svg"

class Toolbar extends React.Component {
    render() {
        return(
            <div className="toolbar">
                <img className="logo-image" src={Logo} alt="logo" />
                <div className="score-box">
                    <p className="score-text">SCORE</p>
                    <p className="score-number">{this.props.score.toString()}</p>
                </div>
            </div>
        );
    }
}

export default Toolbar;