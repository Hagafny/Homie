import { getCookie } from './cookieHandlerService.js';

let isUserAuthenticated = (classId) => {
    let authToken = getAuthToken();
    let classToken = authToken.split('_')[1];
    return classToken ==  0 || classToken == classId;
}

// let deauthenticateUser = () => {
//     deleteCookie('uid');
// }

let getAuthToken = () => {
    return getCookie('authToken');
}
module.exports = {
    isUserAuthenticated: isUserAuthenticated
    // deauthenticateUser: deauthenticateUser,
    // getUserIdCookie: getUserIdCookie
}
