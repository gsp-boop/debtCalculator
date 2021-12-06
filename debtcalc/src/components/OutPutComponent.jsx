import React from "react";

class OutPutComponent extends React.Component {

  render() {
    const today = new Date();
    const {history} = this.props

    return (
      <div className="userOutput">
        <h2>Payment Breakdown</h2>
        <div className="breakdown">
          <h4>Interest Paid</h4>
          <span>
            {Math.ceil(this.props.propsInterest * 100) / 100}
          </span>
        </div>
        <div className="breakdown">
          <h4>Principal Paid</h4>
          <span>{Math.ceil(this.props.propsPrincipal * 100) / 100}</span>
        </div>

        <h2 className="historyHeader">Payment History</h2>
        <div className="history">
          <div className="dates">
            <h4>Date</h4>
            <ul>
               {history.map((item) => (
                 <li>{item.date}</li>  
             ))}
            </ul>
          </div>
          <div className="payment">
            <h4>Principal</h4>
            <ul>
                {history.map((item) => (
                    <li>{Math.ceil(item.principal * 100) / 100}</li>
                ))}
            </ul>
          </div>
          <div className="balance">
            <h4>Balance</h4>
            <ul>
                {history.map((item) => (
                    <li>{Math.ceil(item.balance * 100) / 100}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default OutPutComponent;
