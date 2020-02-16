import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Appbar from './Components/Appbar/index';

const useStyles = makeStyles((theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
    })
);

const Stories = ({ history, ...props }) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Appbar />
            <div className={classes.toolbar}/>
        </React.Fragment>

    )
};

export default withRouter(Stories);