export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(NewCode) {
    if (typeof NewCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = NewCode;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
