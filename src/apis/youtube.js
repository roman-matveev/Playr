import axios from 'axios';

const KEY = 'AIzaSyAv_1BRveuQKe54jyBiFijM-yGciwaJLUk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})
