import axios from 'axios';
import * as env from '../env.json';

export const storyUrl = `${env.API_SERVER}item/`;

export const getStoryIds = async (storyType) => {
    const result = await axios.get(`${env.API_SERVER + storyType}.json`);
    return result.data;
};

export const storyFields = ({ id, by, url, time, title, score, kids } = {}) => ({
    id,
    by,
    url,
    time,
    title,
    score,
    kids: [...kids]
});

export const getStory = async (storyId) => {
    const result = await axios.get(`${storyUrl + storyId}.json`);
    return result.data && result.data.kids && storyFields(result.data);
};

export const commentFields = ({ id, by, time, text } = {}) => ({
    id,
    by,
    time,
    text
});

export const getComment = async (commentId) => {
    const result = await axios.get(`${storyUrl + commentId}.json`);
    return result.data && result.data.text && commentFields(result.data);
};