import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: "#ff742b"
        },
    },
    typography: {
        fontFamily: ['Verdana','Geneva', 'sans-serif'].join(","),
    },
    spacing: 8
});