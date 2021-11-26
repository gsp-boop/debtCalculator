import React from "react";
import UserInputs from "./UserInputs";

class AprComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            minimum: 0,
        }
    }

    add = (e) => this.setState({ 
        minimum: (((e.target.value) * .01)/12) * this.props.loanPrinciple + (this.props.loanPrinciple * .01)

    })

  render() {
    return (
      <div>
        <div className="inputFields">
          <span>APR %</span>
          <br />
          <input onChange={this.add}  type="number" />
        </div>

        <UserInputs minimumPayment={Math.ceil(this.state.minimum * 100) / 100}/>
      </div>
    );
  }
}

export default AprComponent;
