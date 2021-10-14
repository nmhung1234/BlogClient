import axios from 'axios';
import API_URL from './../constant/Config';
import { decodeJWT } from '.';

// Step-1: Create a new Axios instance with a custom config.

const customAxios = axios.create({
    baseURL: API_URL,
    timeout: 30000,
});
// Step-2: Create request, response & error handlers
const requestHandler = async (request) => {
    // Token will be dynamic so we can use any app-specific way to always
    // fetch the new token before making the call
//    console.log(request);
    let AUTH_TOKEN = localStorage.getItem('tk');
    if (AUTH_TOKEN) {
        const expired = decodeJWT(AUTH_TOKEN);
        var date = new Date();
        var now = date.getTime() / 1000;
        if (expired && now <= expired) {
            request.headers.Authorization = AUTH_TOKEN;
            return request;
        } else {
            const refreshToken = localStorage.getItem('rtk');
            const data = { refreshToken: refreshToken }
            await axios.post(`${API_URL}api/user/refreshToken`, data)
            .then((res) => {
                // console.log(res);
                if (res.data.errorCode == (400 || 401)) {
                    //domain client
                    window.location.replace("http://localhost:3000/");
                    localStorage.clear();
                } else {
                    localStorage.setItem('tk', res.data.data);
                }
            }).catch((err) => {
//                console.log(err);
            })
            AUTH_TOKEN = localStorage.getItem('tk');
            request.headers.Authorization = AUTH_TOKEN;
            return request;
        }
    } else {
        return request;
    }
};

const responseHandler = (response) => {
    return response;
};

const errorHandler = (error) => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default customAxios;