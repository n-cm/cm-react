import Word from '../config/word'

export default function cmFetch({ url, method = 'GET', body } = {} ) {
  let _status;
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    ...body && { body }
  })
  .then(res => {
    let contentType = res.headers.get('Content-Type'); 
    _status = res.status;
    if(/json/.test(contentType))
      return res.json();
    throw new Error(Word.eng.error.default.body);
  })
  .then(json => {
    if(_status >= 300) throw new Error(json.error || Word.eng.error.default.body);
    return json;
  })
  .catch(error => {
    if(!_status) error.message = Word.eng.error.default.body;
    throw error;
  })
}
