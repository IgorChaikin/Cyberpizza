function getFormatAddress(addressObj) {
  return `г. ${addressObj?.city.title}, ул. ${addressObj?.street.title}, 
    д. ${addressObj?.house}${addressObj?.building ? `-${addressObj?.building}` : ''}
    ${addressObj?.apartment ? `, кв. ${addressObj?.apartment} ` : ''}`;
}

module.exports = getFormatAddress;
