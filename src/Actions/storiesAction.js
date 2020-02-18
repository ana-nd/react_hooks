import axios from 'axios';
import * as env from '../env.json';

export const storyFields = ({ id, by, url, time, title, score, descendants } = {}) => ({
    id,
    by,
    url,
    time,
    title,
    score,
    descendants
});

export const storyUrl = `${env.API_SERVER}item/`;

export const getStory = async (storyId) => {
    const result = await axios.get(`${storyUrl + storyId}.json`);
    return storyFields(result.data);
};

export const getStoryIds = async (storyType) => {
    const result = await axios.get(`${env.API_SERVER + storyType}.json`);
    return result.data;
};