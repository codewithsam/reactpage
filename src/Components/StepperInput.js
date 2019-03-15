import React from "react";
import { render } from "react-dom";

class StepperInput extends React.Component {
  constructor(props) {
    super(props);
  }

  changeState = changedValue => {
    this.setState({
      stepperValue: changedValue
    });
  };

  incrementStepperValueClickHandler = evt => {
    var currentValue = this.state.stepperValue;
    this.changeState(++currentValue);
  };
  decrementStepperValueClickHandler = evt => {
    var currentValue = this.state.stepperValue;
    this.changeState(--currentValue);
  };
  setStepperValueChangeHandler = evt => {
    this.changeState(evt.target.value);
  };

  render() {
    return (
      <div className="stepper-input">
        <button
          className="stepper-input__btn stepper-input__btn--leftpad"
          onClick={this.decrementStepperValueClickHandler}
        >
          -
        </button>
        <input
          className="stepper-input__input"
          onChange={this.setStepperValueChangeHandler}
          type="text"
          value={this.state.stepperValue}
        />
        <button
          className="stepper-input__btn stepper-input__btn--rightpad"
          onClick={this.incrementStepperValueClickHandler}
        >
          +
        </button>
      </div>
    );
  }
}

export default StepperInput;
