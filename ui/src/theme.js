import { createMuiTheme } from "@material-ui/core/styles";
import { amber } from '@material-ui/core/colors';
import { indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[900],
    },
    secondary: {
      main: indigo[700],
    },
  },
});
  
export default theme;
