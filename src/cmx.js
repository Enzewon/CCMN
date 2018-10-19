import axios from 'axios';

export const CMX = axios.create({
    baseURL: 'https://cisco-cmx.unit.ua/api',
    headers: {
        Accept: '*/*',
        'Authorization': "Basic " + new Buffer('' + ":" + '').toString("base64")
    },
    crossdomain: true
})