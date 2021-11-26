import React from "react";
import AprComponent from "./AprComponent";
import Results from "../outputComponent/Results";

class InputComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      loan: 0,
      interestPaid: "xx.xx$",
      principalPaid: "xx.xx$",

    };
  }

  loanAmount = (e) => this.setState({ loan: e.target.value });

  userOutPut = () => this.setState({
    interestPaid: "you paid mad bread",
    principalPaid: "heres what you really paid"
  })
  
  render() {
    return (

      <div className="calcContainer">
        <div className="userInput">
          <h2 className="inputHeader">Debt Calculator</h2>

          <div className="inputFields">
            <span>Debt Amount</span>
            <br />
            <input onChange={this.loanAmount} type="number" />
          </div>
          <AprComponent loanPrinciple={this.state.loan} />

          <div className="btn-container">
            <button onClick={this.userOutPuts} className="submitBtn">Submit</button>
          </div> 
        </div>
          <Results />
      </div>
       

    );
  }
}

export default InputComponent;
