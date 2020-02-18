import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import * as Credentials from '../../credentials.json';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        loginForm: {
            width: 300,
            margin: "0 auto",
            paddingTop: theme.spacing(15),
            textAlign: "center",
        },
        headerText: {
            marginBottom: theme.spacing(2),
            textTransform: "uppercase"
        },
        formField: {
            marginBottom: theme.spacing(2)
        },
        textField: {
            width: "100%"
        },
        loginButton: {
            width: "100%"
        },
        error: {
            textAlign: "left"
        },
        errorText: {
            color: "red",
            fontSize: theme.spacing(1.5)
        }
    }),
);

const Login = ({ history, ...props }) => {

    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorText, setErrorText] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = () => {
        if (email === null || email === undefined || email.trim().length === 0) {
            setError(true);
            setErrorText('Please enter Email!');
            document.getElementById("email").focus();
            return;
        }
        if (password === null || password === undefined || password.trim().length === 0) {
            setError(true);
            setErrorText('Please enter Password!');
            document.getElementById("password").focus();
            return;
        }
        if (email === Credentials.email && password === Credentials.password) {
            setError(false);
            // window.localStorage.setItem("token",null)
            window.localStorage.setItem("login",JSON.stringify({isAuthenticated:true}))
            history.push('/stories')
        } else {
            setError(true);
            setErrorText('Incorrect email or password!')
        }
    };

    return (
        <React.Fragment>
            <div className={classes.loginForm}>
                <Typography variant="h6" className={classes.headerText}>Login</Typography>
                <div className={classes.formField}>
                    <TextField
                        variant="outlined"
                        size="small"
                        type="email"
                        label="Email"
                        id="email"
                        className={classes.textField}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.formField}>
                    <TextField
                        variant="outlined"
                        size="small"
                        type="password"
                        label="Password"
                        id="password"
                        className={classes.textField}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className={classes.error}>
                    <Typography className={classes.errorText}>{errorText}</Typography>
                </div>
                }
                <Button variant="contained" color="primary" className={classes.loginButton} onClick={() => handleLogin()}>
                    Login
                </Button>
            </div>
        </React.Fragment>

    )
};

export default withRouter(Login);