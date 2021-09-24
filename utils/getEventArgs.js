function getEventArgs(e) {
  let { target } = e.nativeEvent;
  while (target.tagName !== 'HTML' && target.tagName !== 'BUTTON') {
    target = target.parentNode;
  }
  return target?.id.split('_') ?? [];
}

module.exports = getEventArgs;
