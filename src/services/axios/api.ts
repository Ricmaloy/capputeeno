import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

axios.defaults.headers.post['Access-Control-Allow-Origin'] ='https://capputeeno-ricmaloy.vercel.app/';