import faker from "faker";

import type { IAnimal } from "./Types/Animal";

import {
  roll,
  getRandomAnimalType,
  getRandomAnimalColor,
} from "./Utils/Helpers";

class Animal implements IAnimal {
  constructor(
    public name: IAnimal["name"] = faker.name.firstName(),
    public type: IAnimal["type"] = getRandomAnimalType(),
    public colors: IAnimal["colors"] = [...Array(roll(1, 3))].map(
      getRandomAnimalColor
    ),
    public hasTail: IAnimal["hasTail"] = faker.datatype.boolean(),
    public age: IAnimal["age"] = roll(0, 10)
  ) {}
}

const animals: IAnimal[] = [...Array(roll(5, 10))].map(
  (value, index) =>
    new Animal(undefined, undefined, undefined, undefined, index)
);
console.log(animals);
