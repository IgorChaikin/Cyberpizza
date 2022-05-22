function getQueryParams(filters) {
  return filters
    ? Object.keys(filters)
        .filter((key) => !!filters[key] || filters[key] === false)
        .map((key) => `${key}=${filters[key]}`)
        .join('&')
    : '';
}

module.exports = getQueryParams;
