/* exported yakko, wakko, dot */

var warnerPrototype = {
  describe: function () {
    return this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
  }
};

var yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};

var wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
};

var dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
};

Object.setPrototypeOf(yakko, warnerPrototype);
Object.setPrototypeOf(wakko, warnerPrototype);
Object.setPrototypeOf(dot, warnerPrototype);
