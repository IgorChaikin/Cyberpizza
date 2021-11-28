function getFormatAddress(addressObj) {
  return `${addressObj?.street.title} St, 
    Building ${addressObj?.house}${addressObj?.building ? `-${addressObj?.building}` : ''}
    ${addressObj?.apartment ? `, Apartment ${addressObj?.apartment} ` : ''}
    , ${addressObj?.city.title}`;
}

module.exports = getFormatAddress;
