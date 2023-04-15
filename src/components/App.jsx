import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Component } from 'react';
import { Section } from './Section';

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedback: 0,
  };

  countTotalFeedback = (a, b, c) => a + b + c;

  countPositiveFeedbackPercentage(good) {
    console.log("good- ",this.state.good);
    console.log("neutral- ",this.state.neutral);
    console.log("bad- ",this.state.bad);

    const count = (this.state.good + good) /
    (this.countTotalFeedback(
      this.state.good,
      this.state.neutral,
      this.state.bad
    )+1) * 100;
    console.log(count);
    console.log(count % 0.01);
    this.setState(
      {feedback:  Math.round(count*100)/100}
    );
  }

  handleEvent = evt => {
    console.log(this.state);
    console.log(evt);
    if(evt.target.textContent==="Good"){
      this.setState({ good: this.state.good + 1});
      this.countPositiveFeedbackPercentage(1);
    } else if(evt.target.textContent==="Neutral"){
      this.setState({ neutral: this.state.neutral + 1});
      this.countPositiveFeedbackPercentage(0);
    } else {
      this.setState({ bad: this.state.bad + 1});
      this.countPositiveFeedbackPercentage(0);
    }
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback"/>
          <FeedbackOptions options = {this.handleEvent} />
        <Section title="Statistics:"/>
          <Statistics 
          good={this.state.good} 
          neutral={this.state.neutral}
          bad={this.state.bad}
          feedback={this.state.feedback}
          />
      </div>
    );
  }
};
