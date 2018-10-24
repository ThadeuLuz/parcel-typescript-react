import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Toggle from "./components/Toggle";
import theme from "./services/theme";

export default class App extends Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Toggle text="Click Me" />
      </MuiThemeProvider>
    );
  }
}
