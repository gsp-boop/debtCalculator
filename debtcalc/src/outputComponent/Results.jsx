import React from "react";

class Results extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="userOutput">
        <h2>Payment Breakdown</h2>
          <div className="breakdown">
            <h4>Interest Paid</h4>
            <span>{this.props.interestPaid}</span>
          </div>
          <div className="breakdown">
            <h4>Principal Paid</h4>
            <span>{this.props.principalPaid}</span>
          </div>
        <h2 className="inputHeader historyHeader">Payment History</h2>
        <div className="breakdown">
          <h4>Date</h4>
          <span>Amount</span>
        </div>
      </div>
    );
  }
}

export default Results;
