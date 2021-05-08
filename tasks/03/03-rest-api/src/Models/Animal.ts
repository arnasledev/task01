import faker from "faker";

import { roll } from "../Utils/Helpers";

import type { IAnimal } from "../Types/Animal";
import { AnimalColors, AnimalNaming } from "../Types/Animal";

export default class Animal implements IAnimal {
  public name: IAnimal["name"];
  public naming: IAnimal["naming"];
  public colors: IAnimal["colors"];
  public hasTail: IAnimal["hasTail"];
  public age: IAnimal["age"];

  constructor({ name, naming, colors, hasTail, age }: IAnimal) {
    this.name = name;
    this.naming = naming;
    this.colors = colors;
    this.hasTail = hasTail;
    this.age = age;
  }

  static colorsPool: AnimalColors[] = [
    AnimalColors.BLACK,
    AnimalColors.BROWN,
    AnimalColors.WHITE,
  ];

  static namingPool: AnimalNaming[] = [
    AnimalNaming.CAT,
    AnimalNaming.DOG,
    AnimalNaming.HAMSTER,
  ];

  static create() {
    return new this({
      name: faker.name.firstName(),
      naming: this.randomNaming,
      colors: this.randomColor,
      hasTail: faker.datatype.boolean(),
      age: roll(0, 10),
    });
  }

  static get randomColor() {
    return [...Array(roll(1, 3))].map(() =>
      faker.random.arrayElement(Animal.colorsPool)
    );
  }

  static get randomNaming() {
    return faker.random.arrayElement(Animal.namingPool);
  }
}
