import React from "react";

import "./PlayAgainButton.css"

class PlayAgainButton extends React.Component {
    render() {
        return(
            <div className="play-again-button" onClick={this.props.onClick}>
                <p className="text-button">PLAY AGAIN</p>
            </div>
        );
    }
}

export default PlayAgainButton;