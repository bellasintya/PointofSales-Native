import axios from 'axios';

export const loginUser = (form) => {
    return {
        type: 'POST_USER',
        payload: axios.post ('http://192.168.6.121:8080/user/login', form) 
    } 
}
export const registerUser = (form) => {
    return {
        type: 'POST_REGISTER',
        payload: axios.post ('http://192.168.6.121:8080/user/register', form) 
    } 
}