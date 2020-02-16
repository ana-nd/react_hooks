import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Appbar from './Components/Appbar/index';
import {Select, Typography, OutlinedInput, List, Divider} from '@material-ui/core'
import Story from './Components/StoryItem/index';

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
    const dummy_stories = [
        {
            "by" : "dhouston",
            "descendants" : 71,
            "id" : 8863,
            "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
            "score" : 111,
            "time" : 1175714200,
            "title" : "My YC app: Dropbox - Throw away your USB drive",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/2/screencast.html"
        },
        {
            "by" : "houston",
            "descendants" : 71,
            "id" : 8763,
            "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
            "score" : 111,
            "time" : 1175714200,
            "title" : "My Dropbox - Throw away your USB drive",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/2/screencast.html"
        },
        {
            "by" : "duston",
            "descendants" : 75,
            "id" : 8963,
            "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
            "score" : 1211,
            "time" : 1175714200,
            "title" : "Myapp: Throw away your USB drive",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/2/screencast.html"
        }
    ];
    const [storyType, setStoryType] = useState("top_stories");
    // const [stories, setStories] = useState(dummy_stories);

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
                    onChange={ e => {setStoryType(e.target.value)}}
                    input={
                        <OutlinedInput  
                            classes={{input: classes.selectInput}} 
                        />
                    }
                >
                    <option value={"top_stories"}>Top Stories</option>
                    <option value={"best_stories"}>Best Stories</option>
                </Select>
            </div>
            <div className={classes.stories}>
                <List dense>
                    {dummy_stories.map((story) => {
                        return(
                            <div key={story.id}>
                                <Story storyDetail={story} />
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