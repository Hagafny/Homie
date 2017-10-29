import { getCookie } from './cookieHandlerService.js';

let isAuthenticated = (classIds) => {
    const authToken = getAuthToken();
    if (!authToken)
        return false;

    const classToken = authToken.split('_')[1];   
    return classToken == 0 || managerHasValidAccess(classIds, classToken);
}

let getAuthToken = () => {
    return getCookie('authToken');
}

module.exports = {
    isAuthenticated: isAuthenticated
}

const managerHasValidAccess = (requestedClassIdsForLogin, classIdsOfManager) => {
    requestedClassIdsForLogin = requestedClassIdsForLogin.split('&');
    classIdsOfManager = classIdsOfManager.split('&');
    return requestedClassIdsForLogin.every(classId => classIdsOfManager.indexOf(classId) >= 0);
}
