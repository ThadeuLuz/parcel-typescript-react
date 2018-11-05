import amber from "@material-ui/core/colors/amber";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    error: red,
    primary: amber,
    secondary: pink
  },
  typography: { useNextVariants: true }
});
