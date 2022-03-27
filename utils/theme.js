import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 36,
    },
  },
});

export default theme;
