import React from "react";

class UserInputs extends React.Component {

    constructor(){
        super();

    }

    
  render() {
    return (
      <div className="inputFields">
        <span>Make a Payment</span>
        <br />
        <input placeholder={"Minimum "+this.props.minimumPayment} type="number" />
        
      </div>
    );
  }
}

export default UserInputs;
