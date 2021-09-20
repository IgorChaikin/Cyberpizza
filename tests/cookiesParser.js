function getCookiesObj(cookiesArray) {
  const cookies = {};
  cookiesArray.forEach((elem) => {
    const [key, cookie] = elem.split('=');
    const [value] = cookie.split(';');
    cookies[key] = value;
  });
  return cookies;
}

module.exports = getCookiesObj;
