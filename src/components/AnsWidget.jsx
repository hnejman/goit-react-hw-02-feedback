import React, { Component } from "react";
import ReactDOM from "react-dom";

export class AnsWidget extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
    };

    constructor(){
        super();
        this.handleGood=this.handleGood.bind(this);
    }

    handleGood (evt) {
        this.setState({ Good: this.state.Good + 1 });
        console.log(this.state);
        console.log(this.countTotalFeedback(this.state.Good, this.state.Neutral, this.state.Bad));
    }

    handleNeutral (evt) {
        this.setState({ Neutral: this.state.Neutral + 1 });
    }

    handleBad (evt) {
        this.setState({ Bad: this.state.Bad + 1});
    }

    countTotalFeedback = (a, b, c) => (a + b + c);

    countPositiveFeedbackPercentage(evt){ 
        this.setState({ 
            Feedback: this.state.Good / this.countTotalFeedback(this.state.Good, this.state.Neutral, this.state.Bad) * 100})
    }

    render() {
        return(
            <div>
        
           <h2>
               Please leave feedback
           </h2>
           <button onClick={event => {this.handleGood(event)}}>Good</button>
            <button onClick={event => {this.handleNeutral(event)}}>Neutral</button>
           <button onClick={event => {this.handleBad(event)}}>Bad</button>
           <h2>
               Statistics:
           </h2>
           <p>Good:<span>{this.state.Good}</span></p>
           <p>Neutral:<span>{this.state.Neutral}</span></p>
           <p>Bad:<span>{this.state.Bad}</span></p>
           <p>Positive feedback: <span>{this.state.Feedback}</span></p>
           </div>
        )
    }
}