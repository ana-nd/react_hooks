import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Appbar from './Components/Appbar/index';
import {Select, Typography, OutlinedInput, List, Divider, CircularProgress} from '@material-ui/core'
import Story from './Components/StoryItem/index';
import {getStoryIds} from '../../Actions/storiesAction';
import {useInfiniteScroll} from '../InfiniteScroll/index';

const useStyles = makeStyles((theme) =>
    createStyles({
        filterArea: {
            display: "flex",
            padding: theme.spacing(1,2),
            position: "relative"
        },
        searchLabel: {
            marginRight: theme.spacing(1.5)
        },
        selectInput: {
            padding: theme.spacing(0.5)
        },
        stories: {
            background: "#f6f6ef",
            cursor: "pointer"
        },
        loader: {
            position: "absolute",
            top: "50%",
            right: 0,
            left: 0,
            textAlign: "center"
        },
        totalItems: {
            position: "absolute",
            right: 0,
            marginRight: theme.spacing(1)
        }
    })
);

const Stories = ({ history, ...props }) => {

    const classes = useStyles();
    const { count } = useInfiniteScroll();
    
    const [storyType, setStoryType] = useState("topstories");
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getStoryIds(storyType).then(data => {
            setStories(data);
            setIsLoading(false);
        });
    }, [storyType]);

    const handleSelectChange = (e) => {
        setStoryType(e.target.value);
        setIsLoading(true);
        getStoryIds(storyType).then(data => {
            setStories(data);
            setIsLoading(false);
        });
    }

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
                    onChange={handleSelectChange}
                    input={
                        <OutlinedInput  
                            classes={{input: classes.selectInput}} 
                        />
                    }
                >
                    <option value={"topstories"}>Top Stories</option>
                    <option value={"beststories"}>Best Stories</option>
                </Select>
                <Typography variant="caption" className={classes.totalItems}>{`${stories.length} items`}</Typography>
            </div>
            <div className={classes.stories}>
                {isLoading ? (
                    <div className={classes.loader}>
                        <CircularProgress color="primary" />
                    </div>
                ) : (<List dense>
                    {stories.slice(0, count).map((storyId) => {
                        return(
                            <div key={storyId}>
                                <Story storyId={storyId} />
                                <Divider />
                            </div>
                        )
                    })}
                </List>)}
            </div>
        </React.Fragment>

    )
};

export default withRouter(Stories);