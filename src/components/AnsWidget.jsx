import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class AnsWidget extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    Feedback: 0,
  };

  constructor() {
    super();
    this.handleGood = this.handleGood.bind(this);
  }

  countTotalFeedback = (a, b, c) => a + b + c;

  countPositiveFeedbackPercentage(evt) {
    const count = (this.state.Good) /
    (this.countTotalFeedback(
      this.state.Good,
      this.state.Neutral,
      this.state.Bad
    )+1) * 100;
    console.log(count);
    console.log(count % 0.01);
    this.setState(
      {Feedback:  Math.round(count*100)/100}
    );
  }

  handleGood(evt) {
    this.setState({ Good: this.state.Good + 1 });
    this.countPositiveFeedbackPercentage(evt);
    console.log(this.state);
  }

  handleNeutral(evt) {
    this.setState({ Neutral: this.state.Neutral + 1 });
    this.countPositiveFeedbackPercentage(evt);
  }

  handleBad(evt) {
    this.setState({ Bad: this.state.Bad + 1 });
    this.countPositiveFeedbackPercentage(evt);
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button
          onClick={event => {
            this.handleGood(event);
          }}
        >
          Good
        </button>
        <button
          onClick={event => {
            this.handleNeutral(event);
          }}
        >
          Neutral
        </button>
        <button
          onClick={event => {
            this.handleBad(event);
          }}
        >
          Bad
        </button>
        <h2>Statistics:</h2>
        <p>
          Good:<span>{this.state.Good}</span>
        </p>
        <p>
          Neutral:<span>{this.state.Neutral}</span>
        </p>
        <p>
          Bad:<span>{this.state.Bad}</span>
        </p>
        <p>
          Positive feedback: <span>{this.state.Feedback}</span>
        </p>
      </div>
    );
  }
}
