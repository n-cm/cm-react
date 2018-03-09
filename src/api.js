var host = window.location.host.toLowerCase();
// if (/^localhost/.test(host) || /^192.168.0./.test(host)) {
	// host = 'localhost:8081';
// }
const _api = 'https://' + host + '/';

const api = {
  model: _api + 'model',
}

export default api;