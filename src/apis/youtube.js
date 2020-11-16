import axios from 'axios';

const KEY= 'AIzaSyDoGnRNJQOzCGD6S0wXjo1MbLaXRmN27ak'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});