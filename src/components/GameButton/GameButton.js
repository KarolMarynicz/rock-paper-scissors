import React from "react";

import './GameButton.css';

class GameButton extends React.Component {
    render() {
        const gameButtonStyle = {
            backgroundImage: this.props.color
        };
        let gameButtonCSS = "game-button";
        let innerRingCSS = "inner-ring";
        let imageCSS = "image";

        if(this.props.isBig === "true") {
            gameButtonCSS += " game-button-large";
            innerRingCSS += " inner-ring-large";
            imageCSS += " image-large"
        }

        return(
            <div className={gameButtonCSS} style={gameButtonStyle} onClick={this.click}>
                <div className={innerRingCSS}>
                    <img className={imageCSS} src={this.props.source} alt={this.props.alt}/>
                </div>
            </div>
        );
    }

    click = () => {
        if(this.props.onClick !== "false")
            this.props.changeGameBoard(this.props.id);
    };
}

export default GameButton;