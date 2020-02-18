import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import moment from 'moment'
import {getStory} from '../../../../Actions/storiesAction';

const useStyles = makeStyles((theme) =>
    createStyles({
        title: {
            fontSize: theme.spacing(1.75)
        },
        secondaryItems: {
            display: "flex",
            fontSize: theme.spacing(1.4),
            wordBreak: "inherit"
        },
        divider: {
            width: theme.spacing(0.125),
            height: theme.spacing(2.25),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            background: "#cec7c7"
        },
        storyUrl: {
            color: "#20201f"
        }
    })
);

const StoryItem = ({history, storyId }) => {

    const [story, setStory] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, [storyId]);

    const navigateToStoryDetail = () => {
        history.push('story/'+story.id)
    }

    return story && story.url ?(
        <ListItem>
            <ListItemText 
                primary={<Typography className={classes.title} onClick={navigateToStoryDetail}>{story.title}</Typography>}
                secondary={
                    <Typography className={classes.secondaryItems}>
                        <span>{story.score} points</span>
                        <span className={classes.divider}></span>
                        <span>{story.by}</span>
                        <span className={classes.divider}></span>
                        <span>{moment.unix(story.time).fromNow()}</span>
                        <span className={classes.divider}></span>
                        <span onClick={navigateToStoryDetail}>{story.kids.length} comments</span>
                        <span className={classes.divider}></span>
                        <span>(<a href={story.url} target="_blank" rel="noopener noreferrer" className={classes.storyUrl}>{story.url}</a>)</span>
                    </Typography>
                }
            />
        </ListItem>
    ) : null;
};

export default withRouter(StoryItem);