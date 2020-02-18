import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Appbar from './Components/Appbar/index';
import {Select, Typography, OutlinedInput, List, Divider} from '@material-ui/core'
import Story from './Components/StoryItem/index';
import {getStoryIds} from '../../Actions/storiesAction';
import {useInfiniteScroll} from '../InfiniteScroll/index';

const useStyles = makeStyles((theme) =>
    createStyles({
        filterArea: {
            display: "flex",
            padding: theme.spacing(1,2)
        },
        searchLabel: {
            marginRight: theme.spacing(1.5)
        },
        selectInput: {
            padding: theme.spacing(0.5)
        },
        stories: {
            background: "#f6f6ef"
        }
    })
);

const Stories = ({ history, ...props }) => {

    const classes = useStyles();
    const { count } = useInfiniteScroll();
    
    const [storyType, setStoryType] = useState("topstories");
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStoryIds(storyType).then(data => setStories(data));
    }, [storyType]);

    return (
        <React.Fragment>
            <Appbar />
            <div className={classes.filterArea}>
                <Typography className={classes.searchLabel}>Search</Typography>
                <Select
                    native
                    variant="outlined"
                    size="small"
                    value={storyType}
                    onChange={ e => setStoryType(e.target.value) && getStoryIds(e.target.value).then(data => setStories(data))}
                    input={
                        <OutlinedInput  
                            classes={{input: classes.selectInput}} 
                        />
                    }
                >
                    <option value={"topstories"}>Top Stories</option>
                    <option value={"beststories"}>Best Stories</option>
                </Select>
            </div>
            <div className={classes.stories}>
                <List dense>
                    {stories.slice(0, count).map((storyId) => {
                        return(
                            <div key={storyId}>
                                <Story storyId={storyId} />
                                <Divider />
                            </div>
                        )
                    })}
                </List>
            </div>
        </React.Fragment>

    )
};

export default withRouter(Stories);