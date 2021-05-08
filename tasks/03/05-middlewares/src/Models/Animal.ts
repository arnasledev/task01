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
  public breed: IAnimal["breed"];

  constructor({ name, naming, colors, hasTail, age, breed }: IAnimal) {
    this.name = name;
    this.naming = naming;
    this.colors = colors;
    this.hasTail = hasTail;
    this.age = age;
    this.breed = breed;
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

  static create({
    name,
    naming,
    breed,
    colors,
    hasTail,
    age,
  }: {
    name?: IAnimal["name"];
    naming?: IAnimal["naming"];
    breed?: IAnimal["breed"];
    colors?: IAnimal["colors"];
    hasTail?: IAnimal["hasTail"];
    age?: IAnimal["age"];
  }) {
    return new this({
      name: name || faker.name.firstName(),
      naming: naming || this.randomNaming,
      breed: breed || "unknown",
      colors: colors || this.randomColor,
      hasTail: hasTail || faker.datatype.boolean(),
      age: age || roll(0, 10),
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
