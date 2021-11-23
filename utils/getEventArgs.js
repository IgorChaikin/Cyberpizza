function getEventArgs(e, tagList = ['BUTTON']) {
  let { target } = e.nativeEvent;
  while (target.tagName !== 'HTML' && !tagList.includes(target.tagName)) {
    target = target.parentNode;
  }
  return { target, args: target?.id.split('_') ?? [] };
}

module.exports = getEventArgs;
