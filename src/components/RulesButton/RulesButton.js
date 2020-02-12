import React from "react";

import "./RulesButton.css"

class RulesButton extends React.Component {

    showModal = () => { this.props.showModal() };

    render() {
        return (
            <div className="rules-button" onClick={this.showModal}>
                 <p className="rules-button-text">RULES</p>
            </div>
        );
    }
}

export default RulesButton;