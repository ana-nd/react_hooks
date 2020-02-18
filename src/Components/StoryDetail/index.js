import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        
    })
);

const StoryDetail = ({ history, ...props }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            Hello
        </div>
    )
};

export default withRouter(StoryDetail);