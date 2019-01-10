const helperFactory = function (type) {
  return {
    error(arg) {
      return [2, type, arg];
    },

    warn(arg) {
      return [1, type, arg];
    },

    info(arg) {
      return [0, type, arg];
    },
  }
}

module.exports = {
  always: helperFactory('always'),
  never: helperFactory('never'),
}
