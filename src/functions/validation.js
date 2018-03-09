
export default class validation {
  constructor(requestBody = {}) {
    this.body = requestBody;
    this.keys = Object.keys(this.body);
    this._error = {};
    this.hasError = false
    this.checked = false;
  }
  require(fields = this.keys, errorMessage = 'This is a mandatory field. ') {
    this.checked = true;
    fields.forEach( key => { 
      if(!this.body[key]) {
        this._error = {...this._error, [key]: (this._error[key] || '') + errorMessage};
        this.hasError = true
      }
    });
  }
  get error() {
    !this.checked && console.warn('No validation has been done.');
    return this.hasError ? Object.keys(this._error).reduce((p, c) => `${p}${c}: ${this._error[c]}\n`, '') : false;    
  }
}