// A function for binding functions to the component in the constructor
export default function bindFunctions(functions) {
  functions.forEach(f => this[f] = this[f].bind(this));
};