import React from "react";
import ReactDOM from "react-dom";

import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    "&:invalid": {
      border: "red solid 2px"
    }
  }
};
function App({ classes }) {
  return (
    <TextField
      inputProps={{ className: classes.input, pattern: "[a-z]{1,15}" }}
    />
  );
}
const StyledApp = withStyles(styles)(App);
const rootElement = document.getElementById("root");
ReactDOM.render(<StyledApp />, rootElement);
