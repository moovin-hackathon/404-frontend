import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'https://heatmap404.herokuapp.com/api',
});

export default Api;