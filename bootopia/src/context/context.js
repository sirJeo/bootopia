
class Context {

  constructor(parent) {
    this._parent = parent;

    this._registry = {};
    this._services = {};
  }

  register(name, dependencies, service) {
    this._registry[name] = {
      name, dependencies, service
    }
  }

  set(name, value) {
    this._services[name] = value;
  }

  get(name) {
    if (this._services[name]) {
      return Promise.resolve(this._services[name]);
    }

    const definition = this._registry[name];
    if (definition) {
      return this._load(definition);
    } else if (this._parent) {
      return this._parent.get(name);
    } else {
      return Promise.reject(Error(`${name} is not known`));
    }
  }

  _load(definition) {
    const { dependencies, service, name } = definition;
    return this._loadDependencies(dependencies)
      .then((deps) => service.apply(null, deps))
      .then((res) => this._services[name] = res);
  }

  _loadDependencies(dependencies) {
    const promises = dependencies.map((d) => this.get(d));
    return Promise.all(promises);
  }
}

module.exports = Context;
