import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, Typography, InputBase, InputAdornment, IconButton } from '@material-ui/core';
import AppLogo from '../../../../images/logo-hn-search.png';
import { Search, PowerSettingsNew } from '@material-ui/icons';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) =>
    createStyles({
        logo: {
            width: theme.spacing(6.25),
            height: theme.spacing(6.25)
        },
        centerContainer: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        input: {
            background: theme.palette.common.white,
            margin: theme.spacing(0.5),
            padding: theme.spacing(0.625),
        },
        startAdornment: {
            marginRight: theme.spacing(1.5)
        },
        rightContainer: {
            display: "flex",
            padding: theme.spacing(1.5)
        },
        settingsIcon: {
            fontSize: theme.spacing(3.75),
            marginRight: theme.spacing(1.5)
        }
    }),
);

const Appbar = ({history}) => {

    const classes = useStyles();

    return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={1} className={classes.leftContainer}>
                            <img src={AppLogo} alt="logo" className={classes.logo}/>
                        </Grid>
                        <Grid item xs={9} className={classes.centerContainer}>
                        <InputBase
                            fullWidth
                            autoFocus
                            className={classes.input}
                            placeholder="Search stories by title, url or author"
                            inputProps={{ 'aria-label': 'Search stories by title, url or author' }}
                            startAdornment={<InputAdornment className={classes.startAdornment}><Search color="primary"/></InputAdornment>}
                        />
                        </Grid>
                        <Grid item xs={2} className={classes.rightContainer}>
                            <Typography >
                                by 
                                <i className="fab fa-algolia" style={{fontSize: "25px", color: "#fff",verticalAlign :"bottom", marginLeft: "10px",marginRight: "10px"}}></i>
                                <font style={{color: "#fff"}}>algolia</font>
                                <i className="fas fa-sliders-h" style={{fontSize: "25px", color: "#fff",verticalAlign :"bottom", marginLeft: "20px"}}></i>
                            </Typography>
                            <IconButton onClick={()=>{window.localStorage.clear(); history.push("/")}}>
                                <PowerSettingsNew />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
};

export default withRouter(Appbar);