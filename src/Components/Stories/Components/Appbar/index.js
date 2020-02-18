import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, InputBase, InputAdornment, IconButton, Tooltip } from '@material-ui/core';
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
            marginRight: "30px",
            width: "75%",
            [theme.breakpoints.down('lg')]: {
                width: "70%",
            },
            [theme.breakpoints.down('sm')]: {
                width: "55%",
            },
            [theme.breakpoints.down('xs')]: {
                width: "35%",
            },
            logoutIcon: {
                color: theme.palette.primary.contrastText,
                marginLeft: theme.spacing(1)
            }
        },
        startAdornment: {
            marginRight: theme.spacing(1.5)
        },
        rightContainer: {
            display: "flex",
            padding: theme.spacing(1.5)
        },
    }),
);

const Appbar = ({history}) => {

    const classes = useStyles();

    return (
            <AppBar position="static">
                <Toolbar>
                    <img src={AppLogo} alt="logo" className={classes.logo}/>
                    <InputBase
                        autoFocus
                        className={classes.input}
                        placeholder="Search stories by title, url or author"
                        inputProps={{ 'aria-label': 'Search stories by title, url or author' }}
                        startAdornment={<InputAdornment className={classes.startAdornment}><Search color="primary"/></InputAdornment>}
                    />
                    <Typography>
                        by 
                        <i className="fab fa-algolia" style={{fontSize: "25px", color: "#fff",verticalAlign :"bottom", marginLeft: "10px",marginRight: "10px"}}></i>
                        <font style={{color: "#fff"}}>algolia</font>
                    </Typography>
                    <i className="fas fa-sliders-h" style={{fontSize: "25px", color: "#fff",verticalAlign :"bottom", marginLeft: "20px",marginRight: "20px"}}></i>
                    <Tooltip title="Logout" aria-label="logout">
                        <IconButton onClick={()=>{window.localStorage.clear(); history.push("/")}} >
                            <PowerSettingsNew />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        )
};

export default withRouter(Appbar);