import React from "react";
import OutPutComponent from "./OutPutComponent";
class InputComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      //user inputs
      loanAmount: '',
      interestRate: '',
      minimum: 0,
      makePayment: "",
      //button disabled if payment is below minimum
      buttonDisabled: true,
      notEnough: false,
      disableInput: false,
      //props for breakdown of recent payment
      principalPaid: 0,
      interestPaid: 0,
      //paymnent history
      paymentHistory: [],
    };
  }

  loan = (e) => {
    this.setState({
      loanAmount: e.target.value,
    });
  };

  interest = (e) => {
    this.setState(
      {
        interestRate: e.target.value,
      },
      this.minPayment
    );
  };

  minPayment = () => {
    this.setState({
      minimum:
        Math.ceil(
          (((parseFloat(this.state.interestRate) * 0.01) / 12) *
            this.state.loanAmount +
            this.state.loanAmount * 0.01) *  100) / 100,
    });
  };

  paymentInput = (e) => {
    const tooMuch = {
        paymentTooHigh: (parseFloat(this.state.loanAmount) + ((parseFloat(this.state.interestRate) * 0.01) / 12) * this.state.loanAmount) 
    }

    this.setState({ makePayment: e.target.value });

    e.target.value < this.state.minimum ||
    e.target.value > Math.ceil(tooMuch.paymentTooHigh * 100) / 100
      ? this.setState({ buttonDisabled: true })
      : this.setState({ buttonDisabled: false });

  };

  princIntPaid = (e) => {
    e.preventDefault();
    this.setState({
      principalPaid:
        this.state.makePayment -
        ((parseFloat(this.state.interestRate) * 0.01) / 12) *
          this.state.loanAmount,
      interestPaid:
        ((parseFloat(this.state.interestRate) * 0.01) / 12) *
        this.state.loanAmount,
      disableInput: true,
    });
    setTimeout(this.paymentLog, 500);
  };

  paymentLog = () => {
    const userPayment = {
      principal: this.state.principalPaid,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      balance: this.state.loanAmount - this.state.principalPaid,
      newMinimum:
        Math.ceil(
          (((parseFloat(this.state.interestRate) * 0.01) / 12) *
            (this.state.loanAmount - this.state.principalPaid) +
            (this.state.loanAmount - this.state.principalPaid) * 0.01) *
            100
        ) / 100,
    };
    this.setState((state) => ({
      paymentHistory: [...state.paymentHistory, userPayment],
      loanAmount: this.state.loanAmount - this.state.principalPaid,
      minimum: userPayment.newMinimum,
      makePayment: "",
    }));
  };

  closeOutLoan = (e) => {
      e.preventDefault();
      const finalNumbers = {
          loanPlusInterest: (((parseFloat(this.state.interestRate) * 0.01) / 12) * this.state.loanAmount) + parseFloat(this.state.loanAmount)
      }
      this.setState({
       makePayment: Math.ceil((finalNumbers.loanPlusInterest) * 100) / 100,
       buttonDisabled: false,
      })
  }

  newLoan = (e) => {
      e.preventDefault();
      this.setState({
          paymentHistory: [],
          buttonDisabled: true,
          loanAmount: '',
          interestRate: '',
          principalPaid: '',
          interestPaid: '',
          disableInput: false
      })
  }

  render() {
    const redBorder = this.state.buttonDisabled ? "redBorder" : "";

    return (
      <div className="calcContainer">
        <form action="" id="userInput" className="userInput">
          <h2 className="inputHeader ">Debt Calculator</h2>
          <div className="inputFields">
            <div className="inputUnit">
              <span>Loan Amount</span>
              <input
                onChange={this.loan}
                disabled={this.state.disableInput}
                value={this.state.loanAmount}
                type="text"
              />
            </div>
            <div className="inputUnit">
              <span>APR %</span>
              <input
                onChange={this.interest}
                disabled={this.state.disableInput}
                value={this.state.interestRate}
                type="text"
              />
            </div>
            <div className="inputUnit">
              <span>Make Payment</span>
              <input
                className={redBorder}
                onChange={this.paymentInput}
                placeholder={"Min:" + this.state.minimum}
                value={this.state.makePayment}
                type="text"
              />
            </div>
          </div>
          <div className="btn-container">
            <button
              className="submitBtn"
              disabled={this.state.buttonDisabled}
              onClick={this.princIntPaid}
            >
              Submit
            </button>
            <button 
            className="submitBtn close-loan"
            onClick={this.closeOutLoan}
            >Close Loao</button>

            <button className="submitBtn" onClick={this.newLoan}>New Loan</button>
          </div>
        </form>
        <OutPutComponent
          propsInterest={this.state.interestPaid}
          propsPrincipal={this.state.principalPaid}
          history={this.state.paymentHistory}
        />
      </div>
    );
  }
}
export default InputComponent;
