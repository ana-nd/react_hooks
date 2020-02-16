import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemText, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        title: {
            fontSize: theme.spacing(1.75)
        },
        secondaryItems: {
            display: "flex",
            fontSize: theme.spacing(1.5)
        },
        divider: {
            width: theme.spacing(0.125),
            height: theme.spacing(2.25),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    })
);

const StoryItem = ({ history, ...props }) => {

    const classes = useStyles();
    var story = props.storyDetail;

    console.log(props,"props")
    return (
        <ListItem>
            <ListItemText 
                primary={<Typography variant="body1" className={classes.title}>{story.title}</Typography>}
                secondary={
                    <Typography variant="caption" className={classes.secondaryItems}>
                        <span>{story.score} points</span>
                        <Divider className={classes.divider}/>
                        <span>{story.by}</span>
                        <Divider className={classes.divider}/>
                        <span>{story.time}</span>
                        <Divider className={classes.divider}/>
                        <span>{story.kids.length} comments</span>
                        <Divider className={classes.divider}/>
                        <span>({story.url})</span>
                    </Typography>
                }
            />
                
            
        </ListItem>
    )
};

export default withRouter(StoryItem);