import { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
        <div>
          <p>
            Good:<span>{this.props.good}</span>
          </p>
          <p>
            Neutral:<span>{this.props.neutral}</span>
          </p>
          <p>
            Bad:<span>{this.props.bad}</span>
          </p>
          <p>
            Positive feedback: <span>{this.props.feedback}%</span>
          </p>
        </div>
    );
  }
}
