function getCookiesObj(cookies) {
  const cookiesObj = {};
  if (cookies) {
    const cookiesArray = typeof cookies === 'string' ? cookies.split(';') : cookies;
    cookiesArray.forEach((elem) => {
      const [key, cookie] = elem.split('=');
      const [value] = cookie.split(';');
      cookiesObj[key.trim()] = value;
    });
  }
  return cookiesObj;
}

module.exports = getCookiesObj;
