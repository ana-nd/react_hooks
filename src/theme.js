import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: "#ff6600"
        },
    },
    typography: {
        fontFamily: ['Poppins-Regular'].join(","),
    },
    spacing: 8
});