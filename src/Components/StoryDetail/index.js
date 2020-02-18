import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Typography, List, Divider, CircularProgress } from '@material-ui/core';
import { getStory } from '../../Actions/storiesAction';
import moment from 'moment'
import Comment from './Components/comment';

const useStyles = makeStyles((theme) =>
    createStyles({
        storyContainer: {
            width: "90%",
            margin: "auto",
            background: "#f6f6ef",
        },
        header: {
            width: "100%",
            background: theme.palette.primary.main,
            padding: theme.spacing(1)
        },
        story: {
            padding: theme.spacing(2,1),
        },
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
        },
        loader: {
            position: "absolute",
            top: "50%",
            right: 0,
            left: 0,
            textAlign: "center"
        }
    })
);

const StoryDetail = ({ history, ...props }) => {

    const classes = useStyles();
    var storyId = props.match.params.id;

    const [story, setStory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getStory(storyId).then(data => {
            data && setStory(data);
            setIsLoading(false);
        });
    }, [storyId]);

    return isLoading ? (
        <div className={classes.loader}>
            <CircularProgress color="primary" />
        </div>
    ) : ( story && 
        (<div className={classes.storyContainer}>
            <div className={classes.header}>
                <Typography variant="body1">Hacker News</Typography>
            </div>
            <div className={classes.story}>
                <Typography className={classes.title}>{story.title}</Typography>
                <div className={classes.secondaryItems}>
                    <span>{story.score} points</span>
                    <span className={classes.divider}></span>
                    <span>{story.by}</span>
                    <span className={classes.divider}></span>
                    <span>{moment.unix(story.time).fromNow()}</span>
                    <span className={classes.divider}></span>
                    <span>{story.kids.length} comments</span>
                    <span className={classes.divider}></span>
                    <span>(<a href={story.url} target="_blank" rel="noopener noreferrer" className={classes.storyUrl}>{story.url}</a>)</span>
                </div>
            </div>
            <div className={classes.commentsContainer}>
                <List dense>
                    {story.kids.map((commentId) => {
                        return(
                            <div key={commentId}>
                                <Comment commentId={commentId} />
                                <Divider />
                            </div>
                        )
                    })}
                </List>
            </div>
        </div>)
    );
};

export default withRouter(StoryDetail);