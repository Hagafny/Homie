import { getCookie } from './cookieHandlerService';

const managerHasValidAccess = (requestedClassIdsForLogin, classIdsOfManager) => {
  const actualClassIdsForLogin = requestedClassIdsForLogin.split('&');
  const actualclassIdsOfManager = classIdsOfManager.split('&');

  return actualClassIdsForLogin.every(classId => actualclassIdsOfManager.indexOf(classId) >= 0);
};

const getAuthToken = () => getCookie('authToken');

const isAuthenticated = classIds => {
  const authToken = getAuthToken();
  if (!authToken) return false;

  const classToken = authToken.split('_')[1];
  return classToken === 0 || managerHasValidAccess(classIds, classToken);
};

exports.isAuthenticated = isAuthenticated;
