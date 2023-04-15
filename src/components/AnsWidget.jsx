import React, { Component } from 'react';

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

  countPositiveFeedbackPercentage(evt, good) {
    console.log("good- ",this.state.Good);
    console.log("neutral- ",this.state.Neutral);
    console.log("bad- ",this.state.Bad);

    const count = (this.state.Good + good) /
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
    this.setState({ Good: this.state.Good + 1});
    this.countPositiveFeedbackPercentage(evt, 1);
    console.log(this.state);
  }

  handleNeutral(evt) {
    this.setState({ Neutral: this.state.Neutral + 1 });
    this.countPositiveFeedbackPercentage(evt, 0);
  }

  handleBad(evt) {
    this.setState({ Bad: this.state.Bad + 1 });
    this.countPositiveFeedbackPercentage(evt, 0);
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
