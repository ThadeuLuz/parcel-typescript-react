import React, { Component } from "react";
import ReactDOM from "react-dom";

interface IToggleProps {
  text: string;
}

interface IToggleState {
  value: boolean;
}

class Toggle extends Component<IToggleProps, IToggleState> {
  public state = {
    value: false
  };

  public render() {
    const { value } = this.state;
    const { text } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{value ? "🐱" : "🐶"}</h1>
        <button onClick={this.toggle}>{text}</button>
      </div>
    );
  }

  private toggle = () => {
    this.setState({ value: !this.state.value });
  };
}

const App = () => <Toggle text="Click me" />;

ReactDOM.render(<App />, document.getElementById("main"));
