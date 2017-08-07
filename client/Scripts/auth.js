import { getCookie } from './cookieHandlerService.js';

let isAuthenticated = (classId) => {
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
    isAuthenticated: isAuthenticated
    // deauthenticateUser: deauthenticateUser,
    // getUserIdCookie: getUserIdCookie
}
