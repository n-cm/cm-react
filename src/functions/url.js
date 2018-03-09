const search = window.location.search.slice(1).split('&').reduce((p, c) => {
  let keyAndValue = c.match(/[^=]+/g);
  return keyAndValue ? {
    ...p,
    [keyAndValue[0]]: keyAndValue[1]
  } : p;
}, {});

export default {search}