function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;
