import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import moment from 'moment';
import { getComment } from '../../../Actions/storiesAction';

const useStyles = makeStyles((theme) =>
    createStyles({
        commentBy: {
            fontSize: "12px"
        },
        commentText: {
            fontSize: "13px"
        }
    })
);

const Comment = ({commentId }) => {

    const [comment, setComment] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        getComment(commentId).then(data => {
            data && setComment(data)
        });
    }, [commentId]);

    return comment ?(
        <ListItem>
            <ListItemText 
                primary={<Typography className={classes.commentBy}>{`${comment.by} on ${moment.unix(comment.time).format("MMM D, YYYY")}`}</Typography>}
                secondary={
                    <Typography className={classes.commentText}>
                        {comment.text}
                    </Typography>
                }
            />
        </ListItem>
    ) : null;
};

export default withRouter(Comment);