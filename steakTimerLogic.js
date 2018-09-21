exports.Hero = class Hero{
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return (`welcome ${this.name} press ENTER to begin`);
  }
};
