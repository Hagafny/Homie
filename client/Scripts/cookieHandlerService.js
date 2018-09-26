const getCookie = cname => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (parseInt(c.indexOf(name), 10) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const service = {
  getCookie
};

module.exports = service;
