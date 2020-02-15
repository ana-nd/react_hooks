import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({

    })
);

const Stories = ({ history, ...props }) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                Stories
            </div>
        </React.Fragment>

    )
};

export default withRouter(Stories);